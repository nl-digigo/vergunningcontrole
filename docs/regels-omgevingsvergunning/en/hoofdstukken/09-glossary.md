# Glossary

| Term | Meaning |
|---|---|
| Derive | Compute a value from the model and write it into the dataset so a shape can test it. Done with a SPARQL update. |
| Zoning area (*bestemmingsvlak*) | Area from the environmental plan (DSO) with a designation, e.g. *wonen* or *gemengd*. In the dataset a `dso:area` in graph `<areas.ttl>`. |
| Bounding box | Smallest box around a geometry, stored as `geom:bboxMinX` … `geom:bboxMaxZ`. |
| Footprint | Top view of an element: its projection on the XY plane (`geom:projectionBase64Data`). |
| Named graph | Part of the dataset with its own name (IRI), used to keep IFC model, geometry, ontology and zoning areas apart. |
| ifcOWL | The IFC schema as an OWL ontology, so an IFC model can be queried as RDF. |
| Reference level (*peil*) | Level from which building height is measured; per zone the average road level or the design level. |
| Portal id | Name of a query or shape in the VNG Portal, e.g. `InsertAreas`. Column `id` in `data/catalogus.csv`. |
| SHACL | W3C language to state and test requirements on RDF data; the outcome is a validation report. |
| Shape | One SHACL requirement: what it applies to (target) and what that must satisfy (constraint). |
| SPARQL | W3C language to query (query) and change (update) RDF data. |
| Topological relation | Spatial relation between two areas, e.g. *within*, *overlaps*, *touches*. |
| URI | Fixed web address of a file; workflows use it to reference a query or shape. |
| Validation report | SHACL outcome: `sh:conforms` (true/false) and per violation a `sh:ValidationResult` with a message. |
| Workflow | Sequence of steps per rule in the VNG Portal: build dataset, SPARQL, SHACL. |
