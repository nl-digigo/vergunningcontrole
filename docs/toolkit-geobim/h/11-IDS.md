# ILS voor Ruimten in de Omgevingswet — specificaties

Machineleesbare indieningsvereisten voor ruimtemodellering bij een omgevingsvergunningaanvraag, uitgedrukt als [buildingSMART IDS](https://www.buildingsmart.org/standards/bsi-standards/information-delivery-specification-ids/) 1.0.

| | |
|---|---|
| **Bron** | `ILS voor ruimten in de omgevingswet` v0.95 — 42 specificaties |
| **IFC-schema** | IFC4 en IFC4X3_ADD2 |
| **Begrippen** | bSDD-dictionary [Omgevingswet Ruimten](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) 0.3.0 (`bsnl`, nl-NL) |
| **Processtap** | GEMMA 015-02 Inhoudelijk behandelen vergunningaanvraag / 015-02-02 Toetsen activiteiten aan regelgeving |
| **Checks** | 17 regels uit de BM13-regelinventarisatie v0.3, 3-7-2026 |

Elke specificatie is ook beschikbaar als afzonderlijk `.ids`-bestand, genummerd in dezelfde volgorde. De XML-blokken hieronder tonen alleen het `ids:specification`-element; een los bestand bevat daarnaast het `ids:info`-blok — met de checknummers in `purpose` en de GEMMA-processtap in `milestone` — en is daarmee zelfstandig valideerbaar.

## Overzicht per specificatie

| Nr | Specificatie | ifcVersion | BM13-checks |
|----|--------------|------------|-------------|
| 01 | [9 ILS voor Ruimten in de omgevingswet](#01-9-ils-voor-ruimten-in-de-omgevingswet) | IFC4 IFC4X3_ADD2 | #1, #2, #3, #4, #5, #6, #7, #8, #9, #10, #11, #12, #13, #14, #15, #16, #17 |
| 02 | [9.01a Georeferentie](#02-901a-georeferentie) | IFC4 IFC4X3_ADD2 | #1, #2, #3, #5, #7, #10, #17 |
| 03 | [9.01b Coördinatenstelsel](#03-901b-coördinatenstelsel) | IFC4 IFC4X3_ADD2 | #1, #2, #3, #5, #7, #10, #17 |
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

## Overzicht per check

De 17 checks komen uit de BM13-regelinventarisatie v0.3, 3-7-2026. Regels #1–#6 betreffen het omgevingsplan (OPA), regels #7–#17 het Besluit bouwwerken leefomgeving (Bbl).

| Check | Onderwerp | Specificaties |
|-------|-----------|---------------|
| **#1** | Gebruiksfunctie komt overeen met bestemming | 01, 02, 03, 04, 05, 06, 07, 09, 10, 13, 15, 16, 17, 25, 26 |
| **#2** | Maximale bouwhoogte | 01, 02, 03, 04, 05, 06, 07, 09, 10, 13 |
| **#3** | Maximaal bebouwingspercentage | 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 16, 25, 26 |
| **#4** | Gebruiksfunctie/bestemming beperkt tot x aantal bouwlagen | 01, 04, 05, 06, 07, 11, 13, 16, 17 |
| **#5** | Beroep aan huis: max. 50% gebruiksoppervlakte | 01, 02, 03, 04, 05, 06, 07, 09, 10, 15, 16, 17, 23, 25, 26, 28, 33 |
| **#6** | Maximum aantal bouwlagen | 01, 04, 05, 06, 07, 09, 10, 13, 14, 16, 23, 25, 26, 28, 33 |
| **#7** | Brandcompartimenten | 01, 02, 03, 07, 09, 10, 16, 30, 35, 37, 38, 40, 41 |
| **#8** | Brandwerendheid | 01, 07, 30, 35, 37, 38, 40, 41 |
| **#9** | Vrije breedte | 01, 07, 13, 16, 18, 19, 21, 24, 25, 26, 29, 40, 41 |
| **#10** | Hoogteverschil | 01, 02, 03, 07, 08, 13, 16, 18, 19, 21, 24, 25, 26, 29, 40 |
| **#11** | Rc-waarde | 01, 07, 10, 16, 18, 19, 36, 37, 40, 41 |
| **#12** | U-waarde | 01, 07, 10, 16, 37, 38, 42 |
| **#13** | MPG | 01, 07, 16, 25, 26, 40, 41 |
| **#14** | Vluchtwegen | 01, 07, 08, 16, 21, 25, 26, 30, 32, 38, 40 |
| **#15** | Loopafstand | 01, 07, 16, 20, 21, 25, 26, 30, 31, 32, 33, 38, 40 |
| **#16** | Vluchtbreedte | 01, 07, 13, 16, 19, 20, 22, 27, 32, 38, 40, 41 |
| **#17** | Daglicht | 01, 02, 03, 07, 08, 09, 10, 11, 16, 19, 26, 37, 38, 41, 42 |

---

## 01 — 9 ILS voor Ruimten in de omgevingswet

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming, **#2** Maximale bouwhoogte, **#3** Maximaal bebouwingspercentage, **#4** Gebruiksfunctie/bestemming beperkt tot x aantal bouwlagen, **#5** Beroep aan huis: max. 50% gebruiksoppervlakte, **#6** Maximum aantal bouwlagen, **#7** Brandcompartimenten, **#8** Brandwerendheid, **#9** Vrije breedte, **#10** Hoogteverschil, **#11** Rc-waarde, **#12** U-waarde, **#13** MPG, **#14** Vluchtwegen, **#15** Loopafstand, **#16** Vluchtbreedte, **#17** Daglicht |
| **Bestand** | `01 9 ILS voor Ruimten in de omgevingswet.ids` |

Om het aantal specificaties te beperken worden in deze specificatie vereisten benoemd die wel in IfcSpatialZone, IfcSpace en IfcExternalSpatialElement voorkomen maar niet in IfcZone.

*Koppeling:* Generieke eis (plaatsing en representatie) op elke ruimtelijke entiteit; randvoorwaarde voor iedere check die op ruimten leunt.

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

## 02 — 9.01a Georeferentie

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Georeferentie`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Georeferentie) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming, **#2** Maximale bouwhoogte, **#3** Maximaal bebouwingspercentage, **#5** Beroep aan huis: max. 50% gebruiksoppervlakte, **#7** Brandcompartimenten, **#10** Hoogteverschil, **#17** Daglicht |
| **Bestand** | `02 9.01a Georeferentie.ids` |

Georeferentie met IfcMapConversion. (LoGref50) Een BIM-Model moet de IFCClass IFCMAPCONVERSION bevatten met de attributen Easting, Northing, OrthogonalHeight, XAxisAbscissa, XAxisOrdinate en Scale ingevuld. Het model dient een SourceCRS en TargetCRS te hebben. Dit is echter niet te valideren d.m.v. IDS. Meer informatie over Georefereren: https://geonovum.github.io/GeoBIM_Georefereren

*Koppeling:* Preconditie voor alle checks; expliciet vereist waar het model tegen omgevingsdata wordt gelegd (perceelgrens, referentiepeil, belending).

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

## 03 — 9.01b Coördinatenstelsel

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Coordinatenstelsel`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Coordinatenstelsel) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming, **#2** Maximale bouwhoogte, **#3** Maximaal bebouwingspercentage, **#5** Beroep aan huis: max. 50% gebruiksoppervlakte, **#7** Brandcompartimenten, **#10** Hoogteverschil, **#17** Daglicht |
| **Bestand** | `03 9.01b Coördinatenstelsel.ids` |

Coördinatenstelsel op RD of RD=N.A.P. (LoGref50) Het attribuut TargetCRS voor Nederlandse indiening heeft als verplichte waarde een IfcProjectedCRS met attribuut VerticalDatum EPSG:7415 (RD+NAP)of EPSG:28992 (RD) én EPSG:5709 (NAP)   Meer informatie over Georefereren: https://geonovum.github.io/GeoBIM_Georefereren

*Koppeling:* Idem 9.01a; RD/NAP is voorwaarde voor het combineren met BRK, BGT en AHN.

> **Toelichting voor de modelleur.** Deze CRS-eis geldt alleen voor Nederlandse projecten waarbij de omvang van het project i.c.m. de kromming van de aarde geen probleem oplevert. Als dit niet geldt dan is het ook mogelijk om eventueel IfcGeographicCRS en/of andere EPSG te gebruiken.  IfcProjectedCRS kan geen Classificatie toegekend krijgen. https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.2.0/class/Cordinatenstelsel

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

## 04 — 9.01c Projectadres (IFC4X3_ADD2)

| | |
|---|---|
| **Identifier** | `9.01c` |
| **ifcVersion** | `IFC4X3_ADD2` |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming, **#2** Maximale bouwhoogte, **#3** Maximaal bebouwingspercentage, **#4** Gebruiksfunctie/bestemming beperkt tot x aantal bouwlagen, **#5** Beroep aan huis: max. 50% gebruiksoppervlakte, **#6** Maximum aantal bouwlagen |
| **Bestand** | `04 9.01c Projectadres IFC4X3_ADD2.ids` |

Projectadres in IFC4X3_ADD2 (LoGref10) Vul ook het adres in. Dit is aanvullend op de georeferentie op RD. Meer informatie over Georefereren: https://geonovum.github.io/GeoBIM_Georefereren

*Koppeling:* Adres is de ingang voor Regels op de Kaart bij de omgevingsplantoetsen.

> **Toelichting voor de modelleur.** Pset_Address bestaat vanaf Ifc4x3 In Ifc4 is SiteAddress een Attribute van IfcSite

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

## 05 — 9.01d Perceeladres (IFC4)

| | |
|---|---|
| **Identifier** | `9.01d` |
| **ifcVersion** | `IFC4` |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming, **#2** Maximale bouwhoogte, **#3** Maximaal bebouwingspercentage, **#4** Gebruiksfunctie/bestemming beperkt tot x aantal bouwlagen, **#5** Beroep aan huis: max. 50% gebruiksoppervlakte, **#6** Maximum aantal bouwlagen |
| **Bestand** | `05 9.01d Perceeladres IFC4.ids` |

Projectadres in IFC4X3_ADD2 (LoGref10) Vul ook het adres in. Dit is aanvullend op de georeferentie op RD. Meer informatie over Georefereren: https://geonovum.github.io/GeoBIM_Georefereren

*Koppeling:* Idem 9.01c, voor IFC4.

> **Toelichting voor de modelleur.** Pset_Address bestaat vanaf Ifc4x3 In Ifc4 is SiteAddress een Attribute van IfcSite

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

## 06 — 9.01e Gebouwadres (IFC4)

| | |
|---|---|
| **Identifier** | `9.01e` |
| **ifcVersion** | `IFC4` |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming, **#2** Maximale bouwhoogte, **#3** Maximaal bebouwingspercentage, **#4** Gebruiksfunctie/bestemming beperkt tot x aantal bouwlagen, **#5** Beroep aan huis: max. 50% gebruiksoppervlakte, **#6** Maximum aantal bouwlagen |
| **Bestand** | `06 9.01e Gebouwadres IFC4.ids` |

Projectadres in IFC4X3_ADD2 (LoGref10) Vul ook het adres in. Dit is aanvullend op de georeferentie op RD. Meer informatie over Georefereren: https://geonovum.github.io/GeoBIM_Georefereren

*Koppeling:* Idem 9.01c, voor IFC4.

> **Toelichting voor de modelleur.** Pset_Address bestaat vanaf Ifc4x3 In Ifc4 is BuildingAddress een Attribute van IfcBuilding

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

## 07 — 9.02 Project

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Project`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Project) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming, **#2** Maximale bouwhoogte, **#3** Maximaal bebouwingspercentage, **#4** Gebruiksfunctie/bestemming beperkt tot x aantal bouwlagen, **#5** Beroep aan huis: max. 50% gebruiksoppervlakte, **#6** Maximum aantal bouwlagen, **#7** Brandcompartimenten, **#8** Brandwerendheid, **#9** Vrije breedte, **#10** Hoogteverschil, **#11** Rc-waarde, **#12** U-waarde, **#13** MPG, **#14** Vluchtwegen, **#15** Loopafstand, **#16** Vluchtbreedte, **#17** Daglicht |
| **Bestand** | `07 9.02 Project.ids` |

Een BIM-Model moet de IFCClass IfcProject bevatten zodat men de representationcontext heeft waar men t.o.v. IFfcMapConversion de Local placement gedaan kan worden. Tevens kunnen er een aantal algemene eigenschappen worden ingevuld zoals de fase en het type project.

*Koppeling:* Administratieve context van de levering; niet checkspecifiek.

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

## 08 — 9.03a Perceel

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Perceel`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Perceel) |
| **ifcVersion** | `IFC4X3_ADD2 IFC4` |
| **BM13-checks** | **#3** Maximaal bebouwingspercentage, **#10** Hoogteverschil, **#14** Vluchtwegen, **#17** Daglicht |
| **Bestand** | `08 9.03a Perceel.ids` |

Perceel als IfcSite. IfcSite is onderdeel van de ruimtelijke hierarchie in het IfcSchema. Dit is een administratief component en kan geen geometrie bevatten.

*Koppeling:* IfcSite als onbebouwde ruimte en als terrein bij het gebouw; nodig voor bebouwingspercentage, aansluitend terrein en afstand tot de perceelsgrens.

> **Toelichting voor de modelleur.** Indien het project een Kadastraal Perceel bevat zijn de eigenschappen in Pset_LandRegistration verplicht.

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

## 09 — 9.03b Bouwwerkperceel

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Bouwwerkperceel`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Bouwwerkperceel) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming, **#2** Maximale bouwhoogte, **#3** Maximaal bebouwingspercentage, **#5** Beroep aan huis: max. 50% gebruiksoppervlakte, **#6** Maximum aantal bouwlagen, **#7** Brandcompartimenten, **#17** Daglicht |
| **Bestand** | `09 9.03b Bouwwerkperceel.ids` |

Bouwwerkperceel als IfcZone, IfcSpace of IfcSpatialZone.

*Koppeling:* Expliciet genoemd als benodigde gebouwdata bij deze checks.

> **Toelichting voor de modelleur.** Een IfcSpace of IfcSpatialZone is gemodelleerd. Een IfcZone is een container die één of meerdere IfcSpaces of IfcSpatialZones bevat. Op deze manier kan één geometrie zowel het Bouwwerkperceel als het Kadastraal Perceel representeren.

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

## 10 — 9.04 Kadastraal Perceel

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Kadastraal-Perceel`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Kadastraal-Perceel) |
| **ifcVersion** | `IFC4X3_ADD2 IFC4` |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming, **#2** Maximale bouwhoogte, **#3** Maximaal bebouwingspercentage, **#5** Beroep aan huis: max. 50% gebruiksoppervlakte, **#6** Maximum aantal bouwlagen, **#7** Brandcompartimenten, **#11** Rc-waarde, **#12** U-waarde, **#17** Daglicht |
| **Bestand** | `10 9.04 Kadastraal Perceel.ids` |

Kadastraalperceel als IfcZone, IfcSpace of IfcSpatialZone.

*Koppeling:* Expliciet genoemd als benodigde gebouwdata; tevens omgevingsdata (BRK).

> **Toelichting voor de modelleur.** Een IfcSpace of IfcSpatialZone is gemodelleerd. Een IfcZone is een container die één of meerdere IfcSpaces of IfcSpatialZones bevat. Op deze manier kan één geometrie zowel het Bouwwerkperceel als het Kadastraal Perceel representeren.

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

## 11 — 9.05a Gebouw

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebouw`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebouw) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#3** Maximaal bebouwingspercentage, **#4** Gebruiksfunctie/bestemming beperkt tot x aantal bouwlagen, **#17** Daglicht |
| **Bestand** | `11 9.05a Gebouw.ids` |

Gebouw als IfcBuilding IfcBuilding is onderdeel van de ruimtelijke hierarchie in het IfcSchema. Dit is een administratief component en kan geen geometrie bevatten.

*Koppeling:* Gebouwtype via IfcBuilding (MarketCategory) bij #3 en #4; gebouwbegrip bij #17.

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

## 12 — 9.05b Gebouwinhoud

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebouwinhoud`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebouwinhoud) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#3** Maximaal bebouwingspercentage |
| **Bestand** | `12 9.05b Gebouwinhoud.ids` |

Gebouwinhoud als IfcZone, IfcSpatialZone of IfcSpace

*Koppeling:* Bebouwingspercentage wordt in sommige gemeenten op volume berekend.

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

## 13 — 9.06a Bouwlaag (voorheen verdieping)

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Bouwlaag`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Bouwlaag) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming, **#2** Maximale bouwhoogte, **#3** Maximaal bebouwingspercentage, **#4** Gebruiksfunctie/bestemming beperkt tot x aantal bouwlagen, **#6** Maximum aantal bouwlagen, **#9** Vrije breedte, **#10** Hoogteverschil, **#16** Vluchtbreedte |
| **Bestand** | `13 9.06a Bouwlaag voorheen verdieping.ids` |

Bouwlaag als IfcBuildingStorey Een BIM-Model voor de activiteit “Nieuw gebouw bouwen” dient minimaal 1 IFCClass IFCBuildingStorey te hebben.

*Koppeling:* IfcBuildingStorey conform BIM Basis ILS; expliciet genoemd bij deze checks.

> **Toelichting voor de modelleur.** IfcBuildingStorey is onderdeel van de ruimtelijke hierarchie in het IfcSchema. Dit is een administratief component en kan geen geometrie bevatten.

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

## 14 — 9.06b Bouwlaaginhoud (voorheen bouwlaagobject)

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Bouwlaaginhoud`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Bouwlaaginhoud) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#3** Maximaal bebouwingspercentage, **#6** Maximum aantal bouwlagen |
| **Bestand** | `14 9.06b Bouwlaaginhoud voorheen bouwlaagobject.ids` |

Bouwlaaginhoud als IfcZone, IfcSpatialZone of IfcSpace.

*Koppeling:* Optelbaarheid per bouwlaag bij oppervlakte- en bouwlaagtellingen.

> **Toelichting voor de modelleur.** Bouwlaaginhoud als IfcZone is een aggregatie van het totaal van alle Bruto Inhoudsobjecten op de bouwlaag.

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

## 15 — 9.07 Gebruikseenheid (voorheen eigendom-, en gebruikseenheid)

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruikseenheid`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruikseenheid) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming, **#5** Beroep aan huis: max. 50% gebruiksoppervlakte |
| **Bestand** | `15 9.07 Gebruikseenheid voorheen eigendom- en gebruikseenheid.ids` |

Gebruikseenheid als IfcZone, IfcSpatialZone of IfcSpace. Voor het modelleren van een Gebruikseenheid is bepalingsmethode Bruto Inhoud gewenst zodat hier geen speculatie over kan bestaan. De gebruikseenheid is een administratief type dat betrekking heeft op objecten i.r.t. splitsingsakten en kadastrale gegevens. In het geval van een woning omvat de gebuikseenheid ook een schuur en/of een parkeerplaats.

*Koppeling:* Afbakening van de eenheid waarbinnen het aandeel beroep aan huis geldt.

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

## 16 — 9.08 Gebruiksfunctie

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruiksfunctie`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruiksfunctie) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming, **#3** Maximaal bebouwingspercentage, **#4** Gebruiksfunctie/bestemming beperkt tot x aantal bouwlagen, **#5** Beroep aan huis: max. 50% gebruiksoppervlakte, **#6** Maximum aantal bouwlagen, **#7** Brandcompartimenten, **#9** Vrije breedte, **#10** Hoogteverschil, **#11** Rc-waarde, **#12** U-waarde, **#13** MPG, **#14** Vluchtwegen, **#15** Loopafstand, **#16** Vluchtbreedte, **#17** Daglicht |
| **Bestand** | `16 9.08 Gebruiksfunctie.ids` |

Gebruiksfunctie als IfcZone, IfcSpatialZone of IfcSpace.

*Koppeling:* Het meest gebruikte begrip: elke check begint met het bepalen van de (hoofd)gebruiksfunctie voor de aansturingstabel of de planregel.

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

## 17 — 9.09 Nevengebruiksfunctie

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Nevengebruiksfunctie`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Nevengebruiksfunctie) |
| **ifcVersion** | `IFC4X3_ADD2 IFC4` |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming, **#4** Gebruiksfunctie/bestemming beperkt tot x aantal bouwlagen, **#5** Beroep aan huis: max. 50% gebruiksoppervlakte |
| **Bestand** | `17 9.09 Nevengebruiksfunctie.ids` |

Nevengebruiksfunctie als IfcZone, IfcSpatialZone of IfcSpace.

*Koppeling:* Nevengebruiksfunctie bedrijf bij beroep aan huis; nevenfuncties bij de bestemmingstoets.

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

## 18 — 9.10a Functiegebied

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Functiegebied`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Functiegebied) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#9** Vrije breedte, **#10** Hoogteverschil, **#11** Rc-waarde |
| **Bestand** | `18 9.10a Functiegebied.ids` |

Functiegebied als IfcZone, IfcSpatialZone of IfcSpace.

*Koppeling:* Genoemd als te bepalen gebied bij vrije breedte, hoogteverschil en Rc.

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

## 19 — 9.10b Verblijfsgebied

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Verblijfsgebied`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Verblijfsgebied) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#9** Vrije breedte, **#10** Hoogteverschil, **#11** Rc-waarde, **#16** Vluchtbreedte, **#17** Daglicht |
| **Bestand** | `19 9.10b Verblijfsgebied.ids` |

Verblijfsgebied als IfcZone, IfcSpatialZone of IfcSpace.

*Koppeling:* Genoemd bij vrije breedte, hoogteverschil, Rc-waarde, vluchtbreedte en daglicht.

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

## 20 — 9.10c Verblijfsgebied met bezettingsgraad

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Verblijfsgebied-met-bezettingsgraad`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Verblijfsgebied-met-bezettingsgraad) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#15** Loopafstand, **#16** Vluchtbreedte |
| **Bestand** | `20 9.10c Verblijfsgebied met bezettingsgraad.ids` |

De bezettingsgraag in een Verblijfsgebied als IfcZone, IfcSpatialZone of IfcSpace.

*Koppeling:* Bezetting per gebruiksoppervlakte is invoer voor loopafstand en doorstroomcapaciteit.

> **Toelichting voor de modelleur.** Alleen bepaalde Gebruiksfuncties hebben een bezettingsgraad. Woon-, Industrie, Sport, Winkel en Overige functies niet.   (Check BBL of dit nog steeds zo is)

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

## 21 — 9.10d Gebruiksgebied

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruiksgebied`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Gebruiksgebied) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#9** Vrije breedte, **#10** Hoogteverschil, **#14** Vluchtwegen, **#15** Loopafstand |
| **Bestand** | `21 9.10d Gebruiksgebied.ids` |

Gebruiksgebied als IfcZone, IfcSpatialZone of IfcSpace.

*Koppeling:* Gebruiksgebied is het vertrekpunt van de vlucht- en bereikbaarheidstoetsen.

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

## 22 — 9.10e Bedgebied

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Bedgebied`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Bedgebied) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#16** Vluchtbreedte |
| **Bestand** | `22 9.10e Bedgebied.ids` |

Bedgebied als IfcZone, IfcSpatialZone of IfcSpace.

*Koppeling:* Expliciet genoemd bij vrije doorgang van vluchtroutes.

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

## 23 — 9.10f Restgebied

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Restgebied`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Restgebied) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#5** Beroep aan huis: max. 50% gebruiksoppervlakte, **#6** Maximum aantal bouwlagen |
| **Bestand** | `23 9.10f Restgebied.ids` |

Restgebied als IfcZone, IfcSpatialZone of IfcSpace.

*Koppeling:* Onbenoemde ruimten tellen mee in de oppervlakteverhouding.

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

## 24 — 9.11 Buitengebied

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Buitengebied`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Buitengebied) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#9** Vrije breedte, **#10** Hoogteverschil |
| **Bestand** | `24 9.11 Buitengebied.ids` |

Buitengebied als IfcExternalSpatialElement, IfcZone, IfcSpatialZone of IfcSpace.

*Koppeling:* Buitenruimte als onderdeel van de verkeersroute en het hoogteverschil.

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

## 25 — 9.12a Functieruimte

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Functieruimte`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Functieruimte) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming, **#3** Maximaal bebouwingspercentage, **#5** Beroep aan huis: max. 50% gebruiksoppervlakte, **#6** Maximum aantal bouwlagen, **#9** Vrije breedte, **#10** Hoogteverschil, **#13** MPG, **#14** Vluchtwegen, **#15** Loopafstand |
| **Bestand** | `25 9.12a Functieruimte.ids` |

Functieruimte als IFcSpace of IfcZone

*Koppeling:* Genoemd als 'VerblijfsRuimte of Functieruimte' in de informatiebehoefte.

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

## 26 — 9.12b Verblijfsruimte

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Verblijfsruimte`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Verblijfsruimte) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#1** Gebruiksfunctie komt overeen met bestemming, **#3** Maximaal bebouwingspercentage, **#5** Beroep aan huis: max. 50% gebruiksoppervlakte, **#6** Maximum aantal bouwlagen, **#9** Vrije breedte, **#10** Hoogteverschil, **#13** MPG, **#14** Vluchtwegen, **#15** Loopafstand, **#17** Daglicht |
| **Bestand** | `26 9.12b Verblijfsruimte.ids` |

Verblijfsruimte als IFcSpace of IfcZone

*Koppeling:* Genoemd als 'VerblijfsRuimte of Functieruimte'; bij #17 als te toetsen ruimte.

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

## 27 — 9.12c Bedruimte

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Bedruimte`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Bedruimte) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#16** Vluchtbreedte |
| **Bestand** | `27 9.12c Bedruimte.ids` |

Bedruimte

*Koppeling:* Bedruimte expliciet genoemd bij vluchtbreedte.

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

## 28 — 9.12d Restruimte

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Restruimte`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Restruimte) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#5** Beroep aan huis: max. 50% gebruiksoppervlakte, **#6** Maximum aantal bouwlagen |
| **Bestand** | `28 9.12d Restruimte.ids` |

Restruimte

*Koppeling:* Restruimten tellen mee in de oppervlakteverhouding.

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

## 29 — 9.13 Buitenruimte

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Buitenruimte`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Buitenruimte) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#9** Vrije breedte, **#10** Hoogteverschil |
| **Bestand** | `29 9.13 Buitenruimte.ids` |

Buitenruimte als IfcExternalSpatialElement, IfcZone of IfcSpace

*Koppeling:* Buitenruimte als ruimte op de verkeersroute.

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

## 30 — 9.16a Brandcompartiment

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Brandcompartiment`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Brandcompartiment) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#7** Brandcompartimenten, **#8** Brandwerendheid, **#14** Vluchtwegen, **#15** Loopafstand |
| **Bestand** | `30 9.16a Brandcompartiment.ids` |

Brandcompartiment als IfcZone of IfcSpatialZone

*Koppeling:* Kernbegrip van #7; randvoorwaarde bij brandwerendheid, vluchtroute en loopafstand.

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

## 31 — 9.16b Subbrandcompartiment

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Subbrandcompartiment`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Subbrandcompartiment) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#15** Loopafstand |
| **Bestand** | `31 9.16b Subbrandcompartiment.ids` |

Subbrandcompartiment  als IfcZone of IfcSpatialZone

*Koppeling:* Artikel 4.66 rekent de loopafstand tot een uitgang van het subbrandcompartiment.

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

## 32 — 9.16c Vluchtroute

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Vluchtroute`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Vluchtroute) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#14** Vluchtwegen, **#15** Loopafstand, **#16** Vluchtbreedte |
| **Bestand** | `32 9.16c Vluchtroute.ids` |

Vluchtroute  als IfcZone of IfcSpatialZone

*Koppeling:* Kernbegrip van de vluchtroutechecks.

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

## 33 — 9.17 Tarra Ruimte

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Tarra-Ruimte`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Tarra-Ruimte) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#5** Beroep aan huis: max. 50% gebruiksoppervlakte, **#6** Maximum aantal bouwlagen, **#15** Loopafstand |
| **Bestand** | `33 9.17 Tarra Ruimte.ids` |

Tarra Ruimte  als IfcZone of IfcSpatialZone

*Koppeling:* BVO = netto + tarra; nodig voor de oppervlaktebepalingen.

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

## 34 — 9.18a Fysieke elementen IfcBeam

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Balk`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Balk) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | _geen directe koppeling_ |
| **Bestand** | `34 9.18a Fysieke elementen IfcBeam.ids` |

*Koppeling:* Niet expliciet genoemd in de regelinventarisatie v0.3; ondersteunend.

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

## 35 — 9.18b Fysieke elementen IfcColumn

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Kolom`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Kolom) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#7** Brandcompartimenten, **#8** Brandwerendheid |
| **Bestand** | `35 9.18b Fysieke elementen IfcColumn.ids` |

*Koppeling:* Genoemd als brandwerend constructieonderdeel.

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

## 36 — 9.18c Fysieke elementen IfcCovering.INSULATION

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Isolatie`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Isolatie) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#11** Rc-waarde |
| **Bestand** | `36 9.18c Fysieke elementen IfcCovering.INSULATION.ids` |

*Koppeling:* Isolatie als onderdeel van de scheidingsconstructie bij de Rc-bepaling.

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

## 37 — 9.18d Fysieke elementen IfcCurtainWall

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Vliesgevel`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Vliesgevel) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#7** Brandcompartimenten, **#8** Brandwerendheid, **#11** Rc-waarde, **#12** U-waarde, **#17** Daglicht |
| **Bestand** | `37 9.18d Fysieke elementen IfcCurtainWall.ids` |

*Koppeling:* Vliesgevel: brandwerend constructieonderdeel, Rc/U-waarde en daglichtopening.

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

## 38 — 9.18e Fysieke elementen IfcDoor

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Deur`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Deur) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#7** Brandcompartimenten, **#8** Brandwerendheid, **#12** U-waarde, **#14** Vluchtwegen, **#15** Loopafstand, **#16** Vluchtbreedte, **#17** Daglicht |
| **Bestand** | `38 9.18e Fysieke elementen IfcDoor.ids` |

*Koppeling:* Deur: brandwerend onderdeel, U-waarde, vluchtroute, doorstroomcapaciteit, daglicht.

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

## 39 — 9.18f Fysieke elementen IfcSensor

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Sensor`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Sensor) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | _geen directe koppeling_ |
| **Bestand** | `39 9.18f Fysieke elementen IfcSensor.ids` |

*Koppeling:* Niet expliciet genoemd in de regelinventarisatie v0.3; ondersteunend.

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

## 40 — 9.18g Fysieke elementen IfcSlab

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Vloer`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Vloer) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#7** Brandcompartimenten, **#8** Brandwerendheid, **#9** Vrije breedte, **#10** Hoogteverschil, **#11** Rc-waarde, **#13** MPG, **#14** Vluchtwegen, **#15** Loopafstand, **#16** Vluchtbreedte |
| **Bestand** | `40 9.18g Fysieke elementen IfcSlab.ids` |

*Koppeling:* Vloer/dak: brandwerendheid, hoogteverschil, Rc, milieuprestatie en vluchtroutes.

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

## 41 — 9.18h Fysieke elementen IfcWall

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Wand`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Wand) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#7** Brandcompartimenten, **#8** Brandwerendheid, **#9** Vrije breedte, **#11** Rc-waarde, **#13** MPG, **#16** Vluchtbreedte, **#17** Daglicht |
| **Bestand** | `41 9.18h Fysieke elementen IfcWall.ids` |

*Koppeling:* Wand: brandwerendheid, vrije breedte, Rc-waarde, milieuprestatie, daglicht.

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

## 42 — 9.18i Fysieke elementen Ifcwindow

| | |
|---|---|
| **Identifier** | [`bsnl/Omgevingswet-Ruimten/0.3.0/class/Raam`](https://identifier.buildingsmart.org/uri/bsnl/Omgevingswet-Ruimten/0.3.0/class/Raam) |
| **ifcVersion** | `IFC4 IFC4X3_ADD2` |
| **BM13-checks** | **#12** U-waarde, **#17** Daglicht |
| **Bestand** | `42 9.18i Fysieke elementen Ifcwindow.ids` |

*Koppeling:* Raam: U-waarde en equivalente daglichtoppervlakte.

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

