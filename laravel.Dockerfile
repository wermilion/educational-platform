FROM composer:latest AS vendor-source
WORKDIR /workdir
COPY composer.json .
COPY composer.lock .
RUN composer i \
      --ignore-platform-reqs \
      --no-interaction \
      --no-ansi \
      --no-suggest \
      --prefer-dist \
      --no-scripts

FROM php:8.2-fpm AS server
WORKDIR /workdir
RUN apt-get update && apt-get install -y \
    libpq-dev \
    libicu-dev \
    libzip-dev
RUN apt-get clean && rm -rf /var/lib/apt/lists/*
COPY . .
COPY --from=vendor-source /workdir/vendor /workdir/vendor
RUN docker-php-ext-install pdo pdo_pgsql intl zip
RUN php artisan storage:link && chown www-data:www-data ./bootstrap/cache ./storage