# Regelcodering (laag 4) {#regelcodering}

<p class="leesniveau bestuurlijk">Bestuurlijk</p>

De regelcodering beschrijft de SPARQL query's en SHACL statements welke in de juiste volgorde een regel volledig automatisch kunnen valideren. Onderdelen welke complexe operaties vergen en niet in SPARQL en/of SHACL uitgedrukt kunnen worden zijn beschreven in functies.

<div class="in-het-kort laag-4">

**In het kort**

- SPARQL query's worden gebruikt om nieuwe, afgeleide datastructuren te creëren op basis van bestaande gegevens (in de kern: de geconverteerde IFC-inhoud, inclusief geometrie, en aanwezige GIS-gegevens voor de betreffende locatie).
- SHACL statements valideren of de verstrekte en afgeleide informatie leiden tot een antwoord met betrekking tot de te toetsen regel.
- Functies maken de integratie mogelijk van complexe functionaliteit die niet binnen SPARQL en/of SHACL kan worden weergegeven.
</div>

## Overzicht per check

De 17 checks komen uit de BM13-regelinventarisatie v0.3, 3-7-2026. Regels #1–#6 betreffen het omgevingsplan (OPA), regels #7–#17 het Besluit bouwwerken leefomgeving (Bbl).

| Check | Onderwerp | IDS | SPARQL | SHACL |
|-------|-----------|---------------|---------------|---------------|
| **#1** | Gebruiksfunctie komt overeen met bestemming |#1, #2, #3, #4, #5, #6, #7, #8, #9, #10, #11, #12, #13, #14, #15, #16, #17 | 01, 02, 03, 06, 07 | 01, 04, 05 | 
| **#2** | Maximale bouwhoogte | 01, 02, 03, 04, 05, 06, 07, 09, 10, 13 | 01, 02, 03, 06 | 01, 03, 04 | 
| **#3** | Maximaal bebouwingspercentage | 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 16, 25, 26 | |  | 
| **#4** | Gebruiksfunctie/bestemming beperkt tot x aantal bouwlagen | 01, 04, 05, 06, 07, 11, 13, 16, 17 | |  | 
| **#5** | Beroep aan huis: max. 50% gebruiksoppervlakte | 01, 02, 03, 04, 05, 06, 07, 09, 10, 15, 16, 17, 23, 25, 26, 28, 33 | |  | 
| **#6** | Maximum aantal bouwlagen | 01, 04, 05, 06, 07, 09, 10, 13, 14, 16, 23, 25, 26, 28, 33 | |  | 
| **#7** | Brandcompartimenten | 01, 02, 03, 07, 09, 10, 16, 30, 35, 37, 38, 40, 41 | |  | 
| **#8** | Brandwerendheid | 01, 07, 30, 35, 37, 38, 40, 41 | |  | 
| **#9** | Vrije breedte | 01, 07, 13, 16, 18, 19, 21, 24, 25, 26, 29, 40, 41 | |  | 
| **#10** | Hoogteverschil | 01, 02, 03, 07, 08, 13, 16, 18, 19, 21, 24, 25, 26, 29, 40 | |  | 
| **#11** | Rc-waarde | 01, 07, 10, 16, 18, 19, 36, 37, 40, 41 | |  | 
| **#12** | U-waarde | 01, 07, 10, 16, 37, 38, 42 | |  | 
| **#13** | MPG | 01, 07, 16, 25, 26, 40, 41 | |  | 
| **#14** | Vluchtwegen | 01, 07, 08, 16, 21, 25, 26, 30, 32, 38, 40 | |  | 
| **#15** | Loopafstand | 01, 07, 16, 20, 21, 25, 26, 30, 31, 32, 33, 38, 40 | |  | 
| **#16** | Vluchtbreedte | 01, 07, 13, 16, 19, 20, 22, 27, 32, 38, 40, 41 | |  | 
| **#17** | Daglicht | 01, 02, 03, 07, 08, 09, 10, 11, 16, 19, 26, 37, 38, 41, 42 | |  | 

---

## Overzicht per SPARQL query

| Nr | Specificatie  | SPARQL | BM13-checks |
|----|--------------|-------------|-------------|
| 01 | [Insert Areas]| [insert-areas.ttl](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/sparql/insert-areas.ttl) |  #1, #2 |
| 02 | [Insert BBoxes]| [insert-bboxes.ttl](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/sparql/insert-bboxes.ttl) |  #1, #2 |
| 03 | [Insert IFC4 ADD2 TC1 Ontology]| [insert-ifc4-add2-ontology.ttl](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/sparql/insert-ifc4-add2-ontology.ttl) |  #1, #2 |
| 04 | [Insert Projections]| [insert-projections.ttl](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/sparql/insert-projections.ttl) |  |
| 05 | [Insert Topological Relations (IfcWall/IfcRoof)]| [insert-topological-relations-ifcwall-ifcroof.ttl](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/sparql/insert-topological-relations-ifcwall-ifcroof.ttl) |  #1 |
| 06 | [Insert Topological Relations]| [insert-topological-relations.ttl](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/sparql/insert-topological-relations.ttl) |  #1, #2 |
| 07 | [Retrieve Living Areas]| [retrive-living-areas.ttl](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/sparql/retrive-living-areas.ttl) | |
| 08 | [Retrieve Topology Vialolations (IfcWall/IfcRoof)]| [retrive-topology-vialolations-ifcwall-ifcroof.ttl](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/sparql/retrive-topology-vialolations-ifcwall-ifcroof.ttl) | #1 |

---

## Overzicht per SHACL statement

| Nr | Specificatie | Shape file | SPARQL | BM13-checks |
|----|--------------|-------------|-------------|-------------|
| 01 | [ValidateBBoxess] | [validate-bboxes.ttl](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/shacl/validate-bboxes.ttl) | [retrive-living-areas.ttl](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/sparql/retrive-living-areas.ttl) | #1, #2 |
| 02 | [ValidateBBoxes-IfcWall] | [validate-bboxes-ifcwall.ttl](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/shacl/validate-bboxes-ifcwall.ttl) |  |  |
| 03 | [ValidateHeight] | [validate-height.ttl](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/shacl/validate-height.ttl) | | #2 |
| 04 | [ValidateModelBBoxes] | [validate-model-bboxes.ttl](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/shacl/validate-model-bboxes.ttl) | | #1, #2 |
| 05 | [ValidateTopologicalRelations] | [validate-topological-relations.ttl](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/shacl/validate-topological-relations.ttl) | [retrive-topology-vialolations-ifcwall-ifcroof.ttl](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/sparql/retrive-topology-vialolations-ifcwall-ifcroof.ttl) [retrive-living-areas.ttl](https://nl-digigo.github.io/vergunningcontrole/docs/regels-omgevingsvergunning/sparql/retrive-living-areas.ttl) | #1 |

---

## Overzicht van Functions (services)

| Nr | Specificatie | URI | Services
|----|--------------|-------------|-------------|
| 01 | [dsoAreas] | http://vng.nl/geometry-ext.ttl#dsoAreas | Fetch Spatial Plans by Point <br> Fetch Regulations by Point <br> Fetch Regulation Annotations by Point |
| 02 | [pdokFeature] | http://vng.nl/geometry-ext.ttl#pdokFeature | Public Services on the Map (PDOK) <br> Key Register of Addresses and Buildings - BAG |
| 03 | [gmBox] | http://vng.nl/geometry-ext.ttl#gmBox | Creation of a simple Box geometry |
| 04 | [gmSphere] | http://vng.nl/geometry-ext.ttl#gmSphere | Creation of a simple Sphere geometry |
| 05 | [gmCylinder] | http://vng.nl/geometry-ext.ttl#gmCylinder | Creation of a simple Cylinder geometry|
| 06 | [gmPlane] | http://vng.nl/geometry-ext.ttl#gmPlane | Creation of a infinite plane definition |
| 07 | [gmProjection] | http://vng.nl/geometry-ext.ttl#gmProjection | Creation of a 2D projection based on a plane and any 2D or 3D geometrical representation |
| 08 | [gmTranslation] | http://vng.nl/geometry-ext.ttl#gmTranslation | Translation of any 2D or 3D geometry |
| 09 | [gmRotation] | http://vng.nl/geometry-ext.ttl#gmRotation | Rotation of any 2D or 3D geometry |
| 10 | [gmScale] | http://vng.nl/geometry-ext.ttl#gmScale | Scale of any 2D or 3D geometry |
| 11 | [gmBooleanOperation] | http://vng.nl/geometry-ext.ttl#gmBooleanOperation | Boolean operation of any ordered set of 2D or 3D objects |
| 12 | [gmTopology] | http://vng.nl/geometry-ext.ttl#gmTopology | Topology of any ordered set of 2D or 3D objects |
| 13 | [gmColor] | http://vng.nl/geometry-ext.ttl#gmColor | Assignment of color to any 2D or 3D geometry |
| 14 | [gmCollection] | http://vng.nl/geometry-ext.ttl#gmCollection | Collection of N geometries, either 2D or 3D  |
| 15 | [gmContent] | http://vng.nl/geometry-ext.ttl#gmContent | Returns the type of geemtry embedded within a Base64 geometry string |

## 01 — dsoAreas

| | |
|---|---|
| **Portaal-id** | `dsoAreas` |
| **Soort** | SPARQL Extension Function |
| **Services** | Fetch Spatial Plans by Point <br> Fetch Regulations by Point <br> Fetch Regulation Annotations by Point |
| **Input** | IfcMapConversion eastings & northings <br> BBox Size <br> Type, e.g. ‘wonen’ |
| **Output** | dso:id Bestemmingsvlakken.Id (Zoning Area) <br> dso:name		Bestemmingsvlakken.Bestemmingshoofdgroep <br> dso:group		Bestemmingsvlakken.Groep <br> dso:type		Bestemmingshoofdgroep.Type <br> dso:geometry 	Geometry (Base64 Data) |

## 02 — pdokFeature

| | |
|---|---|
| **Portaal-id** | `pdokFeature` |
| **Soort** | SPARQL Extension Function |
| **Services** | Public Services on the Map (PDOK) <br> Key Register of Addresses and Buildings - BAG |
| **Input** | Feature Type, e.g. ‘Buildings’, ‘Parcels’, etc. <br> IfcMapConversion eastings & northings |
| **Output** | Feature.Id <br> bldg:name  {address?.City}, {address?.StreetName}, {address?.HouseNumber}, {address?.Postcode} <br> bldg:geometry 	Geometry (Base64 Data) |

## 03 — gmBox

| | |
|---|---|
| **Portaal-id** | `gmBox` |
| **Soort** | SPARQL Extension Function |
| **Services** | Creation of a simple Box geometry |
| **Input** | length (double) <br> width (double) <br> height (double) |
| **Output** | Geometry (Base64 Data) |

## 04 — gmSphere

| | |
|---|---|
| **Portaal-id** | `gmSphere` |
| **Soort** | SPARQL Extension Function |
| **Services** | Creation of a simple Sphere geometry |
| **Input** | radius (double) <br> segmentationParts (integer) [default = 36] |
| **Output** | Geometry (Base64 Data) |

## 05 — gmCylinder

| | |
|---|---|
| **Portaal-id** | `gmCylinder` |
| **Soort** | SPARQL Extension Function |
| **Services** | Creation of a simple Cylinder geometry |
| **Input** | length (double) <br> radius (double) <br> segmentationParts (integer) [default = 36] |
| **Output** | Geometry (Base64 Data) |

## 06 — gmPlane

| | |
|---|---|
| **Portaal-id** | `gmPlane` |
| **Soort** | SPARQL Extension Function |
| **Services** | Creation of a infinite plane definition |
| **Input** | a (double) <br> b (double) <br> c (double) <br> d (double) |
| **Output** | Geometry (Base64 Data) |

## 07 — gmProjection

| | |
|---|---|
| **Portaal-id** | `gmProjection` |
| **Soort** | SPARQL Extension Function |
| **Services** | Creation of a 2D projection based on a plane and any 2D or 3D geometrical representationz |
| **Input** | Geometry (Base64 Data) <br> Plane Geometry (Base64 Data) |
| **Output** | 2D Geometry (Base64 Data) |

## 08 — gmTranslation

| | |
|---|---|
| **Portaal-id** | `gmTranslation` |
| **Soort** | SPARQL Extension Function |
| **Services** | Translation of any 2D or 3D geometry |
| **Input** | Geometry (Base64 Data) <br> _41 (double) <br> _42 (double) <br> _43 (double) |
| **Output** | Geometry (Base64 Data) |

## 09 — gmRotation

| | |
|---|---|
| **Portaal-id** | `gmRotation` |
| **Soort** | SPARQL Extension Function |
| **Services** | Rotation of any 2D or 3D geometry |
| **Input** | Geometry (Base64 Data) <br> alpha (double) <br> beta (double) <br> gamma (double) |
| **Output** | Geometry (Base64 Data) |

## 10 — gmScale

| | |
|---|---|
| **Portaal-id** | `gmScale` |
| **Soort** | SPARQL Extension Function |
| **Services** | Scale of any 2D or 3D geometry |
| **Input** | Geometry (Base64 Data) <br> scale (double) |
| **Output** | Geometry (Base64 Data) |

## 11 — gmBooleanOperation

| | |
|---|---|
| **Portaal-id** | `gmBooleanOperation` |
| **Soort** | SPARQL Extension Function |
| **Services** | Boolean operation of any ordered set of 2D or 3D objects |
| **Input** | FirstGeometry (Base64 Data) <br> SecondGeometry (Base64 Data) |
| **Output** | Geometry (Base64 Data) |

## 12 — gmTopology

| | |
|---|---|
| **Portaal-id** | `gmTopology` |
| **Soort** | SPARQL Extension Function |
| **Services** | Topology of any ordered set of 2D or 3D objects |
| **Input** | FirstGeometry (Base64 Data) <br> SecondGeometry (Base64 Data) |
| **Output** | “DISJOINT” (string) <br> "OVERLAP" (string) <br> "CONTAINS" (string) <br> "CONTAINED BY" (string) <br> "INVALID INPUT" (string) |

## 13 — gmColor

| | |
|---|---|
| **Portaal-id** | `gmColor` |
| **Soort** | SPARQL Extension Function |
| **Services** | Assignment of color to any 2D or 3D geometry |
| **Input** | Geometry (Base64 Data) <br> R (double) <br> G (double) <br> B (double) <br> A (double) [default = 1.0] |
| **Output** | Geometry (Base64 Data) |

## 14 — gmCollection

| | |
|---|---|
| **Portaal-id** | `gmCollection` |
| **Soort** | SPARQL Extension Function |
| **Services** | Collection of N geometries, either 2D or 3D |
| **Input** | Geometry1 (Base64 Data) <br> … <br> GeometryN (Base64 Data) |
| **Output** | Geometry (Base64 Data) |

## 15 — gmContent

| | |
|---|---|
| **Portaal-id** | `gmContent` |
| **Soort** | SPARQL Extension Function |
| **Services** | Returns the type of geemtry embedded within a Base64 geometry string |
| **Input** | Geometry (Base64 Data) |
| **Output** | "2D" (string) <br> "3D" (string) |
