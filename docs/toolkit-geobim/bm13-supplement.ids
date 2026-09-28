<?xml version="1.0" encoding="UTF-8"?>
<ids xmlns="http://standards.buildingsmart.org/IDS"
     xmlns:xs="http://www.w3.org/2001/XMLSchema"
     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     xsi:schemaLocation="http://standards.buildingsmart.org/IDS http://standards.buildingsmart.org/IDS/1.0/ids.xsd">
  <info>
    <title>BM13 supplementary IDS - checks #1 to #17</title>
    <copyright>VNG - Beleidsmaatregel 13</copyright>
    <version>0.3</version>
    <description>Supplement to the ILS Omgevingsvergunning v0.1 IDS set. Contains ONLY the BIM data requirements that the BM13 checks #1-#17 need and that the ILS does not yet check (S01-S08 for R01/R02, S09-S15 for R03-R17). Use together with the ILS IDS files listed per check. Follows ILS section 8.4: buildingSMART property sets only, no additional property sets.</description>
    <date>2026-09-28</date>
    <purpose>Digital building permit - automated compliance checking (BM13)</purpose>
    <milestone>M2 OPA application; repeated at M3</milestone>
  </info>
  <specifications>

    <specification name="BM13-S01 Building elements have body geometry and are contained in a storey"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Physical building elements carry a shape representation and belong to a storey, so footprints (R01) and highest points (R02) can be computed per element."
                   instructions="Export all building elements with 3D body geometry and assign each one to an IfcBuildingStorey.">
      <applicability minOccurs="1" maxOccurs="unbounded">
        <entity>
          <name>
            <xs:restriction base="xs:string">
              <xs:enumeration value="IFCWALL"/>
              <xs:enumeration value="IFCSLAB"/>
              <xs:enumeration value="IFCROOF"/>
              <xs:enumeration value="IFCCOLUMN"/>
              <xs:enumeration value="IFCBEAM"/>
              <xs:enumeration value="IFCCURTAINWALL"/>
              <xs:enumeration value="IFCSTAIR"/>
              <xs:enumeration value="IFCRAMP"/>
              <xs:enumeration value="IFCDOOR"/>
              <xs:enumeration value="IFCWINDOW"/>
              <xs:enumeration value="IFCRAILING"/>
            </xs:restriction>
          </name>
        </entity>
      </applicability>
      <requirements>
        <attribute cardinality="required"><name><simpleValue>Representation</simpleValue></name></attribute>
        <partOf relation="IFCRELCONTAINEDINSPATIALSTRUCTURE" cardinality="required">
          <entity><name><simpleValue>IFCBUILDINGSTOREY</simpleValue></name></entity>
        </partOf>
      </requirements>
    </specification>

    <specification name="BM13-S02 No building element proxies"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Makes ILS section 8.4 ('use the correct entity, no IfcBuildingElementProxy') machine-checkable. A proxy cannot be classified as height-relevant or exempt."
                   instructions="Replace every IfcBuildingElementProxy with the correct IFC class.">
      <applicability minOccurs="0" maxOccurs="0">
        <entity><name><simpleValue>IFCBUILDINGELEMENTPROXY</simpleValue></name></entity>
      </applicability>
      <requirements>
        <attribute cardinality="required"><name><simpleValue>GlobalId</simpleValue></name></attribute>
      </requirements>
    </specification>

    <specification name="BM13-S03 Roof is identifiable"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="The model contains at least one roof: IfcRoof, or IfcSlab with PredefinedType ROOF, with geometry. Needed to find the highest relevant point (R02)."
                   instructions="Model roofs as IfcRoof or as IfcSlab.ROOF, never as a generic slab.">
      <applicability minOccurs="1" maxOccurs="unbounded">
        <entity>
          <name>
            <xs:restriction base="xs:string">
              <xs:enumeration value="IFCROOF"/>
              <xs:enumeration value="IFCSLAB"/>
            </xs:restriction>
          </name>
          <predefinedType><simpleValue>ROOF</simpleValue></predefinedType>
        </entity>
      </applicability>
      <requirements>
        <attribute cardinality="required"><name><simpleValue>Representation</simpleValue></name></attribute>
      </requirements>
    </specification>

    <specification name="BM13-S04 Slabs are typed and state whether they are external"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Slabs carry a PredefinedType and Pset_SlabCommon.IsExternal (optional in ILS 9.18g, required here), so balconies and canopies (R01) and roof slabs (R02) can be identified."
                   instructions="Balconies and canopies: IfcSlab with IsExternal = true.">
      <applicability minOccurs="0" maxOccurs="unbounded">
        <entity><name><simpleValue>IFCSLAB</simpleValue></name></entity>
      </applicability>
      <requirements>
        <attribute cardinality="required">
          <name><simpleValue>PredefinedType</simpleValue></name>
          <value>
            <xs:restriction base="xs:string">
              <xs:enumeration value="FLOOR"/>
              <xs:enumeration value="ROOF"/>
              <xs:enumeration value="LANDING"/>
              <xs:enumeration value="BASESLAB"/>
              <xs:enumeration value="USERDEFINED"/>
            </xs:restriction>
          </value>
        </attribute>
        <property dataType="IFCBOOLEAN" cardinality="required">
          <propertySet><simpleValue>Pset_SlabCommon</simpleValue></propertySet>
          <baseName><simpleValue>IsExternal</simpleValue></baseName>
        </property>
      </requirements>
    </specification>

    <specification name="BM13-S05 Roof-top installations have their own class and geometry"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Chimneys and lift overruns are modelled with their own IFC class and geometry, so the exemption for subordinate parts can be applied (R02)."
                   instructions="Use IfcChimney for chimneys and IfcTransportElement for lift shafts and overruns.">
      <applicability minOccurs="0" maxOccurs="unbounded">
        <entity>
          <name>
            <xs:restriction base="xs:string">
              <xs:enumeration value="IFCCHIMNEY"/>
              <xs:enumeration value="IFCTRANSPORTELEMENT"/>
            </xs:restriction>
          </name>
        </entity>
      </applicability>
      <requirements>
        <attribute cardinality="required"><name><simpleValue>Representation</simpleValue></name></attribute>
      </requirements>
    </specification>

    <specification name="BM13-S06 Doors state whether they are external"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Pset_DoorCommon.IsExternal is filled (optional in ILS 9.18e, required here), so candidate main entrances on the entrance level (ILS 9.06a EntranceLevel) can be found for the peil (R02)."
                   instructions="Set IsExternal true on every door in the facade.">
      <applicability minOccurs="1" maxOccurs="unbounded">
        <entity><name><simpleValue>IFCDOOR</simpleValue></name></entity>
      </applicability>
      <requirements>
        <property dataType="IFCBOOLEAN" cardinality="required">
          <propertySet><simpleValue>Pset_DoorCommon</simpleValue></propertySet>
          <baseName><simpleValue>IsExternal</simpleValue></baseName>
        </property>
      </requirements>
    </specification>

    <specification name="BM13-S07 Storeys have an elevation"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Every storey has an Elevation, used to separate above-ground from below-ground parts (R01 includeBelowGround, R02)."
                   instructions="Elevation relative to the model's local z = 0; the same in all discipline models.">
      <applicability minOccurs="1" maxOccurs="unbounded">
        <entity><name><simpleValue>IFCBUILDINGSTOREY</simpleValue></name></entity>
      </applicability>
      <requirements>
        <attribute cardinality="required"><name><simpleValue>Elevation</simpleValue></name></attribute>
      </requirements>
    </specification>

    <specification name="BM13-S08 Exactly one building per model"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="One IfcBuilding per IFC file, so building-level results (use function, height) are unambiguous."
                   instructions="Deliver one IFC per building for multi-building applications.">
      <applicability minOccurs="1" maxOccurs="1">
        <entity><name><simpleValue>IFCBUILDING</simpleValue></name></entity>
      </applicability>
      <requirements>
        <attribute cardinality="required"><name><simpleValue>Name</simpleValue></name></attribute>
      </requirements>
    </specification>

    <!-- ===================== Checks #3-#17 (S09-S15) ===================== -->

    <specification name="BM13-S09a Stair flights have riser height and tread length"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Stair flights carry Pset_StairFlightCommon.RiserHeight and TreadLength and have geometry (height difference, escape routes, escape width)."
                   instructions="Model stairs as IfcStair with IfcStairFlight parts; fill RiserHeight and TreadLength.">
      <applicability minOccurs="0" maxOccurs="unbounded">
        <entity><name><simpleValue>IFCSTAIRFLIGHT</simpleValue></name></entity>
      </applicability>
      <requirements>
        <attribute cardinality="required"><name><simpleValue>Representation</simpleValue></name></attribute>
        <property dataType="IFCPOSITIVELENGTHMEASURE" cardinality="required">
          <propertySet><simpleValue>Pset_StairFlightCommon</simpleValue></propertySet>
          <baseName><simpleValue>RiserHeight</simpleValue></baseName>
        </property>
        <property dataType="IFCPOSITIVELENGTHMEASURE" cardinality="required">
          <propertySet><simpleValue>Pset_StairFlightCommon</simpleValue></propertySet>
          <baseName><simpleValue>TreadLength</simpleValue></baseName>
        </property>
      </requirements>
    </specification>

    <specification name="BM13-S09b Ramp flights have slope and clear width"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Ramp flights carry Pset_RampFlightCommon.Slope and ClearWidth and have geometry."
                   instructions="Model ramps as IfcRamp with IfcRampFlight parts; fill Slope and ClearWidth.">
      <applicability minOccurs="0" maxOccurs="unbounded">
        <entity><name><simpleValue>IFCRAMPFLIGHT</simpleValue></name></entity>
      </applicability>
      <requirements>
        <attribute cardinality="required"><name><simpleValue>Representation</simpleValue></name></attribute>
        <property dataType="IFCPLANEANGLEMEASURE" cardinality="required">
          <propertySet><simpleValue>Pset_RampFlightCommon</simpleValue></propertySet>
          <baseName><simpleValue>Slope</simpleValue></baseName>
        </property>
        <property dataType="IFCPOSITIVELENGTHMEASURE" cardinality="required">
          <propertySet><simpleValue>Pset_RampFlightCommon</simpleValue></propertySet>
          <baseName><simpleValue>ClearWidth</simpleValue></baseName>
        </property>
      </requirements>
    </specification>

    <specification name="BM13-S10 Lifts are modelled as elevators with geometry"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Lifts are IfcTransportElement with PredefinedType ELEVATOR and geometry (accessibility; excluded from escape routes)."
                   instructions="Use IfcTransportElement.ELEVATOR for every lift and lift shaft car.">
      <applicability minOccurs="0" maxOccurs="unbounded">
        <entity>
          <name><simpleValue>IFCTRANSPORTELEMENT</simpleValue></name>
          <predefinedType><simpleValue>ELEVATOR</simpleValue></predefinedType>
        </entity>
      </applicability>
      <requirements>
        <attribute cardinality="required"><name><simpleValue>Representation</simpleValue></name></attribute>
      </requirements>
    </specification>

    <specification name="BM13-S11 Second-level space boundaries are exported"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="The model contains second-level space boundaries, each with its building element and connection geometry (adjacency for routes and enclosures). IDS can only test that they exist and are complete; whether every space is bounded is checked by F36."
                   instructions="Export 2nd-level space boundaries (IfcRelSpaceBoundary2ndLevel) from the authoring tool.">
      <applicability minOccurs="1" maxOccurs="unbounded">
        <entity><name><simpleValue>IFCRELSPACEBOUNDARY2NDLEVEL</simpleValue></name></entity>
      </applicability>
      <requirements>
        <attribute cardinality="required"><name><simpleValue>RelatingSpace</simpleValue></name></attribute>
        <attribute cardinality="required"><name><simpleValue>RelatedBuildingElement</simpleValue></name></attribute>
        <attribute cardinality="required"><name><simpleValue>ConnectionGeometry</simpleValue></name></attribute>
      </requirements>
    </specification>

    <specification name="BM13-S12 External envelope elements have a U-value"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="External walls, slabs, roofs, windows, doors and curtain walls carry ThermalTransmittance in their Pset_...Common (Rc and U checks). Optional in ILS 9.18, required here."
                   instructions="Fill ThermalTransmittance (W/m2K) on every element with IsExternal = true.">
      <applicability minOccurs="0" maxOccurs="unbounded">
        <entity>
          <name>
            <xs:restriction base="xs:string">
              <xs:enumeration value="IFCWALL"/>
              <xs:enumeration value="IFCSLAB"/>
              <xs:enumeration value="IFCROOF"/>
              <xs:enumeration value="IFCWINDOW"/>
              <xs:enumeration value="IFCDOOR"/>
              <xs:enumeration value="IFCCURTAINWALL"/>
            </xs:restriction>
          </name>
        </entity>
        <property dataType="IFCBOOLEAN">
          <propertySet><xs:restriction base="xs:string"><xs:pattern value="Pset_.*Common"/></xs:restriction></propertySet>
          <baseName><simpleValue>IsExternal</simpleValue></baseName>
          <value><simpleValue>true</simpleValue></value>
        </property>
      </applicability>
      <requirements>
        <property dataType="IFCTHERMALTRANSMITTANCEMEASURE" cardinality="required">
          <propertySet><xs:restriction base="xs:string"><xs:pattern value="Pset_.*Common"/></xs:restriction></propertySet>
          <baseName><simpleValue>ThermalTransmittance</simpleValue></baseName>
        </property>
      </requirements>
    </specification>

    <specification name="BM13-S13a Compartment walls have a fire rating"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Walls marked Pset_WallCommon.Compartmentation = true carry FireRating (fire compartments, fire resistance)."
                   instructions="Set Compartmentation = true on walls that bound a fire compartment and fill FireRating (e.g. EI 60).">
      <applicability minOccurs="0" maxOccurs="unbounded">
        <entity><name><simpleValue>IFCWALL</simpleValue></name></entity>
        <property dataType="IFCBOOLEAN">
          <propertySet><simpleValue>Pset_WallCommon</simpleValue></propertySet>
          <baseName><simpleValue>Compartmentation</simpleValue></baseName>
          <value><simpleValue>true</simpleValue></value>
        </property>
      </applicability>
      <requirements>
        <property dataType="IFCLABEL" cardinality="required">
          <propertySet><simpleValue>Pset_WallCommon</simpleValue></propertySet>
          <baseName><simpleValue>FireRating</simpleValue></baseName>
        </property>
      </requirements>
    </specification>

    <specification name="BM13-S13b Floors have a fire rating"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Floor slabs carry Pset_SlabCommon.FireRating (floors usually separate compartments)."
                   instructions="Fill FireRating on every floor slab.">
      <applicability minOccurs="0" maxOccurs="unbounded">
        <entity>
          <name><simpleValue>IFCSLAB</simpleValue></name>
          <predefinedType><simpleValue>FLOOR</simpleValue></predefinedType>
        </entity>
      </applicability>
      <requirements>
        <property dataType="IFCLABEL" cardinality="required">
          <propertySet><simpleValue>Pset_SlabCommon</simpleValue></propertySet>
          <baseName><simpleValue>FireRating</simpleValue></baseName>
        </property>
      </requirements>
    </specification>

    <specification name="BM13-S13c Load-bearing columns have a fire rating"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Columns with Pset_ColumnCommon.LoadBearing = true carry FireRating."
                   instructions="Fill FireRating on every load-bearing column.">
      <applicability minOccurs="0" maxOccurs="unbounded">
        <entity><name><simpleValue>IFCCOLUMN</simpleValue></name></entity>
        <property dataType="IFCBOOLEAN">
          <propertySet><simpleValue>Pset_ColumnCommon</simpleValue></propertySet>
          <baseName><simpleValue>LoadBearing</simpleValue></baseName>
          <value><simpleValue>true</simpleValue></value>
        </property>
      </applicability>
      <requirements>
        <property dataType="IFCLABEL" cardinality="required">
          <propertySet><simpleValue>Pset_ColumnCommon</simpleValue></propertySet>
          <baseName><simpleValue>FireRating</simpleValue></baseName>
        </property>
      </requirements>
    </specification>

    <specification name="BM13-S14 Doors have overall width and height"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Every door carries OverallWidth and OverallHeight (clear width, escape width). Pset_DoorCommon.FireExit is already required by ILS 9.18e."
                   instructions="Export OverallWidth and OverallHeight on every IfcDoor.">
      <applicability minOccurs="0" maxOccurs="unbounded">
        <entity><name><simpleValue>IFCDOOR</simpleValue></name></entity>
      </applicability>
      <requirements>
        <attribute cardinality="required"><name><simpleValue>OverallWidth</simpleValue></name></attribute>
        <attribute cardinality="required"><name><simpleValue>OverallHeight</simpleValue></name></attribute>
      </requirements>
    </specification>

    <specification name="BM13-S15 Windows have overall size and state whether they are external"
                   ifcVersion="IFC4 IFC4X3_ADD2"
                   description="Every window carries OverallWidth, OverallHeight and Pset_WindowCommon.IsExternal (daylight)."
                   instructions="Export OverallWidth and OverallHeight on every IfcWindow; fill IsExternal. GlazingAreaFraction is recommended.">
      <applicability minOccurs="0" maxOccurs="unbounded">
        <entity><name><simpleValue>IFCWINDOW</simpleValue></name></entity>
      </applicability>
      <requirements>
        <attribute cardinality="required"><name><simpleValue>OverallWidth</simpleValue></name></attribute>
        <attribute cardinality="required"><name><simpleValue>OverallHeight</simpleValue></name></attribute>
        <property dataType="IFCBOOLEAN" cardinality="required">
          <propertySet><simpleValue>Pset_WindowCommon</simpleValue></propertySet>
          <baseName><simpleValue>IsExternal</simpleValue></baseName>
        </property>
      </requirements>
    </specification>

  </specifications>
</ids>
