const { MongoClient } = require('mongodb');

require('dotenv').config({ path: './config.env' });

export async function main() {
  const client = new MongoClient(import.meta.env.MONGO_URL);

  try {
    await client.connect();
    console.log(`Successfully connnected to mongoDB 👍`);
  } catch (error) {
    console.error(error);
  }
}

main();
