#!/usr/bin/env python3
"""Controleert de syntaxis van alle .ttl-bestanden in deze map.

SHACL-shapes en regelparameters zijn Turtle; SPARQL-bestanden (map sparql/ en
de 4b/4d-bestanden in regels/) zijn SPARQL 1.1 Query of Update.
Gebruik:  pip install rdflib  &&  python tools/controleer-syntax.py
"""
import pathlib, re, sys
import rdflib
from rdflib.plugins.sparql.parser import parseQuery, parseUpdate

root = pathlib.Path(__file__).resolve().parent.parent
fouten = 0

def is_sparql(text):
    body = re.sub(r'(?m)^\s*(#.*)?$', '', text)
    return bool(re.match(r'\s*(PREFIX|BASE|SELECT|CONSTRUCT|ASK|DESCRIBE|INSERT|DELETE|LOAD|DROP|CLEAR|CREATE|WITH)\b', body, re.I))

for f in sorted(root.rglob('*.ttl')):
    text = f.read_text(encoding='utf-8')
    rel = f.relative_to(root)
    try:
        if is_sparql(text):
            # template-placeholder van de 3D-weergave vervangen door een voorbeeldwaarde
            t = text.replace('###GLOBAL_IDS_LIST###', '"voorbeeld"')
            try:
                parseUpdate(t); soort = "SPARQL update"
            except Exception:
                parseQuery(t); soort = "SPARQL query"
        else:
            rdflib.Graph().parse(data=text, format='turtle'); soort = 'Turtle'
        print(f'OK    {soort:14} {rel}')
    except Exception as e:
        fouten += 1
        print(f'FOUT  {rel}: {str(e).splitlines()[0][:160]}')
sys.exit(1 if fouten else 0)
