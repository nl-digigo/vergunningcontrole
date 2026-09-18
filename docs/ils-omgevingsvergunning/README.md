# ILS Omgevingsvergunning

Informatieleveringsspecificatie (ILS) voor het aanvragen van een omgevingsvergunning met een 3D-informatiemodel (IFC). Opgesteld binnen **VNG BM13 – Machineleesbare regels / GeoBIM-toolkit**, volgens het **digiGO Toetsingskader ILS** en gepubliceerd met **ReSpec**.

**Versie:** 0.1.0 (concept) · **Datum:** 17 september 2026

## Colofon

| | |
|---|---|
| Uitgever | Vereniging van Nederlandse Gemeenten (VNG) |
| Opsteller | Lex Ransijn, VDCbase (in opdracht van VNG) |
| Projectleiding | Jeroen de Ruig, VNG (projectleider BM13) |
| In samenwerking met | Stuurgroepleden BNA, NEPROM, NL Ingenieurs, Woningbouwers NL, digiGO en Bouwend Nederland |

## Lezen

> English version (automatisch vertaald, de Nederlandse versie is leidend): [`en/`](en/README.md) · [`ils-omgevingsvergunning-en.html`](ils-omgevingsvergunning-en.html)

- Webversie: `index.html` (ReSpec, GitHub Pages)
- Statische leesversie zonder ReSpec: [`ils-omgevingsvergunning.html`](ils-omgevingsvergunning.html), gegenereerd uit dezelfde hoofdstukken
- Losse hoofdstukken: map [`hoofdstukken/`](hoofdstukken/)

| Nr | Hoofdstuk | Referentiesjabloon |
|---|---|---|
| 00 | [Samenvatting](hoofdstukken/00-samenvatting.md) | — |
| 01 | [Leeswijzer en introductie](hoofdstukken/01-leeswijzer.md) | — |
| 02 | [Toepassings- en werkingsgebied](hoofdstukken/02-toepassingsgebied.md) | Deel A |
| 03 | [Perspectieven en informatiedoelstellingen](hoofdstukken/03-perspectieven-doelstellingen.md) | Deel A |
| 04 | [Mijlpalen en projectinformatie](hoofdstukken/04-mijlpalen.md) | Deel A/B |
| 05 | [Tabel met vereisten (17 checks × IDS)](hoofdstukken/05-tabel-met-vereisten.md) | Deel B |
| 06 | [Level of Information Need](hoofdstukken/06-level-of-information-need.md) | Deel A/B |
| 07 | [Acceptatiecriteria](hoofdstukken/07-acceptatiecriteria.md) | Deel A |
| 08 | [Informatieproductiestandaard en -methoden](hoofdstukken/08-informatieproductiestandaard.md) | Deel A |
| 09 | [Geometrische controle](hoofdstukken/09-geometrische-controle.md) | Deel A |
| 10 | [Referentie-informatie en gedeelde bronnen](hoofdstukken/10-referentie-informatie.md) | Deel A |
| 11 | [Verantwoordelijkheidsmatrix](hoofdstukken/11-verantwoordelijkheden.md) | Deel A |
| 12 | [Beheer en versiebeheer](hoofdstukken/12-beheer.md) | — |
| 13 | [Verantwoording Toetsingskader ILS](hoofdstukken/13-verantwoording-toetsingskader.md) | — |
| 14 | [Open punten en beslisvragen](hoofdstukken/14-open-punten.md) | — |
| 15 | [Begrippen](hoofdstukken/15-begrippen.md) | — |

## Machineleesbaar deel

- [`ids/`](ids/): 42 IDS 1.0-deelspecificaties, afgeleid van de *ILS voor Ruimten in de Omgevingswet* v0.95, aangevuld met de checknummers en de GEMMA-mijlpaal
- [`data/specificaties_checks.csv`](data/specificaties_checks.csv): koppeling tussen specificaties, bSDD-identifiers en checks

## Structuur

```
├── index.html              ReSpec-pagina (voegt de hoofdstukken samen)
├── ils-omgevingsvergunning.html  statische leesversie (alles in één bestand)
├── js/config.js            ReSpec-configuratie
├── hoofdstukken/           één Markdown-bestand per hoofdstuk
├── en/                     Engelse vertaling (automatisch, NL is leidend)
├── ils-omgevingsvergunning-en.html  statische Engelse leesversie
├── ids/                    IDS-bestanden
├── data/                   koppeltabellen
├── .github/                controle-workflow en issuesjablonen
├── CHANGELOG.md
└── CONTRIBUTING.md
```

## Lokaal bekijken

ReSpec laadt de Markdown-bestanden via `fetch`. Start daarom een lokale server, bijvoorbeeld `python -m http.server`, en open `http://localhost:8000`.

## Bijdragen

Zie [CONTRIBUTING.md](CONTRIBUTING.md). Vragen en voorstellen zijn welkom als issue.

## Licentie

Voorstel: CC BY 4.0 (nog te bevestigen).
