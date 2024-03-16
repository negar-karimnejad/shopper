const { MongoClient } = require('mongodb');

require('dotenv').config({ path: './config.env' });

async function main() {
  const client = new MongoClient(
    'mongodb+srv://admin:admin@cluster0.ymlvgvu.mongodb.net/shopper',
  );

  try {
    await client.connect();
    console.log(`Successfully connnected to mongoDB 👍`);
  } catch (error) {
    console.error(error);
  }
}

main();
