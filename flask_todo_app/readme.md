# Project Structure
```
flask_todo_app/
├── app/
│   ├── app.py
│   ├── templates/
│   │   └── index.html
│   └── static/
│       └── style.css
├── requirements.txt
├── Dockerfile
├── .dockerignore
└── README.md
```

# Run this application without Docker
### Install dependencies
```
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Run this application
```sh 
cd app 
python3 app.py
```

# Run this application with Docker
### Build and Run
```sh 
docker build -t flask-to-do .
docker run -d -p 5000:5000 --name flask-to-do-app flask-to-do 
``` 

### Acceess this site
```
open: [http//localhost:5000]
```

### Push to Docker hub 
- Docker login
- Tag the Image (**docker tag flask-to-do-app (your-repository)**)
- Push to Docker Hub  (**docker push (your-repository)**)
- Pull and run (**docker pull (your-repository**))