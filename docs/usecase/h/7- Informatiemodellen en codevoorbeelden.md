# Informatiemodellen

**Workflow**
Het 3D-model van de stad, het 3D-model van de gewenste ontwikkeling en de gedigitaliseerde wet- en regelgeving moeten op elkaar afgestemd zijn. Door de TU-Delft is een stroomdiagram en een sequentie-diagram opgesteld waarin de relatie en de uitwisseling tussen de verschillende bronnen wordt aangegeven. Deze relatie en uitwisseling is nodig om digitale ondersteuning in toetsing te faciliteren. Dit stroomdiagram en de sequentie-diagram is leidraad voor de architectuur modellen zijn ontwikkeld in het onderzoek "EuroSDR GeoBIM".

<figure>
<img src=".\h\media\Building PermissionActivityDEF.jpg"alt="Image" style="width:1000px;" >
<figcaption> Activiteitendiagram vergunningscontrole </caption>
</figure>

<figure>
<img src=".\h\media\Sequence DiagramDEF.jpg"alt="Image" style="width:1000px;" >
<figcaption> Sequence Diagram vergunningscontrole</caption>
</figure>

**Architectuur**
De vergunningscontroleservice werkt samen met het Digitaal Stelsel Omgevingswet (DSO) en met Vergunningverlening, toezicht en handhaving systemen (VTH-systemen). In een architectuurschets geeft de gemeente aan hoe deze samenhang eruit kan zien.

<figure>
<img src=".\h\media\dso_v.1.8.png"alt="Image" style="width:1000px;" >
<figcaption> <a hreff="https://dso.architectuur.synnefo.online/" target="new">Live version </a>  
<figcaption> <a hreff="https://dso.architectuur.synnefo.online/" target="new">Architectuurplaat </a> 
Omgevingswet & vergunningscontrole</caption>
</figure>

**Codefragmenten**

Hieronder vindt men twee code-fragmenten. Dit is een deel van de digitale regels waarmee men vergunningen kan controleren.

```sparql
## Voorbeeld deel dakhellinganalyse ten behoeve van welstandscontrole
:demo2_dakhellingenOmgeving
        rdf:type    :demo2 ;
        rdfs:label  "demo2 dakhellingen omgeving" ;
        <http://www.bbsgroep.nl/application/v2/sparqlstring>
                "
                PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
                INSERT
                {
                        graph <{{data}}_case2>
                        {
                        ?dekhellingUri a <http://www.rotterdam.nl/vergunningdemo/2022/vergunningaanvraag/bestemmingsplan#Dakhelling> .
                        ?dekhellingUri <http://www.rotterdam.nl/vergunningdemo/2022/vergunningaanvraag/bestemmingsplan#dakhelling> ?dakhelling.
                        ?dekhellingUri <http://www.rotterdam.nl/vergunningdemo/2022/vergunningaanvraag/bestemmingsplan#aantal> ?aantal.
                        }
                }
                where
                {
                        {
                                select distinct  ?dakhelling  (count(distinct ?uri ) as ?aantal) where
                                {
                                        graph <{{data}}>
                                        {
                                                ?best a <http://www.rotterdam.nl/vergunningdemo/2022/vergunningaanvraag/bestemmingsplan#Bestemmingsplan>
                                        }
                                        graph <http://www.rotterdam.nl/vergunningdemo/2021/vergunningaanvraag/gis2d>
                                        {
                                                ?best  <http://www.rotterdam.nl/vergunningdemo/2022/vergunningaanvraag/bestemmingsplan#bevat> ?uri.
                                                ?uri a <http://www.buildingbits.nl/def#Roof3dBuildings_Aspect_Slope>.
                                                ?uri <http://www.buildingbits.nl/def#MEAN_1> ?hellingS.
                                                bind(xsd:float(?hellingS) as ?helling)
                                                bind(if (?helling<10,\"0-10\",if(?helling<20,\"10-20\",
                                                if(?helling<30,\"20-30\",if(?helling<40,\"30-40\",if(?helling<50,\"40-50\",if(?helling<60,\"50-60\",
                                                if(?helling<70,\"60-70\",if(?helling<80,\"70-80\",\">80\")))))))) as ?dakhelling)
                                        }
                                }
                                group by ?dakhelling
                                order by asc(?dakhelling)
                        }
                        bind(URI(concat(\"http://www.rotterdam.nl/vergunningdemo/2022/vergunningaanvraag/bestemmingsplan#dakhelling\",replace(?dakhelling,\"-\",\"b\"))) as ?dekhellingUri)
                }" ;
                        <http://www.bbsgroep.nl/application/v2/tag>
                "case2" ;
        <http://www.buildingbits.nl/2021/rulesV2/nextRule>
                :demo2_dakhellingTotaal .
```

```sparql
## Voorbeeld deel brandweeringang ten behoeve van bereikbaarheid brandhydrant controle
democase1:3_case_1_buitenDeurWGS
        rdf:type      democase1:demo1 ;
        rdfs:comment  "creeer wkt wgs84 strings voor de buitendeuren" ;
        rdfs:label    "case 1 buitendeur WGS en label deze deur in scope voor deze case" ;
        <http://www.bbsgroep.nl/application/v2/active> true ;
        <http://www.bbsgroep.nl/application/v2/sparqlstring>
                "
                PREFIX ifc:<http://rdf.bg/ontologies/ifc#>
                PREFIX cs:<http://connectedapps.com/customsparql#>
                INSERT
                {
                        graph<{{data}}>
                        {
                                ?uri a <http://www.rotterdam.nl/vergunningdemo/2021/case1Branddeur>.
                                ?uri <http://www.opengis.net/ont/geosparql#asWKTPoint> ?geometry
                        }
                }
                where
                {
                        graph<{{data}}>
                        {
                                {
                                        ?uri a <http://rdf.bg/ontologies/ifc#IfcFireSuppressionTerminal>
                                }
                                union
                                {
                                        ?uri  a <http://rdf.bg/ontologies/ifc#IfcFireSuppressionTerminalType>
                                }
                                union
                                {
                                        ?uri a <http://rdf.bg/ontologies/ifc#IfcValve>
                                }
                                union
                                {
                                        ?uri a <http://rdf.bg/ontologies/ifc#IfcDoor>.
                                        ?uri <http://rdf.bg/ontologies/ifc#propertySets>/<http://rdf.bg/ontologies/ifc#properties> ?ps.
                                        {
                                                ?ps <http://rdf.bg/ontologies/ifc#name> \"Entrance\".
                                                ?ps <http://rdf.bg/ontologies/ifc#value> ?a.
                                        }
                                        union
                                        {
                                                ?ps <http://rdf.bg/ontologies/ifc#name> \"Brandweer_ingang\".
                                                ?ps <http://rdf.bg/ontologies/ifc#value> ?a.
                                        }
                                        union
                                        {
                                                ?ps <http://rdf.bg/ontologies/ifc#name> \"Fire_Exit\".
                                                ?ps <http://rdf.bg/ontologies/ifc#value> ?a.
                                        }
                                        filter (?a=\"True\" || ?a=true)
                                }
                                optional
                                {
                                        ?uri <http://www.opengis.net/ont/geosparql#asWKT> ?wkt.
                                        bind (cs:wktcentrepoint(?wkt) as ?geometry)
                                        filter (STR(?geometry)!=\"false\")
                                }
                        }
                } " ;
        <http://www.bbsgroep.nl/application/v2/tag>
                "case1" ;
        <http://www.buildingbits.nl/2021/rulesV2/nextRule>
                democase1:branddeuren_decomposed_wktpoint .

```
