# Scope and field of application

## Scope

| Dimension | Boundaries in version 0.1 |
|---|---|
| Domain | Permitting under the Environment and Planning Act (*Omgevingswet*, VTH) |
| Process | GEMMA 015 *Behandelen aanvraag* → 015-03 *Inhoudelijk behandelen aanvraag* → processtap *Toetsen aan regelgeving* (activities *Controleren indieningsvereisten* and *Uitvoeren inhoudelijke toetsing*). See the [GEMMA matrix](#gemma-matrix) for the other processes |
| Activities | Zoning plan activity for building (*omgevingsplanactiviteit bouwen*, OPA, including the *buitenplanse OPA*, BOPA) and technical building activity (*technische bouwactiviteit*, TBA) |
| Phases | Preliminary consultation, OPA application, TBA application (see [Milestones](#mijlpalen)) |
| Type of structure | Building, in principle with a **residential function** (new build and renovation) |
| Checks | 17 checks from the BM13 rule inventory (v0.3) |
| Information model | IFC 4.3 (ISO 16739-1:2024) |

**Out of scope** in this version: the municipality's organisational information requirements (OIR) and asset information requirements (AIR), aesthetics review (*welstand*, ID11), updating the BAG building register (ID12), sustainability analyses other than MPG, and use functions other than residential. We recommend that each municipality draws up its own OIR and AIR; this ILS can link to them later.

## Field of application

The ILS applies to parties who submit an application with a 3D information model to a municipality that uses this ILS as a submission requirement. The roles follow the GEMMA process description and the role division in ISO 19650-2:

| Role (ISO 19650) | Role in the permitting chain | Obligation |
|---|---|---|
| Appointing party | Municipality as competent authority | Adopts the ILS as a submission requirement and checks the application |
| Lead appointed party | Applicant / initiator | Is responsible for a complete and correct delivery |
| Appointed party | Architect, modeller, consultant | Produces the information model according to this ILS |
| Third party | Environment and Planning Portal (DSO), software vendor, advisory service | Supports submitting, validating and checking |

Note: in the permitting chain the municipality is not an appointing party in a contractual sense. We use the ISO roles here to describe the flow of information, not to suggest a contractual relationship. See [Responsibility matrix](#verantwoordelijkheden).

## Position relative to related documents

| Document | What it contains | Relation to this ILS |
|---|---|---|
| **This ILS** | What information, format, moment, role, acceptance criteria | — |
| ILS voor Ruimten in de Omgevingswet (digiGO) | Spatial objects and attributes | Source of the machine-readable part (IDS), extended and split per specification |
| BIM basis ILS (digiGO) | Generic agreements on IFC exchange | Starting point; this ILS refers to it and does not repeat it, see ## Agreements on the IFC model |
| ILS Ontwerp en Engineering (O&E) | Agreements for the design phase | Aligned on the use of Nationals `ObjectType` |
| Information protocol (to be drafted) | Legal status of the model in the application | Recommended addition, see [Open issues](#open-punten) |
| Applicant's BIM execution plan / information production plan | Project-specific elaboration | Fills in the fill-in formats in this ILS |
| Checks toolkit (17 folders) | Method and rules per check | Refer to this ILS for layer 2 |
| Submission requirements in the *Omgevingsregeling* | Statutory submission requirements | This ILS is a digital elaboration, not a replacement |
