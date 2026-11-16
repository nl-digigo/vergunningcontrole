# Regelcodering (laag 4) {#regelcodering}

---

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
| 01 | [Insert Areas]| [insert-areas.ttl](https://github.com/peterrdf/VNG/tree/main/VNGPortal/VNGPortal/SeedData/SPARQL/insert-areas.ttl) |  #1, #2 |
| 02 | [Insert BBoxes]| [insert-bboxes.ttl](https://github.com/peterrdf/VNG/tree/main/VNGPortal/VNGPortal/SeedData/SPARQL/insert-bboxes.ttl) |  #1, #2 |
| 03 | [Insert IFC4 ADD2 TC1 Ontology]| [insert-ifc4-add2-ontology.ttl](https://github.com/peterrdf/VNG/tree/main/VNGPortal/VNGPortal/SeedData/SPARQL/insert-ifc4-add2-ontology.ttl) |  #1, #2 |
| 04 | [Insert Projections]| [insert-projections.ttl](https://github.com/peterrdf/VNG/tree/main/VNGPortal/VNGPortal/SeedData/SPARQL/insert-projections.ttl) |  |
| 05 | [Insert Topological Relations (IfcWall/IfcRoof)]| [insert-topological-relations-ifcwall-ifcroof.ttl](https://github.com/peterrdf/VNG/tree/main/VNGPortal/VNGPortal/SeedData/SPARQL/insert-topological-relations-ifcwall-ifcroof.ttl) |  #1 |
| 06 | [Insert Topological Relations]| [insert-topological-relations.ttl](https://github.com/peterrdf/VNG/tree/main/VNGPortal/VNGPortal/SeedData/SPARQL/insert-topological-relations.ttl) |  #1, #2 |
| 07 | [Retrieve Living Areas]| [retrive-living-areas.ttl](https://github.com/peterrdf/VNG/tree/main/VNGPortal/VNGPortal/SeedData/SPARQL/retrive-living-areas.ttl) | |
| 08 | [Retrieve Topology Vialolations (IfcWall/IfcRoof)]| [retrive-topology-vialolations-ifcwall-ifcroof.ttl](https://github.com/peterrdf/VNG/tree/main/VNGPortal/VNGPortal/SeedData/SPARQL/retrive-topology-vialolations-ifcwall-ifcroof.ttl) | #1 |

---

## Overzicht per SHACL statement

| Nr | Specificatie | Shape file | SPARQL | BM13-checks |
|----|--------------|-------------|-------------|-------------|
| 01 | [ValidateBBoxess] | [validate-bboxes.ttl](https://github.com/peterrdf/VNG/tree/main/VNGPortal/VNGPortal/SeedData/SHACL/validate-bboxes.ttl) | [retrive-living-areas.ttl](https://github.com/peterrdf/VNG/tree/main/VNGPortal/VNGPortal/SeedData/SPARQL/retrive-living-areas.ttl) | #1, #2 |
| 02 | [ValidateBBoxes-IfcWall] | [validate-bboxes-ifcwall.ttl](https://github.com/peterrdf/VNG/tree/main/VNGPortal/VNGPortal/SeedData/SHACL/validate-bboxes-ifcwall.ttl) |  |  |
| 03 | [ValidateHeight] | [validate-height.ttl](https://github.com/peterrdf/VNG/tree/main/VNGPortal/VNGPortal/SeedData/SHACL/validate-height.ttl) | | #2 |
| 04 | [ValidateModelBBoxes] | [validate-model-bboxes.ttl](https://github.com/peterrdf/VNG/tree/main/VNGPortal/VNGPortal/SeedData/SHACL/validate-model-bboxes.ttl) | | #1, #2 |
| 05 | [ValidateTopologicalRelations] | [validate-topological-relations.ttl](https://github.com/peterrdf/VNG/tree/main/VNGPortal/VNGPortal/SeedData/SHACL/validate-topological-relations.ttl) | [retrive-topology-vialolations-ifcwall-ifcroof.ttl](https://github.com/peterrdf/VNG/tree/main/VNGPortal/VNGPortal/SeedData/SPARQL/retrive-topology-vialolations-ifcwall-ifcroof.ttl) [retrive-living-areas.ttl](https://github.com/peterrdf/VNG/tree/main/VNGPortal/VNGPortal/SeedData/SPARQL/retrive-living-areas.ttl) | #1 |

---

## Overzicht van services

| Nr | Specificatie | SPARQL |
|----|--------------|-------------|
| 01 | [Boolean Operation] | |
