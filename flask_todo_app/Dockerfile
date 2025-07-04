# set the base image to use
FROM python:3.11-slim

# the author of the image
LABEL maintainer="Than Htut"
LABEL version="1.0"
LABEL description="A simple Flask To-Do application"

# Environment variables
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

# set the working directory in the container
WORKDIR /app

# copy the requirements file into the container
COPY requirements.txt .

# Run the command to install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# copy the rest of the application code into the container
COPY app/ . 

# Expose the port the app runs on
EXPOSE 5000

# Define the command to run the application
CMD ["python", "app.py"]
