FROM busybox

LABEL maintainer="Than Htut"
LABEL description="Fetcher container to download a WAR file"
LABEL version="1.0"

VOLUME /app

WORKDIR /app

COPY fetch.sh /fetch.sh
RUN chmod +x /fetch.sh

ENTRYPOINT ["/fetch.sh"]
