const express = require('express');
const redis = require('redis');
const fs = require('fs');
const path = require('path');

const app = express();
const logPath = '/var/log/nodeapp/app.log';

// Redis primary container hostname
const client = redis.createClient({
  url: 'redis://redis-primary:6379'
});

client.on('error', err => log(`Redis error: ${err}`));
client.on('connect', () => log('Connected to Redis'));

client.connect();

app.get('/', async (req, res) => {
  let count = await client.get('visits');
  count = count ? parseInt(count) + 1 : 1;
  await client.set('visits', count);
  log(`Visit count updated: ${count}`);
  res.send(`Number of visits: ${count}`);
});

function log(message) {
  const fullMessage = `[${new Date().toISOString()}] ${message}\n`;
  console.log(fullMessage.trim());
  fs.appendFileSync(logPath, fullMessage);
}

app.listen(3000, () => {
  log('App running on http://0.0.0.0:3000');
});

