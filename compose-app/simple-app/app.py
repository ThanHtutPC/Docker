from flask import Flask, jsonify
from redis import Redis

app = Flask(__name__)
redis = Redis(host="redis", port=6379)

@app.route('/')
def hello():
    redis.incr('hits')
    return jsonify(message='Hello, World!', hits=redis.get('hits').decode('utf-8'))

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)

