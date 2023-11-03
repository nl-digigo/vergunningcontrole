# Wat voor data zit er in het prototype

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
<img src=".\h\media\IFC_logo.jpg"alt="Image" style="width:200px;">
<figcaption> Uitwisselstandaard IFC </caption>
</figure>

Voor GEO-informatie geldt ander uitwisselformaat. Rotterdam-3D is beschikbaar gesteld als CityGML-bestanden voor 3D weergave en analyse in het prototype. In de viewer van de vergunningscontrole is het basismodel van Rotterdam-3D hergebruikt. Dit wordt gedaan door het aanroepen van 3D-tiles (formaat GLTF, dat is onderdeel van de OGC standaard 3D Tiles) via een url. De datastroom van Rotterdam3D, is in het kort:
<figure>
<img src=".\h\media\GLTF.jpg"alt="Image" style="width:200px;">
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
<img src=".\h\media\ILS-en.jpg"alt="Image" style="width:200px;" >
<figcaption> BIM Basis ILS, ILS O&E en een fictieve DSO-ILS </caption>
</figure>

Ook GEO-informatie dient de vergunningscontroleservice goed te kunnen begrijpen. In het prototype voldoen GEO-datasets daarom aan modelleer-standaarden. Deze komen veelal uit de NEN3610 reeks. Voor buitenruimteobjecten (IMBOR, IMBGT, IMGEO), gebouwen (IMBAG), kabels ben Leidingen (IMKL) zijn landelijke objectmodellen beschikbaar.

Objecten komen binnen Rotterdam voor in verschillende registraties. In het prototype ziet men dat hierin niet exact dezelfde definities gebruikt worden. Dit maakt het een uitdaging om data te combineren. Kijken we bijvoorbeeld naar de IMKL (Informatie Model Kabels en Leidingen) dan valt op dat een brandkraan/brandhydrant onder een ander objecttype valt en ook een andere definitie heeft dan in de IMBOR (Informatie Model Beheer Openbare Ruimte). 

Bijvoorbeeld: De brandkraan gedefinieerd in IMBOR is een subtype van Put en kan uitgewisseld worden met het IMGEO-put. In het IMKL is de Brandkraan een leidingelement en iets anders dan een put. De vraag komt op hoe dit gemapped kan worden aan elkaar. Dit werd in dit prototype niet duidelijk. Ook tussen BOR en BGT zijn er dit soort afstemmingsissues die opgelost moeten worden. Hierin worden links en mappingen voorzien naar andere standaarden/OTL’en.

<figure>
<img src=".\h\media\NEN3610 reeks.jpg"alt="Image" style="width:200px;" >
<figcaption> NEN 3610 reeks </caption>
</figure>

Een van de usecases waar het prototype in ondersteunt is het analyseren van de bescherming tegen geluid van buiten, bij nieuwbouw. De gemeente kan met een zogenaamd “hogere waarden besluit” een hogere geluidsbelasting toestaan onder voorwaarde. Om dit te kunnen berekenen is geprobeerd informatie over het hogere-waarden-besluit op te halen om de eis te bepalen die gesteld is aan de gevelgeluidswering. Het prototype moet weten voor welk gebied/perceel dit geldt om een juiste ondersteuning te bieden in de controle. Of er een hogere waarde geldt voor een perceel wordt door de DCMR in het Kadaster ingeschreven en is daar dus opvraagbaar. 

Voor het bepalen van de geluidsbelasting op de gevel is uitgegaan van de resultaten van het akoestisch onderzoek uitgevoerd ten behoeve van het concept bestemmingsplan Hoogvliet Noordoost. Voor het prototype is hiervan een 3D puntenwolk beschikbaar gesteld met de cumulatieve en gezamenlijke geluidbelasting voor de locatie. Dit is in samenwerking met dBvision gedaan. Dit is een methode die goede resultaten oplevert. Deze methode is in 3D (eigenlijk 2,5D) nog niet gestandaardiseerd. Het 3D-bestand kan door bedrijven die akoestisch onderzoek doen geleverd worden. 




**Conversie naar Linked Data:** 
De conversie van de gemeentelijke data naar semantische data, Linked data, is uitgevoerd door de opdrachtenemer, Building Bits en samenwerkende partijen. Hier is een aparte database voor gemaakt. Linked data is bij uitstek geschikt om data te structureren en in verbinding te brengen met databronnen van andere domeinen. Dit sluit aan bij het Common Ground principe om data uit de eigen silo te halen en te combineren met data uit andere disciplines. Dit is een belangrijk uitgangspunt van het prototype. In vergunningverlening is het van belang data van verschillende domeinen bij elkaar te brengen. Denk aan:
-	Bouwwerk Informatie Modellen van het ingediende;
-	Bouwwerk Informatie Modellen van de buitenruimte rond het gebouw;
-	Omgevingsplannen en regels;
-	Welstandinformatie;
-	Beheerinformatie van stedelijke assets;
-	Geografische basisdata;
-   Kadastrale informatie
-	Geluidsmodellen inclusief hogere waarde besluiten per perceel;
-	...
De data van al deze vakgebieden moet aan elkaar gelinkt worden voordat deze integraal kunnen worden gebruikt in een service voor de vergunningscontrole. Het concept van Linked Data bestaat al lang, de techniek is voorhanden. In diverse domeinen bestaan ook linked data modellen die de objecten beschrijven, OTL-en (Object Type Library). 

Voor het maken van linked data zijn de stappen gevolgd die zijn beschreven door (Platform Linked Data Nederland). Namelijk: 

1) Selectie van bron datasets
2) Het selecteren van Informatiemodellen/OTL'en 
3) Data-overdracht
4) Vertaling naar Linked-data formaat rdf 
5) Ontsluiten van de data
6) Consumeren van de data in visualisatie

<figure>
<img src=".\h\media\6 stappen in het maken van linked data.jpg"alt="Image" style="width:200px;" >
<figcaption> De 6 stappen in het maken van linked data volgens PLDN </caption>
</figure>

