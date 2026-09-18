# Reference information and shared resources

## Reference information

| Source | Use in this ILS | Location |
|---|---|---|
| IFC 4.3 (ISO 16739-1:2024) | Information model and schema | [ifc43-docs.standards.buildingsmart.org](https://ifc43-docs.standards.buildingsmart.org/) |
| bSDD *Omgevingswet-Ruimten* 0.3.0 | Classes and `ObjectType` values for spatial objects (Dutch) | [identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) |
| ILS voor Ruimten in de Omgevingswet (digiGO) | Source of the IDS specifications | digiGO, *ILS'en en richtlijnen* |
| IDS 1.0 (buildingSMART) | Format of the acceptance rules | [github.com/buildingSMART/IDS](https://github.com/buildingSMART/IDS) |
| NL-SfB table 1 (2021) | Classification | bSDD |
| Naa.K.T. 2.4 | Material naming | [search.bsdd.buildingsmart.org/uri/nkt/naakt/2.4](https://search.bsdd.buildingsmart.org/uri/nkt/naakt/2.4) |
| BAG, BRK, BGT (Kadaster/PDOK) | Building ID, accommodation unit ID, parcels, surroundings | [pdok.nl](https://www.pdok.nl/) |
| Zoning plan (*Regels op de kaart*, DSO) | Standard values for checks #1–#6 | Omgevingsloket |
| *Besluit bouwwerken leefomgeving* (Bbl) | Standard values for checks #7–#17 | wetten.nl |
| GEMMA processenmodel Omgevingswet (incl. 013, 015) | Processes, process steps and roles; see the [GEMMA matrix](#gemma-matrix) | [gemmaonline.nl](https://www.gemmaonline.nl/) |
| CHEK DBP process model and maturity matrix | Maturity level of the municipality | CHEK project (EU Horizon) |
| STB 2025 | Phasing and discipline codes | BNA / NL Ingenieurs |

## Information model as a foundation

This ILS uses **IFC** as its information model: an international, ISO-adopted conceptual and logical model for buildings. The Dutch terms come from the bSDD publication *Omgevingswet-Ruimten*. For the process context we align with GEMMA (and NORA).

<p class="note">Decision question for digiGO: does IFC, possibly with a bSDD publication, count as an <em>adopted information model</em> within the meaning of criterion 4.2 of the assessment framework? See <a href="#open-punten">Open issues</a>.</p>

## Shared resources (annexes in this repository)

| Folder / file | Content |
|---|---|
| `ids/` | 42 IDS 1.0 sub-specifications, one per specification (content in Dutch) |
| `data/specificaties_checks.csv` | Link between specifications, bSDD identifiers and checks |
| Check sheets (repo `vergunningcontrole`) | Layers 0–5 per check |
