#!/usr/bin/env python3
"""Zet de gedeelde tabelstijl in de statische leesversies.

De ReSpec-pagina's laden assets/ils-tables.css en assets/ils-tables.js als los
bestand. De statische leesversies (ils-omgevingsvergunning.html en
-en.html) blijven bewust een bestand: dit script plakt dezelfde stijl erin,
tussen markers, zodat het opnieuw uitvoeren de vorige versie vervangt.

Gebruik (vanuit docs/ils-omgevingsvergunning):
    python tools/inline-tabelstijl.py
"""

import io
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSS = os.path.join(ROOT, "assets", "ils-tables.css")
JS = os.path.join(ROOT, "assets", "ils-tables.js")
DOCS = ["ils-omgevingsvergunning.html", "ils-omgevingsvergunning-en.html"]

BEGIN = "<!-- ils-tabelstijl:begin -->"
END = "<!-- ils-tabelstijl:einde -->"
BLOCK = re.compile(re.escape(BEGIN) + r".*?" + re.escape(END), re.S)


def read(path):
    with io.open(path, encoding="utf-8") as fh:
        return fh.read()


def write(path, text):
    with io.open(path, "w", encoding="utf-8", newline="\n") as fh:
        fh.write(text)


def main():
    css, js = read(CSS), read(JS)
    style = "%s\n<style>\n%s</style>\n<script>\n%s</script>\n%s\n" % (BEGIN, css, js, END)

    for name in DOCS:
        path = os.path.join(ROOT, name)
        html = read(path)

        # donkere modus van de tabelstijl volgt de pagina zelf
        html = re.sub(r"<html (lang=\"[a-z]+\")>", r"<html \1 data-ils-dark>", html, count=1)

        if BLOCK.search(html):
            # lambda: de stijl bevat backslashes die re anders als escape leest
            html = BLOCK.sub(lambda _m: style.rstrip("\n"), html)
        elif "</body>" in html:
            html = html.replace("</body>", style + "</body>", 1)
        else:
            sys.exit("Geen </body> gevonden in %s" % name)

        write(path, html)
        print("bijgewerkt: %s" % name)


if __name__ == "__main__":
    main()
