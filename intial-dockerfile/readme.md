# Common Dockerfile Instructions

| **Instruction** | **Description** |
|-----------------|-----------------|
| `FROM`          | Sets the base image (first instruction in most Dockerfiles). |
| `LABEL`         | Adds metadata (e.g., author, version). |
| `RUN`           | Executes commands in a new layer during build (e.g., install packages). |
| `COPY`          | Copies files/folders from your host to the image. |
| `ADD`           | Like `COPY`, but can also extract archives and fetch URLs (less preferred). |
| `WORKDIR`       | Sets the working directory for `RUN`, `CMD`, `ENTRYPOINT`. |
| `ENV`           | Sets environment variables. |
| `EXPOSE`        | Documents the port the container listens on. |
| `CMD`           | Sets default command/args when the container runs. |
| `ENTRYPOINT`    | Sets the main executable to run in the container. |
| `VOLUME`        | Creates mount points to persist or share data. |
| `ARG`           | Defines build-time variables. |
| `USER`          | Sets the user to run container processes. |
| `ONBUILD`       | Sets instructions t

--- 

# A simple static website served by Nginx in Docker.

## Build the image

```bash
docker build -t testing/static-website .
docker run -d -p 8080:80 --name static-website testing/static-website 
```

## Verify
```sh 
curl localhost:8080
```

## Optional: Run with ramdom host port
```bash 
docker build -t testing/static-website .
docker run -d -p 80 --name static-website testing/static-website:latest 
```

### Find the assigned port 
```sh
docker port static-website 80
```
### Example output
```
0.0.0.0:32770
[::]:32770
```
### Access the site 
```sh
curl localhost:32770
```