# Leeswijzer en introductie

## Voor wie?

| Lezer | Wat haal je uit dit document? | Begin bij |
|---|---|---|
| Vergunningverlener / VTH-medewerker gemeente | Welke informatie je mag verwachten en hoe je die toetst | [Toepassingsgebied](#scope), [Acceptatiecriteria](#acceptatie) |
| Aanvrager, architect, modelleur | Wat je moet modelleren en aanleveren | [Tabel met vereisten](#vereisten), [LOIN](#loin), [Informatieproductiestandaard](#standaard) |
| Softwareleverancier | Hoe de eisen machineleesbaar zijn en hoe checks werken | [LOIN](#loin), [Geometrische controle](#geometrie), map `ids/` |
| Beleidsmaker, digiGO-adviseur | Hoe deze ILS zich verhoudt tot het Toetsingskader ILS | [Verantwoording toetsingskader](#toetsing) |

## Introductie

Deze ILS beschrijft de afspraken voor het aanleveren van gegevens aan het VTH-domein (vergunningverlening, toezicht en handhaving) bij een aanvraag voor een omgevingsvergunning. Het document is een **voorbeeld-EIR** (*Exchange Information Requirements*) van een gemeente: een generieke uitvraag die elke gemeente kan overnemen en aanvullen met eigen eisen.

De ILS volgt NEN-EN ISO 19650-1/-2. De herziening van de ISO 19650-serie (onder meer de overgang van EIR naar *information production requirements*, IPR) volgen we actief. Zie [Beheer en versiebeheer](#beheer).

## Positie in het lagenmodel van de toolkit

De toolkit beschrijft elke check in zes lagen. Deze ILS bundelt **laag 2** voor alle 17 checks:

| Laag | Inhoud | Relatie met deze ILS |
|---|---|---|
| 0 | Begrippen en juridische bron (wet, omgevingsplan, NEN) | Verwezen vanuit de [Tabel met vereisten](#vereisten) |
| 1 | Methode: procedure, context, interpretatie | Buiten deze ILS (checkfiche per check) |
| **2** | **Data-eisen: BIM- en geo-informatie** | **Deze ILS** |
| 3 | Pseudocode: stappen, uitkomstparameters, gemeentelijke variatie | Gebruikt de data uit laag 2 |
| 4 | Referentiecodering: machineleesbare regels (SHACL, SPARQL) | Zie [Geometrische controle](#geometrie) |
| 5 | Implementatievoorbeelden: volwassenheidsniveaus, video's, code | Buiten deze ILS |

De checkfiches (één map per check) verwijzen voor laag 2 naar de betreffende rij in de [Tabel met vereisten](#vereisten).
