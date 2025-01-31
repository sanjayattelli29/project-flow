import mongoose from "mongoose";
import { config } from "./app.config";

const connectDatabase = async () => {
  try {
    const MONGO_URI = 'mongodb+srv://attellisanjaykumar29:BFtZ6GhbQJ4u0Drq@cluster0.mdjs8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

    await mongoose.connect(MONGO_URI);
    console.log("Connected to Mongo database");
  } catch (error) {
    console.log("Error connecting to Mongo database");
    process.exit(1);
  }
};

export default connectDatabase;
