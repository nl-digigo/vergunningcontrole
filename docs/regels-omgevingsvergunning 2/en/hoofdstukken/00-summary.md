This is a **working draft** of the machine-readable rules for the environmental permit (*omgevingsvergunning*), drafted within VNG Beleidsmaatregel 13 (BM13). It states *how a municipality tests an application with an IFC model automatically*, using SPARQL and SHACL.

The SPARQL queries and SHACL shapes are separate files in this repository, one query or shape per file. The descriptions are kept apart, in this ReSpec document. Every file has a fixed URI, so the workflows of the VNG Portal and of software vendors can reference it directly.

Status (November 2026):

- rules 1 and 2 run in the VNG Portal with 7 SPARQL steps, 5 SHACL shapes and 3 view queries;
- for rules 1 and 2 a fuller draft is ready (rule parameters, derivation, validation, expected result);
- rules 3 to 17 are still to do.
