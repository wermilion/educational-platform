FROM php:8.2-fpm

WORKDIR /workdir

COPY ./server .

RUN apt-get update && apt-get install -y \
    libpq-dev \
    libicu-dev \
    libzip-dev

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install pdo pdo_pgsql intl zip

COPY --from=composer:2.6.5 /usr/bin/composer /usr/local/bin/composer

COPY ./server/composer.json .

RUN composer install

RUN chmod -R 777 ./storage ./bootstrap/cache

CMD php artisan migrate --force --seed && php-fpm