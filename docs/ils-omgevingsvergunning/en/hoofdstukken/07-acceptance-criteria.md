# Acceptance criteria

The acceptance criteria objectively determine whether a delivered information model is **admissible**, meaning suitable for running the checks. Whether the building plan complies with the rules is a separate question, answered by the checks and not by the acceptance criteria.

## Criteria

| Code | Criterion | How it is checked | Automated? | If rejected |
|---|---|---|---|---|
| **AC1** | The file is valid IFC 4.3 (or IFC4 ADD2 TC1) in STEP format, max. [250] MB per container | Schema validation (e.g. buildingSMART Validation Service) | Yes | Not admissible |
| **AC2** | The `#HEADER` is filled in: `FILE_NAME` with name, timestamp, author, organisation and authorisation | Header check | Yes | Request for correction |
| **AC3** | The model meets all IDS specifications for the milestone (see [Milestones](#mijlpalen)) | IDS validation with an IDS 1.0-compliant tool | Yes | Request for correction with report (BCF/HTML) |
| **AC4** | The model is georeferenced in EPSG:28992 or EPSG:7415, and its position falls within the stated cadastral parcels | IDS 9.01a/b plus spatial check against the BRK | Yes | Not admissible |
| **AC5** | The geometry of spaces and zones is solid and free of duplicates (G1, G4) | Geometry check | Partly | Request for correction |
| **AC6** | The delivered quantities (Qto) differ by no more than [x]% from the recalculated quantities (G5) | Two-step geometry check, see [Geometric checking](#geometrie) | Yes (once the tooling is available) | Flag for the assessor |
| **AC7** | The file name follows the convention in the [Information production standard](#standaard) | Pattern check | Yes | Flag |

Values in [ ] are chosen by the municipality when adopting the ILS. Proposal: 250 MB and 2%.

## Who carries out the check?

| Step | Performed by | Tool |
|---|---|---|
| Self-check before submitting | Applicant / modeller | IDS files from the `ids/` folder, open validation tools |
| Check on receipt | Municipality or a validation service it appoints | The same IDS files, so the result is identical |
| Geometric recalculation | Municipality / checking software | Generic geometry functions (layer 4) |

Because the applicant and the municipality use **the same** IDS files, the applicant knows in advance whether the delivery is admissible. The result of an IDS check still depends on the IFC parser a tool uses. This ILS therefore refers to the buildingSMART certification of IDS tools as a reference. See [Open issues](#open-punten).

## Acceptance table per milestone

| Milestone | AC1 | AC2 | AC3 | AC4 | AC5 | AC6 | AC7 |
|---|---|---|---|---|---|---|---|
| M1 Preliminary consultation | ● | ○ | ● (limited set) | ● | ○ | – | ○ |
| M2 OPA application | ● | ● | ● | ● | ● | ○ | ○ |
| M3 TBA application | ● | ● | ● | ● | ● | ● | ○ |

● = mandatory · ○ = recommended · – = not applicable
