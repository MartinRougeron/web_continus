#!/bin/sh


cd /home/martin/website_continus
yarn build
rm -rf web_continus/*
cp -r build/* web_continus/
cd web_continus/
