#!/bin/bash

while true; do
  inotifywait manifest.json rules.json -e close_write
  zip -FSr open-reddit-images-directly-dev.zip manifest.json rules.json
done
