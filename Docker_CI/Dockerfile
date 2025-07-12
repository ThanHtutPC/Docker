FROM jenkins/jenkins:latest

# Switch to root to install dependencies
USER root

# Install necessary packages
RUN apt-get update && \
    apt-get install -y \
    sudo \
    wget \
    curl \
    git \
    docker.io

# Configure Jenkins user
RUN usermod -aG docker jenkins && \
    echo "jenkins ALL=NOPASSWD: ALL" >> /etc/sudoers

# Switch back to jenkins user
USER jenkins

# Install recommended plugins
RUN jenkins-plugin-cli --plugins \
    docker-workflow \
    pipeline-utility-steps \
    git \
    ws-cleanup
