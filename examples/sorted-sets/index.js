const { createClient } = require('redis');

async function sortedSetOperations() {
  const client = createClient({
    url: 'redis://localhost:6379'
  });

  client.on('error', (err) => console.error('Redis Client Error', err));
  await client.connect();

  // Sorted set operations will be implemented here

  await client.quit();
}

module.exports = {
  sortedSetOperations
};
