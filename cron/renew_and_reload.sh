docker compose exec certbot certbot renew
docker compose exec nginx nginx -s reload