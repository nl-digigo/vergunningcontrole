# Toolkit Vergunningverlening met GeoBIM

ReSpec-document volgens het [Geonovum NL-ReSpec-template](https://github.com/Geonovum/NL-ReSpec-template), in het Nederlands en het Engels.

| | |
|---|---|
| **Status** | Werkversie (`specStatus: "wv"`) |
| **Type** | Handreiking (`specType: "HR"`) |
| **pubDomain / shortName** | `dsgo` / `toolkit-geobim` |
| **Licentie** | CC BY 4.0 voor de tekst |
| **Redactie** | Siham El Yamani (VNG) |

## Mapstructuur

```
docs/toolkit-geobim/
├── index.html            ← Nederlandse versie: voorblad + lijst van hoofdstukken
├── js/
│   ├── config.js         ← titel, status, type, redacteuren (NL)
│   └── biblio.js         ← bronnenlijst, gedeeld door NL en EN
├── css/toolkit-geobim.css← opmaak voor "In het kort", leesniveaus, buiten-scope
├── abstract.md           ← samenvatting
├── ch01-…md … ch12-…md   ← hoofdstukken, één bestand per hoofdstuk
├── bijlage-a-…md …       ← bijlagen
├── media/                ← alle afbeeldingen (ook gebruikt door de Engelse versie)
└── en/
    ├── index.html        ← Engelse versie
    ├── js/config.js      ← titel en labels in het Engels
    └── abstract.md, ch01-…md, annex-a-…md …
```

Werkdocumenten (strategie, filmscripts, opzetten, matrix) staan **niet** hier maar in `/werkdocumenten/toolkit-geobim/`. Alles onder `docs/` wordt online gepubliceerd.

## Afspraken over bestandsnamen

1. **Hoofdstukken**: `chNN-onderwerp.md` — twee cijfers, kleine letters, koppeltekens, geen spaties, geen accenten.
2. **Bijlagen**: `bijlage-x-onderwerp.md` (NL) en `annex-x-subject.md` (EN).
3. **Afbeeldingen**: in `media/`, kleine letters, koppeltekens (`loopafstand.png`). Verwijs relatief: `media/naam.png` (NL) en `../media/naam.png` (EN).
4. **Eén `#`-kop per bestand.** Die wordt de hoofdstuktitel. Geef hem een vast anker: `# Titel {#vast-anker}`.
5. **Ankers zijn in beide talen gelijk.** `#motivatielaag` bestaat in de NL- én de EN-versie, zodat verwijzingen `[[[#motivatielaag]]]` in beide werken.
6. **Geen handmatige inhoudsopgave** in een hoofdstuk. ReSpec maakt die zelf.
7. **Bronnen** voeg je één keer toe in `js/biblio.js` en noem je in de tekst als `[[SLEUTEL]]`.

## Een hoofdstuk toevoegen

1. Maak `chNN-onderwerp.md` met één `#`-kop en een anker.
2. Zet in `index.html` op de juiste plek:
   `<section data-include-format="markdown" data-include="chNN-onderwerp.md"></section>`
3. Doe hetzelfde in `en/` (met een vertaling, of met een verwijzing naar de Nederlandse tekst).
4. Bekijk het resultaat lokaal (VS Code → *Go Live*) **voordat** je commit.

Een hoofdstuk dat nog niet af is, laat je uit `index.html`. Het bestand mag gewoon in de map blijven staan.

## Status wijzigen

In `js/config.js` (en `en/js/config.js`):

| Onze status | `specStatus` |
|---|---|
| Werk in uitvoering | `wv` — werkversie |
| Gedeeld (ter consultatie) | `cv` — consultatieversie |
| Ter vaststelling | `vv` — versie ter vaststelling |
| Definitief | `def` — vastgestelde versie |

Bij `cv`, `vv` en `def` ook `publishDate` bijwerken en, zodra er een eerdere versie is, `previousPublishDate` en `previousMaturity` invullen. Zet bij elke release een **tag** in GitHub.

## Vertaalstatus Engelse versie

| Hoofdstuk | Status |
|---|---|
| Samenvatting, 1–8, 11, 12, bijlage A en B | vertaald |
| 9 Regelinterpretatie, 10 Informatiebehoefte, bijlage C ILS | nog te vertalen — verwijst naar de Nederlandse tekst |

Bij verschil tussen de versies is de Nederlandse leidend.

## Samenwerkingsafspraken

1. Werk lokaal (GitHub Desktop + VS Code), niet in de webinterface.
2. Pull voordat je begint.
3. Commit per afgeronde paragraaf, met een bericht dat zegt wát je bijwerkte.
4. Commit nooit zonder lokaal gerenderd te hebben.
5. Structuurwijzigingen (hernummeren, hoofdstukken verplaatsen) via de redactie.
6. Vragen en fouten worden een issue, geen mail.
