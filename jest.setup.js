const { createClient } = require('redis');

let client;

beforeAll(async () => {
  client = createClient({
    url: 'redis://localhost:6379'
  });
  client.on('error', (err) => console.error('Redis Client Error', err));
  await client.connect();
});

afterAll(async () => {
  await client.quit();
});

beforeEach(async () => {
  await client.flushAll();
});

global.getRedisClient = () => client;