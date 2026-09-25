# Perspectieven en informatiedoelstellingen

## Motivatielaag: waar komen de eisen vandaan?

ISO 19650-1 (herzien) onderscheidt drie informatieperspectieven die naast elkaar bestaan. Deze ILS maakt per perspectief zichtbaar waar de eisen vandaan komen:

| Perspectief | Bron van de eis in deze casus | Uitwerking |
|---|---|---|
| **Organisatie** | Gemeentelijke taken in vergunningverlening, toezicht en handhaving; het GEMMA-procesmodel (015 *Behandelen aanvraag*); de wens om aanvragen sneller en transparanter te toetsen | Informatiedoelstellingen ID01, ID02, ID05 |
| **Asset** | Het bouwwerk als object in basisregistraties (BAG, BRK) en omgevingsplan; later hergebruik van het model bij toezicht en handhaving | ID03, ID04, ID10, ID12 (deels buiten scope) |
| **Project** | De concrete aanvraag: vooroverleg, aanvraag OPA en aanvraag TBA voor één bouwwerk | 17 checks, [Tabel met vereisten](#vereisten) |

De keten loopt dus van **gemeentelijke taak** (vergunningverlening, toezicht, inhoudelijke beoordeling en handhaving) via **informatiedoelstelling** naar **check** en ten slotte naar **IDS-specificatie**. In de [Tabel met vereisten](#vereisten) is elke check naar een informatiedoelstelling en naar de betreffende IDS'en herleidbaar.

## Informatiedoelstellingen

De informatiedoelstellingen (ID) zijn groepen eisen. **ID01 en ID02 zijn gekoppeld aan de twee aanvraagactiviteiten van deze ILS:** ID01 aan de omgevingsplanactiviteit bouwen, ID02 aan de technische bouwactiviteit. Die twee zijn in deze versie uitgewerkt tot de 17 checks.

**ID03 tot en met ID12 zijn optioneel.** Het zijn voorstellen om als doelstelling op te nemen. Ze vallen buiten de 17 checks en zijn nog niet onderzocht. De verwachting is wel dat gemeenten de informatie uit het model ook hiervoor gaan gebruiken. Een gemeente kan ze nu al uitvragen, maar ze zijn geen voorwaarde voor een ontvankelijke aanvraag.

| ID | Doelstelling | Status in v0.1 |
|---|---|---|
| **ID01** | **Omgevingsplanactiviteit bouwen (OPA): controle op het omgevingsplan (gemeentelijk)** | **Verplicht – checks #1–#6** |
| **ID02** | **Technische bouwactiviteit (TBA): controle op het Besluit bouwwerken leefomgeving (landelijk)** | **Verplicht – checks #7–#17, inclusief de informatie uit ID01** |
| optie | optioneel | opties |
| ID03 | Digitalisering bouwwerk voor VTH-processen (dmv inmeten, scannen, NEN 2580-rapportage) | Optioneel – voorstel, nog te onderzoeken |
| ID04 | VTH-processen voeden met gebouwinformatie (hoeveelheden uit het ruimtemodel en uit fysieke objecten) | Optioneel – voorstel, nog te onderzoeken |
| ID05 | Vergunnings-, toezicht- en handhavingsproces ondersteunen (modelcoördinatie, issuebeheer via BCF) | Optioneel – voorstel, nog te onderzoeken |
| ID06 | Gemeente en omwonenden bij het ontwerp betrekken (visualisatie) | Optioneel – voorstel, nog te onderzoeken |
| ID07 | Duurzaamheidsanalyses (GWP, WLC; MPG valt onder ID02, check #13) | Optioneel – voorstel, nog te onderzoeken |
| ID08 | Overdracht en **archivering** van digitale gegevens bij dossier bevoegd gezag | Optioneel – voorstel, nog te onderzoeken |
| ID09 | Decommissioning 2 Reuse (circulariteit) | Optioneel – voorstel, nog te onderzoeken |
| ID10 | Huisnummerbesluit, Pand(dele) en verblijfsobjecten (Ifc onderdeel per panddeel, IfcZone per verblijfsobject) | Optioneel – voorstel, nog te onderzoeken (sterk aanbevolen bij bestaande bouw) |
| ID11 | Controle op welstandseisen Gevels en daken | Optioneel – voorstel, nog te onderzoeken |
| ID12 | (3D) BAG bijwerken | Optioneel – voorstel, nog te onderzoeken |

### ID01-informatie opnieuw meeleveren bij ID02

De informatie voor ID01 wordt vroeg in het traject geleverd: bij het vooroverleg (M1) en de aanvraag voor de omgevingsplanactiviteit (M2). **Bij de aanvraag voor de technische bouwactiviteit (M3, ID02) levert de aanvrager die informatie opnieuw mee, in de bijgewerkte versie.** De reden:

- Het ontwerp is tussen M2 en M3 verder uitgewerkt. Hoogte, bouwlagen, gebruiksfuncties en georeferentie kunnen zijn veranderd, en de gemeente moet kunnen zien dat de TBA-aanvraag nog past binnen wat voor de OPA is getoetst.
- De TBA-checks gebruiken dezelfde basisobjecten, zoals project, georeferentie, percelen, gebouw, bouwlagen en gebruiksfuncties (zie de [Tabel met vereisten](#vereisten)).
- Er is dan één samenhangend model per aanvraag, zonder verwijzing naar een eerder ingediende versie.

Concreet: het model bij M3 voldoet aan **alle** IDS-specificaties van ID01 **én** ID02. De gemeente mag checks #1–#6 bij M3 opnieuw uitvoeren om afwijkingen ten opzichte van M2 te signaleren.

## Koppeling met de GEMMA-processen

De matrix hieronder koppelt elke informatiedoelstelling aan de bedrijfsprocessen uit het [GEMMA-processenmodel Omgevingswet](https://www.gemmaonline.nl/wiki/Bedrijfsprocessen_omgevingswet). Het vertrekpunt is het deelproces [015-03 Inhoudelijk behandelen aanvraag](https://www.gemmaonline.nl/wiki?title=Uitwerking_deelproces&proces=Omgevingswet/id-ad8a0931-792a-46c3-b9e9-a9c669fedf59).

● = primair proces waarin de informatie wordt gebruikt · ○ = ondersteunend of later gebruik

### Gebruikte processen en codes

| Code | GEMMA-proces | Niveau | Cluster |
|---|---|---|---|
| **013** | Verkennen en begeleiden initiatief | Bedrijfsproces | Behandelen aanvraag / melding / informatie |
| **015** | Behandelen aanvraag | Bedrijfsproces | Behandelen aanvraag / melding / informatie |
| 015-02 | Uitvoeren intake aanvraag | Deelproces | |
| 015-03 | Inhoudelijk behandelen aanvraag | Deelproces | |
| 015-03.1 | Toetsen aan regelgeving | Processtap* | |
| 015-03.2 | Opstellen ontwerpbesluit | Processtap* | |
| 015-03.3 | Ter inzage leggen ontwerpbesluit | Processtap* | |
| 015-03.4 | Opstellen besluit | Processtap* | |
| 015-04 | Besluiten aanvraag | Deelproces | |
| 015-05 | Bekendmaken beschikking op aanvraag | Deelproces | |
| BMI | Behandelen melding of informatie | Bedrijfsproces (nr. te verifiëren) | Behandelen aanvraag / melding / informatie |
| UC | Uitvoeren controle | Bedrijfsproces (nr. te verifiëren) | Toezichthouden en handhaven |
| 025 | Nemen handhavingsbesluit | Bedrijfsproces (nr. te verifiëren; deelproces 025-02 *Voorbereiden opleggen sanctie*) | Toezichthouden en handhaven |
| AB | Aanleveren brondata | Bedrijfsproces (nr. te verifiëren) | Brondatabeheer |
| BIO | Beheren informatie over objecten | Bedrijfsproces (nr. te verifiëren) | Brondatabeheer |
| MA | Monitoren en analyseren | Bedrijfsproces (nr. te verifiëren) | Evaluatie |

\* GEMMA nummert de processtappen binnen een deelproces niet. De codes 015-03.1 tot en met .4 zijn een eigen codering in deze ILS, in de volgorde van GEMMA. Codes zonder nummer (BMI, UC, AB, BIO, MA) zijn tijdelijke afkortingen: het GEMMA-nummer is nog niet bevestigd.

### Matrix informatiedoelstellingen × GEMMA-processen

Onderstaande matrix moeten we nog namlop met elkaar welke doelstelling te koppelen is aan doelbinding binnen de Gemma processen.

| ID | 013 | 015-02 | 015-03.1 | 015-03.2 | 015-03.3 | 015-03.4 | 015-04 | 015-05 | BMI | UC | 025 | AB | BIO | MA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **ID01** OPA | ○ | ○ | ● | ○ | | ○ | ○ | | | | | | | |
| **ID02** TBA | | ○ | ● | ○ | | ○ | ○ | | | ○ | | | | |
| ID03 Digitalisering bestaand | ○ | | ○ | | | | | | | | | | ● | |
| ID04 VTH voeden met gebouwinformatie | | | ○ | | | | | | | ● | | | ○ | ○ |
| ID05 VTH-proces ondersteunen | | ● | ● | | | | | | | ● | ○ | | | |
| ID06 Betrekken omgeving | ● | | | ○ | ● | | | ○ | | | | | | |
| ID07 Duurzaamheid | | | ○ | | | | | | | | | | | ● |
| ID08 Overdracht en archief | | | | | | | | ○ | ● | | | | ● | |
| ID09 Circulariteit | ○ | | | | | | | | | | | | ○ | ● |
| ID10 Panddelen en verblijfsobjecten | | ○ | ● | | | | | | | | | ● | | |
| ID11 Welstand | ○ | | ● | | | | | | | | | | | |
| ID12 BAG bijwerken | | | | | | | | ○ | | | | ● | ● | |

### Toelichting per doelstelling

| ID | Primaire processtap / activiteit (GEMMA) | Toelichting |
|---|---|---|
| ID01 | 015-03.1 *Controleren indieningsvereisten*, *Uitvoeren inhoudelijke toetsing* | Toetsing aan het omgevingsplan (checks #1–#6). Indicatief al in 013 bij het vooroverleg |
| ID02 | 015-03.1 *Controleren indieningsvereisten*, *Uitvoeren inhoudelijke toetsing* | Toetsing aan het Bbl (checks #7–#17), inclusief herhaling van ID01. Later bruikbaar bij *Uitvoeren controle* |
| ID03 | BIO; 013 | Een digitaal model van de bestaande situatie als basis voor verbouw en objectinformatie |
| ID04 | UC; BIO | Hoeveelheden en materialen uit het model als voorbereiding op controles en analyses |
| ID05 | 015-02 *Registreren*, *Toewijzen hoofdbehandelaar*; 015-03.1 *Betrekken interne adviseurs / ketenpartners*; UC | Model en BCF-issues als gedeelde bron voor behandelaars, adviseurs en toezichthouders |
| ID06 | 013; 015-03.3 *Ter inzage leggen ontwerpbesluit*; 015-03.2 *Verzamelen zienswijzen* | Visualisatie voor participatie en zienswijzen |
| ID07 | MA; 015-03.1 | Duurzaamheidsprestaties monitoren (MPG zelf zit in ID02) |
| ID08 | BMI (o.a. gereedmelding / dossier bevoegd gezag); BIO; 015-05 *Administratief afronden* | Opleverdossier en archivering |
| ID09 | MA; BIO | Restwaarde en circulariteit op objectniveau |
| ID10 | 015-03.1 *Controleren gerelateerde verzoeken*, *Uitvoeren inhoudelijke toetsing*; AB | Ruimten koppelen aan pand en verblijfsobject (BAG-ID) |
| ID11 | 015-03.1 *Betrekken interne adviseurs*, *Opstellen advies* (welstandscommissie); 013 | Welstandstoetsing met het model |
| ID12 | AB; BIO; 015-05 | Terugleveren van gebouw- en verblijfsobjectgegevens aan de BAG |

<p class="note">De koppeling van ID01 en ID02 aan 015-03 volgt uit de BM13-scope. De koppelingen van ID03–ID12 zijn een eerste voorstel en worden bij de uitwerking van die doelstellingen getoetst met VNG (GEMMA-beheer) en de pilotgemeenten.</p>

## De 17 checks

[Klik hier voor een link naar de uitgewerkte checks](https://vng.nl/artikelen/digitale-vergunningverlening-met-bim-building-information-modeling)

| # | Check | Activiteit | ID |
|---|---|---|---|
| 1 | Gebruiksfunctie komt overeen met bestemming | OPA | ID01 |
| 2 | Maximale bouwhoogte | OPA | ID01 |
| 3 | Maximaal bebouwingspercentage | OPA | ID01 |
| 4 | Gebruiksfunctie/bestemming beperkt tot x bouwlagen | OPA | ID01 |
| 5 | Beroep aan huis: maximaal 50% gebruiksoppervlakte | OPA | ID01 |
| 6 | Maximum aantal bouwlagen | OPA | ID01 |
| o | NOG UIT TE WERKEN HIER ONDER| NTB | NTB |
| 7 | Brandcompartimenten | TBA | ID02 |
| 8 | Brandwerendheid | TBA | ID02 |
| 9 | Vrije breedte | TBA | ID02 |
| 10 | Hoogteverschil | TBA | ID02 |
| 11 | Rc-waarde | TBA | ID02 |
| 12 | U-waarde | TBA | ID02 |
| 13 | MPG | TBA | ID02 |
| 14 | Vluchtwegen | TBA | ID02 |
| 15 | Loopafstand | TBA | ID02 |
| 16 | Vluchtbreedte | TBA | ID02 |
| 17 | Daglicht | TBA | ID02 |

## Scheiding tussen informatiemanagement en informatieproductie

| Laag | Wie | Artefacten |
|---|---|---|
| Informatiemanagement (sturen) | Gemeente (bevoegd gezag) en richtlijnhouder | Deze ILS, acceptatiecriteria, besluit over ontvankelijkheid |
| Informatieproductie (leveren) | Aanvrager en diens modelleurs | Informatiemodel (IFC), (evt. BIM-uitvoeringsplan), validatierapport |

Het modelleren ligt dus bij de aanvrager. De gemeente stelt eisen en toetst.
