#!/bin/bash

if ! [ -x "$(command -v docker)" ]; then
  echo 'Error: docker is not installed.' >&2
  exit 1
fi

export COMPOSE_PROJECT_NAME=irushavm_web

sudo docker build -t irushavm-dev -f Dockerfile.dev . && \
sudo docker run -it -v irushavm-dev-deps:/app/node_modules -v $PWD/app:/app -p 3000:3000 irushavm-dev
