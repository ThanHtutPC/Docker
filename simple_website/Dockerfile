FROM ubuntu:16.04
LABEL name="simple_website" \
      version="1.0" \
      description="A simple website running on Nginx"
RUN apt-get -yqq update; apt-get -yqq install nginx 
RUN apt-get -yqq install curl 
RUN mkdir -p /var/www/html/website
ADD global.conf /etc/nginx/conf.d/
ADD nginx.conf /etc/nginx/nginx.conf
VOLUME /var/www/html/website
EXPOSE 80
CMD ["nginx"]