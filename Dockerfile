FROM nginx

COPY build /var/www
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
