import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import connectdb from "./db/connectToDB.js";
import mongoose from "mongoose";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Define a Mongoose schema for the JSON data
const jsonSchema = new mongoose.Schema({
  customerDetails: {
    name: String,
    address: String,
    gstin: String,
    email: String,
  },
  cart: [
    {
      product_name: String,
      cost: Number,
      wattage: Number,
    },
  ],
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Create a Mongoose model for the JSON data
const JSONData = mongoose.model("JSONData", jsonSchema);

app.post("/api/sendJSON", (req, res) => {
  const receivedJSON = req.body;

  // Print the received JSON object
  console.log("Received JSON object:", receivedJSON);

  // Respond to the client
  res.json({ message: "JSON object received by the server" });
});

const startServer = async () => {
  try {
    connectdb(process.env.MONGODBURL);
    app.listen(8081, () => console.log("Server has started on localhost:8081"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
