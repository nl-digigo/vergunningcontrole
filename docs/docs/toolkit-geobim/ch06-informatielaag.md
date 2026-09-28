# Informatielaag {#informatielaag}

<p class="leesniveau bestuurlijk">Bestuurlijk</p>

De informatielaag beschrijft **welke informatie** in de vergunningketen centraal staat (de bedrijfsobjecten volgens GEBORA) en **welke informatiestandaarden** nodig zijn om die informatie eenduidig uit te wisselen.

<div class="in-het-kort laag-informatie">

**In het kort**

- Zeven bedrijfsobjecten staan centraal. De belangrijkste verschuiving: de **vergunningsaanvraag** is geen PDF met 2D-tekeningen meer, maar een **BIM/IFC-bestand met metadata**.
- **IFC** is het kernbestand, **IDS** legt machineleesbaar vast wat er in dat bestand moet zitten, en de **ILS** legt de afspraken vast over welke informatie op welk moment wordt geleverd.
- **Regels** (Bbl, omgevingsplan) worden machineleesbaar en met Linked Data gekoppeld aan BIM-objecten; **geo-informatie** uit de basisregistraties zorgt voor de juiste plaatsing en context.
- Er gelden algemene overheidsstandaarden (beveiliging, privacy, toegankelijkheid, archivering) en specifieke bouwstandaarden.

</div>

## Bedrijfsobjecten {#bedrijfsobjecten}

<p class="leesniveau tactisch">Tactisch</p>

| Bedrijfsobject | Definitie en toepassing in deze architectuur |
|---|---|
| <dfn data-lt="vergunningsaanvragen">Vergunningsaanvraag</dfn> | Het formele verzoek van een indiener aan de gemeente om toestemming voor het bouwen. Dit is het centrale bedrijfsobject in de waardestroom. Het wordt niet langer als PDF of 2D-tekening ingediend, maar als digitaal BIM/IFC-bestand met bijbehorende metadata. |
| Bouwwerk / ontwerp (BIM-informatie) | Het object waarover de vergunning gaat, inclusief ontwerp, constructie en gebruiksfunctie. Het wordt gemodelleerd in een BIM (IFC), waarin geometrie en eigenschappen zijn vastgelegd, en kan direct worden gebruikt voor toetsing, toezicht en basisregistraties. |
| <dfn data-lt="toepasbare regels">Omgevingsregel / toepasbare regel</dfn> | Juridische regels uit het Bbl en het omgevingsplan, vertaald naar toepasbare (machineleesbare) regels. Dit vormt de input voor de rule engine om automatisch te toetsen of een ontwerp voldoet aan wet- en regelgeving. |
| Geo-object / locatie | Objecten uit basisregistraties zoals BAG (gebouwen), BGT (topografie), BRO (ondergrond) en BRK (kadastrale gegevens). Nodig voor de juiste georeferentie van een BIM-model en de ruimtelijke context bij vergunningverlening. |
| <dfn data-lt="validatierapport|toetsingsresultaat">Validatierapport / toetsingsresultaat</dfn> | Resultaat van validatie (IDS-check) of toetsing door een rule engine. Deze rapportage gaat terug naar indieners en gemeenten als bewijs of de aanvraag compleet is en voldoet aan regels. |
| Vergunningbesluit | Het besluit van de gemeente om de vergunning te verlenen of te weigeren. Dit is het eindproduct van het proces, dat samen met BIM-modellen en rapportages wordt gearchiveerd en ontsloten. |
| Vergunningdossier / archiefstuk | Het geheel van documenten, BIM-modellen en besluiten dat bij een vergunningaanvraag hoort. Moet duurzaam worden opgeslagen conform de Archiefwet en bruikbaar blijven voor toezicht, handhaving en digital twins. |

### Samenhang tussen de bedrijfsobjecten {#samenhang-bedrijfsobjecten}

<p class="leesniveau technisch">Technisch</p>

Een vergunningsaanvraag **bevat** een bouwwerkontwerp (BIM-informatie) en **verwijst naar** een locatie (geo-objecten). Het ontwerp wordt **gevalideerd** tegen een IDS en **getoetst** aan toepasbare regels; dat levert een validatierapport en een toetsingsresultaat op. Op basis daarvan neemt het bevoegd gezag een vergunningbesluit. Aanvraag, model, rapportages en besluit vormen samen het vergunningdossier.

| Van | Relatie | Naar | Kardinaliteit (voorstel) |
|---|---|---|---|
| Vergunningsaanvraag | bevat | Bouwwerk / ontwerp (BIM-informatie) | 1 — 1..* |
| Vergunningsaanvraag | heeft betrekking op | Geo-object / locatie | 1 — 1..* |
| Bouwwerk / ontwerp | wordt gevalideerd met | IDS (indieningsvereisten) | * — 1..* |
| Bouwwerk / ontwerp | wordt getoetst aan | Omgevingsregel / toepasbare regel | * — * |
| Validatie of toetsing | levert op | Validatierapport / toetsingsresultaat | 1 — 1 |
| Vergunningsaanvraag | leidt tot | Vergunningbesluit | 1 — 0..1 |
| Vergunningdossier | omvat | aanvraag, model, rapportages, besluit | 1 — * |

De kardinaliteiten zijn bij de omzetting als voorstel toegevoegd en moeten in de informatiemodellering (NEN 2660) worden bevestigd.

## Informatiestandaarden — algemeen {#informatiestandaarden-algemeen}

<p class="leesniveau technisch">Technisch</p>

Een eerste indicatie van de (functionele) informatiestandaarden die relevant zijn, welke verplicht zijn en met welke overige standaarden rekening wordt gehouden.

| Informatiestandaard | Toepassing in dit project |
|---|---|
| NEN-ISO/IEC 27001 en 27002 (informatiebeveiliging) [[ISO27001]] | Normenkader voor beveiligingsmaatregelen en risicomanagement. Verplicht voor alle overheden (BIO). Borgt vertrouwelijkheid, integriteit en beschikbaarheid van vergunningdata. |
| AVG / GDPR — dataminimalisatie en dataportabiliteit [[AVG]] | Privacywetgeving, vertaald naar gegevensuitwisseling en opslag. Persoonsgegevens in vergunningaanvragen (bijv. NAW-gegevens van de aanvrager) moeten conform de AVG worden verwerkt. |
| Digikoppeling [[DIGIKOPPELING]] | Standaard voor veilige en betrouwbare gegevensuitwisseling tussen overheden. Nodig voor koppelingen tussen gemeenten, het DSO en landelijke voorzieningen (DSGO). |
| Digilevering | Uniforme standaard voor het aanleveren van gegevens uit basisregistraties. Voor BM13 relevant bij het gebruik van BAG, BGT, BRK of BRO in het vergunningproces. |
| Digitoegankelijk (WCAG 2.1) [[WCAG21]] | Richtlijnen voor digitale toegankelijkheid van informatie voor burgers. Publieke ontsluiting van vergunningen en 3D-visualisaties moet aan de toegankelijkheidsrichtlijnen voldoen. |
| eIDAS en eHerkenning [[EIDAS]] | Europese en Nederlandse standaarden voor digitale identificatie en authenticatie. Indieners loggen in via eHerkenning of DigiD; dat borgt veilige en erkende toegang. |
| Digitaal archiveren (NEN-ISO 16175, PDF/A, OAIS-model) [[NEN-ISO16175]] | Normen en best practices voor duurzaam digitaal archiveren. Vergunningdossiers, inclusief BIM/IFC, moeten duurzaam opgeslagen en toegankelijk blijven. |
| Linked Data (RDF, SPARQL, OWL, SHACL) [[RDF]] [[SPARQL]] [[OWL2]] [[SHACL]] | Generieke webstandaarden voor semantische gegevensuitwisseling. Gebruikt voor machineleesbare regelgeving en de koppeling met het DSO en rule engines. |
| OGC API's / INSPIRE [[OGCAPI]] [[INSPIRE]] | Standaarden voor geodata-uitwisseling, verplicht voor EU-lidstaten. Voor de koppeling tussen BIM en geocontext (plaatsing bouwwerk, openbare ruimte). |
| Forum Standaardisatie — pas toe of leg uit [[PTOLU]] | Nederlandse lijst van verplichte open standaarden (bijv. REST, JSON, TLS, SAML, XML). BM13 moet hieraan voldoen, tenzij gemotiveerd wordt afgeweken. |

## Informatiestandaarden — bouw en geo {#informatiestandaarden-bouw}

<p class="leesniveau technisch">Technisch</p>

| Informatiestandaard | Toepassing in dit project |
|---|---|
| IFC — Industry Foundation Classes (ISO 16739, buildingSMART) [[IFC]] | Open BIM-standaard voor het uitwisselen van bouwwerkinformatie. Het kernbestand waarin indieners hun ontwerp (geometrie, eigenschappen, relaties) aanleveren bij de vergunningaanvraag; basis voor validatie en toetsing. |
| IDS — Information Delivery Specification (buildingSMART) [[IDS]] | Specificatie voor het controleren van de inhoud van IFC-modellen op vooraf vastgelegde informatievereisten. Gebruikt om te checken of een aangeleverd BIM-model voldoet aan de indieningsvereisten van gemeenten (volledigheid). |
| ILS — Informatieleveringsspecificatie (diverse Nederlandse specificaties) | Nederlandse afspraken over welke informatie op welk moment moet worden uitgewisseld. Vormt samen met IDS de basis voor landelijke afspraken over welke BIM-informatie verplicht is voor vergunningverlening. Voorbeelden: miniGIM, ILS Ruimten, miniBIM, ILS O&E. |
| BIM basis ILS [[BIMBASISILS]] | Praktische, breed gedragen Nederlandse invulling van de ILS. Geeft concrete handvatten voor welke attributen en objectinformatie minimaal moeten worden meegeleverd bij vergunningaanvragen. |
| NL-SfB en ETIM-classificaties | Systemen voor het classificeren van bouwdelen, materialen en producten. Ondersteunen een eenduidige taal tussen markt en gemeenten bij het aanleveren van gegevens in BIM-modellen. |
| CityGML / CityJSON (OGC-standaarden) [[CITYJSON]] | Standaarden voor 3D-stadsmodellen en uitwisseling van geo-informatie. Nodig om BIM-modellen correct te positioneren in hun ruimtelijke context (koppeling met BAG, BGT en ondergrond). |
| BIM–geoconversie (BIMGeo) | Nederlandse afspraken over transformatie tussen BIM- en geostandaarden. Belangrijk voor het juist koppelen van het bouwwerk (BIM) aan geo-objecten (BAG, BGT) bij vergunningverlening. |
| DSO toepasbare regels (STTR, STOP/TPOD) [[STTR]] | Formaten en standaarden voor het publiceren van juridische en toepasbare regels binnen de Omgevingswet. Maken juridische regels uit het Bbl en omgevingsplannen machineleesbaar en toepasbaar in een rule engine. |
| NEN 2660 (semantische norm informatie gebouwde omgeving) [[NEN2660]] | Nederlandse norm voor semantische interoperabiliteit in de bouw. Geeft de basis voor eenduidige definities van objecten en attributen; essentieel voor automatische toetsing en gegevensuitwisseling. |
| NEN 3610 — Basismodel Geo-informatie [[NEN3610]] | Het Nederlandse basismodel voor geo-informatie (BAG, BGT, BRK, BRO enzovoort). BM13 moet NEN 3610 volgen bij het opstellen van afspraken over het combineren van BIM en geo, zodat geo-informatie eenduidig kan worden ontsloten en hergebruikt. |
| mvdXML — Model View Definition XML (buildingSMART) [[MVDXML]] | Specificeert welke subsets van IFC-data nodig zijn voor een bepaalde use case. Kan worden gebruikt om alleen de relevante data uit een BIM-model te filteren voor vergunningverlening (bijv. oppervlakten, functies, brandveiligheidsinformatie). |

<div class="issue" title="Verplichte en aanbevolen standaarden onderscheiden">

In PSA v0.4 is nog niet per standaard aangegeven of die **verplicht** is (bijvoorbeeld via de lijst „pas toe of leg uit”, wetgeving of BIO) of **aanbevolen**. Dat onderscheid is nodig voor aanbesteding en voor softwareleveranciers. Voorstel: een kolom „status” toevoegen en per standaard de bron van de verplichting vermelden.

</div>

## Van wet naar check: de informatieketen {#informatieketen}

<p class="leesniveau technisch">Technisch</p>

De informatielaag verbindt drie ketens die in de rule engine samenkomen:

1. **BIM-keten** — de ILS beschrijft functioneel welke informatie nodig is; de IDS maakt dat machineleesbaar; het IFC-model bevat de informatie; de IDS-validatieservice toetst het model aan de IDS en levert een validatierapport.
2. **Geo-keten** — geo-objecten uit de basisregistraties (NEN 3610) worden via OGC API's ontsloten; via BIM–geo-afspraken (CityGML/CityJSON, georeferentie in IFC) wordt het model op de juiste plek in zijn omgeving gepositioneerd.
3. **Regelketen** — juridische regels (Bbl, omgevingsplan) worden als toepasbare regels (STTR) of als Linked Data (RDF/OWL) vastgelegd; daaruit worden rulesets afgeleid, bijvoorbeeld als SHACL-shapes of SPARQL-queries, die de rule engine toepast op het (verrijkte) BIM-model.

Een eenduidige begrippenlaag (NEN 2660, classificaties als NL-SfB en ETIM) zorgt dat de termen in regels, IDS en IFC-model naar hetzelfde verwijzen. Zonder die semantische koppeling kan een regel als „de vrije hoogte van een verblijfsruimte” niet betrouwbaar automatisch worden getoetst.

<div class="note" title="Relatie met de checks">

De uitwerking van de afzonderlijke checks — data-eisen per check, pseudocode, referentie-encoding — gebeurt in de checkdocumentatie van beleidsmaatregel 13. Deze PSA legt alleen het kader vast waarbinnen die uitwerking plaatsvindt.

</div>
