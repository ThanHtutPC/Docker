# Simple Nginx Static Website

This project contains a basic Nginx setup to serve a static website using Docker.

## Project Structure

.
├── Dockerfile # Dockerfile to build the Nginx image
├── global.conf # Nginx global configuration
├── nginx.conf # Main Nginx configuration
└── website
└── index.html # Static website content

## How to Run

1. **Build the Docker image:**
```bash
docker build -t simple_website .
```

2. **Run the container**
```bash 
docker run -d -p 8080:80 --name simple-website-app -v $PWD/website:/var/www/html/website simple_website
```
