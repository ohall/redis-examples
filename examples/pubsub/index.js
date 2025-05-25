const { createClient } = require('redis');

async function publisherOperations() {
  const publisher = createClient({
    url: 'redis://localhost:6379'
  });

  publisher.on('error', (err) => console.error('Redis Publisher Error', err));
  await publisher.connect();

  // Publisher operations will be implemented here

  await publisher.quit();
}

async function subscriberOperations() {
  const subscriber = createClient({
    url: 'redis://localhost:6379'
  });

  subscriber.on('error', (err) => console.error('Redis Subscriber Error', err));
  await subscriber.connect();

  // Subscriber operations will be implemented here

  await subscriber.quit();
}

module.exports = {
  publisherOperations,
  subscriberOperations
};
