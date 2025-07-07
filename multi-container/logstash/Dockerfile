FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y wget gnupg apt-transport-https openjdk-11-jdk curl

# Add Elastic GPG key
RUN wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | \
    gpg --dearmor -o /usr/share/keyrings/elastic-keyring.gpg

# Add Logstash APT repository
RUN echo "deb [signed-by=/usr/share/keyrings/elastic-keyring.gpg] https://artifacts.elastic.co/packages/8.x/apt stable main" \
    > /etc/apt/sources.list.d/elastic-8.x.list

RUN apt-get update && apt-get install -y logstash

COPY logstash.conf /etc/logstash/conf.d/logstash.conf

CMD ["/usr/share/logstash/bin/logstash", "-f", "/etc/logstash/conf.d/logstash.conf"]
