#!/bin/sh

COMPOSE="docker compose -f /root/gornaya-dolina/docker-compose.yml"

#!/bin/bash

# Перезапуск контейнера certbot
$COMPOSE restart certbot

# Проверка статуса команды
if [ $? -eq 0 ]; then
    echo "Certbot container restarted successfully."
else
    echo "Failed to restart Certbot container."
    exit 1
fi

# Перезапуск контейнера nginx
$COMPOSE restart nginx

# Проверка статуса команды
if [ $? -eq 0 ]; then
    echo "Nginx container restarted successfully."
else
    echo "Failed to restart Nginx container."
    exit 1
fi