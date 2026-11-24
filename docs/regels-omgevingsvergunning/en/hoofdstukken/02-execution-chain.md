# Execution chain

A rule runs in four steps.

| Step | What | Files |
|---|---|---|
| 1. Build dataset | IFC to RDF (ifcOWL) and geometry into `<https://vng.nl/geometries/>` | portal step *Create SPARQL dataset* |
| 2. Load context | ifcOWL ontology and zoning areas (DSO) | `insert-ifc4-add2-ontology.ttl`, `insert-areas.ttl` |
| 3. Derive | bounding box, footprint, topological relation, height | `insert-bboxes.ttl`, `insert-projections.ttl`, `insert-topological-relations.ttl` |
| 4. Validate and show | SHACL report and 3D view of the violations | `shacl/*.ttl`, `sparql/weergave/*.ttl` |

Deriving (SPARQL) and testing (SHACL) are kept apart on purpose. The SPARQL step writes a derived value into the dataset, for example `geom:topologicalRelation`. The SHACL shape only compares that value with the norm. This keeps the test readable, and another vendor can derive the value differently as long as the result is the same.
