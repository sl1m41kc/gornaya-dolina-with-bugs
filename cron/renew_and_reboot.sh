COMPOSE="/usr/local/bin/docker-compose --no-ansi"

CD /roots/https/
$COMPOSE run certbot renew --dry-run && \
$COMPOSE kill -s SIGHUP nginx