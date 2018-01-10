#!/bin/bash

IMAGE_NAME='webofcomics-frontend'
CONTAINER_NAME='webofcomics'

if hash docker 2>/dev/null
then
  if [ "$1" = "build" ]
  then
    docker build -t ${IMAGE_NAME} .
  elif [ "$1" = "deploy" ]
  then
    if `docker inspect -f '{{.State.Running}}' ${CONTAINER_NAME} &>/dev/null`
    then
      docker stop ${CONTAINER_NAME} &>/dev/null
      docker rm ${CONTAINER_NAME} &>/dev/null
    fi

    docker run --name ${CONTAINER_NAME} -d -p 8080:80 ${IMAGE_NAME}
  else
    echo 'Custom docker command.'
    echo
    echo 'Commands:'
    echo -e '\tbuild\tBuilds the docker image using the /build folder'
    echo -e '\trun\tDeploy the webserver image'
  fi
else
  echo '(Docker is missing: no image will not be generated)'
fi
