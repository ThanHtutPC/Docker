FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

# Install Ruby and dependencies
RUN apt-get update -yqq && \
    apt-get install -y ruby-full ruby-bundler build-essential redis-tools curl && \
    gem install bundler rackup puma --no-document

# Set working directory
WORKDIR /app

# Copy app files
COPY . .

# Install gems
RUN bundle install

EXPOSE 4567

# Run the app
CMD ["ruby", "app.rb"]

