import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectdb from "./db/connectToDB.js";
//import createinvoice from "./routes/createinvoice";
dotenv.config();
const app = express();
app.use(cors());
//app.use("/api/v1/createinvoice", createinvoice);
app.get("/", async (req, res) => {
  res.send("hello from adithya");
});
const startServer = async () => {
  try {
    connectdb(process.env.MONGODBURL);
    app.listen(8081, () => console.log("Server has started on localhost:8080"));
  } catch (error) {
    console.log(error);
  }
};
startServer();
