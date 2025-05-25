# Redis Examples

A collection of examples demonstrating how to use Redis with Node.js.

## Overview

This repository contains examples for:

### Redis Data Types
- Strings: Basic key-value operations
- Lists: Ordered collections of strings
- Sets: Unordered collections of unique strings
- Sorted Sets: Sets ordered by scores
- Hashes: Maps between string fields and values
- Streams: Append-only collections
- Bitmaps: String operations on bit arrays
- HyperLogLogs: Probabilistic data structures for cardinality estimation
- Geospatial: Geographic data operations

### Redis Patterns
- Caching: Using Redis as a cache
- Rate Limiting: Controlling request rates
- Pub/Sub: Publisher-Subscriber pattern
- Leaderboards: Real-time scoring systems
- Job Queues: Distributed task processing

## Installation

1. Clone this repository:
```
git clone https://github.com/your-username/redis-examples.git
cd redis-examples
```

2. Install dependencies:
```
npm install
```

3. Start Redis using Docker:
```
npm run start:redis
```

## Usage

Each example folder contains:
- `index.js`: Implementation of Redis operations
- `index.test.js`: Tests for Redis operations

To run a specific example:
```
node examples/strings/index.js
```

## Testing

Run the tests:
```
npm test
```

This will run all the tests across all example directories.

To run tests for a specific example:
```
npx jest examples/strings/
```

## Requirements

- Node.js 14+
- Docker and Docker Compose for running Redis
- npm or yarn

## License

See the LICENSE file for details.