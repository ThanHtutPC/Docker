# Sets the base images 
FROM ubuntu:latest

# Add metadata to the images
LABEL maintainer="Than Htut"
LABEL email="thanhtut@example.com"
LABEL project="Static website"

# Executes command in a new layer on top of the current image and commit the results (eg. installing packages)
RUN apt-get update; apt-get install -y nginx
RUN apt-get install curl -y

# Copies files/folders from your hosts to the images
COPY index.html /var/share/nginx/html/index.html

# Documents the port the container listens on at runtime" 
EXPOSE 80 

# Entrypoint allows you to configure a container that will run as an executable
ENTRYPOINT ["/usr/sbin/nginx"]

# CMD provides defaults for an executing container
CMD ["-g", "daemon off;"]
