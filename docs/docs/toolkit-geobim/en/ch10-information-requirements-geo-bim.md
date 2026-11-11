# Information requirements: geo and BIM data {#informatiebehoefte-geo-bim}

**Project:** VNG Policy Measure 13 — Permitting with BIM
**Version:** 0.3 (3 July 2026) — *being edited*
**Status:** Result of physical sessions with participating municipalities, 7 April 2026 and 8 June 2026, Zoetermeer

> This inventory describes, for each rule, the information needed (building data, mapping to the [ILS Spaces / bSDD](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) dictionary, and environment data / geodata). Rules #1–#6 concern the environment plan (environment plan activity, OPA; also called the environment plan check), rules #7–#17 the Buildings (Living Environment) Decree (Bbl; also called the technical check).

<div class="note" title="Relation to chapter 9">

This chapter brings together the *Information requirements* sections of [[[#regelinterpretatie]]] in one place, for readers who only need the data requirements. Dutch terms from the ILS Spaces dictionary (bSDD) and the key registers are kept as names, with an English explanation where helpful.

</div>

## Rule #1: Use function matches the zoning designation

### Information requirements

#### Building data

- Building application / floor plan / building drawing
- Use function per space per storey

#### In relation to ILS Spaces ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0))

- Bouwwerkperceel (building parcel): IfcZone (or IfcSpatialZone, IfcSpace)
- Kadastraalperceel (cadastral parcel): IfcZone (or IfcSpatialZone, IfcSpace). NB: also environment data
- Bouwlaag (storey): IfcBuildingStorey (in line with the BIM Basis ILS)
- Gebruiksfunctie (use function): IfcZone (or IfcSpatialZone, IfcSpace)
- VerblijfsRuimte (habitable room) or Functieruimte (functional room): IfcSpace (or IfcZone, IfcSpatialZone)

#### Environment data / geodata

- Parcel boundaries

#### In relation to geo-standard concepts and imagery

- Parcel boundary: BRK – Digital Cadastral Map
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBRKregistratie_entiteit_KadastraleGrens>

## Rule #2: Maximum building height

### Information requirements

#### Building data

- Building application / floor plan / building drawing
- Roof shape

#### In relation to ILS Spaces ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0))

- Bouwwerkperceel (building parcel): IfcZone (or IfcSpatialZone, IfcSpace)
- Kadastraalperceel (cadastral parcel): IfcZone (or IfcSpatialZone, IfcSpace). NB: also environment data
- Bouwlaag (storey): IfcBuildingStorey (in line with the BIM Basis ILS)
- *Building height is not a concept in ILS Spaces*

#### Environment data / geodata

- Parcel boundaries
- Reference level (set by the municipality)

#### In relation to geo-standard concepts and imagery

- Parcel boundary: BRK – Digital Cadastral Map
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBRKregistratie_entiteit_KadastraleGrens>
- Reference level: AHN / surveyed terrain model
  - <https://www.ahn.nl/producten>

NB: this refers to the annual nationwide aerial photographs and the nationwide elevation dataset of Beeldmateriaal Nederland and the Actueel Hoogtebestand Nederland (AHN) respectively. Some municipalities also have their own aerial photographs and sometimes their own elevation datasets.

## Rule #3: Maximum building coverage percentage

### Information requirements

#### Building data

- Building application / floor plan / building drawing / site plan
- Building type
- Use function
- Floor plan at ground level / ground floor
- Gross floor area per ground-floor level

#### In relation to ILS Spaces ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0))

- Bouwwerkperceel (building parcel): IfcZone (or IfcSpatialZone, IfcSpace)
- Kadastraalperceel (cadastral parcel): IfcZone (or IfcSpatialZone, IfcSpace). NB: also environment data
- Gebouwtype (building type): IfcBuilding (MarketCategory and MarketSubCategory)
- Bouwlaag (storey): IfcBuildingStorey (in line with the BIM Basis ILS)
- Gebruiksfunctie (use function): IfcZone (or IfcSpatialZone, IfcSpace)
- VerblijfsRuimte (habitable room) or Functieruimte (functional room): IfcSpace (or IfcZone, IfcSpatialZone)

#### Environment data / geodata

- Existing buildings
- Aerial photograph
- Parcel boundaries
- Reference level (set by the municipality)

#### In relation to geo-standard concepts and imagery

- BGT Pand (building)
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBAGregistratie_entiteit_Pand>
- BGT Overig bouwwerk (other structure)
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Overig%2520bouwwerk>
- Aerial photograph
  - <https://www.beeldmateriaal.nl/producten>
- Parcel boundary: BRK – Digital Cadastral Map
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBRKregistratie_entiteit_KadastraleGrens>
- Reference level: AHN / surveyed terrain model
  - <https://www.ahn.nl/producten>

NB: this refers to the annual nationwide aerial photographs and the nationwide elevation dataset of Beeldmateriaal Nederland and the Actueel Hoogtebestand Nederland (AHN) respectively. Some municipalities also have their own aerial photographs and sometimes their own elevation datasets.

## Rule #4: Use function / zoning designation limited to a given number of storeys

### Information requirements

#### Building data

- Building application / floor plan / building drawing
- Building type
- Use function per space per storey

#### In relation to ILS Spaces ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0))

- Gebouwtype (building type): IfcBuilding (MarketCategory and MarketSubCategory)
- Bouwlaag (storey): IfcBuildingStorey (in line with the BIM Basis ILS)
- Gebruiksfunctie (use function): IfcZone (or IfcSpatialZone, IfcSpace)
- VerblijfsRuimte (habitable room) or Functieruimte (functional room): IfcSpace (or IfcZone, IfcSpatialZone)

#### Environment data / geodata

None.

## Rule #5: Home-based occupation: at most 50% of the usable floor area as a business-related office

### Information requirements

#### Building data

- Building application / floor plan / building drawing
- Use function
- Gross floor area of spaces per use function
- Site plan (building parcel + cadastral parcel + adjacent parcels and structures)
- SBI code of the home-based office

#### In relation to ILS Spaces ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0))

- Bouwwerkperceel (building parcel): IfcZone (or IfcSpatialZone, IfcSpace)
- Kadastraalperceel (cadastral parcel): IfcZone (or IfcSpatialZone, IfcSpace). NB: also environment data
- Gebruiksfunctie (use function): IfcZone (or IfcSpatialZone, IfcSpace)
- VerblijfsRuimte (habitable room) or Functieruimte (functional room): IfcSpace (or IfcZone, IfcSpatialZone)
- GFA per space: GFA determination method (= net + tare area)

#### Environment data / geodata

NB: environment data is probably only needed within a certain zone / buffer around the building plan.

- Parcel boundaries
- Existing buildings

#### In relation to geo-standard concepts and imagery

- Parcel boundary: BRK – Digital Cadastral Map
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBRKregistratie_entiteit_KadastraleGrens>
- Existing buildings + status: BAG Pand (building)
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBAGregistratie_entiteit_Pand>
  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBAGkenmerk_status-pand>
- Existing buildings: BAG VBO (dwelling / accommodation object) + status + intended use + usable floor area
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBAGregistratie_entiteit_Verblijfsobject>
  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBAGkenmerk_status-verblijfsobject>
  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBAGkenmerk_gebruiksdoel-verblijfsobject>
  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBAGkenmerk_oppervlakte-verblijfsobject>

## Rule #6: Maximum number of storeys

### Information requirements

#### Building data

- Building application / floor plan / building drawing
- Presence of a basement
- Roof shape

#### In relation to ILS Spaces ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0))

- Bouwwerkperceel (building parcel): IfcZone (or IfcSpatialZone, IfcSpace)
- Kadastraalperceel (cadastral parcel): IfcZone (or IfcSpatialZone, IfcSpace). NB: also environment data
- Bouwlaag (storey): IfcBuildingStorey (in line with the BIM Basis ILS)
- Gebruiksfunctie (use function): IfcZone (or IfcSpatialZone, IfcSpace)
- VerblijfsRuimte (habitable room) or Functieruimte (functional room): IfcSpace (or IfcZone, IfcSpatialZone)
- GFA per space: GFA determination method (= net + tare area)

#### Environment data / geodata

None

## Rule #7: Fire compartments

### Information requirements

#### Building data (as part of the submitted permit application)

- Building application / floor plan / sections
- Use function
- Site plan (building parcel + cadastral parcel + adjacent parcels and structures)
- Fire compartments (designation + outlines)
- GFA per fire compartment
- Fire-resistant building elements with specification and certificate (except demonstrably fire-resistant elements such as concrete or brick)
- Façade of the new building with specification and certificate (except demonstrably fire-resistant elements such as concrete or brick)
- Equivalence report

#### In relation to ILS Spaces ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0))

- Bouwwerkperceel (building parcel): IfcZone (or IfcSpatialZone, IfcSpace)
- Kadastraalperceel (cadastral parcel): IfcZone (or IfcSpatialZone, IfcSpace). NB: also environment data
- Gebruiksfunctie (use function): IfcZone (or IfcSpatialZone, IfcSpace)
- Brandcompartiment (fire compartment): IfcZone (or IfcSpatialZone, IfcSpace)
- GFA per fire compartment: GFA determination method (= net + tare area)
- WBDBO (fire resistance of construction): IfcWall or IfcSlab (IfcZone, IfcSpatialZone or IfcSpace may also be used)
- Fire-resistant building elements: IfcDoor, IfcWall, IfcColumn, IfcCurtainWall, IfcSlab

#### Environment data / geodata

NB: environment data is probably only needed within a certain zone / buffer around the building plan — in principle only the directly adjacent parcels, where the position of the boundary is essential. An adjacent parcel with the same owner as the parcel to be built on may be treated as the same parcel. A site plan with parcel boundaries that differ from the BRK is leading, on the assumption that the parcel will be subdivided later.

- Parcel boundaries
- Interested party / owner
- Existing buildings
- Type of intended use / use function of existing buildings
- Critical infrastructure
- Publicly accessible space (woodland, water, green strip, etc.)
- Publicly accessible roads (and railways)

#### In relation to geo-standard concepts and imagery

- Parcel boundary: BRK – Digital Cadastral Map
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBRKregistratie_entiteit_KadastraleGrens>
- Interested party / owner: BRK – Zakelijk recht (right in rem) + Natuurlijk or Niet-natuurlijk persoon (natural or legal person)
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBRKregistratie_entiteit_ZakelijkRecht>
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBRKregistratie_entiteit_NatuurlijkPersoon>
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBRKregistratie_entiteit_NietNatuurlijkPersoon>
- Existing buildings + status: BAG Pand (building)
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBAGregistratie_entiteit_Pand>
  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBAGkenmerk_status-pand>
- Existing buildings: BAG VBO + status + intended use
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBAGregistratie_entiteit_Verblijfsobject>
  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBAGkenmerk_status-verblijfsobject>
  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBAGkenmerk_gebruiksdoel-verblijfsobject>
- Critical infrastructure: BGT Kunstwerk (engineering structure: bridge part + tunnel part + structure part)
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Overbruggingsdeel>
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Tunneldeel>
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Kunstwerkdeel>
- Road: BGT Wegdeel and BGT Ondersteunend wegdeel (road part and supporting road part, + classification Function)
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Wegdeel>
  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTkenmerk_functie-wegdeel>
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Ondersteunend%2520wegdeel>
  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTkenmerk_functie-ondersteunend-wegdeel>
- Railway: BGT Spoor (+ classification Function)
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Spoor>
  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTkenmerk_functie-spoor>
- Public green space: BGT Begroeid terreindeel and BGT Onbegroeid terreindeel (vegetated and unvegetated terrain part, + classification Physical appearance)
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Begroeid%2520terreindeel>
  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTkenmerk_plus-fysiek-voorkomen-begroeid-terreindeel>
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Onbegroeid%2520terreindeel>
  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTkenmerk_fysiek-voorkomen-onbegroeid-terreindeel>
- Water: BGT Waterdeel and BGT Ondersteunend waterdeel (water part and supporting water part, + classification Type)
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Waterdeel>
  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTkenmerk_type-waterdeel>
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Ondersteunend%2520waterdeel>
  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTkenmerk_type-ondersteunend-waterdeel>

## Rule #8: Fire resistance

### Information requirements

#### Building data (as part of the submitted permit application)

Everything listed under the fire compartments rule.

- Building elements

#### In relation to ILS Spaces ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0))

- Building elements: IfcWall, IfcColumn, IfcCurtainWall, IfcSlab
- Brandcompartiment (fire compartment)

#### Environment data

Everything under the fire compartments rule.

## Rule #9: Clear width

### Information requirements

#### Building data (as part of the submitted permit application)

- Use function
- Type of space, namely habitable area, functional area, bathroom, toilet room, storage room, outdoor space, shared circulation space
- Circulation route
- Clear width, clear height, area

#### In relation to ILS Spaces ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0))

- Bouwlaag (storey): IfcBuildingStorey (in line with the BIM Basis ILS)
- Gebruiksfunctie (use function): IfcZone (or IfcSpatialZone, IfcSpace)
  - <https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruiksfunctie>
- VerblijfsRuimte (habitable room) or Functieruimte (functional room), toilet room, bathroom, storage room, outdoor space, shared circulation space: IfcSpace (or IfcZone, IfcSpatialZone)
- Circulation route: IfcZone
- Walls, floors, roof (to calculate width, height and area): IfcWall, IfcFloor, IfcRoof

#### Environment data

No environment data needed.

## Rule #10: Height difference

### Information requirements

#### Building data (as part of the submitted permit application)

- Use function, residential function
- Type of space, namely habitable area, functional area, bathroom, toilet room, storage room, outdoor space, shared circulation space
- Circulation route
- Stair, ramp, stair landing, ramp landing
- Floors for calculating height differences
- Access to the outdoor area

#### In relation to ILS Spaces ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0))

**1. Safely bridging height differences (from a safety perspective):**

- Bouwlaag (storey): IfcBuildingStorey (in line with the BIM Basis ILS)
- Gebruiksfunctie (use function): IfcZone (or IfcSpatialZone, IfcSpace)
  - <https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruiksfunctie>
- VerblijfsRuimte (habitable room) or Functieruimte (functional room), toilet room, bathroom, storage room, outdoor space, shared circulation space: IfcSpace (or IfcZone, IfcSpatialZone)
- Outdoor storage:
- Circulation route: IfcZone
- Floors: IfcFloor
- Unbuilt space: IfcSite

**2. Bridging height differences (from a general accessibility perspective):**

- Bouwlaag (storey): IfcBuildingStorey (in line with the BIM Basis ILS)
- Gebruiksfunctie (use function): IfcZone (or IfcSpatialZone, IfcSpace)
  - <https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruiksfunctie>
- Woonfunctie (residential function): IfcZone (or IfcSpatialZone, IfcSpace)
- VerblijfsRuimte (habitable room) or Functieruimte (functional room), toilet room, bathroom, storage room, outdoor space, shared circulation space: IfcSpace (or IfcZone, IfcSpatialZone)
- Outdoor storage:
- Circulation route: IfcZone
- Floors: IfcFloor
- Unbuilt space: IfcSite

#### Environment data

In principle none — unless the building directly borders public outdoor space. In that case, the access to the public road / public space and the reference level / ground level matter:

- Public road
- Public green space

#### In relation to geo-standard concepts and imagery

- Reference level: AHN / surveyed terrain model
  - <https://www.ahn.nl/producten>
- Road: BGT Wegdeel and BGT Ondersteunend wegdeel (road part and supporting road part, + classification Function)
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Wegdeel>
  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTkenmerk_functie-wegdeel>
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Ondersteunend%2520wegdeel>
  - [https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTkenmerk_functie-ondersteunend-wegdeel](https://opendata.stelselcatalogus.nl/bgt/doc/gegevenselement/functie-ondersteunend_wegdeel)
- Public green space: BGT Begroeid terreindeel and BGT Onbegroeid terreindeel (vegetated and unvegetated terrain part, + classification Physical appearance)
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Begroeid%2520terreindeel>
  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTkenmerk_plus-fysiek-voorkomen-begroeid-terreindeel>
  - <https://www.stelselcatalogus.nl/detail/objecttype?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTregistratie_entiteit_Onbegroeid%2520terreindeel>
  - <https://www.stelselcatalogus.nl/detail/attribuutsoort?id=https:%2F%2Fpurl.stelselcatalogus.nl%2Fid%2Fmkg%2FBGTkenmerk_fysiek-voorkomen-onbegroeid-terreindeel>

## Rule #11: Rc value

### Information requirements

#### Building data (as part of the submitted permit application)

- Type of space, namely habitable area, functional area, bathroom, toilet room
- Vertical separating constructions: walls, floors and roofs
- Area of vertical separating constructions
- Usable floor area
- Determination method according to NTA 8800 (BENG)

#### In relation to ILS Spaces ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0))

- Kadastraalperceel (cadastral parcel): IfcZone (or IfcSpatialZone, IfcSpace). NB: also environment data
  - <https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Kadastraal-Perceel>
- Gebruiksfunctie (use function): IfcZone (or IfcSpatialZone, IfcSpace)
  - <https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruiksfunctie>
- Wand (wall): ThermalTransmittance, IfcWall
  - <https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Wand>
- Vloer (floor): ThermalTransmittance, IfcSlab
  - <https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Vloer>
- Dak (roof): IfcRoof, ThermalTransmittance
- bSDD: to be determined
- Vliesgevel (curtain wall): ThermalTransmittance, IfcCurtainWall
  - <https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Vliesgevel>

#### Environment data

- Adjacent buildings (terraced houses, for example, have no thermal insulation in the party wall)

#### In relation to geo-standard concepts and imagery

- Existing buildings + status: BAG Pand (building)
  - <https://opendata.stelselcatalogus.nl/bag/doc/begrip/pand>
  - <https://opendata.stelselcatalogus.nl/bag/doc/gegevenselement/status-pand>

## Rule #12: U value

### Information requirements

#### Building data (as part of the submitted permit application)

- Type of space, namely habitable area, bathroom, toilet room
- Windows, doors and frames
- Area of windows, doors and frames, individually and summed
- Determination method according to NTA 8800 (BENG)

#### In relation to ILS Spaces ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0))

- Kadastraalperceel (cadastral parcel): IfcZone (or IfcSpatialZone, IfcSpace). NB: also environment data
- Gebruiksfunctie (use function): IfcZone (or IfcSpatialZone, IfcSpace)
- Deur (door): ThermalTransmittance, IfcDoor
- Raam (window): ThermalTransmittance, IfcWindow
- Vliesgevel (curtain wall): ThermalTransmittance, IfcCurtainWall
  - <https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Vliesgevel>

#### Environment data

No environment data needed.

## Rule #13: MPG

### Information requirements

#### Building data (as part of the submitted permit application)

- Spaces
- Use function
- Usable floor area
- External walls, roofs and floors (bordering the outside air)

#### In relation to ILS Spaces ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0))

- Gebruiksfunctie (use function): IfcZone (or IfcSpatialZone, IfcSpace)
- VerblijfsRuimte (habitable room) or Functieruimte (functional room): IfcSpace (or IfcZone, IfcSpatialZone)
- Walls, roofs, floors: IfcWall, IfcRoof, IfcFloor
- Usable floor area (GO) per space: GO determination method

#### Environment data

No environment data needed.

## Rule #14: Escape routes

### Information requirements

#### Building data (as part of the submitted permit application)

- Spaces
- Use areas
- Grounds belonging to the building
- Use function
- Fire compartments
- Floors
- Doors

#### In relation to ILS Spaces ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0))

- Gebruiksfunctie (use function): IfcZone (or IfcSpatialZone, IfcSpace)
- VerblijfsRuimte (habitable room) or Functieruimte (functional room): IfcSpace (or IfcZone, IfcSpatialZone)
- Grounds belonging to the building: IfcSite
- Brandcompartimenten (fire compartments): IfcZone (or IfcSpatialZone, IfcSpace)
- Doors and floors: IfcDoor and IfcFloor

#### Environment data

- Public road

#### In relation to geo-standard concepts and imagery

- Road: BGT Wegdeel and BGT Ondersteunend wegdeel (road part and supporting road part, + classification Function)
  - <https://opendata.stelselcatalogus.nl/bgt/doc/begrip/wegdeel>
  - <https://opendata.stelselcatalogus.nl/bgt/doc/gegevenselement/functie-wegdeel>
  - <https://opendata.stelselcatalogus.nl/bgt/doc/begrip/ondersteunend_wegdeel>
  - <https://opendata.stelselcatalogus.nl/bgt/doc/gegevenselement/functie-ondersteunend_wegdeel>

## Rule #15: Walking distance

### Information requirements

#### Building data (as part of the submitted permit application)

- Spaces
- Use areas
- Use function
- Usable floor area
- Fire compartments
- Floors
- Doors
- Occupancy rate (staff)

#### In relation to ILS Spaces ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0))

- Gebruiksfunctie (use function): IfcZone (or IfcSpatialZone, IfcSpace)
- VerblijfsRuimte (habitable room) or Functieruimte (functional room): IfcSpace (or IfcZone, IfcSpatialZone)
- Brandcompartimenten (fire compartments): IfcZone (or IfcSpatialZone, IfcSpace)
- Doors and floors: IfcDoor and IfcFloor
- Usable floor area (GO) per space: GO determination method

#### Environment data

No environment data needed.

## Rule #16: Escape width

### Information requirements

#### Building data (as part of the submitted permit application)

- Use function, habitable areas, bed areas
- Escape routes
- Stairs
- Floor area of habitable areas
- Walls, floors and roofs (to calculate clear width and height)
- Doors
- Occupancy rate per habitable area and escape route

#### In relation to ILS Spaces ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0))

**1. Clear passage of escape routes**

- Bouwlaag (storey): IfcBuildingStorey (in line with the BIM Basis ILS)
- Gebruiksfunctie (use function): IfcZone (or IfcSpatialZone, IfcSpace)
  - <https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruiksfunctie>
- Verblijfsgebied (habitable area), bedruimte (bedroom): IfcSpace (or IfcZone, IfcSpatialZone)
- Outdoor storage:
- Vluchtroute (escape route): IfcZone
- Stair: IfcStairs
- Walls, floors, roofs: IfcWall, IfcFloor, IfcRoof

**2. Flow capacity**

- Bouwlaag (storey): IfcBuildingStorey (in line with the BIM Basis ILS)
- Gebruiksfunctie (use function): IfcZone (or IfcSpatialZone, IfcSpace)
  - <https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruiksfunctie>
- Verblijfsgebied (habitable area), bedruimte (bedroom): IfcSpace (or IfcZone, IfcSpatialZone)
- Outdoor storage:
- Vluchtroute (escape route): IfcZone
- Stair: IfcStairs
- Walls, floors, roofs: IfcWall, IfcFloor, IfcRoof
- Doors: IfcDoor

#### Environment data

No environment data needed.

## Rule #17: Daylight

### Information requirements

#### Building data (as part of the submitted permit application)

- Building type
- Type of space, namely habitable area, habitable rooms
- Usable floor area
- Equivalent daylight area according to NEN 2057
- Obstruction angle
- New parcel boundaries (building parcel)

#### In relation to ILS Spaces ([data dictionary](https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0))

Verblijfsruimten (habitable rooms)

Verblijfsgebieden (habitable areas)

<https://search.bsdd.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebouw>

Window, Door, Curtain Wall – net glass area

#### Environment data

- Distance from the building façade to the parcel boundary
- Distance from the building façade to green space, roads and water, and to their centre line
- Current and future changes to the surroundings
- Ownership of adjacent parcels

#### In relation to geo-standard concepts and imagery

- Parcel boundary: BRK – Digital Cadastral Map
  - <https://opendata.stelselcatalogus.nl/brk/doc/begrip/kadastralegrens>
- Interested party / owner: BRK – Zakelijk recht (right in rem) + Natuurlijk or Niet-natuurlijk persoon (natural or legal person)
  - <https://opendata.stelselcatalogus.nl/brk/doc/begrip/zakelijkrecht>
  - <https://opendata.stelselcatalogus.nl/brk/doc/begrip/natuurlijkpersoon>
  - <https://opendata.stelselcatalogus.nl/brk/doc/begrip/nietnatuurlijkpersoon>
- Existing buildings + status: BAG Pand (building)
  - <https://opendata.stelselcatalogus.nl/bag/doc/begrip/pand>
  - <https://opendata.stelselcatalogus.nl/bag/doc/gegevenselement/status-pand>
- Road: BGT Wegdeel and BGT Ondersteunend wegdeel (road part and supporting road part, + classification Function)
  - <https://opendata.stelselcatalogus.nl/bgt/doc/begrip/wegdeel>
  - <https://opendata.stelselcatalogus.nl/bgt/doc/gegevenselement/functie-wegdeel>
  - <https://opendata.stelselcatalogus.nl/bgt/doc/begrip/ondersteunend_wegdeel>
  - <https://opendata.stelselcatalogus.nl/bgt/doc/gegevenselement/functie-ondersteunend_wegdeel>
- Railway: BGT Spoor (+ classification Function)
  - <https://opendata.stelselcatalogus.nl/bgt/doc/begrip/spoor>
  - <https://opendata.stelselcatalogus.nl/bgt/doc/gegevenselement/functie-spoor>
- Public green space: BGT Begroeid terreindeel and BGT Onbegroeid terreindeel (vegetated and unvegetated terrain part, + classification Physical appearance)
  - <https://opendata.stelselcatalogus.nl/bgt/doc/begrip/begroeid_terreindeel>
  - <https://opendata.stelselcatalogus.nl/bgt/doc/gegevenselement/fysiek_voorkomen-begroeid_terreindeel>
  - <https://opendata.stelselcatalogus.nl/bgt/doc/begrip/onbegroeid_terreindeel>
  - <https://opendata.stelselcatalogus.nl/bgt/doc/gegevenselement/fysiek_voorkomen-onbegroeid_terreindeel>
- Water: BGT Waterdeel and BGT Ondersteunend waterdeel (water part and supporting water part, + classification Type)
  - <https://opendata.stelselcatalogus.nl/bgt/doc/begrip/waterdeel>
  - <https://opendata.stelselcatalogus.nl/bgt/doc/gegevenselement/type-waterdeel>
  - <https://opendata.stelselcatalogus.nl/bgt/doc/begrip/ondersteunend_waterdeel>
  - <https://opendata.stelselcatalogus.nl/bgt/doc/gegevenselement/type-ondersteunend_waterdeel>

It has not been discussed how much time this check takes — does anyone know?

### Remarks

