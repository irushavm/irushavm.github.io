 #!/bin/bash

if ! [ -x "$(command -v docker)" ]; then
  echo 'Error: docker is not installed.' >&2
  exit 1
fi


export COMPOSE_PROJECT_NAME=irushavm_web

sudo docker build -t irushavm-prod -f Dockerfile.prod . && \
sudo docker run -v $PWD/build/dist:/app/dist irushavm-prod

sudo docker compose down
sudo docker compose up -d &
