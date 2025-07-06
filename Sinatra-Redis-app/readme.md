# Sinatra + Redis App (Dockerized)

This is a lightweight Sinatra web app that uses Redis to count page visits. The app runs inside Docker using a professional structure, following Sinatra’s official examples.

---

## 🚀 Features

- Built with [Sinatra](http://sinatrarb.com/)
- Redis-backed visit counter
- Dockerized for easy deployment
- Clean structure for production or learning

---

## 🧱 Project Structure
```
sinatra-redis-app/
├── app.rb # Sinatra application logic
├── config.ru # Rack configuration
├── Dockerfile # Docker image definition using Ubuntu base
├── Gemfile # Ruby gem dependencies
└── README.md # Project documentation
```


---

## 🐳 Run with Docker (no Compose)

### 1. Build the image

```bash
docker build -t sinatra-redis-app .
```

### 2. Run Redis conatiner
```bash 
docker run -d --name redis-server redis:7 
```

### 3. Run Sinatra app container
```bash 
docker run -d --name sinatra-app --link redis-server:redis -e REDIS_HOST=redis -p 4567:4567 sinatra-redis-app 
```

### 4. Access this site 
```
curl localhost:4567
```

## Stop and clean up
```sh 
docker stop sinatra-app redis-server
docker rm sinatra-app redis-server
```

# Install Gem locally
```
gem install bundler 
bundle install 
bundle exec ruby app.py 
```