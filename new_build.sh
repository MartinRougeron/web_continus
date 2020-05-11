#!/bin/bash
cd ..
yarn build
cd web_continus
ls | grep -v infos | xargs rm
cp -r ../build/* ./