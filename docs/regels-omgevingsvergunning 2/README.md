# Machineleesbare regels Omgevingsvergunning

SPARQL-queries en SHACL-shapes voor de geautomatiseerde toets van een aanvraag omgevingsvergunning met een 3D-informatiemodel (IFC). Opgesteld binnen **VNG BM13 – Machineleesbare regels / GeoBIM-toolkit** en gepubliceerd met **ReSpec**.

**Versie:** 0.1.0 (concept) · **Datum:** 9 november 2026

## Colofon

| | |
|---|---|
| Uitgever | Vereniging van Nederlandse Gemeenten (VNG) |
| SPARQL en SHACL | Peter Bonsma, RDF Ltd (in opdracht van VNG) |
| Regelinterpretatie en pseudocode | Siham El Yamani (VNG), Lex Ransijn, Gerlof de Haan |
| Projectleiding | Jeroen de Ruig, VNG (projectleider BM13) |

> English version (automatically translated, the Dutch version is authoritative): [`en/`](en/README.md)

## In het kort

- Eén SPARQL-query of SHACL-shape per `.ttl`-bestand, zonder XML eromheen.
- Beschrijvingen staan apart in [`hoofdstukken/`](hoofdstukken/) (ReSpec).
- Elk bestand heeft een vaste URI. De workflows van het VNG Portaal verwijzen daarnaar:

```
https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/{map}/{bestand}.ttl
```

Voorbeeld: `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/insert-areas.ttl`

## Lezen

- Webversie: `index.html` (ReSpec, GitHub Pages)
- Losse hoofdstukken: [`hoofdstukken/`](hoofdstukken/)

| Nr | Hoofdstuk |
|---|---|
| 00 | [Samenvatting](hoofdstukken/00-samenvatting.md) |
| 01 | [Leeswijzer](hoofdstukken/01-leeswijzer.md) |
| 02 | [Uitvoeringsketen](hoofdstukken/02-uitvoeringsketen.md) |
| 03 | [SPARQL-stappen](hoofdstukken/03-sparql-stappen.md) |
| 04 | [SHACL-shapes](hoofdstukken/04-shacl-shapes.md) |
| 05 | [3D-weergave](hoofdstukken/05-weergave.md) |
| 06 | [Regels BM13-R01 t/m R17](hoofdstukken/06-regels.md) |
| 07 | [Koppeling met de workflows](hoofdstukken/07-workflowkoppeling.md) |
| 08 | [Open punten](hoofdstukken/08-open-punten.md) |
| 09 | [Begrippen](hoofdstukken/09-begrippen.md) |

## Structuur

```
├── index.html            ReSpec-pagina
├── config.js             ReSpec-configuratie
├── assets/               tabelstijl (regels-tables.css en regels-tables.js)
├── en/                   Engelse vertaling (NL is leidend)
├── hoofdstukken/         beschrijvingen (Markdown)
├── sparql/               SPARQL, één query of update per bestand
│   └── weergave/         queries voor de 3D-weergave
├── shacl/                SHACL-shapes, één per bestand
├── regels/               BM13-R01 … R17, delen 4a–4d uit de tracker
├── data/                 catalogus.csv en regels-workflows.csv
├── tools/                controleer-syntax.py
├── CHANGELOG.md
└── CONTRIBUTING.md
```

## Controleren

```
pip install rdflib
python tools/controleer-syntax.py
```

## Lokaal bekijken

ReSpec laadt de Markdown-bestanden via `fetch`. Start in `docs/` een lokale server, bijvoorbeeld `python -m http.server`, en open `http://localhost:8000/regels-omgevingsvergunning/`.

## Beheer

| Onderdeel | Inhoudelijk eigenaar |
|---|---|
| SPARQL en SHACL (`sparql/`, `shacl/`) | Peter Bonsma (RDF Ltd) |
| Regelinterpretatie en pseudocode (`regels/`) | Siham El Yamani, Lex Ransijn, Gerlof de Haan |
| Publicatie op `main` | na review van het BM13-team |

## Bijdragen

Zie [CONTRIBUTING.md](CONTRIBUTING.md).

## Licentie

Voorstel: CC BY 4.0 (nog te bevestigen).
