#!/bin/bash

docker compose -p blockchain-basics  -f .devcontainer/docker-compose.yml -f docker-compose.yml up blockscout blockscout-db -d