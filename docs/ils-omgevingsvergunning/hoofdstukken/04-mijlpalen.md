# Informatieproductiemijlpalen en -schema

## Fasering

We volgen de fasering van de **STB 2025** (BNA/NL Ingenieurs). Een gemeente mag de STB 2014-fasering gebruiken als die beter aansluit op haar werkwijze.

| Fase STB 2025 | Code | Relevantie voor deze ILS |
|---|---|---|
| 1.1–1.3 Initiatief, haalbaarheid, projectdefinitie | INI, HBH, PD | — |
| 2.1 Structuurontwerp | SO | Vooroverleg (optioneel) |
| 2.2 Voorontwerp | VO | **Mijlpaal M1: vooroverleg** |
| 2.3 Definitief ontwerp | DO | Voorbereiding aanvraag |
| 2.4 Omgevingsvergunning | OV | **M2: aanvraag OPA** en **M3: aanvraag TBA** |
| 3.1 Technisch ontwerp | TO | M3 als de TBA later wordt ingediend (gefaseerde aanvraag) |
| 3.2 Uitvoeringsgereed ontwerp | UO | Buiten scope |
| 4.x Realisatie, oplevering | UIT, AB, OND | Buiten scope (toezicht, *as built*) |
| 5 Gebruik | GBR | Buiten scope |

## Mijlpalen

| Mijlpaal | Moment | GEMMA-stap | Wat wordt geleverd | Checks | Minimale IDS-set |
|---|---|---|---|---|---|
| **M1 Vooroverleg** | Voorontwerp, vóór de formele aanvraag | Vooroverleg / 21.090 Verzorgen aanvraag | Massamodel met georeferentie, gebouw, bouwlagen en gebruiksfuncties | #1–#6 (indicatief) | 9.01a–e, 9.02, 9.03, 9.04, 9.05a, 9.06a, 9.08 |
| **M2 Aanvraag OPA** | Definitief ontwerp | 21.130 Indienen bescheiden t.b.v. toetsing aan omgevingsplan | Ruimtemodel met bruto/netto inhouden en gebruiksfuncties | #1–#6 | Alle specificaties met #1–#6 in de [Tabel met vereisten](#vereisten) |
| **M3 Aanvraag TBA** | Definitief of technisch ontwerp | Indienen bescheiden technische bouwactiviteit | Volledig ruimtemodel plus fysieke elementen met eigenschappen, **inclusief de bijgewerkte ID01-informatie** | #1–#17 (#1–#6 als controle op wijzigingen) | Alle specificaties met #1–#17 |
| M4 Acceptatie | Na elke levering | 015-02 Uitvoeren intake aanvraag / 015-03 Toetsen aan regelgeving (*Controleren indieningsvereisten*) | Validatierapport, eventueel BCF-issues terug naar de aanvrager | — | — |

De gemeente neemt na elke levering **[invullen, voorstel: 10] werkdagen** om de ontvankelijkheid van het informatiemodel te bevestigen (acceptatiecriteria AC1–AC4). Dit valt binnen de wettelijke beslistermijn en staat daar niet los van.

> **Let op:** de informatie voor ID01 (M1/M2) moet bij M3 opnieuw worden meegeleverd, in de actuele versie. Zie [ID01-informatie opnieuw meeleveren](#perspectieven).

## Belangrijke beslismomenten

1. **Vooroverleg:** is het initiatief kansrijk ten opzichte van het omgevingsplan?
2. **Ontvankelijkheid:** voldoet het aangeleverde model aan de acceptatiecriteria?
3. **Inhoudelijke toetsing:** voldoet het bouwplan aan de 17 checks (geautomatiseerd, met menselijke beoordeling waar nodig)?
4. **Besluit:** vergunning verlenen, weigeren of aanvullende gegevens vragen.

## Informatieproductieschema (invulformat)

Dit schema vult de aanvrager in, bijvoorbeeld in het BIM-uitvoeringsplan:

| Mijlpaal | Informatiecontainer (bestandsnaam) | Verantwoordelijke | Geplande datum | Status (S0–A) | IDS-validatie geslaagd |
|---|---|---|---|---|---|
| M1 | `<project>_ARC_XX_M3D_ZZZ.ifc` | `<organisatie>` | `jjjj-mm-dd` | S3 | ja/nee |
| M2 | … | … | … | … | … |
| M3 | … | … | … | … | … |

## Projectinformatie (invulformat)

| Veld | Invulling | Waar in het model |
|---|---|---|
| Gemeente / bevoegd gezag | `<Gemeente Y>` | — |
| Volwassenheidsniveau gemeente | `1 / 2 / 3 / 4 / 5` (CHEK-volwassenheidsmatrix) | — |
| Projectnaam en -code | `<code>` | `IfcProject.Name` |
| Zaaknummer DSO | `<nummer>` | `IfcProject.LongName` of `Description` |
| Locatie | Kadastrale percelen, BAG-pand-ID's, verblijfsobject-ID's | 9.03b, 9.04, 9.05a, 9.07 |
| Scope | Nieuwbouw / verbouw; heel pand, panddeel of verblijfsobject(en) | — |
| Fase | STB 2025-fasecode | `IfcProject.Phase` |
