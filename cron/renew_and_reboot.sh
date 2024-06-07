#!/bin/sh

COMPOSE=docker compose -f /root/gornaya-dolina/docker-compose.yml"
$COMPOSE exec certbot certbot renew && $COMPOSE exec nginx nginx -s reload