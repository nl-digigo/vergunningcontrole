# Machine-readable rules Omgevingsvergunning — English version

> **Machine-translated.** This English version was translated from the Dutch original. **The [Dutch version](../README.md) is authoritative**; if the two differ, the Dutch text applies. The SPARQL and SHACL code is not translated.

SPARQL queries and SHACL shapes for the automated check of an environmental permit (*omgevingsvergunning*) application with a 3D information model (IFC). Drafted within **VNG Beleidsmaatregel 13 – Machine-readable rules / GeoBIM toolkit** and published with **ReSpec**.

**Version:** 0.1.0 (draft) · **Date:** 9 November 2026

## Colophon

| | |
|---|---|
| Publisher | Vereniging van Nederlandse Gemeenten (VNG) |
| SPARQL and SHACL | Peter Bonsma, RDF Ltd (on behalf of VNG) |
| Rule interpretation and pseudocode | Siham El Yamani (VNG), Lex Ransijn, Gerlof de Haan |
| Project management | Jeroen de Ruig, VNG (project leader BM13) |

## In short

- One SPARQL query or SHACL shape per `.ttl` file, without XML around it.
- Descriptions live separately in [`hoofdstukken/`](hoofdstukken/) (ReSpec).
- Every file has a fixed URI that the VNG Portal workflows reference:

```
https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/{folder}/{file}.ttl
```

## Chapters

| No | Chapter |
|---|---|
| 00 | [Summary](hoofdstukken/00-summary.md) |
| 01 | [Reading guide](hoofdstukken/01-reading-guide.md) |
| 02 | [Execution chain](hoofdstukken/02-execution-chain.md) |
| 03 | [SPARQL steps](hoofdstukken/03-sparql-steps.md) |
| 04 | [SHACL shapes](hoofdstukken/04-shacl-shapes.md) |
| 05 | [3D view](hoofdstukken/05-3d-view.md) |
| 06 | [Rules BM13-R01 to R17](hoofdstukken/06-rules.md) |
| 07 | [Linking to the workflows](hoofdstukken/07-workflow-linking.md) |
| 08 | [Open issues](hoofdstukken/08-open-issues.md) |
| 09 | [Glossary](hoofdstukken/09-glossary.md) |

## View locally

ReSpec loads the Markdown files with `fetch`. Start a local server in `docs/`, e.g. `python -m http.server`, and open `http://localhost:8000/regels-omgevingsvergunning/en/`.
