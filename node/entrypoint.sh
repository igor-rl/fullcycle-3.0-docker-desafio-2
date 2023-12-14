#!/bin/bash

dockerize -wait tcp://db:3306 -timeout 20s

if [ ! -d node_modules ]; then
  npm install
fi

npm run start:dev
