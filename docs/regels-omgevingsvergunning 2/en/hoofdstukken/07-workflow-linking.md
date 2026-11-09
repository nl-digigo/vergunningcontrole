# Linking to the workflows

The workflows of the VNG Portal (`SeedData/Workflows/vng_workflow_embedded-*.xml`, one per rule) no longer reference local XML files. They reference a fixed URI in this repository, so an improvement published here on `main` works directly in online testing and batch processing.

## URI convention

```
https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/{folder}/{file}.ttl
```

| Folder | Example |
|---|---|
| `sparql/` | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/insert-areas.ttl` |
| `shacl/` | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/shacl/validate-topological-relations.ttl` |
| `sparql/weergave/` | `https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/weergave/retrieve-living-areas.ttl` |

Agreements:

- **File name = key.** A file name no longer changes once a workflow references it. A new version that works differently gets a new name.
- **File names follow the portal.** `insert-areas.ttl` has the same name in the portal and here.
- **One query or shape per file.** Description and metadata live in the chapters (ReSpec) and in `data/catalogus.csv`, not in the file.

## Until the merge into main

The URI above only works after the branch `BM13/machineleesbare-regels` is merged into `main` and published through GitHub Pages. Until then the portal can read the same files from the branch:

```
https://raw.githubusercontent.com/nl-digigo/vergunningcontrole/refs/heads/BM13/machineleesbare-regels/docs/regels-omgevingsvergunning/{folder}/{file}.ttl
```

After the merge only the prefix changes; the rest of the path stays the same.

## Example workflow step

```xml
<step>
  <name><![CDATA[Insert Areas]]></name>
  <type><![CDATA[SPARQL]]></type>
  <parameters>
    <uri><![CDATA[https://nl-digigo.github.io/vergunningcontrole/regels-omgevingsvergunning/sparql/insert-areas.ttl]]></uri>
  </parameters>
</step>
```

SHACL steps in the portal still use `shapeRef` (portal id). Column `id` of [`data/catalogus.csv`](../data/catalogus.csv) gives the URI for each portal id.
