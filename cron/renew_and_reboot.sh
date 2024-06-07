#!/bin/sh

docker compose -f ../docker-compose.yml exec certbot certbot renew && docker compose -f ../docker-compose.yml exec nginx nginx -s reload