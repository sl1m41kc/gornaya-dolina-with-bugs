COMPOSE="/usr/local/bin/docker-compose --no-ansi"

CD /root/https/
$COMPOSE run certbot renew --dry-run && \
$COMPOSE kill -s SIGHUP nginx