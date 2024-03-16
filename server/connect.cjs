const { MongoClient } = require('mongodb');
require('dotenv').config({ path: './config.env' });

async function main() {
  const client = new MongoClient(process.env.MONGO_URL);

  try {
    await client.connect();
    console.log(`Successfully connnected to mongoDB 👍`);
    // const collections = await client.db('ToDoApp').collections();
    // collections.forEach((collection) =>
    //   console.log(collection.s.namespace.collection),
    // );
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

main();
