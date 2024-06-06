#!/bin/sh

while :; do
  certbot renew
  docker compose exec nginx nginx -s reload
  sleep 12h
done