# Uitvoeringsketen

Een regel draait in vier stappen.

| Stap | Wat | Bestanden |
|---|---|---|
| 1. Dataset opbouwen | IFC naar RDF (ifcOWL) en geometrie naar `<https://vng.nl/geometries/>` | portaalstap *Create SPARQL dataset* |
| 2. Context laden | ifcOWL-ontologie en bestemmingsvlakken (DSO) | `insert-ifc4-add2-ontology.ttl`, `insert-areas.ttl` |
| 3. Afleiden | bounding box, footprint, topologische relatie, hoogte | `insert-bboxes.ttl`, `insert-projections.ttl`, `insert-topological-relations.ttl` |
| 4. Valideren en tonen | SHACL-rapport en 3D-weergave van de overtredingen | `shacl/*.ttl`, `sparql/weergave/*.ttl` |

Afleiden (SPARQL) en toetsen (SHACL) zijn bewust gescheiden. De SPARQL-stap schrijft een afgeleide waarde in de dataset, bijvoorbeeld `geom:topologicalRelation`. De SHACL-shape vergelijkt alleen die waarde met de norm. Zo blijft de toets leesbaar en kan een andere leverancier de afleiding anders doen zolang de uitkomst gelijk is.
