# Information production milestones and schedule

## Phasing

We follow the phasing of the **STB 2025** (BNA/NL Ingenieurs standard task description). STB phase names are kept in Dutch. A municipality may use the STB 2014 phasing if that better fits its way of working.

| STB 2025 phase | Code | Relevance for this ILS |
|---|---|---|
| 1.1–1.3 Initiatief, Haalbaarheid, Projectdefinitie | INI, HBH, PD | — |
| 2.1 Structuurontwerp | SO | Preliminary consultation (optional) |
| 2.2 Voorontwerp | VO | **Milestone M1: preliminary consultation** |
| 2.3 Definitief ontwerp | DO | Preparing the application |
| 2.4 Omgevingsvergunning | OV | **M2: OPA application** and **M3: TBA application** |
| 3.1 Technisch ontwerp | TO | M3 if the TBA is submitted later (phased application) |
| 3.2 Uitvoeringsgereed ontwerp | UO | Out of scope |
| 4.x Uitvoering, Oplevering en overdracht, Onderhoudstermijn | UIT, AB, OND | Out of scope (supervision, *as built*) |
| 5 Gebruik | GBR | Out of scope |

## Milestones

| Milestone | Moment | GEMMA step | What is delivered | Checks | Minimum IDS set |
|---|---|---|---|---|---|
| **M1 Preliminary consultation** | Voorontwerp, before the formal application | Vooroverleg / STB 21.090 Verzorgen aanvraag | Massing model with georeferencing, building, storeys and use functions | #1–#6 (indicative) | 9.01a–e, 9.02, 9.03, 9.04, 9.05a, 9.06a, 9.08 |
| **M2 OPA application** | Definitief ontwerp | STB 21.130 Indienen bescheiden t.b.v. toetsing aan omgevingsplan | Space model with gross/net volumes and use functions | #1–#6 | All specifications marked #1–#6 in the [Table of requirements](#vereisten) |
| **M3 TBA application** | Definitief or Technisch ontwerp | Submitting documents for the technical building activity | Complete space model plus physical elements with properties, **including the updated ID01 information** | #1–#17 (#1–#6 to detect changes) | All specifications marked #1–#17 |
| M4 Acceptance | After each delivery | 015-02 Uitvoeren intake aanvraag / 015-03 Toetsen aan regelgeving (*Controleren indieningsvereisten*) | Validation report, possibly BCF issues back to the applicant | — | — |

After each delivery, the municipality takes **[to be filled in, proposal: 10] working days** to confirm that the information model is admissible (acceptance criteria AC1–AC4). This falls within the statutory decision period and is not separate from it.

> **Note:** the information for ID01 (M1/M2) must be delivered again at M3, in its current version. See [Delivering the ID01 information again](#perspectieven).

## Key decision points

1. **Preliminary consultation:** does the initiative have a good chance under the zoning plan?
2. **Admissibility:** does the delivered model meet the acceptance criteria?
3. **Substantive assessment:** does the building plan pass the 17 checks (automated, with human review where needed)?
4. **Decision:** grant the permit, refuse it, or request additional information.

## Information production schedule (fill-in format)

The applicant fills in this schedule, for example in the BIM execution plan:

| Milestone | Information container (file name) | Responsible | Planned date | Status (S0–A) | IDS validation passed |
|---|---|---|---|---|---|
| M1 | `<project>_ARC_XX_M3D_ZZZ.ifc` | `<organisation>` | `yyyy-mm-dd` | S3 | yes/no |
| M2 | … | … | … | … | … |
| M3 | … | … | … | … | … |

## Project information (fill-in format)

| Field | Content | Where in the model |
|---|---|---|
| Municipality / competent authority | `<Municipality Y>` | — |
| Maturity level of the municipality | `1 / 2 / 3 / 4 / 5` (CHEK maturity matrix) | — |
| Project name and code | `<code>` | `IfcProject.Name` |
| DSO case number | `<number>` | `IfcProject.LongName` or `Description` |
| Location | Cadastral parcels, BAG building IDs, accommodation unit IDs | 9.03b, 9.04, 9.05a, 9.07 |
| Scope | New build / renovation; whole building, building part or accommodation unit(s) | — |
| Phase | STB 2025 phase code | `IfcProject.Phase` |
