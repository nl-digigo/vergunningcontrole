# Changelog

Dit project volgt [semantische versies](https://semver.org/lang/nl/). `0.x` = concept, `1.0.0` = vastgesteld.

## [Niet uitgebracht]

### Gewijzigd
- Nieuwe tabelstijl voor de hele ILS (`assets/ils-tables.css` en `assets/ils-tables.js`): brede tabellen scrollen horizontaal met een meelopende eerste kolom, de kolomkop blijft staan, IDS-verwijzingen en checknummers worden als label getoond, kardinaliteit R/O/X als badge en ja/nee met een statusbolletje. De inhoud van de hoofdstukken is niet gewijzigd.
- De statische leesversies bevatten dezelfde stijl; `tools/inline-tabelstijl.py` zet die er opnieuw in na een wijziging in `assets/`.

## [0.1.0] – 2026-09-17

### Toegevoegd
- Eerste ReSpec-publicatie van de ILS Omgevingsvergunning, opgebouwd volgens het digiGO Toetsingskader ILS en het ILS-Referentiesjabloon.
- Tabel met vereisten: 17 checks gekoppeld aan 42 IDS-deelspecificaties.
- Level of Information Need, per specificatie gegenereerd uit de IDS, plus geometrische eisen G1–G6.
- Acceptatiecriteria AC1–AC7.
- Hoofdstuk geometrische controle (tweeledige aanpak, SPARQL-regels en generieke functies).
- Verantwoording per criterium van het Toetsingskader ILS.

### Gewijzigd
- Informatiedoelstellingen hernummerd: ID01 = omgevingsplanactiviteit bouwen (checks #1–#6), ID02 = technische bouwactiviteit (checks #7–#17). De overige doelstellingen zijn ID03–ID12 geworden (voorheen ID01–ID08; ID11 en ID12 ongewijzigd).
- ID01-informatie wordt bij ID02 (aanvraag technische bouwactiviteit, M3) opnieuw en bijgewerkt meegeleverd.
- ID03–ID12 zijn optioneel: voorstellen om op te nemen, nog niet onderzocht.
- Matrix toegevoegd die de informatiedoelstellingen koppelt aan de GEMMA-processen (013, 015-02 t/m 015-05, toezicht en handhaving, brondatabeheer, evaluatie).
- GEMMA-verwijzing gecorrigeerd: de toetsing valt onder 015-03 *Inhoudelijk behandelen aanvraag* (niet 015-02). Aangepast in de tekst en in `ids:milestone` van alle 42 IDS-bestanden.
- Engelse, automatisch vertaalde versie toegevoegd (`en/` en `ils-omgevingsvergunning-en.html`). De Nederlandse versie is leidend; GEMMA-, STB- en IDS-termen zijn Nederlands gebleven.

## [0.1.3] – 2026-09-25

### Toegevoegd
- Hoofdstuk 16 *Voorbeeldmodellen*: 15 IFC-modellen uit het project RottaNova/Kievitsweg in [`voorbeeldmodellen/`](voorbeeldmodellen/), met herkomst, bestandsoverzicht en de bekende afwijkingen.
- Per specificatie in hoofdstuk 06 een STEP-fragment uit die modellen, met property sets en classificatieverwijzing (28 van de 42 specificaties; de overige objecttypen komen niet in de modellen voor).
- Engelse vertaling van hoofdstuk 16 en van de fragmenten.

### Gewijzigd
- `ids/07-9.02-Project.ids`: `ProjectInvestmentEstimate` had `dataType="IFCCOSTITEMTYPEENUM"`, wat in het IFC-schema een `IfcMonetaryMeasure` is. Gecorrigeerd naar `IFCMONETARYMEASURE`.
- Voorbeeldmodellen: header geneutraliseerd (auteur, organisatie, autorisatie, exportsysteem en de Revit-regels in `FILE_DESCRIPTION`), `FILE_NAME` gelijk aan de bestandsnaam, tijdstempel `2026-09-25T00:00:01`, en `PredefinedType` = `USERDEFINED` voor ruimtelijke objecten met een `ObjectType` (1.053 `IfcSpace`).
- Voorbeeldmodellen opgeschoond: niet-schema-eigenschappen uit `Pset_SpaceOccupancyRequirements` verwijderd, SBI-codes in `OccupancyType` in CBS-notatie, `Pset_SpaceHeaterTypeCommon` verwijderd, `Pset_SpaceCommon.Reference` verwijderd, `ProjectInvestmentEstimate` gevuld met een fictieve 10 miljoen euro plus `IfcMonetaryUnit` EUR.
