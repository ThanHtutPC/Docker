#!/bin/sh

wget https://tomcat.apache.org/tomcat-7.0-doc/appdev/sample/sample.war -O /app/sample.war
echo "✔ sample.war downloaded to /app"
sleep 3600  # Keep container running for demonstration
