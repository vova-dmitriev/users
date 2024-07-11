# Users
Веб-приложение для вывода списка пользователей. Используется библиотека React, в качестве стейт-менеджера выбран Zustand. <br>


Возможности:
* Отображение пользователей;
* Фильтрация пользователей по имени, e-mail, номеру телефона;
* Реализована смена темной/светлой темы.


## Демо
Посмотреть можно по ссылке: <a href="https://users-liard.vercel.app" target="_blank">https://users-liard.vercel.app</a>


## Запуск
```console
git clone https://github.com/vova-dmitriev/users.git
```
``` console
cd users
```


С использованием Nodejs локально:
``` console
yarn
```
```console
yarn run dev
```

С использованием Docker-контейнера:
```console
docker build -t users .
```
``` console
docker run --publish 3000:3000 users
```
