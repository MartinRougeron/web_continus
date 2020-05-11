#!/bin/sh

rm -rf static
rm -rf precache*
cd ..
yarn build
cp -r build/* web_continus