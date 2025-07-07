FROM ubuntu:22.04

LABEL maintainer="Than Htut"
LABEL version="1.0"
LABEL description="Jekyll Docker image for static site generation"

ENV REFRESHED_AT=2023-10-01
RUN apt-get -yqq update
RUN apt-get -y install ruby ruby-dev build-essential nodejs
RUN gem install jekyll bundler

VOLUME /data
VOLUME /var/www/html
WORKDIR /data 

ENTRYPOINT ["jekyll", "build", "--destination=/var/www/html"]