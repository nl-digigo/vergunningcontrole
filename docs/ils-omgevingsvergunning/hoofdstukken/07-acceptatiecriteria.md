# Acceptatiecriteria

De acceptatiecriteria bepalen objectief of een aangeleverd informatiemodel **ontvankelijk** is, dus geschikt om de checks op uit te voeren. Of het bouwplan voldoet aan de regels is een tweede vraag; die wordt met de checks beantwoord, niet met de acceptatiecriteria.

## Criteria

| Code | Criterium | Toetswijze | Automatisch? | Bij afkeur |
|---|---|---|---|---|
| **AC1** | Het bestand is geldig IFC 4.3 (of IFC4 ADD2 TC1) in STEP-formaat, maximaal [250] MB per container | Schemavalidatie (bijv. buildingSMART Validation Service) | Ja | Niet ontvankelijk |
| **AC2** | De `#HEADER` is gevuld: `FILE_NAME` met naam, tijdstempel, auteur, organisatie en autorisatie | Headercontrole | Ja | Herstelverzoek |
| **AC3** | Het model voldoet aan alle IDS-specificaties die bij de mijlpaal horen (zie [Mijlpalen](#mijlpalen)) | IDS-validatie met een IDS 1.0-conforme tool | Ja | Herstelverzoek met rapport (BCF/HTML) |
| **AC4** | Het model is gegeorefereerd in EPSG:28992 of EPSG:7415, en de positie valt binnen de opgegeven kadastrale percelen | IDS 9.01a/b plus ruimtelijke controle tegen de BRK | Ja | Niet ontvankelijk |
| **AC5** | De geometrie van ruimten en zones is solide en zonder doublures (G1, G4) | Geometriecontrole | Deels | Herstelverzoek |
| **AC6** | De meegeleverde hoeveelheden (Qto) wijken niet meer dan [x]% af van de herberekende hoeveelheden (G5) | Tweeledige geometriecontrole, zie [Geometrische controle](#geometrie) | Ja (zodra de tooling beschikbaar is) | Signaal aan de beoordelaar |
| **AC7** | De bestandsnaam volgt de conventie uit de [Informatieproductiestandaard](#standaard) | Patrooncontrole | Ja | Signaal |

Waarden tussen [ ] kiest de gemeente bij het vaststellen van de ILS. Voorstel: 250 MB en 2%.

## Wie voert de controle uit?

| Stap | Uitvoerder | Hulpmiddel |
|---|---|---|
| Zelfcontrole vóór indienen | Aanvrager / modelleur | IDS-bestanden uit de map `ids/`, open validatietools |
| Controle bij ontvangst | Gemeente of een door haar aangewezen validatiedienst | Dezelfde IDS-bestanden, zodat het resultaat gelijk is |
| Geometrische herberekening | Gemeente / checksoftware | Generieke geometriefuncties (laag 4) |

Omdat aanvrager en gemeente **dezelfde** IDS-bestanden gebruiken, weet de aanvrager vooraf of de levering ontvankelijk is. Het resultaat van een IDS-controle hangt nog wel af van de IFC-parser die een tool gebruikt. Daarom verwijst deze ILS naar de buildingSMART-certificering van IDS-tools als referentie. Zie [Open punten](#open-punten).

## Acceptatietabel per mijlpaal

| Mijlpaal | AC1 | AC2 | AC3 | AC4 | AC5 | AC6 | AC7 |
|---|---|---|---|---|---|---|---|
| M1 Vooroverleg | ● | ○ | ● (beperkte set) | ● | ○ | – | ○ |
| M2 Aanvraag OPA | ● | ● | ● | ● | ● | ○ | ○ |
| M3 Aanvraag TBA | ● | ● | ● | ● | ● | ● | ○ |

● = verplicht · ○ = aanbevolen · – = niet van toepassing
