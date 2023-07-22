import { MongoClient, ServerApiVersion } from "mongodb";
import * as dotenv from "dotenv";
const connectdb = async () => {
  const client = new MongoClient(process.env.MONGODBURL);
  try {
    await client.connect();
    await client.db().command({ ping: 1 });
    console.log("Connected to Mongo");
  } catch (error) {
    console.log("Error connecting to Mongo: " + error);
  } finally {
    await client.close();
  }
};
export default connectdb;
