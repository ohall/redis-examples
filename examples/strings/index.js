const { createClient } = require('redis');

async function stringOperations() {
  const client = createClient({
    url: 'redis://localhost:6379'
  });

  client.on('error', (err) => console.error('Redis Client Error', err));
  await client.connect();

  // String operations will be implemented here

  await client.quit();
}

module.exports = {
  stringOperations
};
