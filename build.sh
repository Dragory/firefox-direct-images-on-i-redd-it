#!/bin/bash

zip -FSr "open-reddit-images-directly-$(jq -r ".version" manifest.json).zip" manifest.json rules.json
