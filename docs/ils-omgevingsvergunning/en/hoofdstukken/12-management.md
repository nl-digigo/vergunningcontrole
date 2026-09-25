# Management, version control and further development

## Management organisation

| Role | Assignment (proposal) |
|---|---|
| Owner and publisher | VNG |
| Project management, publication decision and review flow | Jeroen de Ruig (VNG) |
| Author of the ILS and IDS (layer 2 BIM) | Lex Ransijn (VDCbase, on behalf of VNG) |
| Alignment and support | Steering group: BNA, NEPROM, NL Ingenieurs, Woningbouwers NL, digiGO, Bouwend Nederland |
| Management after BM13 ends | To be decided (VNG or digiGO), according to BOMOS |

We separate management responsibilities (adopting, prioritising) from production responsibilities (editing, maintaining the IDS).

## Change procedure

1. **Report:** anyone can open a GitHub *issue* using a template (question, error, change proposal). Municipalities without a GitHub account report by email; the editors turn those reports into an issue.
2. **Assess:** the editors label the issue (`redactioneel`, `inhoudelijk`, `ids`, `beslispunt`) and link it to a release milestone.
3. **Work out:** changes are made in a *branch* and submitted through a *pull request*, with at least one review by another editor.
4. **Decide:** the editors handle editorial changes themselves. Substantive changes and decision points go to the BM13 project meeting; changes with market impact go to digiGO.
5. **Publish:** at each release a tag is set, the CHANGELOG is updated and the ReSpec page is regenerated.

## Version control

- **Semantic versioning:** `0.x` = draft, `1.0.0` = adopted. *Major* = incompatible change to the IDS or acceptance criteria, *minor* = new requirements or checks, *patch* = editorial.
- IDS files get the same version number as the ILS (`ids:info/version`).
- **Underlying standards:** when a new version of IFC, IDS or the bSDD *Omgevingswet-Ruimten* is released, we carry out an impact analysis in an issue. An older IFC version remains allowed for at least one *minor* release.

## ISO 19650 transition plan

The revised ISO 19650 series is expected to be adopted at the end of 2026. Once that happens, we will:

1. update the terminology (EIR → *information production requirements*);
2. check the chapter structure against the ILS reference template;
3. release this as a *minor* release with a transition period.

## Community

- A public repository with issues and discussions as an easy way to report problems.
- A regular user meeting (proposal: quarterly) with municipalities, software vendors and modellers.
- Changes are explained in the CHANGELOG and, for larger releases, in a short video.

## Implementation path (proposal)

| Phase | Period | Status of the ILS |
|---|---|---|
| Pilot | 2026 | Recommended, at pilot municipalities |
| Scale-up | 2027 | Recommended, included in the digiGO register |
| Standard | To be decided | Possibly mandatory as a submission requirement for digital 3D applications |

## Development agenda

- Work out information delivery processes according to IDM (ISO 29481), together with the GEMMA process models.
- Draft an information protocol (legal status of the model).
- Add aesthetics review (ID11) and BAG updates (ID12).
- Add use functions other than residential.
- Explore EU regulations: Digital Product Passport (CPR) and digital building logbook (EPBD).
