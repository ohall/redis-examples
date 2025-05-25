const { createClient } = require('redis');

async function setOperations() {
  const client = createClient({
    url: 'redis://localhost:6379'
  });

  client.on('error', (err) => console.error('Redis Client Error', err));
  await client.connect();

  // Set operations will be implemented here

  await client.quit();
}

module.exports = {
  setOperations
};
