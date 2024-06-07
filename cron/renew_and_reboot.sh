#!/bin/sh
docker compose -f /root/gornaya-dolina/docker-compose.yml exec certbot certbot renew && docker compose -f /root/gornaya-dolina/docker-compose.yml exec nginx nginx -s reload