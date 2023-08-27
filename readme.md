Docker:
docker build -t myimg .
docker-compose up

На данный момент я не помню, что такое docker-compose file и как он работает. Но судя по командам выше, первой командой он запускает Dockerfile и называет запущенное myimg, затем второй командой он запускает все это дело (то есть тесты идут во второй команде) и перенаправляет репорты.

Пробовал запускать все это на Jenkins локально (смотри Jekninsfile, который по сути может просто запустить Dockerfile, либо как-то запустить Docker agent, но я не знаю что там за параменты и как это вообще работает) - все должно было бы работать, но похоже на windows это не работает, только на линуксе. См этот тикет: https://superuser.com/questions/1610886/how-to-solve-error-docker-error-response-from-daemon-the-working-directory-is
