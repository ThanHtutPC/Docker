# Use the official Redis image as the base image
FROM redis:latest

# Custom redis command to run Redis with a specific configuration
CMD ["redis-server", "--appendonly", "yes", "--replica-announce-ip", "redis_primary"]
