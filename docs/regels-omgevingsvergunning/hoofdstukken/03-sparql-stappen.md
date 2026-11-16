# SPARQL-stappen

Dit hoofdstuk beschrijft de SPARQL-bestanden in de map `sparql/`. Elk bestand bevat precies één SPARQL 1.1-query of -update. De beschrijvingen zijn overgenomen uit de XML-metadata van het VNG Portaal (`SeedData/SPARQL/*.xml`) en vertaald naar het Nederlands.

De stappen draaien op het VNG Portaal (RDF Ltd). Functies met het voorvoegsel `vng:` (`vng:dsoArea`, `vng:gmBoundingBox`, `vng:gmPlane`, `vng:gmProjection`, `vng:gmTopology`) zijn eigen functies van die omgeving. Een andere triple store kent ze niet; zie [Open punten](#open-punten).

## Graafindeling

| Graaf | Inhoud | Gevuld door |
|---|---|---|
| standaardgraaf | IFC-model als ifcOWL-instanties | portaalstap *Create SPARQL dataset* |
| `<https://vng.nl/geometries/>` | geometrie per element (`geom:base64Data`), plus afgeleide waarden | portaal en de stappen hieronder |
| `<https://vng.nl/ontologies/ifc4add2>` | ifcOWL-ontologie IFC4 ADD2 | `insert-ifc4-add2-ontology.ttl` |
| `<areas.ttl>` | DSO-bestemmingsvlakken rond het bouwwerk | `insert-areas.ttl` |

<span id="insert-ifc4-add2-ontology"></span>

## insert-ifc4-add2-ontology.ttl

| | |
|---|---|
| Portaal-id | `InsertIFC4ADD2Ontology` |
| Bestand | [`sparql/insert-ifc4-add2-ontology.ttl`](sparql/insert-ifc4-add2-ontology.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/insert-ifc4-add2-ontology.ttl` |
| Invoer | internet (ifcOWL op GitHub) |
| Uitvoer | graaf `<https://vng.nl/ontologies/ifc4add2>` |
| Gebruikt in regel | #1, #2 |

**Doel.** Laadt de ifcOWL-ontologie voor IFC4 ADD2 in de triple store, zodat andere queries IFC-klassen en -eigenschappen (zoals `ifc:IfcWall` en `ifc:IfcMapConversion`) en de klassenhiërarchie kunnen gebruiken.

**Werking.**

1. Haalt het Turtle-bestand `IFC4_ADD2.ttl` op uit de GitHub-repository openBIMstandards/ifcOWL (`LOAD`).
2. Slaat alle triples op in de graaf `<https://vng.nl/ontologies/ifc4add2>` (`INTO GRAPH`).
3. De triple store heeft hiervoor internettoegang nodig.

<span id="insert-areas"></span>

## insert-areas.ttl

| | |
|---|---|
| Portaal-id | `InsertAreas` |
| Bestand | [`sparql/insert-areas.ttl`](sparql/insert-areas.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/insert-areas.ttl` |
| Invoer | `ifc:IfcMapConversion` in het IFC-model; DSO via `vng:dsoArea` |
| Uitvoer | graaf `<areas.ttl>` |
| Gebruikt in regel | #1, #2 |

**Doel.** Haalt de bestemmingsvlakken (DSO, Omgevingsplan) op rond de locatie van het bouwwerk en zet ze in de graaf `<areas.ttl>`.

**Werking.**

1. Verwijdert de bestaande graaf `<areas.ttl>` (`DROP SILENT`, dus geen fout als die nog niet bestaat).
2. Leest de kaartconversie (eastings/northings) van de eerste `ifc:IfcMapConversion` in het model (`LIMIT 1`). Dit is de oorsprong van de georeferentie.
3. Roept de eigen functie `vng:dsoArea` aan met `(?e ?n 400 'wonen, gemengd')`: zoekstraal 400 m, groepen *wonen* en *gemengd*. De functie geeft per vlak id, naam, groep, type en geometrie terug.
4. Maakt per vlak een IRI uit de `dso:`-namespace en het id.
5. Schrijft elk vlak als `dso:area` met `dso:id`, `dso:name`, `dso:group`, `dso:type` en `dso:geometry` naar de graaf `<areas.ttl>`.

<span id="insert-bboxes"></span>

## insert-bboxes.ttl

| | |
|---|---|
| Portaal-id | `InsertBBoxes` |
| Bestand | [`sparql/insert-bboxes.ttl`](sparql/insert-bboxes.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/insert-bboxes.ttl` |
| Invoer | `geom:base64Data` |
| Uitvoer | `geom:bboxMinX` … `geom:bboxMaxZ` |
| Gebruikt in regel | #1, #2 |

**Doel.** Berekent de 3D-omhullende doos (bounding box) van elke geometrie.

**Werking.**

1. Selecteert elke instantie in `<https://vng.nl/geometries/>` met `geom:base64Data` die nog geen `geom:bboxMinX` heeft (`FILTER NOT EXISTS`). Instanties met een bounding box worden overgeslagen.
2. Roept `vng:gmBoundingBox` aan met de base64-geometrie; die geeft zes waarden terug (min/max X, Y, Z).
3. Schrijft `geom:bboxMinX/Y/Z` en `geom:bboxMaxX/Y/Z` op de instantie in dezelfde graaf.

<span id="insert-projections"></span>

## insert-projections.ttl

| | |
|---|---|
| Portaal-id | `InsertProjections` |
| Bestand | [`sparql/insert-projections.ttl`](sparql/insert-projections.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/insert-projections.ttl` |
| Invoer | `geom:base64Data` |
| Uitvoer | `geom:projectionBase64Data` |
| Gebruikt in regel | #1, #2 |

**Doel.** Maakt van elke 3D-geometrie een 2D-projectie op het XY-vlak (bovenaanzicht, footprint).

**Werking.**

1. Selecteert elke instantie in `<https://vng.nl/geometries/>` met `geom:base64Data` zonder `geom:projectionBase64Data`.
2. Bouwt met `vng:gmPlane(0.0, 0.0, 1.0, 0.0)` het XY-vlak door de oorsprong (normaal (0, 0, 1)).
3. Projecteert de geometrie met `vng:gmProjection` op dat vlak.
4. Schrijft het resultaat als `geom:projectionBase64Data` op de instantie.

<span id="insert-topological-relations"></span>

## insert-topological-relations.ttl

| | |
|---|---|
| Portaal-id | `InsertTopologicalRelations` |
| Bestand | [`sparql/insert-topological-relations.ttl`](sparql/insert-topological-relations.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/insert-topological-relations.ttl` |
| Invoer | `geom:projectionBase64Data`, graaf `<areas.ttl>` |
| Uitvoer | `geom:topologicalRelation` (bijv. `"CONTAINED BY"`) |
| Gebruikt in regel | #1, #2 |

**Doel.** Bepaalt per IFC-element de topologische relatie tussen zijn footprint en de bestemmingsvlakken *wonen*. Dit is de afleidingsstap van regel 1.

**Werking.**

1. Zoekt elk IFC-element met `ifc:globalId_IfcRoot` en leest de GlobalId-tekst (`express:hasString`).
2. Koppelt die GlobalId aan de geometrie in `<https://vng.nl/geometries/>` (`geom:globalId`) en leest `geom:projectionBase64Data`.
3. Verzamelt in een subquery de geometrie van alle `dso:area` in `<areas.ttl>` met `dso:group "wonen"` en voegt ze samen tot één tekst, gescheiden door `|`.
4. Berekent met `vng:gmTopology` de relatie tussen footprint en vlakken.
5. Verwijdert een eventuele oude `geom:topologicalRelation` en schrijft de nieuwe. Opnieuw draaien geeft dus geen dubbele waarden.

<span id="insert-topological-relations-ifcwall-ifcroof"></span>

## insert-topological-relations-ifcwall-ifcroof.ttl

| | |
|---|---|
| Portaal-id | `InsertTopologicalRelations-IfcWall-IfcRoof` |
| Bestand | [`sparql/insert-topological-relations-ifcwall-ifcroof.ttl`](sparql/insert-topological-relations-ifcwall-ifcroof.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/insert-topological-relations-ifcwall-ifcroof.ttl` |
| Invoer | als hierboven |
| Uitvoer | `geom:topologicalRelation` |
| Gebruikt in regel | — (nog in geen workflow) |

**Doel.** Variant van `insert-topological-relations.ttl` die alleen wanden en daken meeneemt.

**Werking.**

1. Beperkt `?ifcType` met `VALUES` tot `ifc:IfcWall` en `ifc:IfcRoof`.
2. Verder gelijk aan `insert-topological-relations.ttl` (stap 1 t/m 5).

<span id="retrieve-building-elements"></span>

## retrieve-building-elements.ttl

| | |
|---|---|
| Portaal-id | `RetrieveBuildingElements` |
| Bestand | [`sparql/retrieve-building-elements.ttl`](sparql/retrieve-building-elements.ttl) |
| URI | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/retrieve-building-elements.ttl` |
| Invoer | ifcOWL-graaf, IFC-model, geometriegraaf |
| Uitvoer | tabel (SELECT) |
| Gebruikt in regel | — (nog in geen workflow) |

**Doel.** Geeft alle bouwdelen van het model terug met hun geometrie. Hulpquery voor controle en weergave.

**Werking.**

1. Zoekt in `<https://vng.nl/ontologies/ifc4add2>` alle klassen die `IfcBuildingElement` zijn of daarvan afstammen (`rdfs:subClassOf*`).
2. Zet de ifcOWL-klasse-IRI om naar de namespace van de instantiedata: `IRI(CONCAT(STR(ifc:), STRAFTER(STR(?ontType), "#")))`. Nodig omdat de ontologie `ifcowl:` gebruikt en de instanties `ifc:`.
3. Zoekt de IFC-elementen van die klassen met een GlobalId.
4. Haalt de bijbehorende `geom:base64Data` uit `<https://vng.nl/geometries/>`.
5. Geeft `?ifcElement`, `?globalIdValue` en `?base64Data` terug, gesorteerd op element.
