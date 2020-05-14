#!/bin/sh

cd ..
yarn build
cp -r build/static/ web_continus/
cp -r build/service-worker.js  web_continus/
cp -r build/asset-manifest.json  web_continus/
cp -r build/index.html  web_continus/
cp -r build/robots.txt  web_continus/
rm -f web_continus/precache-manifest.*
cp -r build/precache-manifest.*  web_continus/
cd web_continus/