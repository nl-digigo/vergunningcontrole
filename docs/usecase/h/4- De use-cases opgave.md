# Use-Cases

Het prototype van de vergunningcontroleservice kan ondersteunen in de controle en visualisatie van een vijftal use-cases. Hierbij stelt de gemeente Rotterdam dat alle Bouw Informatie Modellen van toekomstige situatie (in IFC) die de service in behandeling kan nemen moeten voldoen aan de BIM Basis ILS en de ILS O&E van het BIM-loket. Waar deze standaarden ontoereikend zijn is dit aangevuld met Rotterdamse vergunningscontrole ILS. Per uses-case staat een eerste aanzet beschreven welke parameters men kan benutten om tot een eindresultaat te komen. Dit is ter inspiratie. De vergunningscontroleservice maakt daarnaast gebruik van de digitale stad in CityGML/CityJSON. Ook hiervan is een aanzet gegeven welke parameters hiervan benut kunnen worden. Ook deze uitwerking moet men zien als indicatief. 

## Use-case 1: Bluswatervoorziening

**Opgave:** 
De vergunningscontrole kan inzichtelijk maken of voldaan wordt aan het derde lid van onderstaande eis. 

**Wetgeving:**
Bouwbesluit

**Artikel:**
6.30 Bluswatervoorziening

**Eistekst:** <br>
1.	Een bouwwerk heeft een toereikende bluswatervoorziening. Dit geldt niet indien de aard, ligging of het gebruik van het bouwwerk dat naar het oordeel van het bevoegd gezag niet vereist. <br>
2.	Een wegtunnel heeft een bluswatervoorziening die bij brand gedurende ten minste 60 minuten een capaciteit van ten minste 120 m³/h kan leveren.
<br>
3.	De afstand tussen een bluswatervoorziening als bedoeld in het eerste lid en een brandweeringang als bedoeld in artikel 6.36, eerste lid, is ten hoogste 40 m.
<br>
4.	Een bluswatervoorziening als bedoeld in het eerste en tweede lid is onbeperkt toegankelijk voor bluswerkzaamheden

**Toelichting**
Op grond van het eerste lid moeten gebouwen en andere bouwwerken een toereikende bluswatervoorziening hebben. Doel van dit voorschrift is te waarborgen dat voor de brandweer een adequate openbare of niet-openbare bluswatervoorziening in of bij een bouwwerk beschikbaar is. Wanneer geen toereikende openbare bluswatervoorziening aanwezig is, moet worden zorggedragen voor een toereikende niet-openbare bluswatervoorziening. Voorbeelden van bluswatervoorzieningen zijn een brandkraan of andere aansluiting op het drinkwater- of ander leidingnet voor bluswater, een watervoorraad, zoals een reservoir, een bassin, een blusvijver, een waterput of een bron (grondwater) of oppervlaktewater zoals een meer, de zee, een sloot, of een kanaal. Een bluswatervoorziening moet bereikbaar en betrouwbaar zijn, dus ook bij droogte of vorst. Aan het eerste lid van artikel 6.30 is een volzin toegevoegd [Stb. 2011, 676] die stelt dat een bluswatervoorziening is niet nodig is indien dit naar oordeel van het bevoegd gezag gezien de aard, de ligging of het gebruik van het bouwwerk niet nodig is. De verzwaring van eisen ten opzichte van de model-Bouwverordening van de Vereniging van Nederlandse Gemeenten is hiermee weggenomen.
Het tweede lid regelt de aanwezigheid en de capaciteit van een bluswatervoorziening voor wegtunnels met een tunnellengte van meer dan 250 m. De in artikel 6.29, derde lid, bedoelde blusleiding van een wegtunnel moet op de bluswatervoorziening zijn aangesloten. Ongeacht het aantal aansluitingen op de blusleiding, moet de bluswatervoorziening ten minste één uur zijn gewaarborgd en moet in dit uur ten minste 120 m³ bluswater beschikbaar zijn. Daarbij kan net als bij andere bouwwerken gebruik worden gemaakt van naar keuze een leidingnet, een watervoorraad of oppervlaktewater.
Het derde lid regelt de maximaal toegestane afstand tussen een bluswatervoorziening en een brandweeringang van een bouwwerk (gebouw of bouwwerk geen gebouw zijnde) met een brandweeringang als bedoeld in artikel 6.36. Die afstand mag niet meer dan 40 m bedragen. Wanneer in de straat of de weg een fysieke scheiding aanwezig is, zoals een gracht of beschermde trambaan, dan moet rekening worden gehouden met de omweg die daar het gevolg van is.
Het vierde lid regelt dat de bluswatervoorziening te allen tijde direct bereikbaar moet zijn. Zo kan het bijvoorbeeld noodzakelijk zijn om maatregelen te treffen om te voorkomen dat een bluswatervoorziening wordt geblokkeerd door geparkeerde auto’s of andere objecten

**Informatie Leverings Specificatie t.b.v. de use-case:**
IFC:
- Brandweeringang
IfcDoor: 
-Classification - *NL*SfB* = 31.*
collect all: 
-Pset_DoorCommon: Entrance=true or Pset_DoorCommon- brandweer_ingang=true -> extract Location: global X+Y+Z
Bron: BIM basis ILS, Rotterdamse BIM-ILS

- Bluswateraansluiting (DBL/NBL)
IfcFireSuppressionTerminal or  IfcFireSuppressionTerminalType or IfcValve  
Identification – Name  ≈  *brandkraan* or *firehydrant*
Location – Level(Building Story) = 00*begane grond
Classification - *NL*SfB* = 65.* of 54.*
IsExternal=true
Bron: BIM basis ILS

- Obstakels op eigen terrein: terreininrichtingen -talud hoogte verschillen
IfcFloor + IfcSite
Classification - *NL*SfB* = 9*.*
collect:
IsExternal=true
extract: Quantity: Area + Location: Top Elevation
IfcRailing + IfcFurniture
Classification - *NL*SfB* = 34.* + 7*.** + 9*,**
collect:
IsExternal=true
extract: element Volume
Bron: BIM basis ILS

CityGML:
- Brandhydrant (Bluswaterput)
CityObject frn::CityFurniture: 1340 upper corridor fire-hydrant

- Gebouwen, Tram etc
CityObject bldg::_Building, 1710 transformer station CityObject TransportationObject, 9 rail_road_combined

Berekening:

- Eerste analyse
1) Zoek naar brandweeringang x,y,z in BIM-database
2) Bepaal bol van 40 m rond dit punt. 
3) Zoek naar brandhydrant binnen deze bol in GEO-informatie

- Tweede analyse (bij voldoen aan eerste analyse)
1) Zoek obstakels als maaiveld, gracht, hek, tram binnen de 40 m bol in GEO-informatie
2) Maak raster van 0,5 bij 0,5 meter 
3) Haal obstakels uit het raster 
4) Zoek mogelijke route en kortste route over dit raster van brandhydrant naar ingang

<figure>
<img src=".\h\media\Use-case-1.jpg"alt="Image" style="width:500px;">
<figcaption>Schematisering GEO-BIM gebruik bij use-case Bluswatervoorziening</caption>
</figure>

## Use-case 2: Welstand

**Opgave:** 
De vergunningscontrole kan inzichtelijk maken of voldaan wordt aan de twee onderstaande welstandseisen.

**Wetgeving:**
Welstandsnota Rotterdam

**Artikel:**
Welstandsnota (pagina 35)

**Eistekst:**
1. Bouwinitiatieven houden de stedenbouwkundige structuur herkenbaar en verstoren deze niet. 
2. Bouwinitiatieven zijn in maat en schaal afgestemd op de omliggende bebouwing en de stad als geheel.

**Oplossingsrichting:**

**IFC:**

Bouwvolumes bouwblok: 
totaal lengte -totaal breedte -max. hoogte -goothoogte

Ifc*Any*: Pset_*Common(exclude IfcSpaces+IfcZones): IsExternal=true Extract for building block:
collect all Location Data total Lenght total Widht max Height rotation to glabal system(see GEO-rotation)

IfcPipeSegmentType- Pset_PipeSegmentTypeGutter: Location: Top elevation or IfcRoof: - Location:Bottom elevation

collect values parameters extract if "max Height" is 1500mm higher otherwise gutter height=max height
Bron: BIM basis ILS

Gebruiksfunctie van bouwwerk:

IfcBuilding: Pset_BuildingCommon: Gebruiksfunctie of IfcSpace : Pset_SpaceCommon :  Gebruiksfunctie
Bron: Rotterdamse BIM-ILS

**CityGML:**
Gebouwen: CityObject bldg::_Building
Wijk: Feature <> LandUse + class[0..1]: LandUseClassType + function[0..*]: LandUseFunctionType + usage[0..*]: LandUseUsageType

**Berekening:** 
1) Bepaal lengte, breedte, hoogte, oriëntatie, helling dak BIM
2) Bepaal afstand tot andere gebouwen BIM 
3) Zoek binnen de wijk gebouwen met dezelfde functie
4) Bepaal lengte, breedte, hoogte, oriëntatie, helling dak Geo
5) Bepaal afstand tot andere gebouwen Geo 
6) Vergelijk uitkomsten BIM en Geo in percentages

<figure>
<img src=".\h\media\Use-case-2.jpg"alt="Image" style="width:500px;">
<figcaption>Schematisering 1 GEO-BIM gebruik bij use-case Welstand</caption>
</figure>

<figure>
<img src=".\h\media\Use-case-2_2.jpg"alt="Image" style="width:500px;">
<figcaption>Schematisering 2 GEO-BIM gebruik bij use-case Welstand</caption>
</figure>

## Use-case 3: Geluid

**Opgave:** 
De vergunningscontrole kan inzichtelijk maken of voldaan wordt aan onderstaande geluidseis.

**Wetgeving:**
Bouwbesluit

**Artikel:**
Afdeling 3.1 Bescherming tegen geluid van buiten, nieuwbouw

**Eistekst:**
1. Een te bouwen bouwwerk biedt in een verblijfsgebied bescherming tegen geluid van buiten.  
2. Voor zover voor een gebruiksfunctie in tabel 3.1 voorschriften zijn aangewezen, wordt voor die gebruiksfunctie aan de in het eerste lid gestelde eis voldaan door toepassing van die voorschriften. 

**Toelichting**
Er zijn vier functies in het bouwbesluit waar een eis aan de geluidwering van de gevel voor geldt. Het gaat om de volgende 4 functies:
• woonfunctie;
• bijeenkomstfunctie voor kinderopvang;
• gezondheidszorgfunctie;
• onderwijsfunctie.
Binnen de functies kinderopvang en gezondheidszorg kan er naast een verblijfsgebied/verblijfsruimte ook sprake zijn van een bedgebied/bedruimte. Wellicht dat deze ook nog gespecificeerd kan worden. Voor een bedgebied geldt namelijk een 5 dB strengere eis dan voor een verblijfsgebied.

Een uitwendige scheidingsconstructie van een verblijfsgebied heeft een volgens NEN 5077 bepaalde karakteristieke geluidwering met een minimum van 20 dB.

1. Bij een krachtens de Wet geluidhinder of de Tracéwet vastgesteld hogere-waardenbesluit is de volgens NEN 5077 bepaalde karakteristieke geluidwering van een uitwendige scheidingsconstructie van een verblijfsgebied niet kleiner dan het verschil tussen de in dat besluit opgenomen hoogst toelaatbare geluidsbelasting voor industrie-, weg- of spoorweglawaai en 35 dB(A) bij industrielawaai, of 33 dB bij weg- of spoorweglawaai. Geldt alleen voor Woon-, bijeenkomst voor kinderopvang, gezondheidszorg- en onderwijsfunctie

2. Bij een krachtens de Wet geluidhinder of de Tracéwet vastgesteld hogere-waardenbesluit is de volgens NEN 5077 bepaalde karakteristieke geluidwering van een uitwendige scheidingsconstructie van een bedgebied niet kleiner dan het verschil tussen de in dat besluit opgenomen hoogst toelaatbare geluidsbelasting voor industrie-, weg- of spoorweglawaai en 30 dB(A) bij industrielawaai, of 28 dB bij weg- of spoorweglawaai. (Geldt alleen voor kinderopvang (bijeenkomstfunctie voor kinderopvang) en gezondheidszorgfunctie.)

3. Indien dit leidt tot een lagere karakteristieke geluidwering van de uitwendige scheidingsconstructie dan bij toepassing van het eerste of tweede lid het geval is kan de in het eerste en tweede lid bedoelde geluidsbelasting worden bepaald volgens het reken- en meetvoorschrift, bedoeld in artikel 110d van de Wet geluidhinder. (Dit betekent dat in plaats van de aangehouden belastingen in de hogere waarde (en de onderliggende 3D puntenwolk (stap 2 in de berekening) er een aangepaste 3D cumulatieve geluidsbelasting mag worden berekend wanneer daar een lagere belasting uitkomt. Dit omdat hogere waarde soms voor een heel gebied worden afgegeven en binnen dat gebied er een groot verschil in geluidbelasting kan plaatsvinden.) 

4. Op een inwendige scheidingsconstructie van een gebied als bedoeld in het eerste en tweede lid, die niet de scheiding vormt met een verblijfsgebied van een aangrenzende gebruiksfunctie waarop het eerste en tweede lid van toepassing zijn, zijn deze leden van overeenkomstige toepassing. (Dit betekent dat de eis onverminderd geld voor de “binnenwand” van een verblijfsgebied. Bijvoorbeeld in geval van een afgesloten galerij is de buitengevel een glazen vliesgevel, de eis geldt dan op de verblijfsruimte achter de galerij.)

5. Een scheidingsconstructie als bedoeld in het eerste, tweede en vierde lid van een verblijfsruimte heeft een volgens NEN 5077 bepaalde karakteristieke geluidwering die maximaal 2 dB of dB(A) lager is dan de karakteristieke geluidwering als bedoeld in het eerste, tweede en vierde lid van het verblijfsgebied waarin de verblijfsruimte ligt. (Dit hebben we nu buitenspel gezet door op te nemen dat een verblijfsruimte gelijk is aan een verblijfsgebied. De regel komt er op neer dat voor een verblijfsruimte een 2 dB minder strenge eis geldt, maar voor de alle  verblijfsruimten in een verblijfsgebied te samen nog steeds voldaan moet worden aan de hogere eis (stap 4 in de berekening).)

<figure>
<img src=".\h\media\Geluid_tabel.jpg"alt="Image" style="width:500px;">
<figcaption>Aansturingstabel 3.1</caption>
</figure>

**Oplossingsrichting:**

**IFC:**
Selecteer gevel-elementen: IfcWall+IfcWindow+IfcDoor+ IfcPlate+IfcFlowTerminal+IfcCurtainWall Classification *NL*SfB* = 21.* or 31.* or 41.* Pset_*Common: AkousticRating + Geluidwering(RA/DneA in dB(A) 
Bron: BIM basis ILS, Rotterdamse BIM-ILS 

Verblijfs-ruimten in gebouw:
IfcSpace collect: -ObjectType= Verblijfsruimte extract: Location:Global X/Y/Z

**CityGML** 
Gebouw:
Feature <> Abstractbuilding
* +noise::BuildingReflection : xs::string [0..1]
* +noise::BuildingReflectionCorrection : gml:MeasureType [0..1]
* +noise::BuildingLDenMax : gml::MeasureType [0..1]
* +noise::BuildingLDenMin : gml::MeasureType [0..1]
* +noise::BuildingLNightMax : gml::MeasureType [0..1]
* +noise::BuildingLNightMin : gml::MeasureType [0..1]
* +noise::BuildingLDenEq : gml::MeasureType [0..1]
* +noise::BuildingLNightEq : gml::MeasureType [0..1]
* +noise::buildingHabitants : xs::positiveInteger [0..1]
* +noise::buildingImmissionPoints:: gml::integerList [0..1]
* +noise::remark : xs::string [0..1]

Meubilair:
Feature <> noise::NoiseCityFurnitureSegment
+noise::type : noise::NoiseCityFurnitureSegementTypeTpe[0..1]
+noise::reflectionCorrection : gml::MeasureType [0..1]
+noise::height gml::LengthType [0..1]
+noise::distance : gml:lengthType [0..1]

**Berekening:**
1)	Bepaal hogere waardenbesluit voor perceel
2)	Bepaal cumulatieve geluidsbelasting per bron (excl. aftrek) op gevel n – verdieping op basis van 3D geluidsbestand
3)	Zoek gebruiksfunctie verblijfsruimte in gebouw 
4)	Bereken per bron cumulatieve geluidbelasting (excl. Aftrek, zoals voor straatmeubilairobjecten) – maximaal toegestane binnenwaarde voor gebruiksfunctie, waarbij verblijfsruimte = verblijfsgebied
5)	Bepaal geluidwering van gevel (elementen) conform NPR 5272 
6)	Analyseer per bron of uitkomst 5 (geluidwering gevel) groter is dan uitkomst 4 (eis).
7)	Visualiseer de rekenwaardes en de uitkomsten.

<figure>
<img src=".\h\media\Use-case-3.jpg"alt="Image" style="width:500px;">
<figcaption>Schematisering GEO-BIM gebruik bij use-case Geluid</caption>
</figure>

## Use-case 4: Bestemmingsregels

**Opgave:** 
De vergunningscontrole kan inzichtelijk maken of voldaan wordt aan onderstaande bestemmingsregel. De onderstaande bestemmingsomschrijving is indicatief en geldt niet voor de test-case. De vergunningscontroleservice dient wel de functionaliteit te bezitten om dit soort bestemmingsregels te controleren.  

**Wetgeving:**
Bestemmingsregels

**Artikel:**
Hoofdstuk 2. bestemmingsregels

**Eistekst:**
De voor ‘gebied x' aangewezen gronden zijn bestemd voor: kantoor, tot een maximum van 100.000 m2 b.v.o in ’gebied x’ en ‘gebied y’ gezamenlijk;

**Toelichting**
Artikel 3 Centrum - 1
3.1 Bestemmingsomschrijving
De voor 'Centrum - 1' aangewezen gronden zijn bestemd voor:
a) wonen, met inachtneming van het bepaalde in artikel 3.2.4;op de begane grond van woontoren "100hoog" (hoek Posthoornstraat/wijnhaven) is wonen niet toegestaan;
b) kantoor, tot een maximum van 254.084 m2 b.v.o in Centrum - 1, Centrum - 2 en Centrum - 3 gezamenlijk;
c) hotel;
d) maatschappelijke voorzieningen,
f) bedrijven t/m categorie 2, uitsluitend op de begane grond;
g) detailhandel, uitsluitend op de begane grond, tot een maximum van 3.440m² b.v.o. in 'Centrum - 1', 'Centrum - 2', 'Centrum - 3' en 'Centrum - 4' gezamenlijk, met inachtneming van het bepaalde in artikel 3.3.2;
dienstverlening, uitsluitend op de begane grond, met dien verstande dat de dienstverlening die vanaf het moment van de terinzagelegging van het ontwerpbestemmingsplan op de verdiepingen aanwezig is, is toegestaan;
h) horeca, uitsluitend op de begane grond, met dien verstande dat de horeca die vanaf het moment van de terinzagelegging van het ontwerpbestemmingsplan op de verdiepingen aanwezig is, is toegestaan;
i) cultuur en ontspanning, uitsluitend op de begane grond, met dien verstande dat het Maritiem Museum, gelegen aan de Leuvehaven 1 ook op de verdiepingen is toegestaan;
j) bedrijf in de vervaardiging van schakel- en verdeelinrichtingen aan de Jufferstraat 10 (cat. 3.1);
k) parkeergarages (boven- en/of ondergronds);
l) dakterrassen;
m) berg- en stallingsruimten, groen, water, tuin, parkeervoorzieningen, ontsluitingswegen en -paden;
n) openbare nutsvoorzieningen, niet groter dan 80 m3;
o) 'Waarde - Archeologie 1', 'Waarde - Archeologie 2', 'Waarde - Cultuurhistorie', 'Waterstaat - Waterkering', 'Waterstaat - Waterstaatkundige functie' voor zover de gronden mede als zodanig zijn bestemd.

3.2 Bouwregels
3.2.1 Algemeen
Op de voor 'Centrum - 1' bestemde gronden mag uitsluitend worden gebouwd ten behoeve van de aldaar genoemde functies.
3.2.2 Medebestemming
Voor zover de gronden mede zijn bestemd voor Waarde - Archeologie 1', 'Waarde - Archeologie 2', 'Waarde - Cultuurhistorie', 'Waterstaat - Waterkering' en 'Waterstaat - Waterstaatkundige functie' , is voor het bouwen het bepaalde terzake in genoemde bestemmingen mede van toepassing.
3.2.3 Bebouwingsnormen
a) Overeenkomstig het bepaalde in artikel 18.2 sub a geldt de maatvoeringsaanduiding op de verbeelding als maximum bouwhoogte.
b) Indien de feitelijke en tevens vergunde bouwhoogte van gebouwen op het moment van de terinzageleging van het ontwerpbestemmingsplan meer bedraagt dan de maatvoeringsaanduiding op de verbeelding, dan is de feitelijke en vergunde bouwhoogte de maximum bouwhoogte.
c) Ter plaatse van de aanduiding "onderdoorgang", is een onderdoorgang verplicht.
d) Ter plaatse van de aanduiding "overkraging", is een overkraging toegestaan; bebouwing tot aan de bestaande overkraging is niet toegestaan.
e) Gebouwen binnen 40 meter vanaf de oever van de nieuwe Maas dienen tenminste één (nood)uitgang te hebben die van deze risicobron afgekeerd is.
3.2.4 Toevoegen woningen
a) In 'Centrum - 1', 'Centrum - 2', 'Centrum - 3' en 'Centrum - 4' mogen vanaf het moment van de terinzagelegging van het ontwerpbestemmingsplan met inachtneming van het bepaalde in de volgende subleden gezamenlijk maximaal 800 woningen worden toegevoegd.
a) Indien studenteneenheden worden toegevoegd, dan wordt het aantal toegevoegde woningen als volgt berekend: studenteneenheden x 0,1= aantal toegevoegde woningen.
c) Indien woningen worden toegevoegd door middel van transformatie van een kantoorpand, dan wordt het aantal toegevoegde woningen als volgt berekend:
getransformeerde woningen x 0,5 = aantal toegevoegde woningen.
d) Transformatie van kantoorruimte naar woning(en) is uitsluitend toegestaan indien per woning gemiddeld 100 m2 bvo aan kantoorruimte wordt omgezet.
e) De binnenwaarde van een woning die door transformatie van kantoorruimte is toegevoegd mag maximaal 38 dB bedragen.

3.3 Specifieke gebruiksregels
3.3.1 Woningen
Woningen mogen mede worden gebruikt voor de uitoefening van een aan huis gebonden beroep of bedrijf, mits:
a) de woonfunctie in overwegende mate gehandhaafd blijft, waarbij het bruto vloeroppervlak van de woning voor ten hoogste 30% mag worden gebruikt voor een aan huis gebonden beroep of bedrijf;
b) ten aanzien van een aan huis gebonden bedrijf sprake is van een bedrijf tot en met categorie 1 als bedoeld in de bij deze regels horende lijst van bedrijfsactiviteiten;
c) de gevel en dakrand van de woning niet worden gebruikt ten behoeve van reclame-uitingen;
d) er geen bedrijfsmatige activiteiten plaatsvinden die betrekking hebben op het onderhouden en repareren van motorvoertuigen;
e) er geen detailhandel plaatsvindt, tenzij als ondergeschikt onderdeel van het aan huis gebonden beroep of bedrijf.
3.3.2 Detailhandel
Detailhandel is toegestaan, uitsluitend op de begane grond, in de straten Posthoornstraat, Glashaven, Rederijstraat, Wolfshoek, Wijnhaven (noordzijde).
Daarnaast is detailhandel toegestaan:
a) op de begane grond van de gebouwen Red Apple/ Ibis hotel, gelegen binnen het bouwblok Wijnhaven, Punt, Scheepmakershaven, Scheepmakerspassage en Wijnbrugstraat;
b) op de begane grond van de Waterstadstoren 3, gelegen aan de Bierstraat, Wijnhaven, Wijnbrugstraat;
c) op de verdiepingen van de Overblaak (Kubuswoningen), met dien verstande dat detailhandel is toegestaan die vanaf het moment van de terinzagelegging van het ontwerpbestemmingsplan aanwezig zijn.
3.3.3 Toegestane bedrijven
Uitsluitend bedrijven t/m categorie 2 van de lijst van bedrijfsactiviteiten behorende bij deze regels zijn toegestaan.

**Oplossingsrichting:**

**IFC:**
Gebruiksfunctie: 
IfcBuilding: Pset_BuildingCommon: Gebruiksfunctie of IfcSpace : Pset_SpaceCommon :  Gebruiksfunctie
Collect: Location: Floor(building story) + Quantities: Area + Volume 
Bron: Rotterdamse BIM-ILS BIM basis ILS 

**CityGML:**
AbstractBuilding: 
CityObject bldg::_Building + class : BuildingClassType [0..1] + function : BuildingFunctionType [0..*] + usage: BuildingUsageType  [0..*]

Bestemmingsvak (vanuit IMRO): 
Feature <> LandUse + class[0..1]: LandUseClassType + function[0..*]: LandUseFunctionType + usage[0..*]: LandUseUsageType

**Berekening:**
1)	1 Bepaal het bestemmingsplangebied waar de activiteit (nieuwbouw) in zit 
2)	Bepaal het gebied of gebieden waar een maximum voor geldt (op basis van regelgeving van het bestemmingsplangebied)
3)	Bereken hoeveelheid toe te voegen functie uit BIM in m2
4)	Bepaal of op hoeveelheden functie restricties zitten 
5)	Bereken voor functies met restricties de hoeveelheid aanwezig in gebied [1…*] Geo (BuildingFunctionType)
6)	Bereken of totaal maximum min totaal aanwezig kleiner is dan de hoeveelheid  nieuw toe te voegen.
7)	Visualiseer gebieden, aantallen en hoeveelheid nieuw toe te voegen toegestaan ja/nee.

<figure>
<img src=".\h\media\Use-case-4.jpg"alt="Image" style="width:500px;">
<figcaption>Schematisering GEO-BIM gebruik bij use-case Bestemmingsregels</caption>
</figure>

## Use-case 5: Constructie

**Opgave:**
De vergunningscontrole kan inzichtelijk maken of voldaan wordt aan onderstaande eis het eerste lid 

**Wetgeving:**
Bouwbesluit

**Artikel:**
2.3. Buitengewone belastingscombinaties

**Eistekst:**
1) Een bouwconstructie bezwijkt gedurende de in NEN-EN 1990 bedoelde ontwerplevensduur niet bij de buitengewone belastingscombinaties als bedoeld in NEN-EN 1990, als dit leidt tot het bezwijken van een andere bouwconstructie die niet in de directe nabijheid ligt van die bouwconstructie. Daarbij wordt uitgegaan van de bekende buitengewone belastingen als bedoeld in NEN-EN 1991.

2) Een dak of een vloerafscheiding bezwijkt gedurende de in NEN-EN 1990 bedoelde ontwerplevensduur niet bij de buitengewone belastingscombinaties als bedoeld in NEN-EN 1990. Daarbij wordt uitgegaan van stootbelastingen als bedoeld in NEN-EN 1991.

**Toelichting**
Stootbelasting: NEN-EN 1991
4.3 Buitengewone belastingen veroorzaakt door wegvoertuigen
4.3.1 Stootbelastingen op de ondersteunende onderbouw
(1) Rekenwaarden behoren te zijn vastgelegd voor stootbelastingen op ondersteuningsconstructies (bijvoorbeeld kolommen en wanden van bruggen of gebouwen) grenzend aan verschillende soorten wegen.

Voor harde stootbelastingen (zie 4.2.(6)) door wegverkeer kunnen rekenwaarden nauwkeurig zijn vastgelegd in de nationale bijlage. De indicatieve rekenwaarde van de equivalente statische kracht mag zijn ontleend aan tabel 4.1. Bij de keuze van de waarden mag rekening zijn gehouden met de gevolgen van de stootbelasting, de verwachte hoeveelheid en het soort verkeer en iedere genomen beperkende maatregel. Zie EN 1991-2 en bijlage C. Indien nodig kan een richtlijn voor risicoanalyse worden gevonden in bijlage B.

De rekenwaarde van de equivalente statische kracht moet zijn ontleend aan tabel NB.1 – 4.1. Deze krachten mogen zijn vermenigvuldigd met √(1 – d / db), waarin d is de afstand van het midden van de baan tot het botsingspunt en db is gegeven in tabel NB.1 – 4.1.

Het aangrijpingspunt van de resultante van de belasting ligt op 1,5 m voor vrachtwagens en 0,5 m voor personenauto’s boven het wegoppervlak. Voor de afmetingen van het aangrijpingsoppervlak (a × b) van de belasting moet zijn aangehouden:

a = 0,25 m; b is de breedte van de kolom, met een maximum van 1,00 m;
waarbij: 
a is de afmeting van het aangrijpingsoppervlak bij aanrijding gemeten in de hoogterichting;
b is de afmeting van het aangrijpingsoppervlak bij aanrijding gemeten in de breedterichting.
Geen informatie is gegeven over het type constructie-elementen waarbij stootbelastingen door voertuigen niet hoeven te worden beschouwd.
Tabel NB.1 – 4.1 – Rekenwaarden van equivalente statische krachten door stootbelastingen door voertuigen tegen elementen die constructies ondersteunen over of grenzend aan wegen

<figure>
<img src=".\h\media\Verkeerscategorie.png"alt="Image" style="width:500px;">
<figcaption>Verkeerscategorie</caption>
</figure>

<figure>
<img src=".\h\media\Botskracht.png"alt="Image" style="width:100px;">
<figcaption>Botskracht</caption>
</figure>

<figure>
<img src=".\h\media\Rekenwaarde voor voertuigmassa snelheid en dynamische botskracht.png"alt="Image" style="width:300px;">
<figcaption>Rekenkracht</caption>
</figure>

Aangezien het onbekend is bij hoeveel graden het maaiveld een helling vormt wordt afgezien van de vermenigvuldiging van 0,6/1,6 en wordt van het volgende uitgegaan: De aangehouden snelheid mag men verhogen/verlagen met Δv = √ (2*g*h) (met g=valversnelling van 9,81m/s^2, en h voor het hoogteverschil). Db blijft dan gewoon gelijk. Dit verkrijgt men door de kinetische energie 0,5*m*v^2 gelijk te stellen aan de potentiële energie m*g*h.
Daarbij moet je de afgelegde weg d wel rekenen over de schuinte van het talud (ook het talud af remt af).
De hiermee uitgerekende kracht is de bedreigende kracht. De werende kracht is niet berekend. Deze volgt uit gebouwconstructieberekening volgens de NEN 1996. Deze valt buiten scope van deze use-case. 

**Oplossingsrichting:**

**IFC:**
Constructieve elementen op begane grond: Ifc*all*-Pset_*Common: Loadbearing=True-Location – Building Level = 00*begane grond 
Bron: BIM basis ILS

Hoogte drempel entree: IfcDoor-Classification - *NL*SfB* = 31.*collect all:-Pset_DoorCommon: Entrance=true
-Location – Building Level = 00*begane grond-> extract Location: Bottom elevation
Bron: BIM basis ILS, Rotterdamse BIM-ILS

Contour gebouw op kavel: Ifc*Any*: Pset_*Common(exclude IfcSpaces+IfcZones): IsExternal=true 
collect all Location Data extract for building block: total Lenght total Widht
Bron: BIM basis ILS

Mogelijke obstakels op kavel: IfcRailing + IfcFurniture -Classification - *NL*SfB* = 34.* + 7*.** + 9*,**
collect: - IsExternal=true extract: element Volume Collect IfcBuildingStorey->extract Location: Bottom Elevation
Bron: BIM basis ILS

**CityGML:**
Wegen: TrafficAreaUsageType Road Generic attribute -> Driving direction
Maaiveld: Feature <> LandUse + class[0..1]: LandUseClassType + function[0..*]: LandUseFunctionType + usage[0..*]: LandUseUsageType

**Berekening:**
1)	Bepaal de dichtstbijzijnde wegen in GEO op basis van locatie activiteit (BIM ) 
2)	Bepaal type weg van dichtstbijzijnde wegen 
3)	Bepaal rijrichting t.o.v. BIM 
4)	Bepaal constructief element begane grond in BIM 
5)	Bepaal afstand midden baan tot constructief element 
6)	Bepaal helling midden baan tot constructief element
7)	Geef en visualiseer bereken-waardes

<figure>
<img src=".\h\media\Use-case-5.jpg"alt="Image" style="width:500px;">
<figcaption>Schematisering GEO-BIM gebruik bij use-case Constructie</caption>
</figure>









