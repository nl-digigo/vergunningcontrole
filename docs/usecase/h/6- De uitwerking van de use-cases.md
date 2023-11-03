# Use-Cases, de uitwerking


## Use-case 1: Bluswatervoorziening
1) Om deze use-case op te lossen is eerst gezocht naar de brandweeringang x,y,z in de BIM-database. Met een query wordt in het IFC-model opgezocht waar de brandweeringang(en) zich bevind(t)(en) en in het 3D-model helder gepresenteerd met rood gemarkeerde deur. 
<figure>
<img src=".\h\media\Branddeuren in IFC.jpg"alt="Image" style="width:200px;" >
<figcaption> Brandweeringang in IFC rood gemarkeerd </caption>
</figure>

2) Er wordt in een cirkel van 40 m om de brandweeringang gezocht naar brandhydranten in de GEO-database. Wanneer er geen brandhydranten gevonden worden is de conclusie dat niet kan worden voldaan aan de eis. De onderstaande stappen hoeven dan niet meer uitgevoerd te worden.
Bij de uitwerking is bij deze stap gekozen om binnen een straal van 100 m (rood) de gegevens te visualiseren in plaats van 40 m (blauw). Hoe meer gegevens je ophaalt, hoe trager het systeem dus hier dient een optimum gevonden te worden tussen prestaties en bruikbaarheid. Met 100 m is genoeg van de omgeving te zien voor een goed overzicht en inzicht voor de gebruiker.

<figure>
<img src=".\h\media\Brandhydranten rond bouwaanvraag.jpg"alt="Image" style="width:200px;" >
<figcaption> Brandhydranten rond 40 m en 100 m van de brandweeringang(en) van de bouwaanvraag </caption>
</figure>

3) Zoek obstakels als maaiveld, gracht, hek, tram binnen de 40 m bol in GEO-informatie. Hier mag de lijn niet doorheen lopen. Wanneer er zowel aan stap 1, brandweeringang aanwezig, als aan stap 2, brandhydrant <40 m, wordt voldaan vindt deze analyse plaats. Voor de locatie van het prototype was geen tram of gracht aanwezig. Dit is daarom ook niet in de berekening mee te nemen, dit zou men kunnen testen op een andere locatie. Tijdens de uitwerking bleek dat het meenemen van de hoogteverschillen in het maaiveld (AHN) te complex werd. Er is daarom voor deze fase gekozen deze niet mee te nemen in de berekening. Voor de meeste berekeningen heeft dit geen tot weinig invloed op de uitkomst, maar in bepaalde gevallen kan de toetsing hierdoor afwijken.
docs\usecase\h\media\

4) Voor deze bepaling is het berekeningsraster van 0,5 x 0,5 m aangehouden. Dit zie je terug in de visualisatie van de afstand door de zigzaglijn. Dit heeft een invloed op de afstandsbepaling, maar voor nu ingeschat als gering. Een fijner raster geeft een iets nauwkeurigere uitkomst, maar zorgt ook voor een iets langere rekentijd. Tijdens de uitwerking van deze stappen was in eerste instantie het bouwplan zelf niet als obstakel meegenomen. De brandslang mag niet door de tuin van de buren gaan en/of door de aangrenzende of eigen woning. Deze uitdaging is opgelost in het prototype, het eigen gebouw wordt nu ook als obstakel meegenomen.
<figure>
<img src=".\h\media\Zoek route rond obstakels tot brandhydrant.jpg"alt="Image" style="width:200px;" >
<figcaption> Obstakels tussen brandhydrant en brandweeringang </caption>
</figure>

De lijnen van brandweeringang tot aan brandhydrant worden per kavel bepaald en de lengte van deze lijnen berekend. Als er geen lijn korter dan 40 m van brandhydrant naar brandweeringang bestaat kleurt het kavel rood en voldoet het bouwplan niet aan de eis, wanneer dit wel het geval is wordt hij donkergroen weergegeven.

<figure>
<img src=".\h\media\Resultaat kavels Brandweeringang tot brandhydrant.jpg"alt="Image" style="width:200px;" >
<figcaption> Obstakels tussen brandhydrant en brandweeringang </caption>
</figure>

## Use-case 2: Welstand
Voor de usecase welstand controleert de vergunningscontroleservice of het bouwinitiatief de stedenbouwkundige structuur herkenbaar houdt en deze niet verstoort. Ook of de maat en schaal is afgestemd op de omliggende bebouwing en de stad als geheel. Ondanks dat de usecase met de gebruikers is opgesteld en afgestemd kwamen we gezamenlijk tot de conclusie dat de gevraagde toetsing wel interessant is, maar eerder voor de afdeling stedenbouw relevant is en minder voor welstand. Het in 3D samenbrengen van aanvraag eis een zeer interessant onderdeel voor welstand ondanks dat dit niet direct onderdeel is van de usecase. Zo bleek vaker dat nu er een prototype is er beter inzicht ontstaat over de mogelijkheden en het daadwerkelijk praktisch nut voor eindgebruikers.

<figure>
<img src=".\h\media\3D BIM model gepositioneerd in Digitale Stad.jpg"alt="Image" style="width:200px;" >
<figcaption> #d BIM model gepositioneerd in de 3D Digitale Stad </caption>
</figure>

Om ondersteuning te bieden in controle voor welstandcriteria doet de service twee analyses. Allereerst analyseert de service de dakhelling van de omliggende bebouwing en de dakhelling van het bouwplan zelf. Als de dakhelling van de aanvraag overeenkomt met de dakhelling van omliggende bebouwingen wordt geconcludeerd dat is voldaan. Als deze niet overeenkomt geeft de service een negatief resultaat.    
Naast de dakhelling maakt de vergunningscontroleservice ook inzichtelijk welke oriëntatie het gebouw en de omliggende bebouwing heeft en of dit overeenkomt met elkaar of sterk afwijkt. 

In onderstaande figuur is te zien dat de helling van alle daken in de aanvraag wordt bepaald en in een staafdiagram per categorie weergegeven. De toets of de oriëntatie past bij de omringende bebouwing is op een zelfde manier gedaan. 
<figure>
<img src=".\h\media\Dakhellinganalyse.jpg"alt="Image" style="width:200px;" >
<figcaption> #d BIM model gepositioneerd in de 3D Digitale Stad </caption>
</figure>

## Use-case 3: Geluid

Voor de bouwfysica usecase wordt de geluidwering van de gevel ten gevolge van geluid van buiten getoetst. Dit is een complexe usecase gebleken en voor meerdere stappen is noodzakelijk gebleken dat deze niet haalbaar of in versimpelde versie meegenomen moest worden. Omdat voor de toetsing veel verschillende bronnen en berekeningstappen nodig zijn is inzicht in en het beschikbaar zijn van alle benodigde gegevens essentieel. Er zijn in deze usecase veel stappen gezet, maar ook nog veel te winnen. 

1) Bepaal hogere waardenbesluit voor perceel
Bij deze eerste en misschien wel belangrijkste stap is het niet mogelijk gebleken om door de vergunningscontroleservice vast te stellen of voor een perceel een hogere waarde geldt. In het prototype bleek het slecht mogelijk de bronnen waar dit is vastgelegd, kadaster en bestemmingsplan, te gebruiken.   

2) Bepaal cumulatieve geluidsbelasting per bron (excl. aftrek) op gevel n – verdieping op basis van 3D geluidsbestand 
Dit wordt ingelezen op basis van een puntenwolk op de locatie gecreëerd door dBvision op basis van het akoestisch onderzoek gedaan in het kader van het bestemmingsplan. Hierbij is naast de aanwezige geluidbronnen ook het gezamenlijk geluid opgenomen zoals later bij het omgevingsplan ook gebruikt gaat worden. 

3) De te toetsen geluidseis geldt alleen bij bepaalde gebruiksfuncties, voornamelijk verblijfsruimte, en voor gevels grenzend aan deze verblijfsruimten. Deze worden opgehaald uit het IFC-model en samen met de puntenwolk weergeven. 

<figure>
<img src=".\h\media\Geluidsbelasting op de gevel.jpg"alt="Image" style="width:200px;" >
<figcaption> Geluidsbelasting op de gevel </caption>
</figure>

4) Bereken per bron cumulatieve geluidbelasting (excl. Aftrek, zoals voor straatmeubilairobjecten) – maximaal toegestane binnenwaarde voor gebruiksfunctie
In deze stap wordt per bron de eis bepaald die geldt aan de gevel door het maximaal toegestane binnenniveau per functie af te trekken van de cumulatieve geluidbelasting. Hiervoor was een van de uitdagingen om de punten met de geluidbelasting te linken aan de goede gevelvlakken zodat duidelijk is welke gevelbelasting geldt. Door dit met lijnen te visualiseren is te volgen hoe dit gebeurt. In de uitvraag was gezet deze stap te berekenen, in het prototype is deze aangeleverd door de 3D-puntenwolk.

5) Bepaal geluidwering van gevel (elementen) conform NPR 5272 
Voor het prototype hebben bleek dat niet alle gevelelementen een bepaald geluidswering bevatten. Hierom wordt voor de relevante elementen van de berekening een forfaitaire waarde voor de geluidwering toegekend. Waaronder de geluidwering voor een raam (Ra-waarde 28 dB) en voor een steenachtige spouwmuur (Ra-waarde van 50 dB). Wanneer een IFC-model hiervoor een eigen waarde heeft (bijvoorbeeld akoestisch raam Ra 34 dB) overschrijven deze waardes de forfaitaire waardes. Geluidswerende waarde (RAtr-waarde) en aanvulling

6) Analyseer en visualiseer per bron of uitkomst 5 (geluidwering gevel) groter is dan uitkomst 4 (eis). 
Gezien de versimpeling in de stappen is ook bij deze stap een versimpeling aangebracht. De uitgewerkte methode komt neer op de eisstelling voor de gevel, bijvoorbeeld een geluidbelasting van 63 dB en een maximaal toegestaan geluidniveau binnen van 33 dB. Dit geeft 63 dB – 33 dB = geluidwering minimumeis van 30 dB. De vergunningscontroleservice kijkt of de relevante elementen in de gevel minder geluidwering bezitten dan deze 30 dB. Wanneer dit zo is wordt geconcludeerd dat niet kan worden voldaan. De zwakke elementen worden gevisualiseerd, met rood aangegeven, en per verblijfsgebied wordt aangegeven of wordt voldaan, blauw aangegeven. In de praktijk is dit een te grote versimpeling in de meeste gevallen. Wanneer stap 1 en stap 5 verbeterd kunnen worden, lijkt de usecase veel potentieel te hebben.

<figure>
<img src=".\h\media\Ruimtes die voldoen of niet voldoen aan de uitvraag.jpg"alt="Image" style="width:200px;" >
<figcaption> Geluidsresultaat van de gevel en achterliggende ruimtes. </caption>
</figure>

## Use-case 4: Bestemmingsregels
De vergunningscontroleservice bepaalt in deze usecase of met de aanvraag nog wordt voldaan aan de maximaal toegestane hoeveelheid m2 voor een bepaalde functie in een bestemmingsplan.

Vanuit het BIM-model berekent de service de hoeveelheid de toe te voegen functieruimte in m2. Binnen het het betreffende bestemmingsplangebied worden alle gerealiseerde functies conform BAG en WOZ opgeteld en weergegeven. De berekening volgt of totaal maximum min totaal aanwezig kleiner is dan de hoeveelheid nieuw toe te voegen. 

Hier wordt getoetst en weergegeven of de aanvraag de hoeveelheid toegestane m2 overschrijft. Is dit het geval dan wordt aangegeven dat niet wordt voldaan. Daarnaast waren nog wat interessante zijsporen uitgewerkt zoals een overzicht aan “vrij ruimte” per functie in het bestemmingsplan. Hier is met staafdiagrammen weergegeven hoeveel m2 van een bepaalde functie nog toegestaan wordt in een bestemmingsplan.

<figure>
<img src=".\h\media\Functieresultaat.jpg"alt="Image" style="width:200px;" >
<figcaption> Geluidsresultaat van de gevel en achterliggende ruimtes. </caption>
</figure>

## Use-case 5: Constructie
De vergunningscontroleservice kan een indicatie van de potentiële botskracht op de constructieve onderdelen berekenen en weergeven. 

1) Bepaal de dichtstbijzijnde wegen in GEO op basis van locatie activiteit (BIM)  
2) Bepaal type weg van dichtstbijzijnde wegen, hoe hard mag men hier rijden? 
3) Bepaal rijrichting t.o.v. BIM 
Op basis van de digitale stad wordt bepaald welke wegen rond het bouwplan liggen. Op basis hiervan kan men weten hoe hard er gereden wordt. Het meenemen van de rijrichting in de berekening was nog een stap te ver voor dit prototype.
4) Bepaal constructief element begane grond in BIM 
In het BIM-model is aangegeven wat de constructieve elementen zijn, de relevante elementen worden weergegeven.

<figure>
<img src=".\h\media\Wegen en constructieve elementen.jpg"alt="Image" style="width:200px;" >
<figcaption> Wegen rond een bouwaanvraag en de constructieve elementen van de bouwaanvraag. </caption>
</figure>

5) Bepaal afstand middenbaan tot constructief element  
6) Bepaal helling middenbaan tot constructief element 
Het meenemen van de helling werd een te complexe berekening, dit is daarom in dit prototype achterwege gelaten. 

7) Geef en visualiseer bereken-waardes 
Per relevant element wordt de potentiële botskracht getoond. De formule is dusdanig opgebouwd dat voor afstanden langer dan 10 meter van rijbaan tot constructief element geen kracht meer bestaat. Om toch resultaat te tonen is daarom deze afstand op 30 meter gezet. Om als gebruiker inzicht in de gehanteerde uitgangspunten en formule te hebben is bij deze usecase dit gevisualiseerd. Dit is een goede manier gebleken om gebruikers inzicht te geven in de stappen.

<figure>
<img src=".\h\media\Aanrijbelasting tov constructief element.png"alt="Image" style="width:200px;" >
<figcaption> Aanrijbelasting tot constructief element </caption>
</figure>


## Datagedreven regelgeving

In het prototype is gebruik gemaakt van datagedreven regelgeving, voor mens en machine te begrijpen. Het bouwbesluit, toekomstig Besluit Bouwwerken Leefomgeving (BBL) is hiervoor vanuit proza, voor mens begrijpbaar, omgevormd naar voor mens en machine te begrijpen formaat. Hiervoor is gebruik gemaakt van de Rule- en Querylanguage SHACL/SPARQL. Dit is gedaan op basis van een eerder onderzoek naar datagedreven regelgeving van TNO. De vergunningscontroleservice maakt ook gebruik van dit principe. In de viewer van de vergunningscontroleservice kan men deze regels ook inzien, bewerken, verwijderen en/of toevoegen. Door in het menu van de vergunningscontroleservice niet op “Vergunningcheck prototype” te klikken maar op “Rule browser” kan men de datagedreven regel- en wetgeving zien waar de vergunningscontroleservice mee werkt. Hiermee creëert men transparante regelgeving.

De eis voor brandveiligheid ziet er in proza als volgt uit: “De afstand tussen een bluswatervoorziening als bedoeld in het eerste lid en een brandweeringang als bedoeld in artikel 6.36, eerste lid, is ten hoogste 40 m.”. Deze wet ziet er als datagedreven uit zoals hieronder weergegeven. Elke “bol” in het model is een bepaalde bewerking, geschreven in SPARQL, van de data die nodig is om de wet te toetsen. Zo staat in één bol de beschrijving waarmee de brandweeringang in het BIM-model gezocht kan worden en in een andere bol de zoekfunctie voor de brandhydrant. In een andere bol de regel voor het berekenen van de afstand, en in een volgende bol de regels voor visualisatie. Het idee is dat deze datagedreven regel samen met de wetgeving in proza bestaat. Verandert de wetgeving? Dan zal de query ook moeten veranderen. Als men de datagedreven regel verandert zal de vergunningscontroleservice deze direct doorvoeren in de controles. Voor elke usecase is een datagedreven wetgeving beschikbaar.

<figure>
<img src=".\h\media\Datagedreven regelgeving.jpg"alt="Image" style="width:200px;" >
<figcaption> Datagedreven regelgeving </caption>
</figure>

