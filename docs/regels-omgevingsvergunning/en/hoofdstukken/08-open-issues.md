# Open issues

| No | Topic | Explanation | Proposal |
|---|---|---|---|
| OP-1 | Namespaces | Drafts in `regels/` use `https://example.org/bm13/` and `https://rdf.bg/…`; the portal uses `https://vng.nl/…` and `http://vng.nl/…`. | Choose one VNG namespace (e.g. via w3id.org) and align the drafts. |
| OP-2 | Topological relation values | Portal: `"CONTAINED BY"`. Draft R01: `WITHIN`, `COVERED_BY`, `EQUALS`. | Fix one list, preferably DE-9IM/OGC names. |
| OP-3 | Zoning groups rule 1 | `insert-areas.ttl` fetches *wonen* and *gemengd*, `insert-topological-relations.ttl` uses only *wonen*, the view shows both. | Make allowed groups a parameter and use the same everywhere. |
| OP-4 | Search radius | Portal 400 m, draft 50 m. | One value per rule in 4a-parameters. |
| OP-5 | GlobalId in R01 validation | `4c-valideren.ttl` reads `geom:globalId` on the same subject as `bm13:designationRelation`, but they sit in different graphs. | Write the GlobalId into `<urn:bm13:derived>` in the derive step. |
| OP-6 | IRI in R02 derivation | `STRAFTER(STR(?area), "#")` gives an empty string for IRIs without `#`, so different areas get the same check IRI. | Use e.g. `ENCODE_FOR_URI(STR(?area))` or the `dso:id`. |
| OP-7 | Height check | `validate-height.ttl` compares with the highest wall, not with the maximum building height from the reference level. | Replace with draft R02 once reference level and height areas are available. |
| OP-8 | Custom functions | `vng:*` (and `ext:*` in the drafts) exist only in the VNG Portal. | Describe signature and behaviour of each function so vendors can produce the same result. |
| OP-9 | Persistent URI | The GitHub Pages URI depends on organisation and repository name. | A w3id.org redirect, e.g. `https://w3id.org/vng/bm13/`. |
| OP-10 | View rule 1 | The shape checks all elements; the view query shows only walls. | Extend the view to all element types. |
| OP-11 | Message text R01 | "element … is OVERLAPS the permitted Wonen area" reads badly. | E.g. "relation to the permitted area is OVERLAPS". |
| OP-12 | Licence | Proposal: CC BY 4.0. | Confirm. |
