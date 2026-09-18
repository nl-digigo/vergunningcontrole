# Infrastructuurlaag (netwerk) {#infrastructuurlaag}

<p class="leesniveau bestuurlijk">Bestuurlijk</p>

De infrastructuurlaag beschrijft de **informatie-infrastructuur** die nodig is: de centrale (markt)voorzieningen en stelsels, en de **technische standaarden** die verplicht zijn of waarmee rekening wordt gehouden. In het overzicht van NORA/GEBORA heet dit de netwerklaag.

<div class="in-het-kort laag-infra">

**In het kort**

- BM13 bouwt voort op **bestaande stelsels**: het DSO, het DSGO, de basisregistraties en de gemeentelijke VTH-systemen.
- **Nieuw** is een landelijke **proef- en productieomgeving** voor validatie en rule-checking. Wie die beheert (VNG, digiGO of een andere partij) is nog een open vraag.
- De infrastructuur werkt **federatief** (*publish–find–bind*): data blijft bij de bron en wordt via beveiligde API's gedeeld.
- Beveiliging volgt BIO/ISO 27001; toegang loopt via IAM (eHerkenning, DigiD, eIDAS); verbindingen via TLS en OAuth 2.0.
- Gemeenten en marktpartijen kunnen **gefaseerd aansluiten** via SaaS-koppelingen.

</div>

## Voorzieningen en stelsels {#voorzieningen}

<p class="leesniveau tactisch">Tactisch</p>

| Voorziening / stelsel | Toepassing | Status |
|---|---|---|
| DSO — Digitaal Stelsel Omgevingswet | Landelijke voorziening voor het indienen, routeren en publiceren van omgevingsvergunningen. Fungeert als poort tussen indieners en gemeenten en verwerkt aanvragen, regels en besluiten. | bestaand |
| DSGO — Digitaal Stelsel Gebouwde Omgeving [[DSGO]] | Federatief afsprakenstelsel voor veilige en gestandaardiseerde datadeling in de bouw- en vastgoedketen. Bevat kaders voor API's, semantiek en governance; basis voor BIM- en regeluitwisseling. | bestaand |
| IAM — Identity & Access Management (autorisatiestelsel) | Stelsel voor authenticatie, autorisatie en toegangsbeheer via eIDAS, DigiD en eHerkenning. Regelt veilige toegang voor indieners, gemeenten en ketenpartners tot landelijke en lokale voorzieningen. | bestaand, aan te sluiten |
| Procesmonitoring- en loggingservice | Generieke voorziening voor audittrail, prestatiemeting en foutdetectie in de keten. Bewaakt transacties (aanvraag, validatie, toetsing) en logt wie wat wanneer heeft gedaan; essentieel voor verantwoording en AVG-compliance. | nieuw of te hergebruiken |
| Digital approval- en signatureservice | Diensten voor digitale ondertekening en goedkeuring van besluiten, gebaseerd op de eIDAS-verordening. Ondersteunt formele besluitvorming bij gemeenten en zorgt dat digitale vergunningen juridisch geldig zijn. | mogelijk extern |
| Geovoorzieningen (PDOK, Kadaster, Geonovum) | Centrale geodataplatforms met toegang tot basisregistraties (BAG, BGT, BRK, BRO). Leveren geocontext voor vergunningaanvragen en toetsing; koppeling via OGC API's en NEN 3610. | bestaand |
| Rule-engine- / validatieserviceplatform (beheerder nog te bepalen) | Landelijke proef- en productieomgeving voor automatische checks en validatie van BIM-modellen. Voert IDS-validatie en regeltoetsing uit op IFC-modellen en levert rapportages terug. | nieuw |
| Gemeentelijke VTH-systemen | Lokale of regionale zaaksystemen voor vergunningverlening, toezicht en handhaving. Ontvangen aanvragen via het DSO, tonen resultaten van checks en registreren besluiten. | bestaand, aan te passen |
| Archiefvoorziening (gemeentelijk / Nationaal Archief) <span class="buiten-scope">(buiten scope)</span> | Infrastructuur voor duurzaam digitaal bewaren van vergunningdossiers. Zorgt voor opslag van IFC-modellen, besluiten en rapportages conform de Archiefwet. | bestaand, aan te passen |
| Digital-twin- en visualisatieplatforms (optioneel) | Lokale of regionale platforms voor 3D-weergave van bouwplannen en omgeving. Bieden inzicht aan burgers en beleidsmakers en koppelen BIM- en geodata voor participatie. | optioneel |

<div class="issue" title="Beheer van het rule-engine- en validatieserviceplatform">

In PSA v0.4 staat bij de beheerder van dit platform „VNG/DigiGO???”, terwijl de toekomstige situatie uitgaat van beheer door VNG (mogelijk via aanbesteding). Wie eigenaar en beheerder van de landelijke proef- en productieomgeving wordt, is nog niet besloten. Dit is opgenomen als beslispunt in [[[#beslispunten-en-afwijkingen]]].

</div>

## Architectuurpatronen {#infra-patronen}

<p class="leesniveau technisch">Technisch</p>

| Patroon | Wat het betekent voor BM13 |
|---|---|
| Federatief datadelen (*publish–find–bind*) | Bronhouders **publiceren** data en diensten met metadata; afnemers **vinden** die via een catalogus (bijv. de IDS-publicatieservice of DSGO-diensten); en **binden** er via een gestandaardiseerde API aan. Er is geen centrale database met alle vergunningdata. |
| API-first | Elke voorziening biedt haar functies aan via gedocumenteerde API's (REST/JSON, eventueel GraphQL), zodat voorzieningen los van elkaar kunnen worden vervangen of opgeschaald. |
| Cloud en SaaS | De proef- en productieomgeving draait op cloudplatforms met redundantie en failover; gemeenten en marktpartijen sluiten aan via SaaS-koppelingen. |
| Gefaseerde opschaling | Start met een proefomgeving en koplopergemeenten; breid stapsgewijs uit naar productie en meer gemeenten zodra afsprakenstelsels en beheer staan. |
| Security by design | Beveiliging volgens BIO/ISO 27001, versleutelde verbindingen (TLS 1.3), autorisatie via OAuth 2.0 en centrale logging vanaf de eerste versie. Zie [[[#privacy-en-informatiebeveiliging]]]. |

## Technische standaarden per voorziening {#technische-standaarden}

<p class="leesniveau technisch">Technisch</p>

De technische standaarden uit PSA v0.4 zijn hieronder gegroepeerd naar de voorziening waarvoor ze gelden.

### DSO en DSGO {#standaarden-dso-dsgo}

| Technische standaard | Toepassing |
|---|---|
| REST/JSON API's (Forum Standaardisatie) | Uitwisseling tussen DSO, gemeenten en ketenpartners. |
| STTR en STOP/TPOD [[STTR]] | Standaarden voor publicatie en ontsluiting van juridische en toepasbare regels (DSO). |
| XML / Digikoppeling [[DIGIKOPPELING]] | Veilige en betrouwbare berichtuitwisseling tussen overheden (DSO). |
| TLS 1.3 + OAuth 2.0 [[TLS13]] [[OAUTH2]] | Beveiligde verbindingen en authenticatie voor het DSO. |
| Linked Data (RDF, OWL, SPARQL, SHACL) | Semantische interoperabiliteit tussen BIM, regels en registraties (DSGO). |
| API-first (REST / GraphQL) | Patroon voor federatief datadelen via gestandaardiseerde endpoints (DSGO). |
| BOMOS (beheerstandaard) | Beheer van open standaarden binnen het stelsel (DSGO). |
| JSON-LD [[JSON-LD]] | Uitwisselformaat voor gestructureerde Linked Data (DSGO). |

### Identity & Access Management {#standaarden-iam}

| Technische standaard | Toepassing |
|---|---|
| eIDAS, DigiD, eHerkenning [[EIDAS]] | Europese en Nederlandse standaarden voor authenticatie. |
| SAML 2.0 / OpenID Connect | Identiteitsfederatie tussen landelijke en lokale platforms. |
| OAuth 2.0 [[OAUTH2]] | Autorisatieprotocol voor API's. |

### Procesmonitoring en logging {#standaarden-logging}

| Technische standaard | Toepassing |
|---|---|
| PKIoverheid-certificaten | Digitale handtekening en beveiligde verbindingen. |
| CEF eDelivery / Logius Digikoppeling | Gestandaardiseerde logging en berichtuitwisseling tussen overheden. |
| OpenTelemetry / ISO 27035 | Standaarden voor monitoring, logging en incidentmanagement. |
| JSON / Syslog / REST | Technische formaten voor logdata en statusberichten. |

### Digital approval en signature {#standaarden-signature}

| Technische standaard | Toepassing |
|---|---|
| eIDAS-verordening (EU 910/2014) [[EIDAS]] | Juridische basis voor elektronische handtekeningen. |
| XAdES / PAdES / CAdES | Standaarden voor digitale handtekeningen op XML-, PDF- en andere documenten. |
| PKIoverheid | Certificaten voor ondertekening door erkende instanties. |

### Geovoorzieningen, visualisatie en archief {#standaarden-geo-archief}

| Technische standaard | Voorziening | Toepassing |
|---|---|---|
| OGC API's (Features, Tiles, WFS, WMTS) [[OGCAPI]] | geovoorzieningen | Toegang tot geodata en kaarten. |
| glTF / 3D Tiles / WebGL | digital twin / visualisatie | Visualisatieformaten voor 3D-weergave in browsers. |
| BagIt / NEN-ISO 16175 [[NEN-ISO16175]] | archiefvoorziening | Standaarden voor overdracht en toegankelijkheid van archiefdata. |
| METS / CMIS / OAIS-model | archiefvoorziening | Standaarden voor duurzaam digitaal archiveren. |
