# ILS for the environmental permit — specifications {#ils-omgevingsvergunning}

Machine-readable submission requirements for modelling spaces in an environmental permit application, expressed as [buildingSMART IDS](https://www.buildingsmart.org/standards/bsi-standards/information-delivery-specification-ids/) 1.0.

| | |
|---|---|
| **Source** | `ILS voor omgevingsvergunning` v0.1 — 42 specifications |
| **IFC schema** | IFC4 and IFC4X3_ADD2 |
| **Concepts** | bSDD dictionary [Omgevingswet Ruimten](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) 0.3.0 (`bsnl`, nl-NL) |
| **Process step** | GEMMA 015-02 Substantive handling of the permit application / 015-02-02 Checking activities against regulations |
| **Checks** | 17 rules from the BM13 rule inventory v0.3, 3 July 2026 |

Each specification is also available as a separate `.ids` file, numbered in the same order. The XML blocks below only show the `ids:specification` element; a separate file also contains the `ids:info` block — with the check numbers in `purpose` and the GEMMA process step in `milestone` — and can therefore be validated on its own.

<div class="note" title="About this translation">

The specification names (such as *9.03a Perceel*) are class names from the Dutch bSDD dictionary and are kept in Dutch; the descriptions explain them in English. The IDS XML is unchanged, because it is the specification itself.

</div>

## Overview per check

The 17 checks come from the BM13 rule inventory v0.3, 3 July 2026. Rules #1–#6 concern the environment plan (OPA), rules #7–#17 the Buildings (Living Environment) Decree (Bbl).

| Check | Subject | Specifications |
|-------|-----------|---------------|
| **#1** | Use function matches the zoning designation | 01, 02, 03, 04, 05, 06, 07, 09, 10, 13, 15, 16, 17, 25, 26 |
| **#2** | Maximum building height | 01, 02, 03, 04, 05, 06, 07, 09, 10, 13 |
| **#3** | Maximum building coverage percentage | 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 16, 25, 26 |
| **#4** | Use function / designation limited to a given number of storeys | 01, 04, 05, 06, 07, 11, 13, 16, 17 |
| **#5** | Home-based occupation: max. 50% of usable floor area | 01, 02, 03, 04, 05, 06, 07, 09, 10, 15, 16, 17, 23, 25, 26, 28, 33 |
| **#6** | Maximum number of storeys | 01, 04, 05, 06, 07, 09, 10, 13, 14, 16, 23, 25, 26, 28, 33 |
| **#7** | Fire compartments | 01, 02, 03, 07, 09, 10, 16, 30, 35, 37, 38, 40, 41 |
| **#8** | Fire resistance | 01, 07, 30, 35, 37, 38, 40, 41 |
| **#9** | Clear width | 01, 07, 13, 16, 18, 19, 21, 24, 25, 26, 29, 40, 41 |
| **#10** | Height difference | 01, 02, 03, 07, 08, 13, 16, 18, 19, 21, 24, 25, 26, 29, 40 |
| **#11** | Rc value | 01, 07, 10, 16, 18, 19, 36, 37, 40, 41 |
| **#12** | U value | 01, 07, 10, 16, 37, 38, 42 |
| **#13** | MPG | 01, 07, 16, 25, 26, 40, 41 |
| **#14** | Escape routes | 01, 07, 08, 16, 21, 25, 26, 30, 32, 38, 40 |
| **#15** | Walking distance | 01, 07, 16, 20, 21, 25, 26, 30, 31, 32, 33, 38, 40 |
| **#16** | Escape width | 01, 07, 13, 16, 19, 20, 22, 27, 32, 38, 40, 41 |
| **#17** | Daylight | 01, 02, 03, 07, 08, 09, 10, 11, 16, 19, 26, 37, 38, 41, 42 |

---

## Overview per specification

| No. | Specification | ifcVersion | BM13 checks |
|----|--------------|------------|-------------|
| 01 | [9 ILS voor Ruimten in de omgevingswet](#01-9-ils-voor-ruimten-in-de-omgevingswet) | IFC4 IFC4X3_ADD2 | #1, #2, #3, #4, #5, #6, #7, #8, #9, #10, #11, #12, #13, #14, #15, #16, #17 |
| 02 | [9.01a Georeferentie](#02-901a-georeferentie) | IFC4 IFC4X3_ADD2 | #1, #2, #3, #5, #7, #10, #17 |
| 03 | [9.01b Coördinatenstelsel](#03-901b-coordinatenstelsel) | IFC4 IFC4X3_ADD2 | #1, #2, #3, #5, #7, #10, #17 |
| 04 | [9.01c Projectadres (IFC4X3_ADD2)](#04-901c-projectadres-ifc4x3_add2) | IFC4X3_ADD2 | #1, #2, #3, #4, #5, #6 |
| 05 | [9.01d Perceeladres (IFC4)](#05-901d-perceeladres-ifc4) | IFC4 | #1, #2, #3, #4, #5, #6 |
| 06 | [9.01e Gebouwadres (IFC4)](#06-901e-gebouwadres-ifc4) | IFC4 | #1, #2, #3, #4, #5, #6 |
| 07 | [9.02 Project](#07-902-project) | IFC4 IFC4X3_ADD2 | #1, #2, #3, #4, #5, #6, #7, #8, #9, #10, #11, #12, #13, #14, #15, #16, #17 |
| 08 | [9.03a Perceel](#08-903a-perceel) | IFC4X3_ADD2 IFC4 | #3, #10, #14, #17 |
| 09 | [9.03b Bouwwerkperceel](#09-903b-bouwwerkperceel) | IFC4 IFC4X3_ADD2 | #1, #2, #3, #5, #6, #7, #17 |
| 10 | [9.04 Kadastraal Perceel](#10-904-kadastraal-perceel) | IFC4X3_ADD2 IFC4 | #1, #2, #3, #5, #6, #7, #11, #12, #17 |
| 11 | [9.05a Gebouw](#11-905a-gebouw) | IFC4 IFC4X3_ADD2 | #3, #4, #17 |
| 12 | [9.05b Gebouwinhoud](#12-905b-gebouwinhoud) | IFC4 IFC4X3_ADD2 | #3 |
| 13 | [9.06a Bouwlaag (voorheen verdieping)](#13-906a-bouwlaag-voorheen-verdieping) | IFC4 IFC4X3_ADD2 | #1, #2, #3, #4, #6, #9, #10, #16 |
| 14 | [9.06b Bouwlaaginhoud (voorheen bouwlaagobject)](#14-906b-bouwlaaginhoud-voorheen-bouwlaagobject) | IFC4 IFC4X3_ADD2 | #3, #6 |
| 15 | [9.07 Gebruikseenheid (voorheen eigendom-, en gebruikseenheid)](#15-907-gebruikseenheid-voorheen-eigendom--en-gebruikseenheid) | IFC4 IFC4X3_ADD2 | #1, #5 |
| 16 | [9.08 Gebruiksfunctie](#16-908-gebruiksfunctie) | IFC4 IFC4X3_ADD2 | #1, #3, #4, #5, #6, #7, #9, #10, #11, #12, #13, #14, #15, #16, #17 |
| 17 | [9.09 Nevengebruiksfunctie](#17-909-nevengebruiksfunctie) | IFC4X3_ADD2 IFC4 | #1, #4, #5 |
| 18 | [9.10a Functiegebied](#18-910a-functiegebied) | IFC4 IFC4X3_ADD2 | #9, #10, #11 |
| 19 | [9.10b Verblijfsgebied](#19-910b-verblijfsgebied) | IFC4 IFC4X3_ADD2 | #9, #10, #11, #16, #17 |
| 20 | [9.10c Verblijfsgebied met bezettingsgraad](#20-910c-verblijfsgebied-met-bezettingsgraad) | IFC4 IFC4X3_ADD2 | #15, #16 |
| 21 | [9.10d Gebruiksgebied](#21-910d-gebruiksgebied) | IFC4 IFC4X3_ADD2 | #9, #10, #14, #15 |
| 22 | [9.10e Bedgebied](#22-910e-bedgebied) | IFC4 IFC4X3_ADD2 | #16 |
| 23 | [9.10f Restgebied](#23-910f-restgebied) | IFC4 IFC4X3_ADD2 | #5, #6 |
| 24 | [9.11 Buitengebied](#24-911-buitengebied) | IFC4 IFC4X3_ADD2 | #9, #10 |
| 25 | [9.12a Functieruimte](#25-912a-functieruimte) | IFC4 IFC4X3_ADD2 | #1, #3, #5, #6, #9, #10, #13, #14, #15 |
| 26 | [9.12b Verblijfsruimte](#26-912b-verblijfsruimte) | IFC4 IFC4X3_ADD2 | #1, #3, #5, #6, #9, #10, #13, #14, #15, #17 |
| 27 | [9.12c Bedruimte](#27-912c-bedruimte) | IFC4 IFC4X3_ADD2 | #16 |
| 28 | [9.12d Restruimte](#28-912d-restruimte) | IFC4 IFC4X3_ADD2 | #5, #6 |
| 29 | [9.13 Buitenruimte](#29-913-buitenruimte) | IFC4 IFC4X3_ADD2 | #9, #10 |
| 30 | [9.16a Brandcompartiment](#30-916a-brandcompartiment) | IFC4 IFC4X3_ADD2 | #7, #8, #14, #15 |
| 31 | [9.16b Subbrandcompartiment](#31-916b-subbrandcompartiment) | IFC4 IFC4X3_ADD2 | #15 |
| 32 | [9.16c Vluchtroute](#32-916c-vluchtroute) | IFC4 IFC4X3_ADD2 | #14, #15, #16 |
| 33 | [9.17 Tarra Ruimte](#33-917-tarra-ruimte) | IFC4 IFC4X3_ADD2 | #5, #6, #15 |
| 34 | [9.18a Fysieke elementen IfcBeam](#34-918a-fysieke-elementen-ifcbeam) | IFC4 IFC4X3_ADD2 | — |
| 35 | [9.18b Fysieke elementen IfcColumn](#35-918b-fysieke-elementen-ifccolumn) | IFC4 IFC4X3_ADD2 | #7, #8 |
| 36 | [9.18c Fysieke elementen IfcCovering.INSULATION](#36-918c-fysieke-elementen-ifccoveringinsulation) | IFC4 IFC4X3_ADD2 | #11 |
| 37 | [9.18d Fysieke elementen IfcCurtainWall](#37-918d-fysieke-elementen-ifccurtainwall) | IFC4 IFC4X3_ADD2 | #7, #8, #11, #12, #17 |
| 38 | [9.18e Fysieke elementen IfcDoor](#38-918e-fysieke-elementen-ifcdoor) | IFC4 IFC4X3_ADD2 | #7, #8, #12, #14, #15, #16, #17 |
| 39 | [9.18f Fysieke elementen IfcSensor](#39-918f-fysieke-elementen-ifcsensor) | IFC4 IFC4X3_ADD2 | — |
| 40 | [9.18g Fysieke elementen IfcSlab](#40-918g-fysieke-elementen-ifcslab) | IFC4 IFC4X3_ADD2 | #7, #8, #9, #10, #11, #13, #14, #15, #16 |
| 41 | [9.18h Fysieke elementen IfcWall](#41-918h-fysieke-elementen-ifcwall) | IFC4 IFC4X3_ADD2 | #7, #8, #9, #11, #13, #16, #17 |
| 42 | [9.18i Fysieke elementen Ifcwindow](#42-918i-fysieke-elementen-ifcwindow) | IFC4 IFC4X3_ADD2 | #12, #17 |



## 01 — 9 ILS voor Ruimten in de omgevingswet {#01-9-ils-voor-ruimten-in-de-omgevingswet}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#1** Use function matches the zoning designation, **#2** Maximum building height, **#3** Maximum building coverage percentage, **#4** Use function / designation limited to a given number of storeys, **#5** Home-based occupation: max. 50% of usable floor area, **#6** Maximum number of storeys, **#7** Fire compartments, **#8** Fire resistance, **#9** Clear width, **#10** Height difference, **#11** Rc value, **#12** U value, **#13** MPG, **#14** Escape routes, **#15** Walking distance, **#16** Escape width, **#17** Daylight |
| **File** | `01 9 ILS voor Ruimten in de omgevingswet.ids` |

To limit the number of specifications, this specification names requirements that do occur in IfcSpatialZone, IfcSpace and IfcExternalSpatialElement, but not in IfcZone.

*Link to checks:* Generic requirement (placement and representation) for every spatial entity; a precondition for every check that relies on spaces.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9 ILS voor Ruimten in de omgevingswet" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0" description="Om het aantal specificaties te beperken worden in deze specificatie vereisten benoemd die wel in IfcSpatialZone, IfcSpace en IfcExternalSpatialElement voorkomen maar niet in IfcZone.">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCSPATIALZONE" />
          <xs:enumeration value="IFCSPACE" />
          <xs:enumeration value="IFCEXTERNALSPATIALELEMENT" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
  </ids:applicability>
  <ids:requirements>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>ObjectPlacement</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Representation</ids:simpleValue>
      </ids:name>
    </ids:attribute>
  </ids:requirements>
</ids:specification>
```

## 02 — 9.01a Georeferentie {#02-901a-georeferentie}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Georeferentie`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Georeferentie) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#1** Use function matches the zoning designation, **#2** Maximum building height, **#3** Maximum building coverage percentage, **#5** Home-based occupation: max. 50% of usable floor area, **#7** Fire compartments, **#10** Height difference, **#17** Daylight |
| **File** | `02 9.01a Georeferentie.ids` |

Georeferencing with IfcMapConversion (LoGeoRef 50). A BIM model must contain the IFC class IFCMAPCONVERSION with the attributes Easting, Northing, OrthogonalHeight, XAxisAbscissa, XAxisOrdinate and Scale filled in. The model must have a SourceCRS and a TargetCRS; this cannot, however, be validated with IDS. More information on georeferencing: https://geonovum.github.io/GeoBIM_Georefereren

*Link to checks:* Precondition for all checks; explicitly required wherever the model is combined with environment data (parcel boundary, reference level, adjacent buildings).

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.01a Georeferentie" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Georeferentie" description="Georeferentie met IfcMapConversion. (LoGref50) Een BIM-Model moet de IFCClass IFCMAPCONVERSION bevatten met de attributen Easting, Northing, OrthogonalHeight, XAxisAbscissa, XAxisOrdinate en Scale ingevuld. Het model dient een SourceCRS en TargetCRS te hebben. Dit is echter niet te valideren d.m.v. IDS. Meer informatie over Georefereren: https://geonovum.github.io/GeoBIM_Georefereren">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <ids:simpleValue>IFCMAPCONVERSION</ids:simpleValue>
      </ids:name>
    </ids:entity>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Georeferentie" cardinality="optional">
      <ids:value>
        <ids:simpleValue>Georeferentie</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required" instructions="Verplaatsing in Oostrichting om het BIM-model op de goede plek te krijgen.&#10;Voorbeeld: 92370.710706">
      <ids:name>
        <ids:simpleValue>Eastings</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required" instructions="Verplaatsing in Noordrichting om het BIM-model op de goede plek te krijgen.&#10;Voorbeeld: 437455.379788">
      <ids:name>
        <ids:simpleValue>Northings</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required" instructions="Verplaatsing in Hoogterichting om het BIM-model op de goede plek te krijgen.&#10;Voorbeeld: 1.3092">
      <ids:name>
        <ids:simpleValue>OrthogonalHeight</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required" instructions="Specificeert de waarde langs de oostelijke as van het eindpunt van een vector die de positie van de lokale x-as van het engineering coördinaatreferentiesysteem aangeeft.&#10;Voorbeeld: 0.8">
      <ids:name>
        <ids:simpleValue>XAxisAbscissa</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required" instructions="Specificeert de waarde langs de oostelijke as van het eindpunt van een vector die de positie van de lokale x-as van het engineering coördinaatreferentiesysteem aangeeft.&#10;Voorbeeld: 0.1">
      <ids:name>
        <ids:simpleValue>XAxisOrdinate</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required" instructions="Schaal van eenheden in BIM-model t.o.v. eenheden in target CRS&#10;Voorbeeld: 1/0.001">
      <ids:name>
        <ids:simpleValue>Scale</ids:simpleValue>
      </ids:name>
    </ids:attribute>
  </ids:requirements>
</ids:specification>
```

## 03 — 9.01b Coördinatenstelsel {#03-901b-coordinatenstelsel}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Coordinatenstelsel`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Coordinatenstelsel) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#1** Use function matches the zoning designation, **#2** Maximum building height, **#3** Maximum building coverage percentage, **#5** Home-based occupation: max. 50% of usable floor area, **#7** Fire compartments, **#10** Height difference, **#17** Daylight |
| **File** | `03 9.01b Coördinatenstelsel.ids` |

Coordinate reference system in RD or RD + NAP (LoGeoRef 50). For Dutch submissions, the TargetCRS attribute must be an IfcProjectedCRS with the VerticalDatum attribute EPSG:7415 (RD + NAP), or EPSG:28992 (RD) and EPSG:5709 (NAP). More information on georeferencing: https://geonovum.github.io/GeoBIM_Georefereren

*Link to checks:* As 9.01a; RD/NAP is a precondition for combining the model with BRK, BGT and AHN.

> **Note for the modeller.** This CRS requirement only applies to Dutch projects where the size of the project, combined with the curvature of the earth, does not cause problems. If that is not the case, IfcGeographicCRS and/or another EPSG code may also be used. IfcProjectedCRS cannot be given a classification. https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Cordinatenstelsel

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.01b Coördinatenstelsel" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Coordinatenstelsel" description="Coördinatenstelsel op RD of RD=N.A.P. (LoGref50) Het attribuut TargetCRS voor Nederlandse indiening heeft als verplichte waarde een IfcProjectedCRS met attribuut VerticalDatum EPSG:7415 (RD+NAP)of EPSG:28992 (RD) én EPSG:5709 (NAP)   Meer informatie over Georefereren: https://geonovum.github.io/GeoBIM_Georefereren" instructions="Deze CRS-eis geldt alleen voor Nederlandse projecten waarbij de omvang van het project i.c.m. de kromming van de aarde geen probleem oplevert. Als dit niet geldt dan is het ook mogelijk om eventueel IfcGeographicCRS en/of andere EPSG te gebruiken.  IfcProjectedCRS kan geen Classificatie toegekend krijgen. https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Cordinatenstelsel">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <ids:simpleValue>IFCPROJECTEDCRS</ids:simpleValue>
      </ids:name>
    </ids:entity>
  </ids:applicability>
  <ids:requirements>
    <ids:attribute cardinality="required" instructions="Doel coördinatenstelsel waarin het BIM-model geplaatst wordt. EPSG 7415&#10;Het attribuut TargetCRS voor Nederlandse indiening heeft als verplichte waarde een IfcProjectedCRS met attribuut VerticalDatum EPSG:7415 (RD+NAP)of EPSG:28992 (RD) én EPSG:5709 (NAP)&#10;https://www.opengis.net/def/crs/EPSG/0/28992">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:enumeration value="EPSG:7415" />
          <xs:enumeration value="EPSG:28992" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
  </ids:requirements>
</ids:specification>
```

## 04 — 9.01c Projectadres (IFC4X3_ADD2) {#04-901c-projectadres-ifc4x3_add2}

| | |
|---|---|
| **Identifier** | `9.01c` |
| **ifcVersion** | `IFC4X3_ADD2` |
| **BM13 checks** | **#1** Use function matches the zoning designation, **#2** Maximum building height, **#3** Maximum building coverage percentage, **#4** Use function / designation limited to a given number of storeys, **#5** Home-based occupation: max. 50% of usable floor area, **#6** Maximum number of storeys |
| **File** | `04 9.01c Projectadres IFC4X3_ADD2.ids` |

Project address in IFC4X3_ADD2 (LoGeoRef 10). Also fill in the address. This is in addition to the georeferencing in RD. More information on georeferencing: https://geonovum.github.io/GeoBIM_Georefereren

*Link to checks:* The address is the entry point for Regels op de kaart in the environment plan checks.

> **Note for the modeller.** Pset_Address exists from IFC4x3 onwards. In IFC4, SiteAddress is an attribute of IfcSite.

```xml
<ids:specification ifcVersion="IFC4X3_ADD2" name="9.01c Projectadres (IFC4X3_ADD2)" identifier="9.01c" description="Projectadres in IFC4X3_ADD2 (LoGref10) Vul ook het adres in. Dit is aanvullend op de georeferentie op RD. Meer informatie over Georefereren: https://geonovum.github.io/GeoBIM_Georefereren" instructions="Pset_Address bestaat vanaf Ifc4x3 In Ifc4 is SiteAddress een Attribute van IfcSite">
  <ids:applicability minOccurs="0" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCSITE" />
          <xs:enumeration value="IFCBUILDING" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
  </ids:applicability>
  <ids:requirements>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/AddressLines" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_Address</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>AddressLines</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/Country" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_Address</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>Country</ids:simpleValue>
      </ids:baseName>
      <ids:value>
        <ids:simpleValue>NL</ids:simpleValue>
      </ids:value>
    </ids:property>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/PostalCode" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_Address</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>PostalCode</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/Town" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_Address</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>Town</ids:simpleValue>
      </ids:baseName>
    </ids:property>
  </ids:requirements>
</ids:specification>
```

## 05 — 9.01d Perceeladres (IFC4) {#05-901d-perceeladres-ifc4}

| | |
|---|---|
| **Identifier** | `9.01d` |
| **ifcVersion** | `IFC4` |
| **BM13 checks** | **#1** Use function matches the zoning designation, **#2** Maximum building height, **#3** Maximum building coverage percentage, **#4** Use function / designation limited to a given number of storeys, **#5** Home-based occupation: max. 50% of usable floor area, **#6** Maximum number of storeys |
| **File** | `05 9.01d Perceeladres IFC4.ids` |

Project address in IFC4X3_ADD2 (LoGeoRef 10). Also fill in the address. This is in addition to the georeferencing in RD. More information on georeferencing: https://geonovum.github.io/GeoBIM_Georefereren

*Link to checks:* As 9.01c, for IFC4.

> **Note for the modeller.** Pset_Address exists from IFC4x3 onwards. In IFC4, SiteAddress is an attribute of IfcSite.

```xml
<ids:specification ifcVersion="IFC4" name="9.01d Perceeladres (IFC4)" identifier="9.01d" description="Projectadres in IFC4X3_ADD2 (LoGref10) Vul ook het adres in. Dit is aanvullend op de georeferentie op RD. Meer informatie over Georefereren: https://geonovum.github.io/GeoBIM_Georefereren" instructions="Pset_Address bestaat vanaf Ifc4x3 In Ifc4 is SiteAddress een Attribute van IfcSite">
  <ids:applicability minOccurs="0" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <ids:simpleValue>IFCSITE</ids:simpleValue>
      </ids:name>
    </ids:entity>
  </ids:applicability>
  <ids:requirements>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>SiteAddress</ids:simpleValue>
      </ids:name>
    </ids:attribute>
  </ids:requirements>
</ids:specification>
```

## 06 — 9.01e Gebouwadres (IFC4) {#06-901e-gebouwadres-ifc4}

| | |
|---|---|
| **Identifier** | `9.01e` |
| **ifcVersion** | `IFC4` |
| **BM13 checks** | **#1** Use function matches the zoning designation, **#2** Maximum building height, **#3** Maximum building coverage percentage, **#4** Use function / designation limited to a given number of storeys, **#5** Home-based occupation: max. 50% of usable floor area, **#6** Maximum number of storeys |
| **File** | `06 9.01e Gebouwadres IFC4.ids` |

Project address in IFC4X3_ADD2 (LoGeoRef 10). Also fill in the address. This is in addition to the georeferencing in RD. More information on georeferencing: https://geonovum.github.io/GeoBIM_Georefereren

*Link to checks:* As 9.01c, for IFC4.

> **Note for the modeller.** Pset_Address exists from IFC4x3 onwards. In IFC4, BuildingAddress is an attribute of IfcBuilding.

```xml
<ids:specification ifcVersion="IFC4" name="9.01e Gebouwadres (IFC4)" identifier="9.01e" description="Projectadres in IFC4X3_ADD2 (LoGref10) Vul ook het adres in. Dit is aanvullend op de georeferentie op RD. Meer informatie over Georefereren: https://geonovum.github.io/GeoBIM_Georefereren" instructions="Pset_Address bestaat vanaf Ifc4x3 In Ifc4 is BuildingAddress een Attribute van IfcBuilding">
  <ids:applicability minOccurs="0" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <ids:simpleValue>IFCBUILDING</ids:simpleValue>
      </ids:name>
    </ids:entity>
  </ids:applicability>
  <ids:requirements>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>BuildingAddress</ids:simpleValue>
      </ids:name>
    </ids:attribute>
  </ids:requirements>
</ids:specification>
```

## 07 — 9.02 Project {#07-902-project}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Project`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Project) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#1** Use function matches the zoning designation, **#2** Maximum building height, **#3** Maximum building coverage percentage, **#4** Use function / designation limited to a given number of storeys, **#5** Home-based occupation: max. 50% of usable floor area, **#6** Maximum number of storeys, **#7** Fire compartments, **#8** Fire resistance, **#9** Clear width, **#10** Height difference, **#11** Rc value, **#12** U value, **#13** MPG, **#14** Escape routes, **#15** Walking distance, **#16** Escape width, **#17** Daylight |
| **File** | `07 9.02 Project.ids` |

A BIM model must contain the IFC class IfcProject, so that there is a representation context in which the local placement can be made relative to IfcMapConversion. A number of general properties can also be filled in, such as the phase and the project type.

*Link to checks:* Administrative context of the delivery; not check-specific.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.02 Project" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Project" description="Een BIM-Model moet de IFCClass IfcProject bevatten zodat men de representationcontext heeft waar men t.o.v. IFfcMapConversion de Local placement gedaan kan worden. Tevens kunnen er een aantal algemene eigenschappen worden ingevuld zoals de fase en het type project.">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <ids:simpleValue>IFCPROJECT</ids:simpleValue>
      </ids:name>
    </ids:entity>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Project" cardinality="optional">
      <ids:value>
        <ids:simpleValue>Project</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required" instructions="Naam&#10;Voorbeeld: Woningbouwproject x, voortgezet onderwijs">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required" instructions="Toelichting&#10;Voorbeeld: Bouw van 5 rijwoningen, basisschool met kinderdagverblijf">
      <ids:name>
        <ids:simpleValue>Description</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="optional" instructions="Fase volgende STB2025: Voorbeeld: 2.3 Definitief ontwerp&#10;Fase volgende STB2025: Voorbeeld: DO&#10;Fase volgende STB2014: Voorbeeld: 05 Definitief ontwerp">
      <ids:name>
        <ids:simpleValue>Phase</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value="01 Initiatief/haalbaarheid|02 Projectdefinitie|03 Structuurontwerp|04 Voorontwerp|05 Definitief ontwerp|06 Technisch ontwerp/Bestek|07 Prijs- en Contractvorming|07 Prijs- en contractvorming|08 Uitvoering - Uitvoeringsgereed Ontwerp|09 Uitvoering - Directievoering|10 Gebruik/Exploitatie|1. Initiatief|1.1 Iniatief|INI|1.2 Haalbaarheid|HBH|1.3 Projectdefinitie|PD|2. Ontwerp|2.1 Structuurontwerp|SO|2.2 Voorontwerp|VO|2.3 Definitief Ontwerp|DO|2.4 Omgevingsvergunning|OV|3. Engineering|3.1 Technisch Ontwerp|TO|3.2 Uitvoeringsgereed Ontwerp|UO|4. Realisatie|4.1 Uitvoering|UV|4.2 Oplevering &amp; Overdracht|OO|4.3 Onderhoudstermijn|5. Gebruik" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
    <ids:attribute cardinality="required" instructions="Eenheden&#10;voorbeeld: m of mm (gebouwen zijn gebruikelijk in mm en de georeferentie in m) er zijn er dus 2 in IFC files.)">
      <ids:name>
        <ids:simpleValue>UnitsInContext</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/ProjectType" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_ProjectCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>ProjectType</ids:simpleValue>
      </ids:baseName>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:enumeration value="NEWBUILD" />
          <xs:enumeration value="MODIFICATION" />
          <xs:enumeration value="OPERATIONMAINTENANCE" />
          <xs:enumeration value="RENOVATION" />
          <xs:enumeration value="REPAIR" />
        </xs:restriction>
      </ids:value>
    </ids:property>
    <ids:property dataType="IFCCOSTITEMTYPEENUM" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/ProjectInvestmentEstimate" cardinality="optional" instructions="Stichtingskosten: NEN2699 Niveau 1 : A t/m G&#10;Voorbeeld: 1000000">
      <ids:propertySet>
        <ids:simpleValue>Pset_ProjectCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>ProjectInvestmentEstimate</ids:simpleValue>
      </ids:baseName>
    </ids:property>
  </ids:requirements>
</ids:specification>
```

## 08 — 9.03a Perceel {#08-903a-perceel}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Perceel`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Perceel) |
| **ifcVersion** | `IFC4X3_ADD2 IFC4` |
| **BM13 checks** | **#3** Maximum building coverage percentage, **#10** Height difference, **#14** Escape routes, **#17** Daylight |
| **File** | `08 9.03a Perceel.ids` |

Parcel as IfcSite. IfcSite is part of the spatial hierarchy in the IFC schema. It is an administrative component and cannot contain geometry.

*Link to checks:* IfcSite as unbuilt space and as the grounds belonging to the building; needed for the building coverage percentage, adjoining terrain and the distance to the parcel boundary.

> **Note for the modeller.** If the project contains a cadastral parcel, the properties in Pset_LandRegistration are mandatory.

```xml
<ids:specification ifcVersion="IFC4X3_ADD2 IFC4" name="9.03a Perceel" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Perceel" description="Perceel als IfcSite. IfcSite is onderdeel van de ruimtelijke hierarchie in het IfcSchema. Dit is een administratief component en kan geen geometrie bevatten." instructions="Indien het project een Kadastraal Perceel bevat zijn de eigenschappen in Pset_LandRegistration verplicht.">
  <ids:applicability minOccurs="0" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <ids:simpleValue>IFCSITE</ids:simpleValue>
      </ids:name>
    </ids:entity>
  </ids:applicability>
  <ids:requirements>
    <ids:classification cardinality="optional">
      <ids:value>
        <ids:simpleValue>Perceel</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Perceel</ids:simpleValue>
      </ids:value>
    </ids:attribute>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>ObjectPlacement</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/IsPermanentID" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_LandRegistration</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>IsPermanentID</ids:simpleValue>
      </ids:baseName>
      <ids:value>
        <ids:simpleValue>true</ids:simpleValue>
      </ids:value>
    </ids:property>
    <ids:property dataType="IFCIDENTIFIER" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/LandID" cardinality="optional" instructions="identificatieLokaalID uit Pset_LandRegistration&#10;voorbeeld: 19650000670000">
      <ids:propertySet>
        <ids:simpleValue>Pset_LandRegistration</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>LandID</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCIDENTIFIER" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/LandTitleID" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_LandRegistration</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>LandTitleID</ids:simpleValue>
      </ids:baseName>
    </ids:property>
  </ids:requirements>
</ids:specification>
```

## 09 — 9.03b Bouwwerkperceel {#09-903b-bouwwerkperceel}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Bouwwerkperceel`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Bouwwerkperceel) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#1** Use function matches the zoning designation, **#2** Maximum building height, **#3** Maximum building coverage percentage, **#5** Home-based occupation: max. 50% of usable floor area, **#6** Maximum number of storeys, **#7** Fire compartments, **#17** Daylight |
| **File** | `09 9.03b Bouwwerkperceel.ids` |

Bouwwerkperceel (building parcel) as IfcZone, IfcSpace or IfcSpatialZone.

*Link to checks:* Explicitly named as required building data for these checks.

> **Note for the modeller.** An IfcSpace or IfcSpatialZone is modelled. An IfcZone is a container that holds one or more IfcSpaces or IfcSpatialZones. In this way, a single geometry can represent both the building parcel and the cadastral parcel.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.03b Bouwwerkperceel" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Bouwwerkperceel" description="Bouwwerkperceel als IfcZone, IfcSpace of IfcSpatialZone." instructions="Een IfcSpace of IfcSpatialZone is gemodelleerd. Een IfcZone is een container die één of meerdere IfcSpaces of IfcSpatialZones bevat. Op deze manier kan één geometrie zowel het Bouwwerkperceel als het Kadastraal Perceel representeren.">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCSPATIALZONE" />
          <xs:enumeration value="IFCSPACE" />
          <xs:enumeration value="IFCZONE" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
    <ids:attribute>
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Bouwwerkperceel</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Bouwwerkperceel" cardinality="optional">
      <ids:value>
        <ids:simpleValue>Bouwwerkperceel</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required" instructions="Unieke naam voor het bouwwerkperceel in communicatie&#10;Woningbouwprojectperceel x">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required" instructions="Description is de bepalingsmethode van het object.">
      <ids:name>
        <ids:simpleValue>Description</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Terreinvolume</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:requirements>
</ids:specification>
```

## 10 — 9.04 Kadastraal Perceel {#10-904-kadastraal-perceel}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Kadastraal-Perceel`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Kadastraal-Perceel) |
| **ifcVersion** | `IFC4X3_ADD2 IFC4` |
| **BM13 checks** | **#1** Use function matches the zoning designation, **#2** Maximum building height, **#3** Maximum building coverage percentage, **#5** Home-based occupation: max. 50% of usable floor area, **#6** Maximum number of storeys, **#7** Fire compartments, **#11** Rc value, **#12** U value, **#17** Daylight |
| **File** | `10 9.04 Kadastraal Perceel.ids` |

Kadastraal perceel (cadastral parcel) as IfcZone, IfcSpace or IfcSpatialZone.

*Link to checks:* Explicitly named as required building data; also environment data (BRK).

> **Note for the modeller.** An IfcSpace or IfcSpatialZone is modelled. An IfcZone is a container that holds one or more IfcSpaces or IfcSpatialZones. In this way, a single geometry can represent both the building parcel and the cadastral parcel.

```xml
<ids:specification ifcVersion="IFC4X3_ADD2 IFC4" name="9.04 Kadastraal Perceel" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Kadastraal-Perceel" description="Kadastraalperceel als IfcZone, IfcSpace of IfcSpatialZone." instructions="Een IfcSpace of IfcSpatialZone is gemodelleerd. Een IfcZone is een container die één of meerdere IfcSpaces of IfcSpatialZones bevat. Op deze manier kan één geometrie zowel het Bouwwerkperceel als het Kadastraal Perceel representeren.">
  <ids:applicability minOccurs="0" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCSPATIALZONE" />
          <xs:enumeration value="IFCSPACE" />
          <xs:enumeration value="IFCZONE" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
    <ids:attribute>
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Kadastraal perceel</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Kadastraalperceel" cardinality="optional">
      <ids:value>
        <ids:simpleValue>Kadastraalperceel</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required" instructions="Name&#10;Optioneel Naam&#10;Woningbouwproject x">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required" instructions="Description is de bepalingsmethode van het object.">
      <ids:name>
        <ids:simpleValue>Description</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Terreinvolume</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:requirements>
</ids:specification>
```

## 11 — 9.05a Gebouw {#11-905a-gebouw}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebouw`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebouw) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#3** Maximum building coverage percentage, **#4** Use function / designation limited to a given number of storeys, **#17** Daylight |
| **File** | `11 9.05a Gebouw.ids` |

Gebouw (building) as IfcBuilding. IfcBuilding is part of the spatial hierarchy in the IFC schema. It is an administrative component and cannot contain geometry.

*Link to checks:* Building type via IfcBuilding (MarketCategory) for #3 and #4; building concept for #17.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.05a Gebouw" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebouw" description="Gebouw als IfcBuilding IfcBuilding is onderdeel van de ruimtelijke hierarchie in het IfcSchema. Dit is een administratief component en kan geen geometrie bevatten.">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <ids:simpleValue>IFCBUILDING</ids:simpleValue>
      </ids:name>
    </ids:entity>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Gebouw" cardinality="required">
      <ids:value>
        <ids:simpleValue>Gebouw</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required" instructions="Beschrijving van het soort IfcBuilding&#10;Voorbeeld: Pand, Rijwoning, Appartement">
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:property dataType="IFCIDENTIFIER" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/BuildingID" cardinality="required" instructions="Gebouw-werk-ID of BAG-Pand-ID wanneer beschikbaar (Uit pset_buildingCommon) &#10;voorbeeld: 003100000122684&#10;Als dit een BAGPAND ID is dan staat de  IsPermanentID op True, zo niet  dan False">
      <ids:propertySet>
        <ids:simpleValue>Pset_BuildingCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>BuildingID</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/IsPermanentID" cardinality="required" instructions="Als Building ID het BAGPAND ID is, dan staat de IsPermanentID op True, zo niet dan False">
      <ids:propertySet>
        <ids:simpleValue>Pset_BuildingCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>IsPermanentID</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/MarketCategory" cardinality="required" instructions="Duiding van soort gebouw zie enumeratie (gebouwtype) &gt; zie ennummeratie gebouwtype&#10;Voorbeeld: Woongebouw&#10;Bron: Geonovum.github.io/disgeo-inhoud-2/#-gebouw&#10;Kantoor op basis van: kantorengebouwn-in-nl-1945-2015">
      <ids:propertySet>
        <ids:simpleValue>Pset_BuildingUse</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>MarketCategory</ids:simpleValue>
      </ids:baseName>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value="Woongebouw|Kantoorgebouw|Bijgebouw|Gebedsgebouw|Vestigingsgebouw|Bedrijfsgebouw|Doelgroepengebouw|Installatiegebouw|Recreatiegebouw|Toren" />
        </xs:restriction>
      </ids:value>
    </ids:property>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/MarketSubCategory" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_BuildingUse</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>MarketSubCategory</ids:simpleValue>
      </ids:baseName>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value="Aanleunwoning|Aireywoning|Ambtswoning|Apotheek|Appartement|Arbeiderswoning|Bejaardenwoning|Bel-etagewoning|Benedenwoning|Berging inpandig|Berging uitpandig|Bioscoop|Boerderij|Bovenwoning|Bungalow|Bunker|Café|Cafetaria|Cellenkantoor|Drive-inwoning|Duplexwoning|Energiecentrale|Fabriek|Fabrieksschoorsteen|Fietsenstalling inpandig|Fietsenstalling uitpandig|Flexibel verhuurkantoor|Fort|Friendswoning|Garage|Garage inpandig|Garage uitpandig|Gemaalgebouw|Gevangenis|Grachtenpand|Hangar|Herenhuis|Hoekwoning|Hoogbouwkantoor|Hotel|Huisartsenpraktijk|Huiskamer|Kantine|Kantoor|Kantoortuin|Kas|Kasteel|Kazerne|Kinderdagverblijf|Klokkentoren|Loft|Loods|Maatschappelijke dienstverlening|Maisonette|Medisch centrum|Molen|Paalwoning|Parkeergarage niet-openbaar|Parkeergarage openbaar|Parkeergarage stalling|Pastorie|Patiowoning|Portiekwoning|Representatief werkpaleis|Restaurant|Retail|Schakelwoning|Schuur|Short stay|Sportgebouw|Stal|Stalling inpandig|Stalling uitpandig|Supermarkt|Techniekruimte|Theater|Tussenwoning|Twee-onder-één-kap|Twee-onder-een-kapwoning|Verkeersruimte|Voertuigenstalling|Vrijstaand|Vrijstaand huis|Vuurtoren|Watertoren|Winkel|Wooneenheid|Woonoppervlak|Woontoren" />
        </xs:restriction>
      </ids:value>
    </ids:property>
    <ids:property dataType="IFCREAL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/GrossPlannedArea" cardinality="optional" instructions="Het BVO van het gebouw is een optioneel in te vullen waarde die niet door geometrie is bepaald.&#10;GrossPlannedArea is een eigenschap in de Pset_BuildingCommon en geen hoeveelheid in een QuantitySet.">
      <ids:propertySet>
        <ids:simpleValue>Pset_BuildingCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>GrossPlannedArea</ids:simpleValue>
      </ids:baseName>
    </ids:property>
  </ids:requirements>
</ids:specification>
```

## 12 — 9.05b Gebouwinhoud {#12-905b-gebouwinhoud}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebouwinhoud`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebouwinhoud) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#3** Maximum building coverage percentage |
| **File** | `12 9.05b Gebouwinhoud.ids` |

Gebouwinhoud (building volume) as IfcZone, IfcSpatialZone or IfcSpace.

*Link to checks:* Some municipalities calculate the building coverage percentage on volume.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.05b Gebouwinhoud" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebouwinhoud" description="Gebouwinhoud als IfcZone, IfcSpatialZone of IfcSpace">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCSPATIALZONE" />
          <xs:enumeration value="IFCSPACE" />
          <xs:enumeration value="IFCZONE" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
    <ids:attribute>
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Gebouwinhoud</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:applicability>
  <ids:requirements>
    <ids:classification cardinality="optional">
      <ids:value>
        <ids:simpleValue>Gebouwinhoud</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required" instructions="Description is de bepalingsmethode van het object.">
      <ids:name>
        <ids:simpleValue>Description</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Bruto Inhoud</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:requirements>
</ids:specification>
```

## 13 — 9.06a Bouwlaag (voorheen verdieping) {#13-906a-bouwlaag-voorheen-verdieping}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Bouwlaag`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Bouwlaag) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#1** Use function matches the zoning designation, **#2** Maximum building height, **#3** Maximum building coverage percentage, **#4** Use function / designation limited to a given number of storeys, **#6** Maximum number of storeys, **#9** Clear width, **#10** Height difference, **#16** Escape width |
| **File** | `13 9.06a Bouwlaag voorheen verdieping.ids` |

Bouwlaag (storey) as IfcBuildingStorey. A BIM model for the activity "Constructing a new building" must have at least one IFC class IfcBuildingStorey.

*Link to checks:* IfcBuildingStorey in line with the BIM Basis ILS; explicitly named for these checks.

> **Note for the modeller.** IfcBuildingStorey is part of the spatial hierarchy in the IFC schema. It is an administrative component and cannot contain geometry.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.06a Bouwlaag (voorheen verdieping)" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Bouwlaag" description="Bouwlaag als IfcBuildingStorey Een BIM-Model voor de activiteit “Nieuw gebouw bouwen” dient minimaal 1 IFCClass IFCBuildingStorey te hebben." instructions="IfcBuildingStorey is onderdeel van de ruimtelijke hierarchie in het IfcSchema. Dit is een administratief component en kan geen geometrie bevatten.">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <ids:simpleValue>IFCBUILDINGSTOREY</ids:simpleValue>
      </ids:name>
    </ids:entity>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Verdieping" cardinality="optional">
      <ids:value>
        <ids:simpleValue>Verdieping</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required" instructions="Beschrijving van het soort IfcBuildingStorey&#10;Voorbeeld: Entree">
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Bouwlaag</ids:simpleValue>
      </ids:value>
    </ids:attribute>
    <ids:attribute cardinality="required" instructions="conform lijst BIM basis ILS - later invullen lex bijvoorbeeld  00 begane grond, 01 eerste verdieping&#10;https://www.digigo.nu/ilsen-en-richtlijnen/bim-basis-ils/3-3-bouwlaagindeling-en-naamgeving/&#10;&#10;RegEx waar de waarden in de bouwlaagbenaming voorkomen">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value=".*(-9 kelder|-8 kelder|-7 kelder|-6 kelder|-5 kelder|-4 kelder|-3 kelder|-2 kelder|-1 kelder|00 begane grond|01 eerste verdieping|02 tweede verdieping|03 derde verdieping|04 vierde verdieping|05 vijfde verdieping|06 zesde verdieping|07 zevende verdieping|08 achtste verdieping|09 negende verdieping|10 tiende verdieping|11 elfde verdieping|12 twaalfde verdieping|13 dertiende verdieping|14 veertiende verdieping|15 vijftiende verdieping|16 zestiende verdieping|17 zeventiende verdieping|18 achttiende verdieping|19 negentiende verdieping|20 twintigste verdieping|21 eenentwintigste verdieping|22 tweeentwintigste verdieping|23 drieentwintigste verdieping|24 vierentwintigste verdieping|25 vijfentwintigste verdieping|26 zesentwintigste verdieping|27 zevenentwintigste verdieping|28 achtentwintigste verdieping|29 negentwintigste verdieping|30 dertigste verdieping|31 eenendertigste verdieping|32 tweeendertigste verdieping|33 drieendertigste verdieping|34 vierendertigste verdieping|35 vijfendertigste verdieping|36 zesendertigste verdieping|37 zevenendertigste verdieping|38 achtendertigste verdieping|39 negendertigste verdieping|40 veertigste verdieping|01 dak|02 dak|03 dak|04 dak|05 dak|06 dak|07 dak|08 dak|09 dak|10 dak|11 dak|12 dak|13 dak|14 dak|15 dak|16 dak|17 dak|18 dak|19 dak|20 dak|21 dak|22 dak|23 dak|24 dak|25 dak|26 dak|27 dak|28 dak|29 dak|30 dak|31 dak|32 dak|33 dak|34 dak|35 dak|36 dak|37 dak|38 dak|39 dak|40 dak|41 dak).*" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>ObjectPlacement</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/EntranceLevel" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_BuildingStoreyCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>EntranceLevel</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCREAL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/GrossFloorArea" cardinality="optional" instructions="Het Bruto Oppervlakte van de bouwlaag kan worden ingevuld indien dit nodig is.&#10;Een gemodeleerd bouwlaagobject heeft de voorkeur.">
      <ids:propertySet>
        <ids:simpleValue>Qto_BuildingStoreyBaseQuantities</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>GrossFloorArea</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCLENGTHMEASURE" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/GrossHeight" cardinality="optional" instructions="De Bruto hoogte van de bouwlaag geeft aan wat de afstand is van bk. afgewerkte vloer van deze bouwlaag to bk. afgewerkte loer vna de hierboven gelegen ">
      <ids:propertySet>
        <ids:simpleValue>Qto_BuildingStoreyBaseQuantities</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>GrossHeight</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCREAL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/NetFloorArea" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Qto_BuildingStoreyBaseQuantities</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>NetFloorArea</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCLENGTHMEASURE" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/NetHeight" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Qto_BuildingStoreyBaseQuantities</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>NetHeight</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCREAL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/NetVolume" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Qto_BuildingStoreyBaseQuantities</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>NetVolume</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCREAL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/GrossVolume" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Qto_BuildingStoreyBaseQuantities</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>GrossVolume</ids:simpleValue>
      </ids:baseName>
    </ids:property>
  </ids:requirements>
</ids:specification>
```

## 14 — 9.06b Bouwlaaginhoud (voorheen bouwlaagobject) {#14-906b-bouwlaaginhoud-voorheen-bouwlaagobject}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Bouwlaaginhoud`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Bouwlaaginhoud) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#3** Maximum building coverage percentage, **#6** Maximum number of storeys |
| **File** | `14 9.06b Bouwlaaginhoud voorheen bouwlaagobject.ids` |

Bouwlaaginhoud (storey volume) as IfcZone, IfcSpatialZone or IfcSpace.

*Link to checks:* Summability per storey for area and storey counts.

> **Note for the modeller.** Storey volume as IfcZone is an aggregation of all gross volume objects on the storey.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.06b Bouwlaaginhoud (voorheen bouwlaagobject)" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Bouwlaaginhoud" description="Bouwlaaginhoud als IfcZone, IfcSpatialZone of IfcSpace." instructions="Bouwlaaginhoud als IfcZone is een aggregatie van het totaal van alle Bruto Inhoudsobjecten op de bouwlaag.">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCSPATIALZONE" />
          <xs:enumeration value="IFCSPACE" />
          <xs:enumeration value="IFCZONE" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
    <ids:attribute>
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Bouwlaaginhoud</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Bouwlaaginhoud" cardinality="optional">
      <ids:value>
        <ids:simpleValue>Bouwlaaginhoud</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required" instructions="Bepalingsmethode voorbeeld: Bruto-Inhoud">
      <ids:name>
        <ids:simpleValue>Description</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Bruto Inhoud</ids:simpleValue>
      </ids:value>
    </ids:attribute>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value=".*(-9 kelder|-8 kelder|-7 kelder|-6 kelder|-5 kelder|-4 kelder|-3 kelder|-2 kelder|-1 kelder|00 begane grond|01 eerste verdieping|02 tweede verdieping|03 derde verdieping|04 vierde verdieping|05 vijfde verdieping|06 zesde verdieping|07 zevende verdieping|08 achtste verdieping|09 negende verdieping|10 tiende verdieping|11 elfde verdieping|12 twaalfde verdieping|13 dertiende verdieping|14 veertiende verdieping|15 vijftiende verdieping|16 zestiende verdieping|17 zeventiende verdieping|18 achttiende verdieping|19 negentiende verdieping|20 twintigste verdieping|21 eenentwintigste verdieping|22 tweeentwintigste verdieping|23 drieentwintigste verdieping|24 vierentwintigste verdieping|25 vijfentwintigste verdieping|26 zesentwintigste verdieping|27 zevenentwintigste verdieping|28 achtentwintigste verdieping|29 negentwintigste verdieping|30 dertigste verdieping|31 eenendertigste verdieping|32 tweeendertigste verdieping|33 drieendertigste verdieping|34 vierendertigste verdieping|35 vijfendertigste verdieping|36 zesendertigste verdieping|37 zevenendertigste verdieping|38 achtendertigste verdieping|39 negendertigste verdieping|40 veertigste verdieping|01 dak|02 dak|03 dak|04 dak|05 dak|06 dak|07 dak|08 dak|09 dak|10 dak|11 dak|12 dak|13 dak|14 dak|15 dak|16 dak|17 dak|18 dak|19 dak|20 dak|21 dak|22 dak|23 dak|24 dak|25 dak|26 dak|27 dak|28 dak|29 dak|30 dak|31 dak|32 dak|33 dak|34 dak|35 dak|36 dak|37 dak|38 dak|39 dak|40 dak|41 dak).*" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
  </ids:requirements>
</ids:specification>
```

## 15 — 9.07 Gebruikseenheid (voorheen eigendom-, en gebruikseenheid) {#15-907-gebruikseenheid-voorheen-eigendom--en-gebruikseenheid}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruikseenheid`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruikseenheid) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#1** Use function matches the zoning designation, **#5** Home-based occupation: max. 50% of usable floor area |
| **File** | `15 9.07 Gebruikseenheid voorheen eigendom- en gebruikseenheid.ids` |

Gebruikseenheid (use unit) as IfcZone, IfcSpatialZone or IfcSpace. To model a use unit, the gross volume determination method is preferred, so that there can be no speculation about it. The use unit is an administrative type relating to objects in connection with deeds of division and cadastral data. For a dwelling, the use unit also includes a shed and/or a parking space.

*Link to checks:* Delimits the unit within which the share of home-based occupation applies.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.07 Gebruikseenheid (voorheen eigendom-, en gebruikseenheid)" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruikseenheid" description="Gebruikseenheid als IfcZone, IfcSpatialZone of IfcSpace. Voor het modelleren van een Gebruikseenheid is bepalingsmethode Bruto Inhoud gewenst zodat hier geen speculatie over kan bestaan. De gebruikseenheid is een administratief type dat betrekking heeft op objecten i.r.t. splitsingsakten en kadastrale gegevens. In het geval van een woning omvat de gebuikseenheid ook een schuur en/of een parkeerplaats.">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCZONE" />
          <xs:enumeration value="IFCSPATIALZONE" />
          <xs:enumeration value="IFCSPACE" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
    <ids:attribute>
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:enumeration value="Eigendom- en gebruikseenheid" />
          <xs:enumeration value="Gebruikseenheid" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Gebruikseenheid" cardinality="optional">
      <ids:value>
        <ids:simpleValue>Gebruikseenheid</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required" instructions="Naam van de eenheid&#10;Voorbeeld Unit S-25 / Appartement 3&#10;">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:minLength value="1" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
    <ids:attribute cardinality="required" instructions="Bepalingsmethode: (enum geldt ook voor alle situaties waar bepalingsmetihdd&#10;Voorbeeld: Bruto-Inhoud etc. enummeratie (Terrein-volume, Onbebouwdterrein-volume, Bebouwdterrein-volume, Bruto-inhoud, Netto-inhoud, Tarra-inhoud, Gebruiks-inhoud, Verhuurbare-inhoud, Kadastrale-inhoud">
      <ids:name>
        <ids:simpleValue>Description</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Bruto Inhoud</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:requirements>
</ids:specification>
```

## 16 — 9.08 Gebruiksfunctie {#16-908-gebruiksfunctie}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruiksfunctie`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruiksfunctie) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#1** Use function matches the zoning designation, **#3** Maximum building coverage percentage, **#4** Use function / designation limited to a given number of storeys, **#5** Home-based occupation: max. 50% of usable floor area, **#6** Maximum number of storeys, **#7** Fire compartments, **#9** Clear width, **#10** Height difference, **#11** Rc value, **#12** U value, **#13** MPG, **#14** Escape routes, **#15** Walking distance, **#16** Escape width, **#17** Daylight |
| **File** | `16 9.08 Gebruiksfunctie.ids` |

Gebruiksfunctie (use function) as IfcZone, IfcSpatialZone or IfcSpace.

*Link to checks:* The most widely used concept: every check starts by determining the (main) use function for the control table or the plan rule.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.08 Gebruiksfunctie" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruiksfunctie" description="Gebruiksfunctie als IfcZone, IfcSpatialZone of IfcSpace.">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCZONE" />
          <xs:enumeration value="IFCSPATIALZONE" />
          <xs:enumeration value="IFCSPACE" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
    <ids:attribute>
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Gebruiksfunctie</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Gebruiksfunctie" cardinality="optional" instructions="Deze classificatie verwijst naar de dictionary waarin de definitie van dit objecttytpe wordt beschreven">
      <ids:value>
        <ids:simpleValue>Gebruiksfunctie</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required" instructions="Gebruiksfunctie volgens enumeratie BBL: https://iplo.nl/thema/bouw/gebruiksfuncties-bouwwerken/#h028a2408-f787-4d7e-b37c-a6737c45bd03">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value="Woonfunctie|Bijeenkomstfunctie|Celfunctie|Gezondheidszorgfunctie|Industriefunctie|Kantoorfunctie|Logiesfunctie|Onderwijsfunctie|Sportfunctie|Winkelfunctie|Overige gebruiksfunctie|Bouwwerk geen gebouw zijnde|Subgebruikfuncties" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Description</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value="Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
  </ids:requirements>
</ids:specification>
```

## 17 — 9.09 Nevengebruiksfunctie {#17-909-nevengebruiksfunctie}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Nevengebruiksfunctie`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Nevengebruiksfunctie) |
| **ifcVersion** | `IFC4X3_ADD2 IFC4` |
| **BM13 checks** | **#1** Use function matches the zoning designation, **#4** Use function / designation limited to a given number of storeys, **#5** Home-based occupation: max. 50% of usable floor area |
| **File** | `17 9.09 Nevengebruiksfunctie.ids` |

Nevengebruiksfunctie (ancillary use function) as IfcZone, IfcSpatialZone or IfcSpace.

*Link to checks:* Ancillary business use function for home-based occupations; ancillary functions for the zoning check.

```xml
<ids:specification ifcVersion="IFC4X3_ADD2 IFC4" name="9.09 Nevengebruiksfunctie" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Nevengebruiksfunctie" description="Nevengebruiksfunctie als IfcZone, IfcSpatialZone of IfcSpace.">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCSPATIALZONE" />
          <xs:enumeration value="IFCSPACE" />
          <xs:enumeration value="IFCZONE" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
    <ids:attribute>
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Nevengebruiksfunctie</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:applicability>
  <ids:requirements>
    <ids:attribute cardinality="required" instructions="Gebruiksfunctie volgens enumeratie BBL&#10;https://iplo.nl/thema/bouw/gebruiksfuncties-bouwwerken/#h028a2408-f787-4d7e-b37c-a6737c45bd03">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value="Woonfunctie|Bijeenkomstfunctie|Celfunctie|Gezondheidszorgfunctie|Industriefunctie|Kantoorfunctie|Logiesfunctie|Onderwijsfunctie|Sportfunctie|Winkelfunctie|Overige gebruiksfunctie|Bouwwerk geen gebouw zijnde" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Description</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value="Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
  </ids:requirements>
</ids:specification>
```

## 18 — 9.10a Functiegebied {#18-910a-functiegebied}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Functiegebied`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Functiegebied) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#9** Clear width, **#10** Height difference, **#11** Rc value |
| **File** | `18 9.10a Functiegebied.ids` |

Functiegebied (functional area) as IfcZone, IfcSpatialZone or IfcSpace.

*Link to checks:* Named as an area to be determined for clear width, height difference and Rc.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.10a Functiegebied" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Functiegebied" description="Functiegebied als IfcZone, IfcSpatialZone of IfcSpace.">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCSPATIALZONE" />
          <xs:enumeration value="IFCSPACE" />
          <xs:enumeration value="IFCZONE" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
    <ids:attribute>
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Functiegebied</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Functiegebied" cardinality="optional">
      <ids:value>
        <ids:simpleValue>Functiegebied</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required" instructions="Gebruiksfunctie volgens enumeratie BBL">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Description</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value="Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
  </ids:requirements>
</ids:specification>
```

## 19 — 9.10b Verblijfsgebied {#19-910b-verblijfsgebied}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Verblijfsgebied`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Verblijfsgebied) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#9** Clear width, **#10** Height difference, **#11** Rc value, **#16** Escape width, **#17** Daylight |
| **File** | `19 9.10b Verblijfsgebied.ids` |

Verblijfsgebied (habitable area) as IfcZone, IfcSpatialZone or IfcSpace.

*Link to checks:* Named for clear width, height difference, Rc value, escape width and daylight.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.10b Verblijfsgebied" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Verblijfsgebied" description="Verblijfsgebied als IfcZone, IfcSpatialZone of IfcSpace.">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCSPATIALZONE" />
          <xs:enumeration value="IFCSPACE" />
          <xs:enumeration value="IFCZONE" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
    <ids:attribute>
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Verblijfsgebied</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Verblijfsgebied" cardinality="optional">
      <ids:value>
        <ids:simpleValue>Verblijfsgebied</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required" instructions="Gebruiksfunctie volgens enumeratie BBL">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Description</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value="Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/OccupancyType" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_SpaceOccupancyRequirements</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>OccupancyType</ids:simpleValue>
      </ids:baseName>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value="matching the pattern Woonfunctie|Bijeenkomstfunctie|Celfunctie|Gezondheidszorgfunctie|Industriefunctie|Kantoorfunctie|Logiesfunctie|Onderwijsfunctie|Sportfunctie|Winkelfunctie|Overige gebruiksfunctie|Bouwwerk geen gebouw zijnde|Subgebruikfuncties" />
        </xs:restriction>
      </ids:value>
    </ids:property>
  </ids:requirements>
</ids:specification>
```

## 20 — 9.10c Verblijfsgebied met bezettingsgraad {#20-910c-verblijfsgebied-met-bezettingsgraad}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Verblijfsgebied-met-bezettingsgraad`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Verblijfsgebied-met-bezettingsgraad) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#15** Walking distance, **#16** Escape width |
| **File** | `20 9.10c Verblijfsgebied met bezettingsgraad.ids` |

The occupancy rate in a habitable area (verblijfsgebied) as IfcZone, IfcSpatialZone or IfcSpace.

*Link to checks:* Occupancy per usable floor area is the input for walking distance and flow capacity.

> **Note for the modeller.** Only certain use functions have an occupancy rate; residential, industrial, sports, retail and other functions do not. (Check in the Bbl whether this is still the case.)

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.10c Verblijfsgebied met bezettingsgraad" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Verblijfsgebied-met-bezettingsgraad" description="De bezettingsgraag in een Verblijfsgebied als IfcZone, IfcSpatialZone of IfcSpace. " instructions="Alleen bepaalde Gebruiksfuncties hebben een bezettingsgraad. Woon-, Industrie, Sport, Winkel en Overige functies niet.   (Check BBL of dit nog steeds zo is)">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCSPATIALZONE" />
          <xs:enumeration value="IFCSPACE" />
          <xs:enumeration value="IFCZONE" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
    <ids:attribute>
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Verblijfsgebied</ids:simpleValue>
      </ids:value>
    </ids:attribute>
    <ids:property dataType="IFCLABEL">
      <ids:propertySet>
        <ids:simpleValue>Pset_SpaceOccupancyRequirements</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>OccupancyType</ids:simpleValue>
      </ids:baseName>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value="matching the pattern Bijeenkomstfunctie|Celfunctie|Gezondheidszorgfunctie|Kantoorfunctie|Logiesfunctie|Onderwijsfunctie|Bouwwerk geen gebouw zijnde|Subgebruikfuncties" />
        </xs:restriction>
      </ids:value>
    </ids:property>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Verblijfsgebied" cardinality="optional">
      <ids:value>
        <ids:simpleValue>Verblijfsgebied</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required" instructions="Gebruiksfunctie volgens enumeratie BBL">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Description</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value="Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
    <ids:property dataType="IFCCOUNTMEASURE" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/OccupancyNumber" cardinality="required" instructions="De werkelijke bezettingsgraad van de ruimte.&#10;Een kantoor van 160m² heeft een bezettingsgraad van 160 x 0,05 = 8&#10;&#10;bbl4.66">
      <ids:propertySet>
        <ids:simpleValue>Pset_SpaceOccupancyRequirements</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>OccupancyNumber</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCCOUNTMEASURE" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/OccupancyNumberPeak" cardinality="required" instructions="Er is een maximale bezetting die een ruimte kan hebben op basis van de vluchtdeuren. (Los van of dit wel of niet kan)   &#10;tegen de vluchtrichting in draaiende deuren: &#10;- per deur: 37p&#10;met de vluchtrichting mee draaiende deuren:  &#10;- enkele deur: 110p / m¹ deur&#10;- dubbele deur: 90p / m¹ deur&#10;">
      <ids:propertySet>
        <ids:simpleValue>Pset_SpaceOccupancyRequirements</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>OccupancyNumberPeak</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCAREAMEASURE" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/AreaPerOccupant" cardinality="required" instructions="Het BBL heeft minimale eisen voor sommige gebruiksfuncties.&#10;Bijvoorbeeld een kantoorfunctie is 0,05.&#10;Dit getal is de ten minste aan te houden aantal personen per m² verblijfsgebied.&#10;AreaPerOccupant is 1/eis = 1/0,05">
      <ids:propertySet>
        <ids:simpleValue>Pset_SpaceOccupancyRequirements</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>AreaPerOccupant</ids:simpleValue>
      </ids:baseName>
    </ids:property>
  </ids:requirements>
</ids:specification>
```

## 21 — 9.10d Gebruiksgebied {#21-910d-gebruiksgebied}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruiksgebied`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruiksgebied) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#9** Clear width, **#10** Height difference, **#14** Escape routes, **#15** Walking distance |
| **File** | `21 9.10d Gebruiksgebied.ids` |

Gebruiksgebied (use area) as IfcZone, IfcSpatialZone or IfcSpace.

*Link to checks:* The use area is the starting point of the escape and accessibility checks.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.10d Gebruiksgebied" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruiksgebied" description="Gebruiksgebied als IfcZone, IfcSpatialZone of IfcSpace.">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCSPATIALZONE" />
          <xs:enumeration value="IFCSPACE" />
          <xs:enumeration value="IFCZONE" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
    <ids:attribute>
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Gebruiksgebied</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Gebruiksgebied" cardinality="required">
      <ids:value>
        <ids:simpleValue>Gebruiksgebied</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required" instructions="Gebruiksfunctie volgens enumeratie BBL">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Description</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value="Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
  </ids:requirements>
</ids:specification>
```

## 22 — 9.10e Bedgebied {#22-910e-bedgebied}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Bedgebied`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Bedgebied) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#16** Escape width |
| **File** | `22 9.10e Bedgebied.ids` |

Bedgebied (bed area) as IfcZone, IfcSpatialZone or IfcSpace.

*Link to checks:* Explicitly named for the clear passage of escape routes.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.10e Bedgebied" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Bedgebied" description="Bedgebied als IfcZone, IfcSpatialZone of IfcSpace.">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCSPATIALZONE" />
          <xs:enumeration value="IFCSPACE" />
          <xs:enumeration value="IFCZONE" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
    <ids:attribute>
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Bedgebied</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Bedgebied" cardinality="required">
      <ids:value>
        <ids:simpleValue>Bedgebied</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required" instructions="Gebruiksfunctie volgens enumeratie BBL">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Description</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value="Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
  </ids:requirements>
</ids:specification>
```

## 23 — 9.10f Restgebied {#23-910f-restgebied}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Restgebied`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Restgebied) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#5** Home-based occupation: max. 50% of usable floor area, **#6** Maximum number of storeys |
| **File** | `23 9.10f Restgebied.ids` |

Restgebied (residual area) as IfcZone, IfcSpatialZone or IfcSpace.

*Link to checks:* Unnamed spaces count towards the area ratio.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.10f Restgebied" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Restgebied" description="Restgebied als IfcZone, IfcSpatialZone of IfcSpace.">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCSPATIALZONE" />
          <xs:enumeration value="IFCSPACE" />
          <xs:enumeration value="IFCZONE" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
    <ids:attribute>
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Restgebied</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Restgebied" cardinality="required">
      <ids:value>
        <ids:simpleValue>Restgebied</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required" instructions="Gebruiksfunctie volgens enumeratie BBL">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Description</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value="Bruto Inhoud|Functioneel Nuttige Inhoud|Gebruiksinhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
  </ids:requirements>
</ids:specification>
```

## 24 — 9.11 Buitengebied {#24-911-buitengebied}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Buitengebied`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Buitengebied) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#9** Clear width, **#10** Height difference |
| **File** | `24 9.11 Buitengebied.ids` |

Buitengebied (outdoor area) as IfcExternalSpatialElement, IfcZone, IfcSpatialZone or IfcSpace.

*Link to checks:* Outdoor space as part of the circulation route and the height difference.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.11 Buitengebied" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Buitengebied" description="Buitengebied als IfcExternalSpatialElement, IfcZone, IfcSpatialZone of IfcSpace.">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCEXTERNALSPATIALELEMENT" />
          <xs:enumeration value="IFCZONE" />
          <xs:enumeration value="IFCSPATIALZONE" />
          <xs:enumeration value="IFCSPACE" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
    <ids:attribute>
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Buitengebied</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Buitengebied" cardinality="optional">
      <ids:value>
        <ids:simpleValue>Buitengebied</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Description</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value="Bebouwd Terreinvolume|Onbebouwd Terreinvolume|Onderbouwd Terreinvolume|Overbouwd Terreinvolume|Terreinvolume" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/IsExternal" cardinality="required">
      <ids:propertySet>
        <xs:restriction base="xs:string">
          <xs:pattern value="Pset_.*Common" />
        </xs:restriction>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>IsExternal</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/PubliclyAccessible" cardinality="required">
      <ids:propertySet>
        <xs:restriction base="xs:string">
          <xs:pattern value="Pset_.*Common" />
        </xs:restriction>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>PubliclyAccessible</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/HandicapAccessible" cardinality="required">
      <ids:propertySet>
        <xs:restriction base="xs:string">
          <xs:pattern value="Pset_.*Common" />
        </xs:restriction>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>HandicapAccessible</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/IsExternal" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_SpaceCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>IsExternal</ids:simpleValue>
      </ids:baseName>
      <ids:value>
        <ids:simpleValue>true</ids:simpleValue>
      </ids:value>
    </ids:property>
  </ids:requirements>
</ids:specification>
```

## 25 — 9.12a Functieruimte {#25-912a-functieruimte}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Functieruimte`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Functieruimte) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#1** Use function matches the zoning designation, **#3** Maximum building coverage percentage, **#5** Home-based occupation: max. 50% of usable floor area, **#6** Maximum number of storeys, **#9** Clear width, **#10** Height difference, **#13** MPG, **#14** Escape routes, **#15** Walking distance |
| **File** | `25 9.12a Functieruimte.ids` |

Functieruimte (functional room) as IfcSpace or IfcZone.

*Link to checks:* Named as "VerblijfsRuimte or Functieruimte" (habitable room or functional room) in the information requirements.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.12a Functieruimte" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Functieruimte" description="Functieruimte als IFcSpace of IfcZone">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCSPACE" />
          <xs:enumeration value="IFCZONE" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
    <ids:attribute>
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Functieruimte</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Functieruimte" cardinality="required">
      <ids:value>
        <ids:simpleValue>Functieruimte</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required" instructions="Verdere typering van de ruimte conform Omniclass/Aedes/MiniBIM&#10;Voorbeeld: Slaapkamer">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Description</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value="Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
  </ids:requirements>
</ids:specification>
```

## 26 — 9.12b Verblijfsruimte {#26-912b-verblijfsruimte}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Verblijfsruimte`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Verblijfsruimte) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#1** Use function matches the zoning designation, **#3** Maximum building coverage percentage, **#5** Home-based occupation: max. 50% of usable floor area, **#6** Maximum number of storeys, **#9** Clear width, **#10** Height difference, **#13** MPG, **#14** Escape routes, **#15** Walking distance, **#17** Daylight |
| **File** | `26 9.12b Verblijfsruimte.ids` |

Verblijfsruimte (habitable room) as IfcSpace or IfcZone.

*Link to checks:* Named as "VerblijfsRuimte or Functieruimte"; for #17 as the space to be checked.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.12b Verblijfsruimte" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Verblijfsruimte" description="Verblijfsruimte als IFcSpace of IfcZone">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCSPACE" />
          <xs:enumeration value="IFCZONE" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
    <ids:attribute>
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Verblijfsruimte</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Verblijfsruimte" cardinality="optional">
      <ids:value>
        <ids:simpleValue>Verblijfsruimte</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required" instructions="Verdere typering van de ruimte conform Omniclass/Aedes/MiniBIM&#10;Voorbeeld: Slaapkamer">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Description</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value="Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
  </ids:requirements>
</ids:specification>
```

## 27 — 9.12c Bedruimte {#27-912c-bedruimte}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Bedruimte`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Bedruimte) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#16** Escape width |
| **File** | `27 9.12c Bedruimte.ids` |

Bedruimte (bedroom)

*Link to checks:* Bedroom explicitly named for escape width.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.12c Bedruimte" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Bedruimte" description="Bedruimte">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCSPACE" />
          <xs:enumeration value="IFCZONE" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
    <ids:attribute>
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Bedruimte</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Bedruimte" cardinality="optional">
      <ids:value>
        <ids:simpleValue>Bedruimte</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required" instructions="Verdere typering van de ruimte conform Omniclass/Aedes/MiniBIM&#10;Voorbeeld: Slaapkamer">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Description</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value="Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
  </ids:requirements>
</ids:specification>
```

## 28 — 9.12d Restruimte {#28-912d-restruimte}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Restruimte`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Restruimte) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#5** Home-based occupation: max. 50% of usable floor area, **#6** Maximum number of storeys |
| **File** | `28 9.12d Restruimte.ids` |

Restruimte (residual room)

*Link to checks:* Residual rooms count towards the area ratio.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.12d Restruimte" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Restruimte" description="Restruimte">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCSPACE" />
          <xs:enumeration value="IFCZONE" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
    <ids:attribute>
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Bedruimte</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Restruimte" cardinality="required">
      <ids:value>
        <ids:simpleValue>Restruimte</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required" instructions="Verdere typering van de ruimte conform Omniclass/Aedes/MiniBIM&#10;Voorbeeld: Slaapkamer">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Description</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value="Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Programma van Eisen inhoud" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
  </ids:requirements>
</ids:specification>
```

## 29 — 9.13 Buitenruimte {#29-913-buitenruimte}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Buitenruimte`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Buitenruimte) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#9** Clear width, **#10** Height difference |
| **File** | `29 9.13 Buitenruimte.ids` |

Buitenruimte (outdoor space) as IfcExternalSpatialElement, IfcZone or IfcSpace.

*Link to checks:* Outdoor space as a space on the circulation route.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.13 Buitenruimte" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Buitenruimte" description="Buitenruimte als IfcExternalSpatialElement, IfcZone of IfcSpace">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCEXTERNALSPATIALELEMENT" />
          <xs:enumeration value="IFCZONE" />
          <xs:enumeration value="IFCSPACE" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
    <ids:attribute>
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Buitenruimte</ids:simpleValue>
      </ids:value>
    </ids:attribute>
    <ids:property dataType="IFCBOOLEAN">
      <ids:propertySet>
        <xs:restriction base="xs:string">
          <xs:pattern value="Pset_.*Common" />
        </xs:restriction>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>IsExternal</ids:simpleValue>
      </ids:baseName>
      <ids:value>
        <ids:simpleValue>true</ids:simpleValue>
      </ids:value>
    </ids:property>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Buitenruimte" cardinality="required">
      <ids:value>
        <ids:simpleValue>Buitenruimte</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required" instructions="Naam van het terrein&#10;Voorbeeld:  Overstek voorkant">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Description</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value="Bebouwd Terreinvolume|Functioneel Nuttige Inhoud|Netto Inhoud|Nuttige inhoud|Onbebouwd Terreinvolume|Onderbouwd Terreinvolume|Overbouwd Terreinvolume|Programma van Eisen inhoud|Terreinvolume" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/IsExternal" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_SpaceCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>IsExternal</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/HandicapAccessible" cardinality="required">
      <ids:propertySet>
        <xs:restriction base="xs:string">
          <xs:pattern value="Pset_.*Common" />
        </xs:restriction>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>HandicapAccessible</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/PubliclyAccessible" cardinality="required">
      <ids:propertySet>
        <xs:restriction base="xs:string">
          <xs:pattern value="Pset_.*Common" />
        </xs:restriction>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>PubliclyAccessible</ids:simpleValue>
      </ids:baseName>
    </ids:property>
  </ids:requirements>
</ids:specification>
```

## 30 — 9.16a Brandcompartiment {#30-916a-brandcompartiment}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Brandcompartiment`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Brandcompartiment) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#7** Fire compartments, **#8** Fire resistance, **#14** Escape routes, **#15** Walking distance |
| **File** | `30 9.16a Brandcompartiment.ids` |

Brandcompartiment (fire compartment) as IfcZone or IfcSpatialZone.

*Link to checks:* Core concept of #7; a precondition for fire resistance, escape route and walking distance.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.16a Brandcompartiment" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Brandcompartiment" description="Brandcompartiment als IfcZone of IfcSpatialZone">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCZONE" />
          <xs:enumeration value="IFCSPATIALZONE" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
    <ids:attribute>
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Brandcompartiment</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Brandcompartiment" cardinality="optional">
      <ids:value>
        <ids:simpleValue>Brandcompartiment</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Description</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value="Bruto Inhoud|Gebruiksinhoud|Netto Inhoud" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/FireRiskFactor" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_SpaceFireSafetyRequirements</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>FireRiskFactor</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/FireExit" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_SpaceFireSafetyRequirements</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>FireExit</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/FlammableStorage" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_SpaceFireSafetyRequirements</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>FlammableStorage</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/SprinklerProtection" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_SpaceFireSafetyRequirements</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>SprinklerProtection</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/AirPressurization" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_SpaceFireSafetyRequirements</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>AirPressurization</ids:simpleValue>
      </ids:baseName>
    </ids:property>
  </ids:requirements>
</ids:specification>
```

## 31 — 9.16b Subbrandcompartiment {#31-916b-subbrandcompartiment}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Subbrandcompartiment`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Subbrandcompartiment) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#15** Walking distance |
| **File** | `31 9.16b Subbrandcompartiment.ids` |

Subbrandcompartiment (sub-fire compartment) as IfcZone or IfcSpatialZone.

*Link to checks:* Article 4.66 measures the walking distance to an exit of the sub-fire compartment.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.16b Subbrandcompartiment" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Subbrandcompartiment" description="Subbrandcompartiment  als IfcZone of IfcSpatialZone">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCZONE" />
          <xs:enumeration value="IFCSPATIALZONE" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
    <ids:attribute>
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Subbrandcompartiment</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Subbrandcompartiment" cardinality="optional">
      <ids:value>
        <ids:simpleValue>Subbrandcompartiment</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Description</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value="Bruto Inhoud|Gebruiksinhoud|Netto Inhoud" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/FireRiskFactor" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_SpaceFireSafetyRequirements</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>FireRiskFactor</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/FireExit" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_SpaceFireSafetyRequirements</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>FireExit</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/FlammableStorage" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_SpaceFireSafetyRequirements</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>FlammableStorage</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/SprinklerProtection" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_SpaceFireSafetyRequirements</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>SprinklerProtection</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/AirPressurization" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_SpaceFireSafetyRequirements</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>AirPressurization</ids:simpleValue>
      </ids:baseName>
    </ids:property>
  </ids:requirements>
</ids:specification>
```

## 32 — 9.16c Vluchtroute {#32-916c-vluchtroute}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Vluchtroute`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Vluchtroute) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#14** Escape routes, **#15** Walking distance, **#16** Escape width |
| **File** | `32 9.16c Vluchtroute.ids` |

Vluchtroute (escape route) as IfcZone or IfcSpatialZone.

*Link to checks:* Core concept of the escape route checks.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.16c Vluchtroute" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Vluchtroute" description="Vluchtroute  als IfcZone of IfcSpatialZone">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCZONE" />
          <xs:enumeration value="IFCSPATIALZONE" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
    <ids:attribute>
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Vluchtroute</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Vluchtroute" cardinality="required">
      <ids:value>
        <ids:simpleValue>Vluchtroute</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Description</ids:simpleValue>
      </ids:name>
      <ids:value>
        <xs:restriction base="xs:string">
          <xs:pattern value="Bruto Inhoud|Gebruiksinhoud|Netto Inhoud" />
        </xs:restriction>
      </ids:value>
    </ids:attribute>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/FireRiskFactor" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_SpaceFireSafetyRequirements</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>FireRiskFactor</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/FireExit" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_SpaceFireSafetyRequirements</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>FireExit</ids:simpleValue>
      </ids:baseName>
      <ids:value>
        <ids:simpleValue>true</ids:simpleValue>
      </ids:value>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/FlammableStorage" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_SpaceFireSafetyRequirements</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>FlammableStorage</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/SprinklerProtection" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_SpaceFireSafetyRequirements</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>SprinklerProtection</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/AirPressurization" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_SpaceFireSafetyRequirements</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>AirPressurization</ids:simpleValue>
      </ids:baseName>
    </ids:property>
  </ids:requirements>
</ids:specification>
```

## 33 — 9.17 Tarra Ruimte {#33-917-tarra-ruimte}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Tarra-Ruimte`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Tarra-Ruimte) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#5** Home-based occupation: max. 50% of usable floor area, **#6** Maximum number of storeys, **#15** Walking distance |
| **File** | `33 9.17 Tarra Ruimte.ids` |

Tarra ruimte (tare space) as IfcZone or IfcSpatialZone.

*Link to checks:* GFA = net + tare; needed for the area determinations.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.17 Tarra Ruimte" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Tarra-Ruimte" description="Tarra Ruimte  als IfcZone of IfcSpatialZone">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <xs:restriction base="xs:string">
          <xs:enumeration value="IFCSPATIALZONE" />
          <xs:enumeration value="IFCZONE" />
        </xs:restriction>
      </ids:name>
    </ids:entity>
    <ids:attribute>
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Tarra Ruimte</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:applicability>
  <ids:requirements>
    <ids:classification uri="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/TarraRuimte" cardinality="optional">
      <ids:value>
        <ids:simpleValue>TarraRuimte</ids:simpleValue>
      </ids:value>
      <ids:system>
        <ids:simpleValue>Omgevingswet-Ruimten</ids:simpleValue>
      </ids:system>
    </ids:classification>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Name</ids:simpleValue>
      </ids:name>
    </ids:attribute>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>Description</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Tarra Inhoud</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:requirements>
</ids:specification>
```

## 34 — 9.18a Fysieke elementen IfcBeam {#34-918a-fysieke-elementen-ifcbeam}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Balk`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Balk) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | _no direct link_ |
| **File** | `34 9.18a Fysieke elementen IfcBeam.ids` |

*Link to checks:* Not explicitly named in rule inventory v0.3; supporting.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.18a Fysieke elementen IfcBeam" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Balk">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <ids:simpleValue>IFCBEAM</ids:simpleValue>
      </ids:name>
    </ids:entity>
  </ids:applicability>
  <ids:requirements>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/FireRating" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_BeamCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>FireRating</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/IsExternal" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_BeamCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>IsExternal</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/LoadBearing" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_BeamCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>LoadBearing</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCREAL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/ThermalTransmittance" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_BeamCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>ThermalTransmittance</ids:simpleValue>
      </ids:baseName>
    </ids:property>
  </ids:requirements>
</ids:specification>
```

## 35 — 9.18b Fysieke elementen IfcColumn {#35-918b-fysieke-elementen-ifccolumn}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Kolom`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Kolom) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#7** Fire compartments, **#8** Fire resistance |
| **File** | `35 9.18b Fysieke elementen IfcColumn.ids` |

*Link to checks:* Named as a fire-resistant building element.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.18b Fysieke elementen IfcColumn" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Kolom">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <ids:simpleValue>IFCCOLUMN</ids:simpleValue>
      </ids:name>
    </ids:entity>
  </ids:applicability>
  <ids:requirements>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/FireRating" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_ColumnCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>FireRating</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/IsExternal" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_ColumnCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>IsExternal</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/LoadBearing" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_ColumnCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>LoadBearing</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCREAL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/ThermalTransmittance" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_ColumnCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>ThermalTransmittance</ids:simpleValue>
      </ids:baseName>
    </ids:property>
  </ids:requirements>
</ids:specification>
```

## 36 — 9.18c Fysieke elementen IfcCovering.INSULATION {#36-918c-fysieke-elementen-ifccoveringinsulation}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Isolatie`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Isolatie) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#11** Rc value |
| **File** | `36 9.18c Fysieke elementen IfcCovering.INSULATION.ids` |

*Link to checks:* Insulation as part of the separating construction for the Rc determination.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.18c Fysieke elementen IfcCovering.INSULATION" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Isolatie">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <ids:simpleValue>IFCCOVERING</ids:simpleValue>
      </ids:name>
      <ids:predefinedType>
        <ids:simpleValue>INSULATION</ids:simpleValue>
      </ids:predefinedType>
    </ids:entity>
  </ids:applicability>
  <ids:requirements>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/AcousticRating" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_CoveringCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>AcousticRating</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/Combustible" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_CoveringCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>Combustible</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/FireRating" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_CoveringCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>FireRating</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/FlammabilityRating" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_CoveringCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>FlammabilityRating</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/IsExternal" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_CoveringCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>IsExternal</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/SurfaceSpreadOfFlame" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_CoveringCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>SurfaceSpreadOfFlame</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCTHERMALTRANSMITTANCEMEASURE" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/ThermalTransmittance" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_CoveringCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>ThermalTransmittance</ids:simpleValue>
      </ids:baseName>
    </ids:property>
  </ids:requirements>
</ids:specification>
```

## 37 — 9.18d Fysieke elementen IfcCurtainWall {#37-918d-fysieke-elementen-ifccurtainwall}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Vliesgevel`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Vliesgevel) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#7** Fire compartments, **#8** Fire resistance, **#11** Rc value, **#12** U value, **#17** Daylight |
| **File** | `37 9.18d Fysieke elementen IfcCurtainWall.ids` |

*Link to checks:* Curtain wall: fire-resistant building element, Rc/U value and daylight opening.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.18d Fysieke elementen IfcCurtainWall" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Vliesgevel">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <ids:simpleValue>IFCSLAB</ids:simpleValue>
      </ids:name>
    </ids:entity>
  </ids:applicability>
  <ids:requirements>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/AcousticRating" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_CurtainWallCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>AcousticRating</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/Combustible" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_CurtainWallCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>Combustible</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/FireRating" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_CurtainWallCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>FireRating</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/IsExternal" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_CurtainWallCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>IsExternal</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/SurfaceSpreadOfFlame" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_CurtainWallCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>SurfaceSpreadOfFlame</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCREAL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/ThermalTransmittance" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_CurtainWallCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>ThermalTransmittance</ids:simpleValue>
      </ids:baseName>
    </ids:property>
  </ids:requirements>
</ids:specification>
```

## 38 — 9.18e Fysieke elementen IfcDoor {#38-918e-fysieke-elementen-ifcdoor}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Deur`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Deur) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#7** Fire compartments, **#8** Fire resistance, **#12** U value, **#14** Escape routes, **#15** Walking distance, **#16** Escape width, **#17** Daylight |
| **File** | `38 9.18e Fysieke elementen IfcDoor.ids` |

*Link to checks:* Door: fire-resistant element, U value, escape route, flow capacity, daylight.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.18e Fysieke elementen IfcDoor" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Deur">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <ids:simpleValue>IFCDOOR</ids:simpleValue>
      </ids:name>
    </ids:entity>
  </ids:applicability>
  <ids:requirements>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/AcousticRating" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_DoorCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>AcousticRating</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/FireExit" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_DoorCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>FireExit</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/FireRating" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_DoorCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>FireRating</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/HandicapAccessible" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_DoorCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>HandicapAccessible</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/IsExternal" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_DoorCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>IsExternal</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/SecurityRating" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_DoorCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>SecurityRating</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/SelfClosing" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_DoorCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>SelfClosing</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/SmokeStop" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_DoorCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>SmokeStop</ids:simpleValue>
      </ids:baseName>
    </ids:property>
  </ids:requirements>
</ids:specification>
```

## 39 — 9.18f Fysieke elementen IfcSensor {#39-918f-fysieke-elementen-ifcsensor}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Sensor`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Sensor) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | _no direct link_ |
| **File** | `39 9.18f Fysieke elementen IfcSensor.ids` |

*Link to checks:* Not explicitly named in rule inventory v0.3; supporting.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.18f Fysieke elementen IfcSensor" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Sensor">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <ids:simpleValue>IFCSENSOR</ids:simpleValue>
      </ids:name>
      <ids:predefinedType>
        <ids:simpleValue>SMOKESENSOR</ids:simpleValue>
      </ids:predefinedType>
    </ids:entity>
  </ids:applicability>
  <ids:requirements>
    <ids:attribute cardinality="required">
      <ids:name>
        <ids:simpleValue>ObjectType</ids:simpleValue>
      </ids:name>
      <ids:value>
        <ids:simpleValue>Rookmelder</ids:simpleValue>
      </ids:value>
    </ids:attribute>
  </ids:requirements>
</ids:specification>
```

## 40 — 9.18g Fysieke elementen IfcSlab {#40-918g-fysieke-elementen-ifcslab}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Vloer`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Vloer) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#7** Fire compartments, **#8** Fire resistance, **#9** Clear width, **#10** Height difference, **#11** Rc value, **#13** MPG, **#14** Escape routes, **#15** Walking distance, **#16** Escape width |
| **File** | `40 9.18g Fysieke elementen IfcSlab.ids` |

*Link to checks:* Floor/roof: fire resistance, height difference, Rc, environmental performance and escape routes.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.18g Fysieke elementen IfcSlab" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Vloer">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <ids:simpleValue>IFCSLAB</ids:simpleValue>
      </ids:name>
    </ids:entity>
  </ids:applicability>
  <ids:requirements>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/AcousticRating" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_SlabCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>AcousticRating</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/Combustible" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_SlabCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>Combustible</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/FireRating" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_SlabCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>FireRating</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/IsExternal" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_SlabCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>IsExternal</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/LoadBearing" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_SlabCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>LoadBearing</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/SurfaceSpreadOfFlame" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_SlabCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>SurfaceSpreadOfFlame</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCREAL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/ThermalTransmittance" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_SlabCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>Thermal Transmittance [ThermalTransmittance]</ids:simpleValue>
      </ids:baseName>
    </ids:property>
  </ids:requirements>
</ids:specification>
```

## 41 — 9.18h Fysieke elementen IfcWall {#41-918h-fysieke-elementen-ifcwall}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Wand`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Wand) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#7** Fire compartments, **#8** Fire resistance, **#9** Clear width, **#11** Rc value, **#13** MPG, **#16** Escape width, **#17** Daylight |
| **File** | `41 9.18h Fysieke elementen IfcWall.ids` |

*Link to checks:* Wall: fire resistance, clear width, Rc value, environmental performance, daylight.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.18h Fysieke elementen IfcWall" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Wand">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <ids:simpleValue>IFCWALL</ids:simpleValue>
      </ids:name>
    </ids:entity>
  </ids:applicability>
  <ids:requirements>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/AcousticRating" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_WallCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>AcousticRating</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/Combustible" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_WallCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>Combustible</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/Compartmentation" cardinality="optional" instructions="Indicatie of de muur een rol heeft in de brandcompartimentering.">
      <ids:propertySet>
        <ids:simpleValue>Pset_WallCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>Compartmentation</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/FireRating" cardinality="optional" instructions="Indicatie van het aantal minuten van&#10;brandwerendheid (WBDBO) 60&#10;Check hier nog even de europese eisen bijvoorbeeld EI60 etc?&gt;???">
      <ids:propertySet>
        <ids:simpleValue>Pset_WallCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>FireRating</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/IsExternal" cardinality="optional" instructions="Indicatie of de muur een externe muur is">
      <ids:propertySet>
        <ids:simpleValue>Pset_WallCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>IsExternal</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/LoadBearing" cardinality="required" instructions="Indicatie of de muur dragend is">
      <ids:propertySet>
        <ids:simpleValue>Pset_WallCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>LoadBearing</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/SurfaceSpreadOfFlame" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_WallCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>SurfaceSpreadOfFlame</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCREAL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/ThermalTransmittance" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_WallCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>ThermalTransmittance</ids:simpleValue>
      </ids:baseName>
    </ids:property>
  </ids:requirements>
</ids:specification>
```

## 42 — 9.18i Fysieke elementen Ifcwindow {#42-918i-fysieke-elementen-ifcwindow}

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Raam`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Raam) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13 checks** | **#12** U value, **#17** Daylight |
| **File** | `42 9.18i Fysieke elementen Ifcwindow.ids` |

*Link to checks:* Window: U value and equivalent daylight area.

```xml
<ids:specification ifcVersion="IFC4 IFC4X3_ADD2" name="9.18i Fysieke elementen Ifcwindow" identifier="https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Raam">
  <ids:applicability minOccurs="1" maxOccurs="unbounded">
    <ids:entity>
      <ids:name>
        <ids:simpleValue>IFCWINDOW</ids:simpleValue>
      </ids:name>
    </ids:entity>
  </ids:applicability>
  <ids:requirements>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/AcousticRating" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_WindowCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>AcousticRating</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/FireExit" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_WindowCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>FireExit</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/FireRating" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_WindowCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>FireRating</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCREAL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/GlazingAreaFraction" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_WindowCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>GlazingAreaFraction</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/IsExternal" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_WindowCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>IsExternal</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCLABEL" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/SecurityRating" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_WindowCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>SecurityRating</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCBOOLEAN" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/SmokeStop" cardinality="required">
      <ids:propertySet>
        <ids:simpleValue>Pset_WindowCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>SmokeStop</ids:simpleValue>
      </ids:baseName>
    </ids:property>
    <ids:property dataType="IFCTHERMALTRANSMITTANCEMEASURE" uri="https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/ThermalTransmittance" cardinality="optional">
      <ids:propertySet>
        <ids:simpleValue>Pset_WindowCommon</ids:simpleValue>
      </ids:propertySet>
      <ids:baseName>
        <ids:simpleValue>ThermalTransmittance</ids:simpleValue>
      </ids:baseName>
    </ids:property>
  </ids:requirements>
</ids:specification>
```

