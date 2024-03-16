import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(import.meta.env.MONGO_URL);
    console.log(`Successfully connnected to mongoDB 👍`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    import.meta.exit(1);
  }
};

export default connectDB;
