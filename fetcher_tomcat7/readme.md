# Lab Objective
```
- Simulate a scenario where:
 
- A Fetcher container downloads a .war file into a shared volume.
 
- A Tomcat 7 container serves that .war file.
 
- The two containers share data using --volumes-from.
```

## Lab Setup Overview
1. Create a fetcher container that downloads a .war file.

2. Use --volumes-from in the Tomcat container to access that WAR.

3. Start Tomcat and access the application via browser.

#  Tomcat 7 Deployment Lab Using `--volumes-from`

This lab demonstrates how to use Docker's `--volumes-from` to deploy a `.war` file to Tomcat 7 by using a custom fetcher container.

---

##  Project Structure
```
tomcat_lab/
├── fetcher/
│   ├── Dockerfile
│   └── fetch.sh
└── README.md
```

##  Run the fetcher container
```sh 
docker run -d --name fetcher war-fetcher
```

##  Run the tomcat 7 container with shared volumes
```sh 
docker run -d --name tomcat7 --volumes-from fetcher -p 8080:8080 tomcat:7-jdk8
```

## Deply war to tomcat 
```sh 
docker exec tomcat7 cp /app/sample.war /usr/local/tomcat/webapps/
docker start tomcat7
```

## Access your application
```sh 
curl localhost:8080
```

## Clean up 
```sh 
docker rm -f tomcat7 fetcher
```