require 'sinatra'
require 'redis'

set :bind, '0.0.0.0'
# Redis connection
redis = Redis.new(host: ENV.fetch("REDIS_HOST", "localhost"), port: 6379)

get '/' do
  count = redis.incr("visits")
  "This page has been viewed #{count} times."
end
