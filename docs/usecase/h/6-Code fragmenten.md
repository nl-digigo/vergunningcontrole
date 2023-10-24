```SPARQL
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
                \r\n\r\n

                insert {
                        \r\n\r\
                                ngraph<{{data}}_algemeen>
                                \r\n
                                {
                                        \r\n\r\n\t
                                        ?min <http://rdf.bg/ontologies/ifc#geometry> ?geometry.
                                        \r\n\t
                                        
                                        ?min <http://rdf.bg/ontologies/ifc#locationwkt> ?wkt.
                                        \r\n
                                }
                        \r\
                        
                                ngraph<{{data}}>
                                \r\n
                                        {
                                        \r\n\r\n\t
                                        ?min <http://rdf.bg/ontologies/ifc#geometry> ?geometry.
                                        \r\n\t
                                        ?min <http://rdf.bg/ontologies/ifc#locationwkt>  ?wkt.
                                        \r\n
                                        }
                                \r\n\r\n 
                                \r\n  
                                \r\n
                                }
                        \r\n
                        
                where
                \r\n
                        {
                        \r\n  \r\n  
                        graph<{{data}}>
                        \r\n\r\n  
                                {
                                        \r\n      
                                        ?min a <http://rdf.bg/ontologies/ifc#Min>.
                                        \r\n      
                                        ?min <http://rdf.bg/ontologies/ifc#xMin> ?xmin.
                                        \r\n      
                                        ?min <http://rdf.bg/ontologies/ifc#yMin> ?ymin.
                                        \r\n      
                                        ?min <http://rdf.bg/ontologies/ifc#zMin> ?zmin.
                                        \r\n      
                                        ?max a <http://rdf.bg/ontologies/ifc#Max>.
                                        \r\n      
                                        ?max <http://rdf.bg/ontologies/ifc#xMax> ?xmax.
                                        \r\n      
                                        ?max <http://rdf.bg/ontologies/ifc#yMax> ?ymax.
                                        \r\n      
                                        ?max <http://rdf.bg/ontologies/ifc#zMax> ?zmax.
                                        \r\n  \r\n   
                
                                        bind (cs:createbox(?xmin,?ymin,?zmin,?xmax,?ymax,?zmax) as ?geometry)
                                        \r\n   
                                        bind (cs:blob2wktpoint(?geometry) as ?wkt)
                                        \r\n  \r\n  
                                }
                        \r\n    
                        \r\n
                        } 
                \r\n\r\n";

        <http://www.bbsgroep.nl/application/v2/tag> "algemeen" ;
        <http://www.buildingbits.nl/2021/rulesV2/nextRule> ifcintake:addWKTFromMatricsForSite.
```


``` SPARQL
democase1:FocuspointOnSite
        rdf:type      democase1:algemeen ;
        rdfs:comment  "create a focus point for zooming purposes in Rotterdam3D" ;
        rdfs:label    "Focuspoint on site" ;
        <http://www.bbsgroep.nl/application/v2/sparqlstring>
                "\r\n
                PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>
                \r\n
                PREFIX geo: <http://www.opengis.net/ont/geosparql#>
                \r\n
                PREFIX geof: <http://www.opengis.net/def/function/geosparql/>
                \r\n
                prefix ifc:<http://rdf.bg/ontologies/ifc#>
                \r\n
                prefix cs:<http://connectedapps.com/customsparql#>
                \r\n\r\n\r\n
                
                insert {
                        graph <{{data}}>
                        \r\n    
                                {
                                \r\n\r\n     
                                ?x  <http://www.opengis.net/ont/geosparql#asWKTFocuspoint> ?point
                                \r\n
                                }
                                \r\n
                        }
                        \r\n
                where
                \r\n
                        {
                        \r\n    
                        graph <{{data}}>
                        \r\n    
                                {
                                \r\n\r\n       
                                ?x a <http://rdf.bg/ontologies/ifc#IfcSite>.
                                \r\n\t\t 
                                ?uri a <http://www.rotterdam.nl/vergunningdemo/2021/case1ObstakelGebouw>.
                                \r\n     \t
                                ?uri  <http://www.opengis.net/ont/geosparql#asWKT> ?geometry.
                                \r\n 

                                filter (STR(?geometry)!=\"false\")        
                                \r\n   

                                bind (cs:wktcentrepoint(?geometry) as ?point)
                                \r\n

                                filter (STR(?point)!=\"false\")\r\n\r\n   
                                }
                        \r\n
                        }" ;
        <http://www.bbsgroep.nl/application/v2/tag> "algemeen";
        <http://www.buildingbits.nl/2021/rulesV2/nextRule> democase1:focuspoint_op_basis_van_kavel.
```

