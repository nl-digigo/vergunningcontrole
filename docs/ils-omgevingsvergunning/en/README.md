# ILS Omgevingsvergunning — English version

> **Machine-translated.** This English version was translated automatically from the Dutch original and has not been fully reviewed. **The [Dutch version](../README.md) is authoritative**; if the two differ, the Dutch text applies. Terms from GEMMA, the STB 2025 phase names and the content of the IDS files are kept in Dutch on purpose.

Information Delivery Specification (ILS) for applying for an environmental permit (*omgevingsvergunning*) with a 3D information model (IFC). Drafted within **VNG Beleidsmaatregel 13 – Vergunningverlening met BIM (3D model)**, following the **digiGO Toetsingskader ILS** and published with **ReSpec**.

**Version:** 0.1.2 (draft), translated from the Dutch 0.1.2 · **Date:** 25 September 2026

## Colophon

| | |
|---|---|
| Publisher | Vereniging van Nederlandse Gemeenten (VNG) |
| Author | Lex Ransijn, VDCbase (on behalf of VNG) |
| Project management | Jeroen de Ruig, VNG (project leader BM13) |
| In cooperation with | Steering group members, municipalities, software vendors, standardisation bodies |

## Read

- Web version: [`index.html`](index.html) (ReSpec, GitHub Pages)
- Dutch original: [`../index.html`](../index.html)
- Individual chapters: folder [`hoofdstukken/`](hoofdstukken/)

The table styling lives in [`../assets/ils-tables.css`](../assets/ils-tables.css) and [`../assets/ils-tables.js`](../assets/ils-tables.js); this page loads those files.

| No. | Chapter | Reference template |
|---|---|---|
| 00 | [Summary](hoofdstukken/00-summary.md) | — |
| 01 | [Reading guide and introduction](hoofdstukken/01-reading-guide.md) | — |
| 02 | [Scope and field of application](hoofdstukken/02-scope.md) | Part A |
| 03 | [Perspectives and information objectives](hoofdstukken/03-perspectives-objectives.md) | Part A |
| 04 | [Milestones and project information](hoofdstukken/04-milestones.md) | Part A/B |
| 05 | [Table of requirements (17 checks × IDS)](hoofdstukken/05-table-of-requirements.md) | Part B |
| 06 | [Level of Information Need](hoofdstukken/06-level-of-information-need.md) | Part A/B |
| 07 | [Acceptance criteria](hoofdstukken/07-acceptance-criteria.md) | Part A |
| 08 | [Information production standard and methods](hoofdstukken/08-information-production-standard.md) | Part A |
| 08a | [Modelling guideline: objects in IFC](hoofdstukken/08a-modelling-guideline-ifc.md) | Part A |
| 09 | [Geometric checking](hoofdstukken/09-geometric-checking.md) | Part A |
| 10 | [Reference information and shared resources](hoofdstukken/10-reference-information.md) | Part A |
| 11 | [Responsibility matrix](hoofdstukken/11-responsibilities.md) | Part A |
| 12 | [Management and version control](hoofdstukken/12-management.md) | — |
| 13 | [Accountability against the Toetsingskader ILS](hoofdstukken/13-assessment-framework.md) | — |
| 14 | [Open issues and decisions](hoofdstukken/14-open-issues.md) | — |
| 15 | [Glossary](hoofdstukken/15-glossary.md) | — |
| 16 | [Sample models](hoofdstukken/16-sample-models.md) | — |

## Machine-readable part

The machine-readable part is shared with the Dutch version and is in Dutch:

- [`../ids/`](../ids/): 42 IDS 1.0 sub-specifications, derived from the *ILS voor Ruimten in de Omgevingswet* v0.95, with the check numbers and the GEMMA milestone added
- [`../data/specificaties_checks.csv`](../data/specificaties_checks.csv): link between specifications, bSDD identifiers and checks
- [`../voorbeeldmodellen/`](../voorbeeldmodellen/): 15 IFC sample models (RottaNova/Kievitsweg project) that meet the specifications; chapter 06 shows an excerpt from them per specification

## Structure

```
en/
├── index.html              ReSpec page (combines the chapters)
├── js/config.js            ReSpec configuration
├── hoofdstukken/           one Markdown file per chapter (English)
└── README.md               this file
```

## Viewing locally

ReSpec loads the Markdown files with `fetch`. Start a local server, for example `python -m http.server`, and open `http://localhost:8000/en/`.

## Keeping the translation in step

The Dutch chapters are the source. After changing a Dutch chapter, translate the same chapter here and note it in the [CHANGELOG](../CHANGELOG.md), so that both versions stay in step.
