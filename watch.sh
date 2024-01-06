#!/bin/bash

while true; do
  inotifywait manifest.json rules.json -e close_write
  zip -FSr fix-ireddit-dev.zip manifest.json rules.json
done
