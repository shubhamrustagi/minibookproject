import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const Connection = async () => {
  const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-mli0hyv-shard-00-00.tipjx26.mongodb.net:27017,ac-mli0hyv-shard-00-01.tipjx26.mongodb.net:27017,ac-mli0hyv-shard-00-02.tipjx26.mongodb.net:27017/?ssl=true&replicaSet=atlas-12mf0m-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("Database conected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error.message);
  }
};

export default Connection;
