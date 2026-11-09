# Applicatielaag {#applicatielaag}

<p class="leesniveau bestuurlijk">Bestuurlijk</p>

De applicatielaag beschrijft **welke applicaties en voorzieningen** de processen ondersteunen, **welke transacties** er tussen plaatsvinden en **welke open interfacestandaarden** daarvoor verplicht zijn of waarmee rekening wordt gehouden.

<div class="in-het-kort laag-applicatie">

**In het kort**

- Tien soorten applicaties vormen samen de keten: van **BIM-authoringsoftware** bij de markt tot **VTH-zaaksystemen** bij gemeenten en het **DSO Omgevingsloket** als landelijke poort.
- **Nieuw** zijn vooral de IDS-validatie- en publicatieservice, de machine readable legislation service en de rule engine.
- Tien transacties verbinden de applicaties, van *indiening* tot *registratie*.
- Koppelingen verlopen via open interfacestandaarden: OGC API's, STTR/STOP-TPOD, REST/JSON, Linked Data, ZGW API's en openCDE.

</div>

## Applicaties en voorzieningen {#applicaties}

<p class="leesniveau tactisch">Tactisch</p>

| Applicatietype | Beschrijving en voorbeelden | Gebruiker (rol) | Positie |
|---|---|---|---|
| BIM-authoringsoftware | Ontwerp- en modelleerprogramma's waarmee architecten, ingenieurs en aannemers hun bouwwerken in 3D modelleren en alle eigenschappen vastleggen. | Indieners (architecten, ingenieurs, aannemers) maken hierin hun ontwerp en exporteren een BIM-model in IFC-formaat voor indiening bij de gemeente. | markt (bestaand) |
| IDS-validatieservice | Service die een BIM/IFC-model controleert tegen de Information Delivery Specification (IDS) om te zien of het voldoet aan de gestelde indieningsvereisten. | Indieners valideren hiermee vóór indiening of hun model compleet is; gemeenten gebruiken het bij ontvangst voor snelle controle. | landelijk of gemeentelijk (nieuw) |
| IDS-publicatieservice | Landelijke voorziening waarin de afgesproken IDS (informatievereisten) wordt gepubliceerd en beschikbaar gesteld aan markt en gemeenten. | Gemeenten publiceren hierin hun vereisten; indieners raadplegen deze om hun modellen conform aan te leveren. | landelijk (nieuw) |
| GIS-service (geo-informatievoorziening) | Services die geodata leveren of verwerken, bijvoorbeeld voor de positionering van BIM-modellen in hun ruimtelijke context. | Gemeenten raadplegen basisregistraties (BAG, BGT, BRK); indieners gebruiken geodatasets om hun ontwerp juist te positioneren; rule engines gebruiken deze contextinformatie bij toetsing. | landelijk (bestaand: PDOK, Kadaster) |
| Machine readable legislation service | Dienst die juridische regels (omgevingsplan, Bbl) in machineleesbare vorm ontsluit, zodat software ze kan toepassen. | Gemeenten en VNG publiceren regels; rule engines gebruiken de regels voor toetsing; indieners krijgen vooraf inzicht in de eisen die voor hun ontwerp gelden. | landelijk (deels bestaand in DSO, deels nieuw) |
| Rule checker / rule engine | Software die BIM-modellen automatisch toetst aan machineleesbare regels en rapporten genereert. | Gemeenten gebruiken de rule engine om aanvragen sneller en consistenter te toetsen; indieners kunnen vooraf een check doen om hun aanvraag te verbeteren. | landelijke proefomgeving en markt (nieuw) |
| Archivering en opslag <span class="buiten-scope">(buiten scope)</span> | Systemen voor duurzame opslag van vergunningdossiers, inclusief BIM-modellen en checkrapporten, conform de Archiefwet. | Gemeenten dragen vergunningdossiers over aan archiefvoorzieningen; archieforganisaties beheren en ontsluiten de gegevens voor lange termijn en hergebruik. | gemeentelijk / Nationaal Archief (bestaand, aan te passen) |
| Zaaksystemen voor vergunningverlening, toezicht en handhaving (VTH) | Zaaksystemen die gemeenten gebruiken voor VTH. | Gemeentelijke medewerkers ontvangen, beoordelen en besluiten op aanvragen en integreren checkresultaten uit landelijke voorzieningen. | gemeentelijk (bestaand, aan te passen) |
| DSO Omgevingsloket | Landelijke voorziening waarmee burgers en bedrijven vergunningaanvragen digitaal indienen en die deze doorstuurt naar het bevoegd gezag. | Indieners dienen hun aanvraag in; gemeenten ontvangen aanvragen via het DSO; burgers kunnen aanvragen raadplegen en volgen. | landelijk (bestaand) |
| Digital twin / visualisatie (optioneel) | Omgevingen waarin BIM-modellen en geo-informatie kunnen worden gevisualiseerd en (eventueel gecombineerd) gebruikt om bedrijfsprocessen te ondersteunen. | Gemeenten gebruiken visualisaties voor participatie en beleidsvorming; burgers zien in begrijpelijke 3D-beelden de impact van plannen; ontwerpers stemmen hun ontwerp beter af op de omgeving. | lokaal / regionaal (optioneel) |

De kolom „positie” is bij de omzetting afgeleid uit de beschrijvingen in PSA v0.4 en geeft aan of een voorziening al bestaat of nieuw moet worden gebouwd of verworven.

<div class="note" title="Digital twin">

„Digital twin” is in deze hoedanigheid een abstract begrip. De betekenis ervan in de context van deze beleidsmaatregel moet nog worden verduidelijkt en uitgewerkt. Zie [[[#beslispunten-en-afwijkingen]]].

</div>

## Transacties {#transacties}

<p class="leesniveau technisch">Technisch</p>

| Nr | Transactie | Berichtomschrijving | Formaat / standaard | Gebruikte service |
|---|---|---|---|---|
| T01 | Indiening vergunningaanvraag | Indiener levert een vergunningaanvraag in met BIM-model (IFC) en metadata (ILS/IDS). | IFC (ISO 16739) [[IFC]], IDS [[IDS]], XML/JSON voor begeleidende aanvraagdata | DSO Omgevingsloket (transport naar het bevoegd gezag) |
| T02 | Validatie aanvraag | IFC-model wordt gecontroleerd tegen een IDS; het resultaat is een validatierapport. | IDS (buildingSMART); validatieresultaat als JSON/XML of als PDF-rapport voor leesbaarheid | IDS-validatieservice (landelijke of gemeentelijke variant) |
| T03 | Publicatie indieningsvereisten | Gemeenten publiceren hun indieningsvereisten (welke gegevens in BIM/IFC verplicht zijn). | IDS (buildingSMART), REST API of Linked Data-endpoint | IDS-publicatieservice (landelijke catalogus) |
| T04 | Ophalen geo-informatie | Gemeente en indiener raadplegen geodata voor locatie en context (percelen, gebouwen, ondergrond, openbare ruimte). | OGC API Features / WMTS [[OGCAPI]], NEN 3610 [[NEN3610]], CityGML/CityJSON [[CITYJSON]] | GIS-service (zoals PDOK, Kadaster, Geonovum) |
| T05 | Ophalen machineleesbare regels | Gemeente en rule engine raadplegen regels uit Bbl en omgevingsplan, vertaald naar toepasbare regels. | STTR [[STTR]], RDF/OWL, SHACL [[SHACL]] | Machine readable legislation service (DSO STTR/TPOD of Linked Data-endpoint) |
| T06 | Automatische toetsing | IFC-model, geodata en regels worden ingevoerd in een rule engine; de output is een toetsingsrapport. | Input: IFC + JSON/RDF voor regels. Output: JSON/XML + PDF-rapport voor gebruikers | Rule checker / rule engine |
| T07 | Communicatie naar indiener en burgers | Terugkoppeling van validatie- en toetsingsrapporten, statusupdates en het besluit over de vergunning. | StUF-zaakgegevens of ZGW API's [[ZGW]]; PDF/A voor het formele besluit | DSO Omgevingsloket (status en besluiten) en gemeentelijke VTH-applicatie (zaakstatus, communicatie) |
| T08 | Archivering vergunningdossier <span class="buiten-scope">(buiten scope)</span> | Overdracht van het complete dossier (aanvraag, BIM-model, rapportages, besluit) aan een archiefvoorziening. | PDF/A (besluiten), IFC (model), METS/CMIS (metadata), NEN-ISO 16175 [[NEN-ISO16175]] / OAIS | Archiverings- en opslagvoorziening (gemeentelijk of Nationaal Archief) |
| T09 | Visualisatie en participatie (optioneel) | Publicatie van BIM/IFC- en geodata in een digital twin of viewer: de burger ziet een 3D-beeld van het bouwplan. | IFC, CityGML/CityJSON, glTF voor 3D-viewers, OGC 3D Tiles | Digital-twinplatform (bijvoorbeeld Tygron, Esri, Bentley iTwin) |
| T10 | Registratie <span class="buiten-scope">(buiten scope)</span> | Afleiden van geometrie en oppervlaktegegevens uit het BIM-model voor actualisatie van basisregistraties. | IFC, CityGML/CityJSON | BAG-mutatieservice, BRK/perceelservices, PDOK-geoservices, zaak-/terugmeldkoppeling |

### Volgorde van de transacties {#volgorde-transacties}

<p class="leesniveau technisch">Technisch</p>

1. **Voorbereiding** — T03 (vereisten publiceren) → T04 en T05 (context en regels ophalen) → optioneel een voorafgaande T06 door de indiener zelf.
2. **Indiening** — T02 (validatie door de indiener) → T01 (indiening via het DSO).
3. **Behandeling** — T02 (validatie bij ontvangst) → T04 + T05 → T06 (automatische toetsing) → handmatige toets in het VTH-systeem. Tijdens de behandeling: T07 (statusupdates) en optioneel T09 (visualisatie, zodat burgers de aanvraag kunnen volgen en zienswijzen kunnen geven).
4. **Afronding** — T07 (besluit en communicatie) → T08 en T10 (buiten scope).

## Interfacestandaarden {#interfacestandaarden}

<p class="leesniveau technisch">Technisch</p>

| Interfacestandaard | Toepassing |
|---|---|
| OGC API's (Features, Tiles, WMTS, WFS) [[OGCAPI]] | Geostandaarden van het Open Geospatial Consortium voor uitwisseling van kaarten en geodata. Interface tussen BIM/vergunningproces en geo-informatie (BAG, BGT, BRO, BRK). |
| STTR / STOP-TPOD (DSO-regelstandaarden) [[STTR]] | Formaten voor publicatie en ontsluiting van juridische en toepasbare regels. Interface voor machineleesbare regelgeving richting rule engines en het DSO. |
| REST/JSON API's (Forum Standaardisatie) [[PTOLU]] | Generieke standaard voor gegevensuitwisseling via webservices. Gebruikt bij koppelingen tussen validatieservices, rule engines, VTH-systemen en landelijke voorzieningen. |
| Linked Data-standaarden (RDF, SPARQL, SHACL, SKOS) [[RDF]] [[SPARQL]] [[SHACL]] [[SKOS]] | W3C-standaarden voor semantische gegevensuitwisseling en validatie. Interface voor het ontsluiten en bevragen van regels, begrippen en semantische koppelingen tussen BIM en regelgeving. |
| ZGW API's / StUF (zaakgericht werken) [[ZGW]] | Gemeentelijke standaarden voor zaak- en documentuitwisseling. Interface tussen DSO, gemeentelijke VTH-applicaties en archivering van besluiten. |
| openCDE API (buildingSMART International) [[OPENCDE]] | Een set open API-specificaties van buildingSMART voor Common Data Environments (CDE's), bedoeld om de uitwisseling van BIM- en projectdata tussen verschillende platforms te standaardiseren. |

## Ontwerpkeuzes voor de solution architectuur {#applicatie-ontwerpkeuzes}

<p class="leesniveau technisch">Technisch</p>

De PSA beschrijft niet hoe de voorzieningen worden gebouwd. Wel volgen uit deze laag de vragen die de solution architectuur moet beantwoorden:

- **Eén of meer validatieservices?** Een landelijke IDS-validatieservice naast gemeentelijke varianten vraagt om afspraken over versiebeheer van IDS-bestanden en over gelijkwaardigheid van validatieresultaten.
- **Waar draait de rule engine?** Landelijk (proef- en productieomgeving), bij de gemeente, of als marktdienst — en hoe wordt dezelfde uitkomst gegarandeerd bij dezelfde invoer?
- **Hoe komen regels bij de rule engine?** Via STTR uit het DSO, via een Linked Data-endpoint, of beide — en wie beheert de afgeleide rulesets?
- **Hoe landt een toetsingsresultaat in het zaaksysteem?** Via ZGW API's als document, als gestructureerde gegevens, of beide.
- **Welke rol krijgt openCDE?** Als uitwisselingsinterface tussen ontwerpomgeving en validatie- of indieningsvoorziening.
