FROM ubuntu:20.04

LABEL maintainer="Than Htut"
ENV REFRESHED_AT=2024-07-07

ENV DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Bangkok
ENV PYTHON=/usr/bin/python3

# Install dependencies
RUN apt-get update && \
    apt-get install -y curl gnupg tzdata ca-certificates build-essential python3 make g++ && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Create log directory
RUN mkdir -p /var/log/nodeapp

# Copy app source code
ADD nodeapp /opt/nodeapp
WORKDIR /opt/nodeapp

# Install app dependencies
RUN npm install

# Create volume and expose port
VOLUME ["/var/log/nodeapp"]
EXPOSE 3000

# Start the application
ENTRYPOINT ["node", "server.js"]
