#!/bin/sh

COMPOSE=docker compose -f /root/gornaya-dolina/docker-compose.yml --no-ansi"
$COMPOSE restart certbot && $COMPOSE exec nginx nginx -s reload