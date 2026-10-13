# Inleiding {#inleiding}

## Aanleiding {#aanleiding}

Bouwregels staan vandaag in juridische teksten: het omgevingsplan van de gemeente en het Besluit bouwwerken leefomgeving (Bbl). Software kan die teksten niet lezen of toepassen. Daardoor is het toetsen van een bouwaanvraag handwerk: een vergunningverlener interpreteert de regel, zoekt de juiste gegevens op in tekeningen en kaarten en rekent zelf. Dat is traag, verschilt per gemeente en schaalt niet.

Beleidsmaatregel 13 van de VNG werkt aan een oplossing: regels **machineleesbaar** maken (software kan ze lezen) en **machine-uitvoerbaar** (software kan ze toepassen op een BIM-model en op geodata). Dan wordt een deel van de toets automatisch, herhaalbaar en voor iedereen gelijk.

## Doel van deze toolkit {#doel}

Deze toolkit brengt bij elkaar wat een gemeente of leverancier nodig heeft om daarmee aan de slag te gaan:

- een gedeelde uitleg van de **zeventien checks** en hoe ze nu worden getoetst;
- de **informatiebehoefte** per check: welke gegevens uit het BIM-model en welke geodata nodig zijn;
- de route van regeltekst naar **machineleesbare regel**, in lagen;
- de **architectuur** waarbinnen dit landelijk kan werken;
- de **beslispunten** die nog open staan.

## Doelgroepen en leesniveaus {#doelgroepen}

Hoofdstukken en paragrafen zijn gemarkeerd met een leesniveau, zodat iedere lezer snel ziet wat voor hem of haar bedoeld is:

| Leesniveau | Voor wie | Wat vind je er |
|---|---|---|
| <span class="leesniveau bestuurlijk">Bestuurlijk</span> | bestuurders, managers | het waarom, de kaders en de keuzes |
| <span class="leesniveau tactisch">Tactisch</span> | vergunningverleners, informatiemanagers, VTH | hoe het proces en de toets veranderen |
| <span class="leesniveau technisch">Technisch</span> | architecten, softwareleveranciers | gegevens, standaarden, pseudocode en regelcodering |

## Leeswijzer {#leeswijzer}

- [[[#lagenmodel]]] legt de twee manieren uit waarop deze toolkit in lagen denkt: de lagen van een regel en de lagen van de architectuur.
- [[[#begrippen]]] bevat de begrippen die in de hele toolkit terugkomen.
- [[[#motivatielaag]]] tot en met [[[#infrastructuurlaag]]] beschrijven de architectuur, van wet- en regelgeving tot infrastructuur.
- [[[#regelinterpretatie]]] beschrijft per check de toets, de werkwijze en de regelgevingsbron.
- [[[#informatiebehoefte-geo-bim]]] beschrijft per check welke BIM- en geodata nodig zijn.
- [[[#regelcodering]]] beschrijft hoe een check machineleesbaar wordt vastgelegd.
- [[[#beslispunten-en-afwijkingen]]] somt de open beslispunten op.
- De bijlagen bevatten een volledig uitgewerkt voorbeeld (regel #2), een overzicht van BIM-viewers en de ILS-specificaties.

## Status van dit document {#status-toelichting}

Dit is een **werkversie**. Hoofdstukken kunnen nog wijzigen, verdwijnen of worden opgesplitst. Reacties zijn welkom via de issues van de GitHub-repository.
