# Perspectives and information objectives

## Motivation layer: where do the requirements come from?

The revised ISO 19650-1 distinguishes three information perspectives that exist side by side. For each perspective, this ILS shows where the requirements come from:

| Perspective | Source of the requirement in this case | Elaboration |
|---|---|---|
| **Organisation** | Municipal tasks in permitting, supervision and enforcement; the GEMMA process model (015 *Behandelen aanvraag*); the aim to check applications faster and more transparently | Information objectives ID01, ID02, ID05 |
| **Asset** | The building as an object in the base registers (BAG, BRK) and the zoning plan; later reuse of the model for supervision and enforcement | ID03, ID04, ID10, ID12 (partly out of scope) |
| **Project** | The actual application: preliminary consultation, OPA application and TBA application for one building | 17 checks, [Table of requirements](#vereisten) |

The chain runs from **municipal task** (permitting, supervision, assessment and enforcement) through **information objective** to **check**, and finally to **IDS specification**. In the [Table of requirements](#vereisten), every check can be traced to an information objective and to the related IDS files.

## Information objectives

The information objectives (ID) are groups of requirements. **ID01 and ID02 are linked to the two application activities of this ILS:** ID01 to the zoning plan activity for building (*omgevingsplanactiviteit bouwen*), ID02 to the technical building activity (*technische bouwactiviteit*). In this version, these two have been worked out into the 17 checks.

**ID03 to ID12 are optional.** They are proposals to include as objectives. They fall outside the 17 checks and have not yet been investigated. We do expect municipalities to use the model information for these purposes as well. A municipality can already request them, but they are not a condition for an admissible application.

| ID | Objective | Status in v0.1 |
|---|---|---|
| **ID01** | **Zoning plan activity for building (OPA): check against the zoning plan (municipal)** | **Mandatory – checks #1–#6** |
| **ID02** | **Technical building activity (TBA): check against the *Besluit bouwwerken leefomgeving* (national building decree, Bbl)** | **Mandatory – checks #7–#17, including the ID01 information** |
| ID03 | Digitising an existing building for VTH processes (surveying, scanning, NEN 2580 report) | Optional – proposal, to be investigated |
| ID04 | Feeding VTH processes with building information (quantities from the space model and from physical objects) | Optional – proposal, to be investigated |
| ID05 | Supporting the permitting, supervision and enforcement process (model coordination, issue management via BCF) | Optional – proposal, to be investigated |
| ID06 | Involving the municipality and local residents in the design (visualisation) | Optional – proposal, to be investigated |
| ID07 | Sustainability analyses (GWP, WLC; MPG is covered by ID02, check #13) | Optional – proposal, to be investigated |
| ID08 | Handover and archiving of digital data | Optional – proposal, to be investigated |
| ID09 | Decommissioning 2 Reuse (circularity) | Optional – proposal, to be investigated |
| ID10 | Building parts and residential/accommodation units (*panddelen* and *verblijfsobjecten*: IfcSpatialZone per building part, IfcZone per accommodation unit) | Optional – proposal, to be investigated (strongly recommended for existing buildings) |
| ID11 | Check against aesthetics requirements (*welstand*) | Optional – proposal, to be investigated |
| ID12 | Updating the BAG | Optional – proposal, to be investigated |

### Delivering the ID01 information again for ID02

The information for ID01 is delivered early in the process: at the preliminary consultation (M1) and the application for the zoning plan activity (M2). **With the application for the technical building activity (M3, ID02), the applicant delivers this information again, in its updated version.** The reasons:

- The design has been developed further between M2 and M3. Height, storeys, use functions and georeferencing may have changed, and the municipality must be able to see that the TBA application still fits within what was checked for the OPA.
- The TBA checks use the same base objects, such as project, georeferencing, parcels, building, storeys and use functions (see the [Table of requirements](#vereisten)).
- This gives one coherent model per application, without references to an earlier submitted version.

In practice: the model at M3 meets **all** IDS specifications of ID01 **and** ID02. The municipality may run checks #1–#6 again at M3 to flag changes compared with M2.

<a id="gemma-matrix"></a>

## Link to the GEMMA processes

The matrix below links each information objective to the business processes of the [GEMMA-processenmodel Omgevingswet](https://www.gemmaonline.nl/wiki/Bedrijfsprocessen_omgevingswet) (the municipal reference process model). The starting point is the deelproces [015-03 Inhoudelijk behandelen aanvraag](https://www.gemmaonline.nl/wiki?title=Uitwerking_deelproces&proces=Omgevingswet/id-ad8a0931-792a-46c3-b9e9-a9c669fedf59).

GEMMA process names are kept in Dutch.

● = primary process in which the information is used · ○ = supporting or later use

### Processes and codes used

| Code | GEMMA process (Dutch name) | Level | Cluster |
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
| BMI | Behandelen melding of informatie | Bedrijfsproces (number to be verified) | Behandelen aanvraag / melding / informatie |
| UC | Uitvoeren controle | Bedrijfsproces (number to be verified) | Toezichthouden en handhaven |
| 025 | Nemen handhavingsbesluit | Bedrijfsproces (number to be verified; deelproces 025-02 *Voorbereiden opleggen sanctie*) | Toezichthouden en handhaven |
| AB | Aanleveren brondata | Bedrijfsproces (number to be verified) | Brondatabeheer |
| BIO | Beheren informatie over objecten | Bedrijfsproces (number to be verified) | Brondatabeheer |
| MA | Monitoren en analyseren | Bedrijfsproces (number to be verified) | Evaluatie |

\* GEMMA does not number the process steps within a sub-process. The codes 015-03.1 to .4 are this ILS's own coding, in GEMMA's order. Codes without a number (BMI, UC, AB, BIO, MA) are temporary abbreviations: the GEMMA number has not yet been confirmed.

### Matrix of information objectives × GEMMA processes

| ID | 013 | 015-02 | 015-03.1 | 015-03.2 | 015-03.3 | 015-03.4 | 015-04 | 015-05 | BMI | UC | 025 | AB | BIO | MA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **ID01** OPA | ○ | ○ | ● | ○ | | ○ | ○ | | | | | | | |
| **ID02** TBA | | ○ | ● | ○ | | ○ | ○ | | | ○ | | | | |
| ID03 Digitising existing building | ○ | | ○ | | | | | | | | | | ● | |
| ID04 Building information for VTH | | | ○ | | | | | | | ● | | | ○ | ○ |
| ID05 Supporting the VTH process | | ● | ● | | | | | | | ● | ○ | | | |
| ID06 Involving the surroundings | ● | | | ○ | ● | | | ○ | | | | | | |
| ID07 Sustainability | | | ○ | | | | | | | | | | | ● |
| ID08 Handover and archive | | | | | | | | ○ | ● | | | | ● | |
| ID09 Circularity | ○ | | | | | | | | | | | | ○ | ● |
| ID10 Building parts and accommodation units | | ○ | ● | | | | | | | | | ● | | |
| ID11 Aesthetics (*welstand*) | ○ | | ● | | | | | | | | | | | |
| ID12 Updating the BAG | | | | | | | | ○ | | | | ● | ● | |

### Explanation per objective

| ID | Primary process step / activity (GEMMA) | Explanation |
|---|---|---|
| ID01 | 015-03.1 *Controleren indieningsvereisten*, *Uitvoeren inhoudelijke toetsing* | Check against the zoning plan (checks #1–#6). Already indicative in 013 during the preliminary consultation |
| ID02 | 015-03.1 *Controleren indieningsvereisten*, *Uitvoeren inhoudelijke toetsing* | Check against the Bbl (checks #7–#17), including a repeat of ID01. Later usable in *Uitvoeren controle* |
| ID03 | BIO; 013 | A digital model of the existing situation as a basis for renovation and object information |
| ID04 | UC; BIO | Quantities and materials from the model to prepare inspections and analyses |
| ID05 | 015-02 *Registreren*, *Toewijzen hoofdbehandelaar*; 015-03.1 *Betrekken interne adviseurs / ketenpartners*; UC | Model and BCF issues as a shared source for case handlers, advisers and inspectors |
| ID06 | 013; 015-03.3 *Ter inzage leggen ontwerpbesluit*; 015-03.2 *Verzamelen zienswijzen* | Visualisation for participation and public views |
| ID07 | MA; 015-03.1 | Monitoring sustainability performance (MPG itself is part of ID02) |
| ID08 | BMI (e.g. completion notice / file for the competent authority); BIO; 015-05 *Administratief afronden* | As-built file and archiving |
| ID09 | MA; BIO | Residual value and circularity at object level |
| ID10 | 015-03.1 *Controleren gerelateerde verzoeken*, *Uitvoeren inhoudelijke toetsing*; AB | Linking spaces to the building and accommodation unit (BAG ID) |
| ID11 | 015-03.1 *Betrekken interne adviseurs*, *Opstellen advies* (aesthetics committee); 013 | Aesthetics review using the model |
| ID12 | AB; BIO; 015-05 | Returning building and accommodation unit data to the BAG |

<p class="note">The link of ID01 and ID02 to 015-03 follows from the BM13 scope. The links for ID03–ID12 are a first proposal and will be checked with VNG (GEMMA management) and the pilot municipalities when those objectives are worked out.</p>

## The 17 checks

| # | Check (English) | Check (Dutch original) | Activity | ID |
|---|---|---|---|---|
| 1 | Use function matches the zoning designation | Gebruiksfunctie komt overeen met bestemming | OPA | ID01 |
| 2 | Maximum building height | Maximale bouwhoogte | OPA | ID01 |
| 3 | Maximum building coverage percentage | Maximaal bebouwingspercentage | OPA | ID01 |
| 4 | Use function / designation limited to x storeys | Gebruiksfunctie / bestemming beperkt tot x bouwlagen | OPA | ID01 |
| 5 | Home-based business: max. 50% of usable floor area | Beroep aan huis: maximaal 50% gebruiksoppervlakte | OPA | ID01 |
| 6 | Maximum number of storeys | Maximum aantal bouwlagen | OPA | ID01 |
| 7 | Fire compartments | Brandcompartimenten | TBA | ID02 |
| 8 | Fire resistance | Brandwerendheid | TBA | ID02 |
| 9 | Clear width | Vrije breedte | TBA | ID02 |
| 10 | Difference in height | Hoogteverschil | TBA | ID02 |
| 11 | Rc value (thermal resistance) | Rc-waarde | TBA | ID02 |
| 12 | U value (thermal transmittance) | U-waarde | TBA | ID02 |
| 13 | MPG (environmental performance of buildings) | MPG | TBA | ID02 |
| 14 | Escape routes | Vluchtwegen | TBA | ID02 |
| 15 | Walking distance | Loopafstand | TBA | ID02 |
| 16 | Escape route width | Vluchtbreedte | TBA | ID02 |
| 17 | Daylight | Daglicht | TBA | ID02 |

## Separation between information management and information production

| Layer | Who | Artefacts |
|---|---|---|
| Information management (steering) | Municipality (competent authority) and guideline owner | This ILS, acceptance criteria, decision on admissibility |
| Information production (delivering) | Applicant and their modellers | Information model (IFC), BIM execution plan, validation report |

Modelling is therefore the applicant's job. The municipality sets requirements and checks them.
