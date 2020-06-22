#!/bin/sh

cp README.md ..
cd /home/martin/website_continus
yarn build
rm -rf web_continus/*
cp -r build/* web_continus/
cp README.md web_continus/
cd web_continus/
