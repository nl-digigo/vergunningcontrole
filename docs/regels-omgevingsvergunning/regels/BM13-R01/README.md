# BM13-R01 Gebruiksfunctie komt overeen met bestemming

Concept 0.1 uit de tracker (status *Draft*). Toelichting: [hoofdstuk Regels](../../hoofdstukken/06-regels.md#bm13-r01).

## Bestanden

- [`4a-parameters.ttl`](4a-parameters.ttl)
- [`4b-afleiden.ttl`](4b-afleiden.ttl)
- [`4c-valideren.ttl`](4c-valideren.ttl)
- [`4d-verwacht-rapport.ttl`](4d-verwacht-rapport.ttl)

## Gebruikt in het VNG Portaal (`vng_workflow_embedded-1.xml`)

- SPARQL: [`insert-ifc4-add2-ontology.ttl`](../../sparql/insert-ifc4-add2-ontology.ttl)
- SPARQL: [`insert-areas.ttl`](../../sparql/insert-areas.ttl)
- SPARQL: [`insert-bboxes.ttl`](../../sparql/insert-bboxes.ttl)
- SPARQL: [`insert-projections.ttl`](../../sparql/insert-projections.ttl)
- SPARQL: [`insert-topological-relations.ttl`](../../sparql/insert-topological-relations.ttl)
- SHACL: `ValidateTopologicalRelations`
- SHACL: `ValidateBBoxes-IfcWall`
- SHACL: `ValidateModelBBoxes`
