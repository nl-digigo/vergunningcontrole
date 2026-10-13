# Organisatielaag {#organisatielaag}

<p class="leesniveau bestuurlijk">Bestuurlijk</p>

De organisatielaag beschrijft **wie** er betrokken is en **welke processen** veranderen: de waardestromen in de vergunningverlening, de belemmeringen die daarin spelen, en de keten-, bedrijfs- en procesrollen volgens GEBORA.

<div class="in-het-kort laag-organisatie">

**In het kort**

- De waardestroom vergunningverlening gaat van **documentgedreven naar datagedreven**.
- Zes processen staan in de scope: interpretatie en voorbereiding, ontwerp, indiening, validatie, toetsing en communicatie. Archivering en registratie zijn beschreven, maar vallen **buiten de scope**.
- De grootste verschuiving: **validatie gebeurt vooraf door de indiener** en **toetsing wordt grotendeels geautomatiseerd**. De vergunningverlener houdt het laatste woord.
- Tien actoren zijn betrokken, van vergunningaanvrager en bevoegd gezag tot regelverstrekker, dataverstrekker en softwareleverancier.

</div>

## Waardestromen en processen {#waardestromen}

<p class="leesniveau tactisch">Tactisch</p>

Per proces: de belemmeringen van nu, wat BM13 verandert, en de impact.

| Proces | Belemmering nu | Met BM13 | Impact |
|---|---|---|---|
| Interpretatie en voorbereiding | Ontwerpers en ontwikkelaars moeten zelf regelgeving opzoeken, interpreteren en vertalen naar hun ontwerp; tijdrovend en foutgevoelig. Vaak is onduidelijk welke regels precies gelden op een locatie, wat veel correctierondes oplevert. | Ontwerpers krijgen via digitale diensten direct inzicht in toepasbare, machineleesbare regels die automatisch geraadpleegd kunnen worden tijdens het modelleren. | Snellere voorbereiding, minder kans op fouten, ontwerpen sluiten vanaf de start beter aan op de vereisten. |
| Ontwerp | Architecten en ontwikkelaars maken BIM-modellen met alle relevante gegevens, maar die worden vaak vertaald naar 2D-documenten voor de vergunning: dubbel werk. | Het BIM-model wordt rechtstreeks gebruikt als basis voor de aanvraag. | Rijkere, consistentere en herbruikbare informatie. |
| Indiening | Aanvragen worden vaak incompleet en in verschillende formaten ingediend, wat veel terugkoppeling en vertraging geeft. | Indieners dienen digitaal in via een BIM/IFC-model met bijbehorende metadata en georeferentie. | Uniforme, complete en direct verwerkbare aanvraag. |
| Validatie | Validatie ligt vooral bij de gemeente: aanvragen worden gecontroleerd en vaak teruggestuurd om aan te vullen. | Indieners controleren hun BIM-model vooraf via een landelijke IDS-validatieservice. | Veel minder onvolledige aanvragen; de gemeentelijke beoordeling start pas als de gegevens compleet zijn. |
| Toetsing | Toetsing gebeurt handmatig en is afhankelijk van individuele interpretatie; traag en inconsistent. | Regels uit het Bbl en het omgevingsplan worden machineleesbaar gemaakt en automatisch toegepast via een rule engine. | Snellere, consistentere en juridisch beter houdbare toetsing. |
| Communicatie | Communicatie tussen gemeenten, indieners en burgers verloopt versnipperd en vaak reactief. | Procesresultaten (validatierapporten, toetsingsuitkomsten) worden digitaal en transparant gedeeld; burgers krijgen toegang tot begrijpelijke 3D-visualisaties. | Meer vertrouwen en betere participatie. |
| Archivering <span class="buiten-scope">(buiten scope)</span> | Vergunningdossiers worden vooral als PDF en losse documenten opgeslagen, zonder koppeling met het oorspronkelijke BIM-model. | BIM-modellen en validatie- en toetsingsrapportages worden duurzaam digitaal bewaard conform de Archiefwet. | Herbruikbaar voor toezicht, handhaving en basisregistraties; langdurige toegankelijkheid geborgd. |
| Registratie <span class="buiten-scope">(buiten scope)</span> | Na vergunningverlening werkt de gemeente de basisregistraties (BAG, BGT, BRK) bij met gegevens over het gerealiseerde bouwwerk. | Dit proces kan deels worden geautomatiseerd door informatie uit het goedgekeurde BIM-model direct te hergebruiken. | Actuelere en consistentere registratie. |

### Wat verschuift er in verantwoordelijkheid? {#verschuiving}

<p class="leesniveau bestuurlijk">Bestuurlijk</p>

De verandering is meer dan een digitalisering van het bestaande proces. Twee verschuivingen vragen om bestuurlijke aandacht:

1. **Van controle achteraf naar kwaliteit vooraf.** De indiener wordt verantwoordelijk voor een aanvraag die aantoonbaar voldoet aan de indieningsvereisten (principe AP03). Dat vraagt om een betrouwbare, openbaar beschikbare validatievoorziening en heldere afspraken over de juridische status van een validatierapport.
2. **Van menselijke interpretatie naar vastgelegde regels.** Als regels machineleesbaar worden, verschuift de interpretatie van de vergunningverlener naar het moment waarop regels worden vertaald. Wie die vertaling doet, wie haar vaststelt en wie aansprakelijk is bij fouten, moet worden belegd.

## Actoren {#actoren}

<p class="leesniveau tactisch">Tactisch</p>

De actoren zijn ontleend aan het standaard rollenmodel van GEBORA. Per actor: de use case, de informatiebehoefte en de informatiestromen.

| Actor | Use case | Informatiebehoefte | Informatiestromen |
|---|---|---|---|
| **Vergunningaanvrager** (bijv. ontwikkelaar, architect, ingenieur) | Indienen van een vergunningaanvraag voor een bouwwerk, inclusief ontwerp en technische gegevens. | Toegang tot actuele regels (omgevingsplan, Bbl) in machineleesbare vorm; specificaties van de aan te leveren gegevens (ILS/IDS); feedback over volledigheid en correctheid van de aanvraag (validatierapport). | Levert BIM/IFC-model + metadata aan via het DSO. Ontvangt regels, validatie-uitkomsten en toetsingsrapportages terug. |
| **Bevoegd gezag** (bijv. gemeente, VTH-afdeling) | Toetsen en besluiten over de vergunningaanvraag. | Complete en gevalideerde BIM-modellen (IFC); geo-informatie (BAG, BGT, ondergrond, openbare ruimte); automatische toetsresultaten van de rule engine; participatie- en bezwaarinformatie van burgers. | Ontvangt IFC-modellen en validatierapporten via het DSO/de proefomgeving. Vraagt en verwerkt geo-informatie uit landelijke en gemeentelijke bronnen. Besluit (vergunning) gaat terug naar de indiener en wordt ontsloten voor burgers. |
| **Regelhouder** (bijv. gemeente voor het omgevingsplan, Rijk/BZK voor het Bbl) | Vaststellen en beheren van (juridische) regels. | Afsprakenstelsels (ILS, IDS, BIM/IFC, geostandaarden); input uit pilots voor doorontwikkeling. | Stelt standaarden beschikbaar (bijv. via Forum Standaardisatie/digiGO). Levert geo-informatie via PDOK/Kadaster aan gemeenten en indieners. |
| **Regelverstrekker / publicatievoorziening** (bijv. DSO) | Publiceren en ontsluiten van (toepasbare) regels als dienst. | Actuele, gestructureerde juridische en toepasbare regels van regelhouders (zoals gemeenten en BZK) om deze digitaal beschikbaar te stellen. | Ontvangt regels in STOP/TPOD- en STTR-formaat van bevoegde gezagen en publiceert deze als machineleesbare diensten voor gemeenten, softwareleveranciers en aanvragers. |
| **Registratiehouder (bronhouder)** (BAG: gemeenten; BGT: meerdere bronhouders, o.a. gemeenten en waterschappen; BRK: Kadaster als registrerende instantie) | Creëren, aanleveren, registreren en beheren van authentieke brondata. | Actuele informatie over verleende en gewijzigde vergunningen om object- en locatiegegevens in de basisregistraties (BAG, BGT, BRK) te actualiseren. | Ontvangt mutaties en bouwobjectgegevens van gemeenten en levert geactualiseerde registraties terug aan landelijke voorzieningen en dataverstrekkers. |
| **Dataverstrekker** (landelijke voorziening, bijv. PDOK) | Distribueren en openbaar maken van geodatasets (geen bronhouder). | Gestandaardiseerde brondata en metadata van registratiehouders om betrouwbare en actuele geodatasets te kunnen publiceren. | Ontvangt data uit authentieke registraties en stelt die via OGC API's en webservices beschikbaar aan gemeenten, rule engines en ontwerpers. |
| **Standaardbeheerder** (bedrijfsrol; bijv. Geonovum) | Beheren en publiceren van (geo)standaarden en profielen; geen regels of registraties. | Praktijkfeedback over het gebruik en de toepasbaarheid van standaarden (zoals IFC, IDS, NEN 3610) in de pilotomgevingen. | Ontvangt terugkoppeling van gemeenten, leveranciers en indieners en publiceert geactualiseerde standaarddocumentatie, profielen en richtlijnen voor landelijk gebruik. |
| **Rule-engine- / validatieserviceprovider** (softwareleverancier / datadienstaanbieder, DSP volgens DSGO; bijv. VCS Rotterdam, softwareleveranciers) | Automatisch toetsen van BIM-modellen aan regels. | Machineleesbare regels (omgevingsplan, Bbl); IFC-modellen uit het indieningsproces. | Ontvangt IFC-modellen en regels. Geeft validatierapporten en toetsingsresultaten terug aan gemeente en indiener. |
| **Burgers / omgeving** | Inzien van vergunningaanvragen en eventueel bezwaar maken. | Toegang tot vergunningbesluiten en visualisaties (2D/3D); duidelijke communicatie over status en gevolgen van vergunningen. | Gemeente ontsluit vergunning en visualisatie via het DSO of een eigen kanaal. Burgers leveren zienswijzen of bezwaren terug aan de gemeente. |
| **Registrerende instantie / basisregistratiehouder** (bijv. Kadaster, Nationaal Archief) | Duurzaam opslaan en hergebruiken van vergunningdata en modellen. | Toegang tot complete vergunningdossiers, inclusief BIM/IFC; metadata voor duurzame ontsluiting en koppeling met basisregistraties. | Gemeente levert dossiers en BIM-modellen aan de archiefvoorziening. Het archief ontsluit gegevens voor toezicht, handhaving en beleid. |

## Actoren en processen {#actoren-processen}

<p class="leesniveau tactisch">Tactisch</p>

Welke actor is betrokken bij welk proces? (● = relatie genoemd in PSA v0.4)

| Actor | Interpretatie | Ontwerp | Indiening | Validatie | Toetsing | Communicatie | Archivering* | Toezicht* |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Vergunningaanvrager | ● | ● | ● | ● | | | | |
| Bevoegd gezag | | | | ● | ● | ● | ● | |
| Regelhouder | | | | | | | | |
| Regelverstrekker / publicatievoorziening | ● | ● | | ● | ● | | | |
| Registratiehouder | | | | | ● | ● | ● | |
| Dataverstrekker | ● | | | ● | ● | | | |
| Standaardbeheerder | | | | ● | ● | ● | ● | |
| Rule-engine- / validatieserviceprovider | | | | ● | ● | | | |
| Burgers / omgeving | | | | | | ● | | |
| Registrerende instantie | | | | | | | ● | ● |

\* buiten de scope van deze beleidsmaatregel. De markeringen komen uit de kolom „relatie met waardestromen” in PSA v0.4. Voor de regelhouder noemt v0.4 geen relatie; dat moet nog worden aangevuld.

## Organisatorische impact {#organisatorische-impact}

<p class="leesniveau tactisch">Tactisch</p>

| Voor | Impact | Aandachtspunt |
|---|---|---|
| VTH-afdelingen | Werk verschuift van controleren naar beoordelen van uitzonderingen en complexe onderdelen | Opleiding in het lezen van BIM-modellen en toetsingsrapporten; herijking van werkprocessen en mandaten |
| Gemeentelijke regelhouders | Omgevingsplanregels moeten machineleesbaar worden opgesteld | Capaciteit en kennis voor het opstellen van toepasbare regels |
| Indieners | Meer verantwoordelijkheid vooraf; minder correctierondes | Beschikbaarheid van validatievoorzieningen en duidelijke ILS/IDS |
| Landelijke partijen | Nieuwe beheerrol voor afsprakenstelsels en voorzieningen | Governance, financiering en beheer volgens BOMOS |
