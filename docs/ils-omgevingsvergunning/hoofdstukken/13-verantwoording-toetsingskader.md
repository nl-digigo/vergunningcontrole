# Verantwoording volgens het digiGO Toetsingskader ILS

Dit hoofdstuk laat per criterium van het Toetsingskader ILS (instrument v1.1) zien waar en hoe deze ILS eraan voldoet. Het is een **zelfbeoordeling** ter voorbereiding op de toetsing. De scores (1–10) geeft de onafhankelijk adviseur.

Type criterium: **D** = drempel · **Z** = zwaarwegend · **A** = ambitieniveau (signaal, telt niet mee).

Stand van zaken: ✅ geregeld · 🟡 deels / invulformat · ⬜ nog te doen

## 4.1 Openheid

| Criterium | Type | Stand | Onderbouwing | Vindplaats |
|---|---|---|---|---|
| Vrije beschikbaarheid | D | ✅ | Alles wordt openbaar gepubliceerd op GitHub (ReSpec-pagina, IDS-bestanden, CSV), zonder kosten of account | README, [Referentie-informatie](#referentie) |
| Geen uitsluiting | D | ✅ | Alleen open standaarden (IFC, IDS, bSDD, BCF); geen voorkeur voor software. Iedereen kan meedoen | [Informatieproductiestandaard](#standaard) |
| Open ontwikkelproces | Z | 🟡 | BM13 biedt het kader. Inbreng loopt via openbare issues en pull requests en via de consultatie van gemeenten (Word-versie met gerichte vragen) | [Beheer](#beheer) |

## 4.2 Ontwerp

| Criterium | Type | Stand | Onderbouwing | Vindplaats |
|---|---|---|---|---|
| Grondslag in een informatiemodel | A | 🟡 | IFC (ISO 16739-1) als informatiemodel, met bSDD *Omgevingswet-Ruimten* voor de Nederlandse begrippen; GEMMA/NORA voor de procesmatige inbedding. **Beslisvraag aan digiGO:** telt IFC als informatiemodel? | [Referentie-informatie](#referentie) |
| Traceerbaarheid van de motivatielaag | Z | ✅ | Herleidbaar van gemeentelijke taak (vergunningverlening, toezicht, inhoudelijke beoordeling, handhaving) via informatiedoelstelling en check naar IDS | [Perspectieven](#perspectieven), [Tabel met vereisten](#vereisten) |
| Perspectieven en doeleinden | Z | ✅ | 17 checks, verdeeld over 2 activiteiten (OPA, TBA), gebouwtype wonen, als onderdeel van het inhoudelijk behandelen van de aanvraag | [Perspectieven](#perspectieven) |
| Management/productie-scheiding | A | ✅ | De gemeente stuurt; de aanvrager produceert het model | [Perspectieven](#perspectieven), [Verantwoordelijkheden](#verantwoordelijkheden) |
| Informatieproductiemijlpalen | D | ✅ | M1 vooroverleg, M2 aanvraag OPA, M3 aanvraag TBA, M4 acceptatie; gekoppeld aan STB 2025 en GEMMA, met een invulformat voor het schema | [Mijlpalen](#mijlpalen) |
| Level of Information Need | Z | ✅ | Opgebouwd uit de IDS (alfanumeriek) plus geometrische eisen G1–G6 | [LOIN](#loin) |
| Naamgeving en statuscodering | Z | 🟡 | Aanbevolen conventie volgens ISO 19650; er is nog geen landelijke afspraak | [Informatieproductiestandaard](#standaard) |
| Aansluiting op ontwerprichtlijnen en -principes | Z | 🟡 | Uitleg van het criterium: sluit de ILS aan op de tien principes voor gegevensuitwisseling? Hier: machineleesbaar (IDS), open internationale standaarden (IFC), gemeenschappelijke taal (bSDD), eenmalige registratie en meervoudig gebruik (BAG/BRK-ID's), functie boven techniek. Nog expliciet te toetsen | Dit hoofdstuk |
| Aansluiting op Europese implementatierichtlijnen | Z | 🟡 | Verwijzing naar NPR-CEN/TR 17654 en 17439 opgenomen; opbouw nog te vergelijken | [Informatieproductiestandaard](#standaard) |
| Acceptatiecriteria | D | ✅ | AC1–AC7: schema, header, IDS-validatie, georeferentie, geometrie, hoeveelheidscontrole, naamgeving. Afhankelijkheid van de IFC-parser benoemd | [Acceptatiecriteria](#acceptatie) |
| Referentie-informatie en gedeelde bronnen | Z | ✅ | Officieel IFC-schema, bSDD-publicatie, IDS, NL-SfB, Naa.K.T., basisregistraties | [Referentie-informatie](#referentie) |
| Documentvorm: toelichting en datasjabloon | Z | ✅ | Toelichting (deze ReSpec-pagina) plus datasjabloon (42 IDS en CSV). Een uitgebreider toelichtingsdeel volgt na afloop | Map `ids/`, `data/` |

## 4.3 Geschiktheid

| Criterium | Type | Stand | Onderbouwing | Vindplaats |
|---|---|---|---|---|
| Toepassingsgebied | D | ✅ | Gemeente, OPA/BOPA en technische bouwactiviteit, woonfunctie | [Toepassingsgebied](#scope) |
| Werkingsgebied | D | ✅ | Rollen volgens GEMMA en ISO 19650, met verantwoordelijkheidsmatrix | [Toepassingsgebied](#scope), [Verantwoordelijkheden](#verantwoordelijkheden) |
| Afstemming met andere ILS'en | Z | ✅ | Afgestemd met ILS O&E over het gebruik van `ObjectType`; gesprekken met miniBIM; gedachtegoed van de BIM basis ILS aangehouden; gebaseerd op de ILS voor Ruimten | [Positionering](#scope) |
| Actualiteit | Z | ✅ | IFC 4.3, IDS 1.0, ISO 7817-1:2024; bouwt voort op de DSGO-afspraken; volgt de herziening van ISO 19650 | [Beheer](#beheer) |
| Kwaliteit onderliggend informatiemodel | Z | ✅ | IFC is ISO-vastgesteld en sectorbreed toegepast; aansluiting op GEMMA | [Referentie-informatie](#referentie) |
| Inhoudelijke dekking | D | 🟡 | Vanuit de 17 checks voor gemeenten is per categorie duidelijk wat, wie, wanneer en waarom. Het organisatie- en assetperspectief is beschreven, maar de OIR/AIR zelf valt buiten scope | [Tabel met vereisten](#vereisten), [Perspectieven](#perspectieven) |

## 4.4 Standaarden en interoperabiliteit

| Criterium | Type | Stand | Onderbouwing | Vindplaats |
|---|---|---|---|---|
| Internationale Psets | Z | ✅ | Geen aanvullende Psets. Wel een invulmethode voor attributen: `IfcSpace`, `IfcSpatialZone` en `IfcZone` worden uitgebreid met `ObjectType`-waarden uit de bSDD | [Informatieproductiestandaard](#standaard) |
| Machineleesbaarheid | A | ✅ | 42 IDS 1.0-bestanden | Map `ids/` |
| IFC-versie | Z | ✅ | IFC 4.3 (ISO 16739-1:2024); IFC4 ADD2 TC1 tijdelijk toegestaan | [Informatieproductiestandaard](#standaard) |
| Informatieleveringsproces | A | ⬜ | Gewenst: IDM (ISO 29481) samen met de GEMMA-procesmodellen | [Beheer](#beheer) |
| Voorbereid op EU-regelgeving | A | ⬜ | Eerst meer informatie nodig (DPP/CPR, digitaal gebouwenlogboek/EPBD) | [Beheer](#beheer) |

## 4.5 Ontwikkeling en beheer

| Criterium | Type | Stand | Onderbouwing | Vindplaats |
|---|---|---|---|---|
| Beheerorganisatie | D | 🟡 | VNG is eigenaar en uitgever; de projectleider (Jeroen de Ruig) neemt het publicatiebesluit. Het structurele beheer na BM13 is nog te bepalen | [Beheer](#beheer) |
| Wijzigingsprocedure | Z | 🟡 | Voorstel uitgewerkt (issues → PR → review → besluit → release) | [Beheer](#beheer) |
| Versiebeheer | Z | 🟡 | Voorstel: semver, tags, CHANGELOG, impactanalyse bij nieuwe normversies | [Beheer](#beheer) |
| ISO-transitieplan | A | 🟡 | Voorstel in drie stappen | [Beheer](#beheer) |
| Community-betrokkenheid | A | 🟡 | Voorstel: issues, discussies en een gebruikersoverleg per kwartaal | [Beheer](#beheer) |

## 4.6 Draagvlak en adoptie

| Criterium | Type | Stand | Onderbouwing | Vindplaats |
|---|---|---|---|---|
| Brancheacceptatie | Z | 🟡 | Via de stuurgroep, met BNA, NEPROM, NL Ingenieurs, Woningbouwers NL, digiGO en Bouwend Nederland | — |
| Consultatie eindgebruikers | Z | 🟡 | Consultatie gedaan voor de ILS voor Ruimten; consultatie van gemeenten over de checks loopt | — |
| Implementatiepad | Z | 🟡 | Voorstel: pilot 2026, opschaling 2027 | [Beheer](#beheer) |

## 4.7 Aansluiting op het ILS-Referentiesjabloon

| Criterium | Type | Stand | Onderbouwing | Vindplaats |
|---|---|---|---|---|
| Positionering t.o.v. aanpalende documenten | Z | 🟡 | Tabel met aanpalende documenten. Aanbeveling: ook een informatieprotocol, verantwoordelijkheidsmatrix en IDM's opstellen | [Positionering](#scope) |
| Inhoud/format-onderscheid projectspecifiek | Z | ✅ | Uitleg van het criterium: projectspecifieke onderdelen niet leeg laten, maar een vast invulformat bieden. Hier gedaan voor projectinformatie, team en mijlpalen | [Mijlpalen](#mijlpalen), [Verantwoordelijkheden](#verantwoordelijkheden) |
| Dekking van de verplichte onderdelen | D | ✅ | Zie de mapping hieronder | Dit hoofdstuk |
| Inhoudelijke kwaliteit Deel A en B | Z | — | Te beoordelen door een expert (tabblad *Inhoudelijke kwaliteit*) | — |

### Mapping op het ILS-Referentiesjabloon

| Deel | Onderdeel (sjabloon) | Status sjabloon | Hoofdstuk in deze ILS |
|---|---|---|---|
| A | Toepassings- en werkingsgebied | Verplicht | [Toepassingsgebied](#scope) |
| A | Positionering t.o.v. aanpalende documenten | Verplicht | [Toepassingsgebied](#scope) |
| A | Perspectieven en doeleinden | Verplicht | [Perspectieven](#perspectieven) |
| A | Acceptatiecriteria | Verplicht | [Acceptatiecriteria](#acceptatie) |
| A | Informatieproductiestandaard | Verplicht | [Informatieproductiestandaard](#standaard) |
| A | Productiemethoden en -procedures | Verplicht | [Informatieproductiestandaard](#standaard), [Geometrische controle](#geometrie) |
| A | Referentie-informatie en gedeelde bronnen | Verplicht | [Referentie-informatie](#referentie) |
| A | Informatieproductieteam / verantwoordelijkheidsmatrix | Verplicht | [Verantwoordelijkheden](#verantwoordelijkheden) |
| A | Projectinformatie | Verplicht | [Mijlpalen](#mijlpalen) (invulformat) |
| A | Informatieproductiemijlpalen en -schema | Verplicht | [Mijlpalen](#mijlpalen) |
| A | Level of Information Need | Verplicht | [LOIN](#loin) |
| A | Grondslag in een informatiemodel | Optioneel | [Referentie-informatie](#referentie) |
| A | Management/productie-scheiding | Optioneel | [Perspectieven](#perspectieven) |
| B | Objecttype-/elementstructuur (OTL) | Verplicht | bSDD *Omgevingswet-Ruimten*; [LOIN](#loin) |
| B | Parameterlijst per element | Verplicht | [LOIN per deelspecificatie](#loin) |
| B | Enumeraties/waardenlijsten | Verplicht | In de IDS (`xs:enumeration`) en de bSDD |
| B | Fasekolommen | Verplicht | [Mijlpalen](#mijlpalen), kolom *Minimale IDS-set* |
| B | Projectblad / uitvoeringsplan | Verplicht | [Mijlpalen](#mijlpalen) (invulformat) |
| B | IDS-validatiebestand | Optioneel | Map `ids/` |
