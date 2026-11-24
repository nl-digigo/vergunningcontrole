# Lagenmodel {#lagenmodel}

<p class="leesniveau tactisch">Tactisch</p>

Deze toolkit denkt op twee manieren in lagen. Ze lijken op elkaar, maar beantwoorden een andere vraag.

- De **regellagen** (0 tot en met 5) volgen één regel van wettekst tot software: *hoe wordt deze regel automatisch toetsbaar?*
- De **architectuurlagen** (motivatie tot en met infrastructuur) beschrijven het stelsel eromheen: *wat is er landelijk nodig om dit voor alle gemeenten te laten werken?*

## Regellagen: van wettekst tot software {#regellagen}

Elke check doorloopt dezelfde zes lagen. Iedere laag bouwt voort op de vorige.

| Laag | Wat het is | Wat een gemeente ziet | Waar in deze toolkit |
|---|---|---|---|
| **0 — Regelfundament** | juridische bron, interpretatie en definities | de regeltekst en hoe die wordt uitgelegd | [[[#regelinterpretatie]]], onderdeel *Regelgeving* en *Opmerkingen* |
| **1 — Toets en werkwijze** | wat precies wordt gecontroleerd en hoe dat nu gebeurt | de stappen van de huidige handmatige toets | [[[#regelinterpretatie]]], onderdeel *Toets* en *Werkwijze* |
| **2 — Informatiebehoefte** | welke BIM- en geodata nodig zijn | welke gegevens in de aanvraag moeten zitten | [[[#informatiebehoefte-geo-bim]]] en [[[#ils-omgevingsvergunning]]] |
| **3 — Procedure** | softwareonafhankelijke stappen (pseudocode) | de rekenregel in gewone woorden | [[[#voorbeeld-regel-2]]] |
| **4 — Machineleesbare regel** | formele vastlegging die software kan lezen | niets — dit is voor software | [[[#regelcodering]]] |
| **5 — Referentie-implementatie** | hoe een leverancier de check uitvoert | het resultaat in de eigen software | [[[#voorbeeld-regel-2]]] |

Lagen 0 tot en met 2 zijn voor alle zeventien checks uitgewerkt. Lagen 3 tot en met 5 zijn uitgewerkt voor regel #2 als voorbeeld; de overige checks volgen.

Verschillende softwarepakketten kunnen dezelfde afgesproken regel op hun eigen manier uitvoeren. Wat vastligt, is de betekenis van de regel en de testcase; niet de techniek.

<div class="issue" title="Aanvullingen op laag 1 en 2">

- Geef gemeenten een gestandaardiseerde naamgeving voor de objecten waarnaar regels verwijzen; STOP/TPOD voorziet daar niet in. Voorbeelden: peil, bouwhoogte.
- Neem de minimale data-eisen voor de zeventien checks op (afstemmen met Gerlof).
- Zorg voor consistente naamgeving aan de kant van gemeenten: hoe zij hun gegevens in STOP/TPOD vastleggen.

</div>

## Architectuurlagen: het stelsel eromheen {#architectuurlagen}

De architectuurhoofdstukken volgen een vaste indeling. Elk hoofdstuk begint met een kader *In het kort*.

| Laag | Vraag | Hoofdstuk |
|---|---|---|
| Motivatie | waarom, en binnen welke kaders? | [[[#motivatielaag]]] |
| Organisatie | wie doet wat, en wat verschuift er? | [[[#organisatielaag]]] |
| Informatie | welke gegevens en standaarden? | [[[#informatielaag]]] |
| Applicatie | welke voorzieningen en koppelingen? | [[[#applicatielaag]]] |
| Infrastructuur | op welke stelsels en techniek draait het? | [[[#infrastructuurlaag]]] |

Wat nog besloten moet worden, staat bij elkaar in [[[#beslispunten-en-afwijkingen]]].
