# Modelling guideline: objects in IFC

<p class="note">Source: guidance by Menno Mekes, taken from <a href="https://ucm.buildingsmart.org/">ucm.buildingsmart.org</a> (buildingSMART Use Case Management). Included with minor editorial changes. Supplemented with agreements from this ILS: the areas in two layers, the requirements for parcel, building and storey, and the way of working. Machine-translated from the Dutch version, which is authoritative.</p>

## Identification

A selected object in a model must meet a specification. The object type is therefore essential. Like the object's name, it is an attribute in IFC.

## Attributes

Three attributes must be filled in for every requested object:

- **Name**: the name of the object.
- **ObjectType**: the kind of object according to this ILS. Each ObjectType has its own specification.
- **Description**: the measuring method (*bepalingsmethode*) of the object, from an enumeration (Dutch values, e.g. *Bruto Inhoud*).

## Classification

ObjectType is the type of the object and corresponds to one of the specifications. The specifications are published in the bSDD: [identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0).

Each class in this library has its own URI. That URI must be assigned to the spatial objects as a classification, so that this ILS can be visualised from the discipline model in IFC viewers.

## Geometric objects

### IfcSpace

A space, such as a bedroom, is an `IfcSpace`. It is a space enclosed by floors, walls, ceilings and possibly virtual boundaries. It is an object that represents the net volume.

### IfcSpatialZone

An area is a collection of spaces and partitions, possibly with changes such as shafts and voids. An `IfcSpatialZone` is therefore an object that must be modelled separately to be correct. An example is the usable volume (*gebruiksinhoud*) of a dwelling.

Because this ILS uses ObjectTypes, only `USERDEFINED` is allowed as `PredefinedType`.

ObjectType is a refinement of the entity at the same level as the `PredefinedType`. Dutch building practice uses terms that are not in the predefined buildingSMART enumeration. That is why all spatial objects are `USERDEFINED` and carry an ObjectType.

> **Recommendation:** although areas can also be exported as `IfcSpace`, we recommend using `IfcSpatialZone` for them.
>
> - Distinguishing between space and area in IFC makes it easy to separate them at entity level.
> - It is also easier to export the areas separately, apart from the physical objects and spaces.

<a id="gebieden-twee-lagen"></a>

### Areas in two layers

The areas lie in two layers:

1. **Gebruiksgebied** (use area), **Restgebied** (residual area) and **Buitengebied** (outdoor area) form the top layer.
2. **Functiegebied** (function area), **Verblijfsgebied** (habitable area) and **Bedgebied** (bed area) lie within them.

`Name` is free text, but must be filled in: the grouping of spaces and areas is based on the name.

### IfcExternalSpatialElement

Spatial elements outside the building. This entity is used to model the outdoor area.

### IfcGeographicElement

Spatial elements outside the building. This entity is used to model terrain.

### IfcWall, IfcDoor and other physical objects

This ILS is mainly about spatial objects. Physical objects are still mentioned, because they can contain information for the environmental permit, such as the fire resistance of a wall or the presence of a door.

For fire safety, the ILS asks for physical objects whether a beam, column, slab or wall is load-bearing (`LoadBearing`, mandatory). Optional are: whether a slab or wall contributes to fire compartmentation (`Compartmentation`); for doors and windows `FireExit` and `SmokeStop`, for doors also `SelfClosing`; and the fire resistance (`FireRating`) as class and time according to NEN-EN 13501-2, e.g. `REI 60`. For fire compartments, `SprinklerProtection` and `SprinklerProtectionAutomatic` are optional. The value lists for `FireRating` and `SurfaceSpreadOfFlame` are provisional: decision of the municipal working group of 3 November 2026, subject to alignment with the BIM basis ILS via digiGO.

## Administrative objects

### IfcZone

A zone is a collection of spaces and areas and shows what these objects belong to. The usable volume of a dwelling, together with the spaces of that dwelling, belongs to an `IfcZone` 'Woning A' (dwelling A), but also to an `IfcZone` 'BRC1' showing that this dwelling lies in fire compartment 1.

*Brandcompartiment* (fire compartment), *Subbrandcompartiment* (sub-fire compartment), *Beschermd subbrandcompartiment* (protected sub-fire compartment) and *Vluchtroute* (escape route) are important zones with their own specification in this ILS.

Spatial objects can be part of several zones. In IFC this relationship is recorded with `IfcRelAssignsToGroup`. A zone is not hierarchical.

### IfcProject < IfcSite < IfcBuilding < IfcBuildingStorey

In the IFC hierarchy, an object is related to a storey, the `IfcBuildingStorey`. All storeys together fall under the building, the `IfcBuilding`. This building stands on a parcel, the `IfcSite`, which in turn is part of the project, the `IfcProject`.

This structure usually arises automatically on export. Various attributes and properties of these entities are required, however.

The specifications include *Perceel*, *Bouwwerkperceel* and *Kadastraal Perceel*, as well as *Gebouw* and *Gebouwinhoud*, and *Bouwlaag* and *Bouwlaaginhoud*. The difference: **Perceel, Gebouw and Bouwlaag are the administrative objects**; the others are spatial objects.

It is very unusual to export modelled objects to `IfcSite`, `IfcBuilding` or `IfcBuildingStorey`. These objects therefore do not need geometry or a placement of their own. The cadastral parcel is the drawn object: an `IfcSpatialZone` with ObjectType `Kadastraal Perceel`, a `Name` and geometry of its own, apart from the `IfcSite`. The parcel data (`Pset_LandRegistration`) are on the `IfcSite`.

Two properties from `Pset_BuildingStoreyCommon` are requested for every storey:

- **EntranceLevel** (mandatory): is this storey an entrance level of the building?
- **AboveGround** (optional, until the check that uses it has been identified): does the storey lie entirely above ground level (`TRUE`), entirely below it (`FALSE`), or partly above and partly below it, for example on sloping terrain (`UNKNOWN`)?

## Georeferencing with IfcMapConversion and IfcProjectedCRS (LoGeoRef 50)

In the Netherlands we use the RD coordinate system. The coordinates of the building and the rotation angle show where the project is located.

Coordinates alone are not enough. To place the model in the right position in the world, for example in the city model of Rotterdam, the model must state that these coordinates are in the Netherlands: that they are expressed in RD. RD is an EPSG code that must be entered in the `IfcProjectedCRS`.

Two classes are allowed for the conversion: `IfcMapConversion` and `IfcMapConversionScaled`. `IfcMapConversionScaled` only exists in IFC4.3 and is the recommended route there for RD with NAP (EPSG:7415). In IFC4, use `IfcMapConversion`.

<a id="werkwijze"></a>

## Way of working

Build up the model in this order:

1. **Spaces**: model the spaces as `IfcSpace` and give each space its ObjectType.
2. **Building**: record the building and the storeys (`IfcBuilding` with ObjectType `Gebouw`, `IfcBuildingStorey` with ObjectType `Bouwlaag`).
3. **Areas**: add the areas, first the top layer and then the second layer within it (see [Areas in two layers](#gebieden-twee-lagen)).

## Relation to the rest of this ILS

| Topic in this guideline | Where it is worked out in this ILS |
|---|---|
| Name, ObjectType, Description per specification | [LOIN per sub-specification](#loin) and the IDS files in `ids/` |
| Classification with bSDD URI | [Information production standard](#standaard), [Reference information](#referentie) |
| IfcSpace / IfcSpatialZone / IfcZone | [Information production standard](#standaard), agreement *Entities* |
| Georeferencing (EPSG:28992 / EPSG:7415, NAP) | [Acceptance criteria](#acceptatie), AC4; [LOIN](#loin-geometrie), requirement G2 |
