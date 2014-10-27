Convert FacebookLocales.xml to JSON
# Overview 
Node scripts to convert Facebook XML to simplified JSON for consumption in JS &amp; HTML
Facebook's XML source is a bit unwieldy: https://www.facebook.com/translations/FacebookLocales.xml

# Usage

## Fetch latest locale data from Facebook  (there's a copy in /data)
    curl -L -o data/FacebookLocales.json 'https://www.facebook.com/translations/FacebookLocales.xml'

Note that you can put and use the output files wherever you want. There are no hard dependencies in the scripts.

## Convert XML to JSON
    node FacebookLocalesXMLToJSON.js xml/FacebookLocales.xml > json/FacebookLocales.json

## Simplify
    node LocaleToRepresentation.js data/FacebookLocales.json > FacebookLocalesSimple.json
