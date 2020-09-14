FROM php:7.4-apache

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get update; apt-get install -y nodejs git unzip

COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN a2enmod rewrite

RUN sed -ri -e 's/DocumentRoot \/var\/www\/html/DocumentRoot \/var\/www\/html\/public/' /etc/apache2/sites-available/000-default.conf

WORKDIR /var/www/html

CMD ["apache2-foreground"]
