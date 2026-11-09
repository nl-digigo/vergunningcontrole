# SHACL-shapes

Dit hoofdstuk beschrijft de SHACL-bestanden in de map `shacl/`. Elk bestand is een SHACL-shapesgraaf in Turtle. Alle shapes gebruiken een SPARQL-constraint (`sh:sparql`) en geven `sh:Violation`.

In de foutmelding staat steeds `GlobalId=[...]` of `GlobalId: ...`. De 3D-weergave van het portaal haalt de GlobalId uit die tekst om het element te tonen (zie [3D-weergave](#weergave)). Verander die tekst dus niet zonder het reguliere patroon in de weergave mee te passen.

<span id="validate-topological-relations"></span>

## validate-topological-relations.ttl

| | |
|---|---|
| Portaal-id | `ValidateTopologicalRelations` |
| Bestand | [`shacl/validate-topological-relations.ttl`](shacl/validate-topological-relations.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/shacl/validate-topological-relations.ttl` |
| Invoer | `geom:topologicalRelation` uit `insert-topological-relations.ttl` |
| Uitvoer | SHACL-validatierapport |
| Gebruikt in regel | #1, #2 |

**Doel.** Controleert of elke geometrie volledig binnen de bestemmingsvlakken *wonen* ligt. Validatiestap van regel 1.

**Werking.**

1. `geom:GeometryShape` richt zich op elk subject met `geom:globalId` (`sh:targetSubjectsOf`).
2. De SPARQL-constraint leest `geom:globalId` en `geom:topologicalRelation`.
3. Een element geeft een overtreding als de relatie niet `"CONTAINED BY"` is: het ligt dan niet helemaal binnen *wonen*.
4. Melding: `geom:topologicalRelation is NOT 'CONTAINED BY'. GlobalId: …`.

<span id="validate-height"></span>

## validate-height.ttl

| | |
|---|---|
| Portaal-id | `ValidateHeight` |
| Bestand | [`shacl/validate-height.ttl`](shacl/validate-height.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/shacl/validate-height.ttl` |
| Invoer | `geom:bboxMaxZ` uit `insert-bboxes.ttl` |
| Uitvoer | SHACL-validatierapport |
| Gebruikt in regel | #2 |

**Doel.** Eerste, vereenvoudigde hoogtecontrole: geen element mag meer dan 1 eenheid boven de hoogste wand uitsteken. Dit is nog niet de toets aan de maximale bouwhoogte uit het omgevingsplan (zie concept BM13-R02).

**Werking.**

1. `geom:IfcElementHeightShape` richt zich op elk subject met `geom:globalId`.
2. Leest `geom:bboxMaxZ` (bovenkant van de bounding box).
3. Een subquery berekent `?globalMaxZ`: de hoogste `geom:bboxMaxZ` van alle `ifc:IfcWall` (de `VALUES`-lijst is uit te breiden).
4. Overtreding als `?bboxMaxZ - ?globalMaxZ > 1`.
5. Melding: `Height violation for GlobalId=[…]: bboxMaxZ=… minus globalMaxZ=… exceeds 1.`

<span id="validate-bboxes-ifcwall"></span>

## validate-bboxes-ifcwall.ttl

| | |
|---|---|
| Portaal-id | `ValidateBBoxes-IfcWall` |
| Bestand | [`shacl/validate-bboxes-ifcwall.ttl`](shacl/validate-bboxes-ifcwall.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/shacl/validate-bboxes-ifcwall.ttl` |
| Invoer | `geom:bbox*` uit `insert-bboxes.ttl` |
| Uitvoer | SHACL-validatierapport |
| Gebruikt in regel | #1 |

**Doel.** Plausibiliteitscontrole: elke wand heeft een realistische maat, niet te klein en niet te groot.

**Werking.**

1. `geom:GeometryShape` richt zich op elke instantie van `ifc:IfcWall` (`sh:targetClass`).
2. Berekent per as de maat: deltaX = maxX − minX, enzovoort.
3. Overtreding als een delta kleiner is dan 1 of groter dan 100.
4. Melding: `BBox violation for GlobalId=[…]: deltaX=…, deltaY=…, deltaZ=…`.

<span id="validate-bboxes"></span>

## validate-bboxes.ttl

| | |
|---|---|
| Portaal-id | `ValidateBBoxes` |
| Bestand | [`shacl/validate-bboxes.ttl`](shacl/validate-bboxes.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/shacl/validate-bboxes.ttl` |
| Invoer | `geom:bbox*` |
| Uitvoer | SHACL-validatierapport |
| Gebruikt in regel | — (nog in geen workflow) |

**Doel.** Dezelfde maatcontrole als hierboven, maar voor elke geometrie in plaats van alleen wanden.

**Werking.**

1. Richt zich op elk subject met `geom:globalId`.
2. Verder gelijk aan `validate-bboxes-ifcwall.ttl`.

<span id="validate-model-bboxes"></span>

## validate-model-bboxes.ttl

| | |
|---|---|
| Portaal-id | `ValidateModelBBoxes` |
| Bestand | [`shacl/validate-model-bboxes.ttl`](shacl/validate-model-bboxes.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/shacl/validate-model-bboxes.ttl` |
| Invoer | `geom:bbox*`, `geom:eastings`, `geom:northings` |
| Uitvoer | SHACL-validatierapport |
| Gebruikt in regel | #1 |

**Doel.** Plausibiliteitscontrole op het hele model: de totale omvang moet realistisch zijn. Vangt onder meer verkeerde eenheden (mm in plaats van m) en een verkeerde georeferentie af.

**Werking.**

1. `geom:DatasetBBoxShape` richt zich op één knoop: de graaf-IRI `<https://vng.nl/geometries/>` (`sh:targetNode`).
2. Een subquery berekent over alle geometrieën de totale omvang. X en Y worden relatief genomen ten opzichte van de modeloorsprong (bbox X − `geom:eastings`, bbox Y − `geom:northings`); Z absoluut.
3. Overtreding als de omvang op een as kleiner is dan 1 of groter dan 100.
4. Melding: `Dataset BBox violation: globalMinX=…, globalMaxX=…, …`.
