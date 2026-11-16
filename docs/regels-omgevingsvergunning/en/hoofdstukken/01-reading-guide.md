# Reading guide

## Purpose

Municipalities, software vendors and the VNG Portal use the same open set of rules. Anyone can read, test and improve a rule. An improvement published on `main` works directly in online testing and batch processing.

## Folder layout

```
regels-omgevingsvergunning/
├── index.html            ReSpec page (Dutch, authoritative)
├── config.js             ReSpec configuration
├── assets/               table styling
├── en/                   this English translation
├── hoofdstukken/         descriptions (Markdown, ReSpec)
├── sparql/               SPARQL queries and updates, one per file (.ttl)
│   └── weergave/         queries for the 3D view after validation
├── shacl/                SHACL shapes, one per file (.ttl)
├── regels/               per rule BM13-R01 … R17 (tracker parts 4a–4d)
├── data/                 catalogus.csv and regels-workflows.csv
├── tools/                controleer-syntax.py
├── CHANGELOG.md
└── CONTRIBUTING.md
```

## Code and description kept apart

| What | Where |
|---|---|
| executable query or shape | `sparql/*.ttl`, `shacl/*.ttl` |
| human-readable explanation | `hoofdstukken/*.md` (this document) |
| id, URI, status, use per rule | `data/catalogus.csv` |
| which steps a rule runs | workflow in the portal, overview in `data/regels-workflows.csv` |

## File extension

The VNG Portal uses `.ttl` for both SHACL (Turtle) and SPARQL, and that convention is kept so file names match. A file in `sparql/` therefore contains SPARQL text, not Turtle.

## Fixed URI

```
https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/{folder}/{file}.ttl
```

See [Linking to the workflows](#workflowkoppeling).
