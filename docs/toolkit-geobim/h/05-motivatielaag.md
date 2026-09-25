# Motivatielaag {#motivatielaag}

<p class="leesniveau bestuurlijk">Bestuurlijk</p>

De motivatielaag beschrijft **waarom** beleidsmaatregel 1313 bestaat en **binnen welke kaders** de oplossing moet passen: de wet- en regelgeving, de architectuurprincipes en de businesscase.

<div class="in-het-kort laag-motivatie">

**In het kort**

- De maatregel moet het vergunningproces voor bouwwerken **sneller, consistenter en minder foutgevoelig** maken, en zo bijdragen aan het versnellen van de woningbouw.
- Het juridische fundament is de **Omgevingswet** met het **Bbl** en de gemeentelijke omgevingsplannen; daarnaast gelden onder meer de Archiefwet, de Wet digitale overheid, de AVG en Europese kaders voor data en interoperabiliteit.
- Tien **architectuurprincipes** sturen het ontwerp, met als kern: open standaarden, eenmalig vastleggen en meervoudig gebruiken, federatief samenwerken en privacy en security *by design*.
- De **businesscase** rust op zes drijfveren, van kortere doorlooptijd tot meer vertrouwen tussen gemeenten en markt.

</div>

## Wet- en regelgeving {#wet-en-regelgeving}

<p class="leesniveau tactisch">Tactisch</p>

Deze paragraaf geeft een eerste indicatie van de wet- en regelgeving en beleidsafspraken die van toepassing zijn. Daaronder kunnen ook algemene maatregelen van bestuur (AMvB's) en ministeriële regelingen vallen.

### Nationale wet- en regelgeving {#nationale-wetgeving}

| Wet- en regelgeving | Impact op dit project |
|---|---|
| Omgevingswet (2024) [[OMGEVINGSWET]] | Bepaalt de juridische basis en het digitale loket (DSO) voor vergunningaanvragen en verplicht tot integrale beoordeling. BM13 moet aansluiten op het DSO en de Omgevingswet-standaarden (toepasbare regels, STTR). |
| Besluit bouwwerken leefomgeving (Bbl) [[BBL]] | Bevat de technische bouwvoorschriften waaraan aanvragen moeten voldoen en vormt de bron voor de rulesets in de rule engine. BM13 moet deze regels machineleesbaar maken en toepassen in checks. |
| Omgevingsplannen van gemeenten (ruimtelijke regels) | Lokale juridische kaders die als machineleesbare regels beschikbaar moeten komen; noodzakelijk voor toetsing van omgevingsplanactiviteiten (OPA). |
| Archiefwet [[ARCHIEFWET]] | Verplicht duurzaam bewaren van vergunningdossiers; BIM-modellen vallen hiermee ook onder de archiveringsplicht. Dit onderstreept de noodzaak van afspraken over opslag en toegankelijkheid. |
| Wet digitale overheid (Wdo) [[WDO]] | Verplicht het gebruik van open standaarden bij digitale gegevensuitwisseling. BM13 moet daarom IFC, IDS, OGC API's en vergelijkbare standaarden toepassen. |
| AVG / Wet politiegegevens (Wpg) [[AVG]] | Persoonsgegevens in vergunningaanvragen moeten worden beschermd; borging van privacy en informatiebeveiliging moet expliciet in de oplossing worden meegenomen. |
| Wet BAG (Basisregistratie Adressen en Gebouwen) [[WET-BAG]] | Zorgt dat gebouw- en adresgegevens uit vergunningen worden teruggeleverd aan de authentieke registratie. BM13 moet daarom gegevensuitwisseling met de BAG-structuur (object-ID's, geolocatie) ondersteunen. |
| Wet BGT (Basisregistratie Grootschalige Topografie) [[WET-BGT]] | Bepaalt dat de fysieke context van bouwplannen wordt vastgelegd volgens BGT-objectdefinities. BM13 moet hierop aansluiten om BIM-modellen correct te positioneren en topografisch te toetsen. |

### Europese kaders en initiatieven {#europese-kaders}

| Wet- en regelgeving | Impact op dit project |
|---|---|
| INSPIRE-richtlijn (2007/2/EG) [[INSPIRE]] | Verplicht lidstaten ruimtelijke data gestandaardiseerd en digitaal beschikbaar te stellen; relevant voor de geo-BIM-integratie in BM13. |
| Europese aanbestedingsrichtlijn (2014/24/EU) [[AANBESTEDING-EU]] | De landelijke proef- en productieomgeving komt waarschijnlijk boven de drempelwaarde uit; een aanbestedingstraject is dan noodzakelijk. |
| EU Data Governance Act en Data Act (2023/2025) [[DGA]] [[DATA-ACT]] | Stimuleren interoperabiliteit en hergebruik van data, ook in de bouw- en omgevingsdomeinen. BM13 moet datadiensten volgens Europese principes ontsluiten. |
| Kaders voor digitale interoperabiliteit (CEF/EIF) [[EIF]] | Europese referentiearchitectuur voor interoperabiliteit. BM13 moet datadiensten volgens deze principes ontwerpen: open, herbruikbaar en interoperabel. |
| Europese onderzoeksprojecten (CHEK, ACCORD, DigiChecks) [[CHEK]] [[ACCORD]] | Leveren methodieken voor rule-checking, BIM-geokoppeling en Linked Data-regels. BM13 moet deze monitoren en waar mogelijk integreren. |

## Architectuurprincipes {#architectuurprincipes}

<p class="leesniveau tactisch">Tactisch</p>

Deze paragraaf beschrijft de architectuurkaders (principes, richtlijnen) en overige voorschriften, inclusief beleidsstandaarden, die van toepassing zijn.

| Nr | Principe | Toepassing in dit project | Grondslag |
|---|---|---|---|
| AP01 | Open standaarden, tenzij… | Alle informatie-uitwisseling (BIM/IFC, IDS, geostandaarden, toepasbare regels) verloopt via open en internationaal gedragen standaarden (IFC van buildingSMART, OGC API's, ISO-standaarden). Dat garandeert interoperabiliteit en voorkomt leveranciersafhankelijkheid. | Landelijk verplicht (Forum Standaardisatie) [[PTOLU]]; in lijn met EU Digital Europe / Data Act |
| AP02 | Eenmalig vastleggen, meervoudig gebruiken | Het BIM-model dat bij de vergunningaanvraag wordt ingediend, moet daarna herbruikbaar zijn voor toetsing, toezicht, handhaving, basisregistraties (BAG, BGT) en digital twin. Geen duplicaatprocessen meer. | GEBORA en sectorale doelstellingen (efficiënte en toekomstvaste informatievoorziening) |
| AP03 | Scheiding van verantwoordelijkheden | De indiener is verantwoordelijk voor het correct en compleet aanleveren van de BIM-data; de gemeente is verantwoordelijk voor toetsing en besluitvorming. Afspraken in de ILS/IDS leggen deze verantwoordelijkheden vast. | Landelijk (juridisch vanuit de Omgevingswet); borgt duidelijkheid in de keten |
| AP04 | Federatief samenwerken | Geen centrale database, maar afspraken over interoperabele datadiensten en uitwisseling (DSGO/DSO). Gemeenten en marktpartijen houden data bij de bron, maar delen via landelijke voorzieningen (proef- en productieomgeving). | GEBORA/digiGO en Europese interoperabiliteit (EIF) |
| AP05 | Transparantie en traceerbaarheid | Elke check en wijziging in de vergunningverlening moet herleidbaar zijn: wie heeft wat gecontroleerd, welke regels zijn toegepast en wat was de uitkomst. Dat ondersteunt juridische houdbaarheid en archivering. | Landelijk (Archiefwet, AVG); EU (verantwoordingsbeginsel AVG) |
| AP06 | Privacy en security by design | Al bij de inrichting van BIM-diensten en de proefomgeving worden privacy en security meegenomen (autorisatie, logging, dataminimalisatie), bijvoorbeeld door publiek toegankelijke 3D-visualisaties te scheiden van interne detailinformatie. | Verplicht vanuit AVG en BIO, in lijn met de EU Cybersecurity Act |
| AP07 | Conformeren aan referentiearchitecturen | Alle nieuwe voorzieningen (validatieservice, rule engine, proefomgeving) moeten passen binnen GEBORA en GEMMA. Afwijkingen worden expliciet gemeld in de PSA. | Verplicht binnen de Nederlandse overheid (NORA-principe) |
| AP08 | Internationale aansluiting en hergebruik | Nederlandse afspraken (ILS, IDS, datagedreven regels) sluiten aan op Europese aanpakken en dragen waar mogelijk bij aan internationale standaardisatie. | EU-richtlijnen en onderzoeksprogramma's eisen aansluiting bij internationale interoperabiliteit |
| AP09 | Common Ground | Overheden delen informatie via gestandaardiseerde API's en gelaagde gegevensdiensten in plaats van bestanden uit te wisselen. BM13 laat vergunningdata bij de bron en maakt die via open koppelingen (DSGO/DSO) beschikbaar. | Informatiekundige visie gemeenten |
| AP10 | Samen organiseren / gezamenlijke gemeentelijke uitvoering | Gemeenten ontwikkelen en beheren generieke voorzieningen gezamenlijk, zodat kennis, standaarden en voorzieningen uit BM13 herbruikbaar zijn voor de hele gemeentelijke organisatie en niet per gemeente opnieuw worden gebouwd. | Informatiekundige visie gemeenten |

<div class="note" title="Nummering van principes">

De nummers AP01–AP10 zijn bij de omzetting naar ReSpec toegevoegd, zodat er in issues, beslispunten en vervolgdocumenten (zoals de solution architectuur) eenduidig naar een principe verwezen kan worden.

</div>

## Businesscase {#businesscase}

<p class="leesniveau bestuurlijk">Bestuurlijk</p>

De businesscase maakt inzichtelijk waarom de beleidsmaatregel maatschappelijk en economisch van waarde is, welke opbrengsten en voordelen worden verwacht, en hoe dit bijdraagt aan de doelstellingen van de keten en de samenleving.

| Nr | Drijfveer | Huidige situatie | Toekomstige situatie |
|---|---|---|---|
| D1 | Verkorten van de doorlooptijd van vergunningverlening | Aanvragen worden vaak meerdere keren teruggestuurd wegens onvolledigheid, waardoor de doorlooptijd kan oplopen tot vele maanden. Gemeenten werken sequentieel en sterk documentgedreven. | Met BIM/IFC en voorafgaande validatieservices kan de indiener direct compleet aanleveren; het proces wordt korter en voorspelbaarder. Gemeenten kunnen sneller besluiten en projecten eerder laten starten. |
| D2 | Verhogen van de kwaliteit en consistentie van de toetsing | Toetsing is grotendeels handmatig en afhankelijk van de interpretatie van individuele vergunningverleners, wat leidt tot verschillen in kwaliteit en uitkomsten. | Regels worden machineleesbaar gemaakt en geautomatiseerd toegepast via rule engines; de beoordeling wordt reproduceerbaar en consistent. Dat versterkt rechtszekerheid en betrouwbaarheid. |
| D3 | Verminderen van het aantal onvolledige of foutieve aanvragen | Meer dan de helft van de aanvragen voldoet niet aan de indieningsvereisten, wat leidt tot vertraging, extra werk en frustratie bij indieners en gemeenten. | Indieners valideren hun BIM-model vooraf met een landelijke checkvoorziening, zodat alleen complete en correcte aanvragen worden ingediend. Dat voorkomt herhaald heen-en-weer sturen. |
| D4 | Voorkomen van dubbel werk door beter benutten van BIM-data die de markt al maakt | Ontwikkelaars en aannemers maken BIM-modellen, maar moeten daarnaast extra 2D-documentatie en PDF's aanleveren speciaal voor de vergunningaanvraag. | Gemeenten gebruiken hetzelfde BIM-model direct voor toetsing, toezicht en basisregistraties. Dubbel werk vervalt en bestaande marktdata wordt optimaal benut. |
| D5 | Ontlasten van vergunningverleners door automatisering van controles | Gemeenten kampen met tekorten aan VTH-medewerkers, die veel tijd kwijt zijn aan administratieve controles en detailbeoordelingen. | Een rule engine voert routinematige controles automatisch uit, zodat medewerkers zich kunnen richten op complexe of risicovolle onderdelen. Dat vermindert werkdruk en vergroot de efficiëntie. |
| D6 | Verbeteren van samenwerking en vertrouwen tussen gemeenten en marktpartijen | De communicatie tussen indieners en gemeenten verloopt versnipperd en vaak reactief, met onduidelijkheid over eisen en frustratie aan beide kanten. | Landelijke afspraken over IFC, IDS en regels creëren een gedeelde taal en een transparant proces. Dat versterkt vertrouwen en zorgt voor gelijkwaardige samenwerking in de hele keten. |

<div class="issue" title="Businesscase kwantificeren">

De businesscase is nu kwalitatief. Voor besluitvorming over de landelijke voorziening is een kwantitatieve onderbouwing nodig: verwachte tijdwinst per aanvraag, reductie van niet-ontvankelijke aanvragen, benodigde en bespaarde fte's, en de kosten van bouw en beheer. Zie [[[#beslispunten-en-afwijkingen]]].

</div>

## Van doel naar oplossing {#doel-naar-oplossing}

<p class="leesniveau technisch">Technisch</p>

Onderstaande tabel laat zien hoe drijfveren en principes doorwerken in de andere lagen. Dit is de draad die in de solution architectuur verder wordt uitgewerkt.

| Drijfveer / principe | Organisatielaag | Informatielaag | Applicatielaag | Infrastructuurlaag |
|---|---|---|---|---|
| D1, D3 — doorlooptijd en volledigheid | validatieproces verschuift naar de indiener | IDS als machineleesbare indieningsvereiste | IDS-validatieservice, IDS-publicatieservice | landelijke proef- en productieomgeving |
| D2, D5 — kwaliteit en ontlasting | toetsingsproces grotendeels geautomatiseerd | toepasbare regels, rulesets | machine readable legislation service, rule engine | rule-engine-/validatieserviceplatform |
| D4, AP02 — eenmalig vastleggen | ontwerp- en indieningsproces op basis van hetzelfde model | IFC als kernbestand | BIM-authoringsoftware, archivering | archiefvoorziening |
| AP01 — open standaarden | — | IFC, IDS, NEN 2660, NEN 3610, STTR | OGC API's, REST/JSON, Linked Data | Digikoppeling, TLS, OAuth 2.0 |
| AP04, AP09 — federatief, Common Ground | data blijft bij de bronhouder | Linked Data, gegevensdiensten | API-koppelingen in plaats van bestandsuitwisseling | DSGO, DSO, publish–find–bind |
| AP05, AP06 — traceerbaar, by design | verantwoording per check | validatierapport, toetsingsresultaat | logging in elke service | IAM, procesmonitoring, PKIoverheid |

## Relatie met andere lagen en open punten {#motivatie-open-punten}

<p class="leesniveau tactisch">Tactisch</p>

- De **omgevingsplannen** zijn per gemeente verschillend. Hoe gemeentelijke variatie in machineleesbare regels wordt ondergebracht, is nog niet uitgewerkt.
- De **aanbestedingsplicht** voor de landelijke proef- en productieomgeving is een aanname die juridisch getoetst moet worden.
- Voor de EU-projecten (CHEK, ACCORD, DigiChecks) is nog niet vastgelegd welke onderdelen BM13 overneemt.
