# Wijzigingslog — Toolkit GeoBIM

## Werkversie — 2026-11-17

### Inhoud
- Bijlage C (NL en EN) gelijk gemaakt aan de ILS Omgevingsvergunning v0.2: de IDS-XML van alle specificaties komt nu overeen met de bestanden in `docs/ils-omgevingsvergunning/ids/`, en de bestandsnamen in de tabellen zijn die van die bestanden. Nieuw is specificatie 43, *9.16d Beschermd subbrandcompartiment* (check #15).
- Bijlage C: het projectadres is optioneel; de adresattributen van `IfcSite` en `IfcBuilding`, `UnitsInContext` en `ObjectPlacement` op `IfcSite` en `IfcBuildingStorey` vervallen, net als de eisen op `Qto_BuildingStoreyBaseQuantities`. De beschrijving, de koppeling en de toelichting bij 9.01c–e en 01 zijn daarop aangepast.
- Bijlage C: de verschillen met de ILS die al vóór deze wijziging bestonden, zijn mee rechtgezet: de classificatie-eisen bij 9.01a, 9.02, 9.03a, 9.05a en 9.06a vervallen, en de kardinaliteit van de classificaties bij 9.10d–f, 9.12a, 9.12d, 9.13 en 9.16c is optioneel, zoals in de IDS.
- Bijlage C: processtap bijgewerkt naar GEMMA 015-03, gelijk aan `ids:milestone` in de IDS.
- Bijlage B (BIM-viewers) bijgewerkt (X3) en bijlage C opnieuw afgeleid uit de ILS Omgevingsvergunning 0.2.0, 41 specificaties (X1, X7).
- Bijlage A (NL en EN): de bestandslijst in het promptvoorbeeld bij regel 2 gelijk gemaakt aan de huidige IDS-bestanden van de ILS Omgevingsvergunning 0.2.0. Bijlage C: de bron heet nu v0.2.0, en de typefouten en werknotities die in de ILS zijn verbeterd, zijn mee overgenomen (X10–X12).

## Werkversie — 2026-09-25

### Structuur
- Document omgezet van het Stichting-CROW-template naar het **Geonovum NL-ReSpec-template** (logo, huisstijl, statussen `wv`/`cv`/`vv`/`def`).
- Hoofdstukken uit `h/` verplaatst naar de hoofdmap met vaste namen (`ch01`–`ch12`, `bijlage-a`–`c`); lege en dubbele bestanden verwijderd.
- Afbeeldingen naar `media/` met namen zonder spaties.
- Werkdocumenten verplaatst naar `/werkdocumenten/toolkit-geobim/` (niet gepubliceerd).
- **Engelse versie** toegevoegd onder `en/`, volledig vertaald (IDS-XML in bijlage C ongewijzigd).

### Inhoud
- Nieuw: samenvatting, hoofdstuk 1 *Inleiding*, hoofdstuk 2 *Lagenmodel*, hoofdstuk 3 *Begrippen* (v0), hoofdstuk 11 *Regelcodering* (opzet).
- Bronnenlijst `js/biblio.js` met 43 bronnen; alle `[[…]]`-verwijzingen in de architectuurhoofdstukken werken nu.
- Hoofdstuk 9: afbeeldingen hersteld (verwezen naar GitHub-webpagina's in plaats van naar de afbeeldingen zelf); handmatige inhoudsopgave verwijderd.
- Hoofdstuk 10: titel gecorrigeerd (was gelijk aan de titel van hoofdstuk 9); handmatige inhoudsopgave verwijderd.
- Bijlage A: kopniveaus hersteld.
- Bijlage C: vaste ankers voor alle 42 specificaties, zodat de links in het overzicht werken.
- Hoofdstuk 4: typefout „beleidsmaatregel 1313” → „13”.
- Hoofdstuk 8: kapotte verwijzing naar een niet-bestaande paragraaf over privacy vervangen door een notitie dat die nog geschreven moet worden.
- Hoofdstuk 9: vaste ankers `#regel-1` … `#regel-17`, gelijk in NL en EN; verouderde opmerking over placeholder-afbeeldingen verwijderd.
