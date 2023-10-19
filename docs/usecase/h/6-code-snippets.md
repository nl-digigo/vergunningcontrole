````SPARQL`
Use-case 1: 

democase1:algemeen_BoundingboxAlles
        rdf:type      democase1:algemeen ;
        rdfs:comment  "adds a handy boundingbox data of the whole project" ;
        rdfs:label    "algemeen Boundingbox alles" ;
        <http://www.bbsgroep.nl/application/v2/sparqlstring>
                "prefix owl: <http://www.w3.org/2002/07/owl#>\r\n
                prefix xsd: <http://www.w3.org/2001/XMLSchema#>\r\n
                prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\r\n
                prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>\r\n
                prefix ifc:<http://rdf.bg/ontologies/ifc#>\r\n
                prefix cs:<http://connectedapps.com/customsparql#>

                \r\n\r\ninsert 
                
                {\r\n\r\ngraph<{{data}}_algemeen>\r\n{\r\n\r\n\t?min  
                <http://rdf.bg/ontologies/ifc#geometry>  
                            ?geometry.\r\n\t?min  
                <http://rdf.bg/ontologies/ifc#locationwkt> 
                
                ?wkt.\r\n}\r\ngraph<{{data}}>\r\n{\r\n\r\n\t?min  
                <http://rdf.bg/ontologies/ifc#geometry>  
                            ?geometry.\r\n\t?min  <http://rdf.bg/ontologies/ifc#locationwkt> 
                            
                ?wkt.\r\n}\r\n\r\n \r\n  \r\n}\r\nwhere\r\n{\r\n  \r\n  graph<{{data}}>\r\n\r\n  
                        {\r\n      ?min a <http://rdf.bg/ontologies/ifc#Min>.\r\n      
                        ?min <http://rdf.bg/ontologies/ifc#xMin> ?xmin.\r\n      
                        ?min <http://rdf.bg/ontologies/ifc#yMin> ?ymin.\r\n      
                        ?min <http://rdf.bg/ontologies/ifc#zMin> ?zmin.\r\n      
                        ?max a <http://rdf.bg/ontologies/ifc#Max>.\r\n      
                        ?max <http://rdf.bg/ontologies/ifc#xMax> ?xmax.\r\n      
                        ?max <http://rdf.bg/ontologies/ifc#yMax> ?ymax.\r\n      
                        ?max <http://rdf.bg/ontologies/ifc#zMax> ?zmax.\r\n  \r\n   
                
                bind (cs:createbox(?xmin,?ymin,?zmin,?xmax,?ymax,?zmax) as ?geometry)\r\n   
                
                bind (cs:blob2wktpoint(?geometry) as ?wkt)\r\n  \r\n  }\r\n    \r\n} \r\n\r\n" ;

        <http://www.bbsgroep.nl/application/v2/tag>
                "algemeen" ;
        <http://www.buildingbits.nl/2021/rulesV2/nextRule>
                ifcintake:addWKTFromMatricsForSite .
```