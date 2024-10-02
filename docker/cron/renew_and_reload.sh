COMPOSE="docker compose -f /home/www/gornaya-dolina/docker/docker-compose.yml"

$COMPOSE exec certbot certbot renew && $COMPOSE exec nginx nginx -s reload