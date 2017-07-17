#!/usr/bin/env bash

IMAGE=kmade/api
docker run -d --rm -v $(pwd):/src -v /src/node_modules -p 8000:8000 -p 5858:5858 --name api $IMAGE npm run start:dev
docker logs api -f
