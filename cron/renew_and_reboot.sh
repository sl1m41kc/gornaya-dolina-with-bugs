COMPOSE="docker compose -f /root/gornaya-dolina/docker-compose.yml"

# # Обновление сертификатов с помощью certbot
# $COMPOSE exec certbot certbot renew

# # Проверка статуса команды
# if [ $? -eq 0 ]; then
#     echo "Certificates renewed successfully."
# else
#     echo "Failed to renew certificates."
#     exit 1
# fi

# # Перезагрузка Nginx для применения новых сертификатов
# $COMPOSE exec nginx nginx -s reload

# # Проверка статуса команды
# if [ $? -eq 0 ]; then
#     echo "Nginx reloaded successfully."
# else
#     echo "Failed to reload Nginx."
#     exit 1
# fi

$COMPOSE exec certbot certbot renew && $COMPOSE exec nginx nginx -s reload