# Разворачивание проекта в production

## env
В папке `docker` создаем файл `.env.production`. Там должны быть описаны следующие переменные

```
# адрес сайта для получения сертификатов и настройки nginx
DOMAIN="xn----7sbbjhyumfdet1r.xn--p1ai"
```
```
# для тестового сервера адрес будет такой
DOMAIN="dolina.axonix.ru"
```
## Получение сертификата
Сперва запускаем файл `/docker/docker-compose.init.yml` с помощью команды
```
docker compose -f docker-compose.init.yml up
```
Запустится sertbot и получит сертификаты. После этого желательно очистить docker (либо удалить контейнер nginx).
```
docker system prune -a
```
или
```
docker rm nginx
```
## Запуск основных контейнеров
Теперь нужно запустить основные контейнеры
```
sudo docker compose up
```
## Cron
В конце нужно настроить Cron. Для этого выполняем команду
```
sudo crontab -e
```
В текстовом файле записываем такую команду
```
# Команда будет выполняться каждый день в полночь 00:00
0 0 * * * /home/www/gornaya-dolina/docker/cron/renew_and_reload.sh >> /var/log/cron.log 2>&1
```