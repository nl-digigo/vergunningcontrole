# Information production milestones and schedule

## Phasing

We follow the phasing of the **STB 2025** [BNA/NL Ingenieurs](https://bna.nl/vernieuwde-stb2026-nu-als-alpha-versie-beschikbaar/). A municipality may use the older STB 2014 phasing if that better fits its way of working. To align as closely as possible with the market, municipalities are advised to be familiar with this task-division list.

| STB 2025 phase | Code | Relevance for this ILS |
|---|---|---|
| 1.1 Initiatief | INI | — |
| 1.2 Haalbaarheid | HBH | **Milestone M1: preliminary consultation** |
| 1.3 Projectdefinitie | PD | — |
| 2.1 Structuurontwerp | SO | **Milestone M1: preliminary consultation** **M2: OPA application** |
| 2.2 Voorontwerp | VO | **Milestone M1: preliminary consultation** **M2: OPA application** |
| 2.3 Definitief ontwerp | DO | Preparing the application |
| 2.4 Omgevingsvergunning | OV | **Milestone M1: preliminary consultation** **M2: OPA application** and **M3: TBA application** |
| 3.1 Technisch ontwerp | TO | M3 if the TBA is submitted later (phased application) |
| 3.2 Uitvoeringsgereed ontwerp | UO | Out of scope |
| 4.x Realisatie, oplevering | UIT, AB, OND | Out of scope (supervision, *as built*) |
| 5 Gebruik | GBR | Out of scope |

## Milestones

| Milestone | Moment | GEMMA step | What is delivered | Checks | Minimum IDS set |
|---|---|---|---|---|---|
| **M1 Preliminary consultation** | Voorontwerp, before the formal application | Vooroverleg / 21.090 Verzorgen aanvraag | Massing model with georeferencing, building, storeys and use functions | #1–#6 (indicative) | 9.01a–e, 9.02, 9.03, 9.04, 9.05a, 9.06a, 9.08 |
| **M2 OPA application** | Definitief ontwerp | 21.130 Indienen bescheiden t.b.v. toetsing aan omgevingsplan | Space model with gross/net volumes and use functions | #1–#6 | All specifications marked #1–#6 in the [Table of requirements](#vereisten) |
| **M3 TBA application** | Definitief of technisch ontwerp | Indienen bescheiden technische bouwactiviteit | Complete space model plus physical elements with properties, **including the updated ID01 information** | #1–#17 (#1–#6 to check for changes) | All specifications marked #1–#17 |
| M4 Acceptance | After each delivery | 015-02 Uitvoeren intake aanvraag / 015-03 Toetsen aan regelgeving (*Controleren indieningsvereisten*) | Validation report, possibly BCF issues back to the applicant | — | — |

After each delivery, the municipality takes **[to be filled in, proposal: 10] working days** to confirm the admissibility of the information model (acceptance criteria AC1–AC4). This falls within the statutory decision period and is not separate from it.

> **Note:** the information for ID01 (M1/M2) must be delivered again at M3, in its current version. See [Delivering the ID01 information again](#perspectieven).

## Key decision points

1. **Preliminary consultation:** does the initiative have good prospects with regard to the *omgevingsplan*?
2. **Admissibility:** does the delivered model meet the acceptance criteria?
3. **Substantive assessment:** does the building plan meet the 17 checks (automated, with human review where needed)?
4. **Decision:** grant the permit, refuse it, or request additional information.

## Information production schedule (fill-in format)

The applicant fills in this schedule, for example in the BIM execution plan:

| Milestone | Information container (file name) | Version | Responsible | Planned date | Status (S0–A) | IDS validation passed |
|---|---|---|---|---|---|---|
| M1 | `<project>_ARC_XX_M3D_ZZZ.ifc` | `<1>` | `<organisation>` | `yyyy-mm-dd` | S3 | yes/no |
| M1 | `<project>_SPA_XX_M3D_ZZZ.ifc` | `<1>` | `<organisation>` | `yyyy-mm-dd` | S3 | yes/no |
| M2 | … | … | … | … | … | … |
| M2 | `<project>_ARC_XX_M3D_ZZZ.ifc` | `<2>` | `<organisation>` | `yyyy-mm-dd` | S3 | yes/no |
| M2 | `<project>_CON_XX_M3D_ZZZ.ifc` | `<1>` | `<organisation>` | `yyyy-mm-dd` | S3 | yes/no |
| M2 | `<project>_SPA_XX_M3D_ZZZ.ifc` | `<2>` | `<organisation>` | `yyyy-mm-dd` | S3 | yes/no |
| M2 | `<project>_MEP_XX_M3D_ZZZ.ifc` | `<1>` | `<organisation>` | `yyyy-mm-dd` | S3 | yes/no |
| M2 | `<project>_VEN_XX_M3D_ZZZ.ifc` | `<1>` | `<organisation>` | `yyyy-mm-dd` | S3 | yes/no |
| M2 | `<project>_WAT_XX_M3D_ZZZ.ifc` | `<1>` | `<organisation>` | `yyyy-mm-dd` | S3 | yes/no |
| M2 | `<project>_LAN_XX_M3D_ZZZ.ifc` | `<1>` | `<organisation>` | `yyyy-mm-dd` | S3 | yes/no |
| M2 | `<project>_BRW_XX_M3D_ZZZ.ifc` | `<1>` | `<organisation>` | `yyyy-mm-dd` | S3 | yes/no |
| M3 | … | … | … | … | … | … |
| M3 | `<project>_ARC_XX_M3D_ZZZ.ifc` | `<3>` | `<organisation>` | `yyyy-mm-dd` | S3 | yes/no |
| M3 | `<project>_CON_XX_M3D_ZZZ.ifc` | `<2>` | `<organisation>` | `yyyy-mm-dd` | S3 | yes/no |
| M3 | `<project>_SPA_XX_M3D_ZZZ.ifc` | `<3>` | `<organisation>` | `yyyy-mm-dd` | S3 | yes/no |
| M3 | `<project>_MEP_XX_M3D_ZZZ.ifc` | `<2>` | `<organisation>` | `yyyy-mm-dd` | S3 | yes/no |
| M3 | `<project>_VEN_XX_M3D_ZZZ.ifc` | `<2>` | `<organisation>` | `yyyy-mm-dd` | S3 | yes/no |
| M3 | `<project>_WAT_XX_M3D_ZZZ.ifc` | `<2>` | `<organisation>` | `yyyy-mm-dd` | S3 | yes/no |
| M3 | `<project>_LAN_XX_M3D_ZZZ.ifc` | `<2>` | `<organisation>` | `yyyy-mm-dd` | S3 | yes/no |
| M3 | `<project>_BRW_XX_M3D_ZZZ.ifc` | `<2>` | `<organisation>` | `yyyy-mm-dd` | S3 | yes/no |
| M3 | `<project>_BEL_XX_M3D_ZZZ.ifc` | `<2>` | `<organisation>` | `yyyy-mm-dd` | S3 | yes/no |
| M3 | `<project>_WCD_XX_M3D_ZZZ.ifc` | `<2>` | `<organisation>` | `yyyy-mm-dd` | S3 | yes/no |
| M3 | `<project>_KBG_XX_M3D_ZZZ.ifc` | `<2>` | `<organisation>` | `yyyy-mm-dd` | S3 | yes/no |

## Project information (fill-in format)

| Field | Content | Where in the model |
|---|---|---|
| Municipality / competent authority | `<Municipality Y>` | — |
| Maturity level of the municipality | `1 / 2 / 3 / 4 / 5` (VNG BIM maturity matrix) | — |
| Project name and code | `<code>` | `IfcProject.Name` |
| DSO case number | `<number>` | `IfcProject.LongName` |
| Case number description | `<description>` | `IfcProject.Description` |
| Location | Cadastral parcels, BAG building IDs, accommodation unit IDs | 9.03b, 9.04, 9.05a, 9.07 |
| Scope | New build / renovation; whole building, building part or accommodation unit(s) | `IfcProject.ProjectType` |
| Phase | STB 2025 phase code | `IfcProject.Phase` |
