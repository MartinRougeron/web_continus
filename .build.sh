#!/bin/sh

cd ..
yarn build
rm -rf web_continus/*
cp -r build/* web_continus/
cd web_continus/