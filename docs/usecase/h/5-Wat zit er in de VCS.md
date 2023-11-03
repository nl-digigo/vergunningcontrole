# Wat is er uitgewerkt in het prototype

De use-cases zijn uitgewerkt en getest in het prototype. Dit is gedaan op de hieronder beschreven wijze.

**Testlocatie en -gebouwen:** 

In de prototype-fase heeft men het focusgebied Traviataweg in Hoogvliet geselecteerd. Het omgevingsplan wat op dit gebied van toepassing is, heet momenteel “Hoogvliet Oudeland 1e herziening”. Op de locatie Traviataweg is het bouwplan “de Perken” als usecase gebruikt. Het 3D-model is aangeleverd door bouwkundig ingenieursbureau LIJNN. Ook het 3D-model van het project Riederkercke van Kuiper Compagnons is gebruikt in de vergunningscontroleservice. Dit gebouw is bedoeld voor een locatie in Ridderkerk. Het plaatsen van dit model op de Traviataweg is gedaan om verschillende modellen en uitkomsten van de vergunningscontroleservice te vergelijken.

<figure>
<img src=".\h\media\Scope locaties.jpg"alt="Image" style="width:500px;">
<figcaption> Testlocatie en -gebouwen in het prototype VCS</caption>
</figure>

**Uitwisselformaten:** 
Bij het opstellen en/of aanvullen van BIM-modellen maakt men gebruik van specifieke software. Aangezien de vergunningscontroleservice geen software wil voorschrijven is hier gekozen voor een universeel uitwisselformaat. Het uitwisselformaat van de BIM-modellen is het open-standaard-formaat IFC. De ontwikkeling is in beheer bij BuildingSMART. Bij deze pilot is gewerkt met twee versies. Namelijk IFC 2x3 en IFC 4.1.

<figure>
<img src=".\h\media\IFC_logo.jpg"alt="Image" style="width:200x; float:right;" >
<figcaption> Uitwisselstandaard IFC </caption>
</figure>


Voor GEO-informatie geldt ander uitwisselformaat. Rotterdam-3D is beschikbaar gesteld als CityGML-bestanden voor 3D weergave en analyse in het prototype. In de viewer van de vergunningscontrole is het basismodel van Rotterdam-3D hergebruikt. Dit wordt gedaan door het aanroepen van 3D-tiles (formaat GLTF, dat is onderdeel van de OGC standaard 3D Tiles) via een url. De datastroom van Rotterdam3D, is in het kort:
<figure>
<img src=".\h\media\GLTF.jpg"alt="Image" style="width:200x; float:right;" >
<figcaption> Uitwisselstandaard GLTF </caption>
</figure>

*	De bron is de database 3DcityDB, waarin de objecten zoals gebouwen in CityGML datastructuur zijn opgeslagen en beheerd. 
*	Vanuit deze bron creëert men elke maand, 3D tiles. Deze publiceert men op een webserver. Hierbij heeft elk objecttype/elke kaartlaag een eigen unieke url .
*	In de Rotterdam3D-viewers worden, afhankelijk van relevantie, de url’s toegevoegd waarmee de viewer gevuld wordt. 

De datastroom is open en beschikbaar voor de Cesiumviewer van de vergunningscontroleservice. Daarmee worden de volgende voordelen behaald:
*	Iedereen kijkt naar dezelfde bron-data
*	Doordat de dataset beheerd is gebruikt men altijd een actueel model. Of een maandelijkse update genoeg is, kan worden geëvalueerd.




**ILS:** 
Om de BIM-modellen goed te kunnen begrijpen moeten deze modellen uitgewerkt worden volgens bepaalde modelleer-standaarden. Dit zijn minimale vereisten voor de opbouw en invulling van de IFC-bestanden. Deze vereisten noemt men Informatie Levering Specificatie (ILS). In dit prototype gaat men uit van de BIM basis ILS, en de ILS Ontwerp & Engineering (O&E) van het digiGO BIM-Loket. Dit zijn landelijke standaarden. Deze worden vaak gehanteerd in de praktijk. De inhoud van BIM-modellen die men met deze uitvraag van deze ILS-standaarden bereikt is echter niet volledig toereikend voor de beoordeling omgevingsvergunning. Niet alle data die benodigd is voor toetsing is in de genoemde ILS-specificaties opgenomen. Hierdoor is het noodzakelijk een aanvullende Informatie Leverings Specificatie (ILS) naast de BIM basis ILS en de ILS O&E uit te vragen, voor nu een Rotterdamse ILS. De specificaties in deze uitvraag zullen nader geformuleerd moeten worden en separaat uitgevraagd moeten worden bij de aanlevering van BIM-modellen voor gewenste toetsing. Voor het prototype is dit gedaan voor de usecases die behandeld worden. In de toekomst zal deze Rotterdamse ILS uitgebreid moeten worden voor volledige toetsing van aanvragen. In de toekomst dient de ILS t.b.v. de vergunningscontroleservice ook een landelijke standaard te worden, bijvoorbeeld als onderdeel van de indieningsvereisten in het Digitaal Stelsel Omgevingswet.

<figure>
<img src=".\h\media\ILS-en.jpg"alt="Image" style="width:200x;" >
<figcaption> BIM Basis ILS, ILS O&E en een fictieve DSO-ILS </caption>
</figure>

