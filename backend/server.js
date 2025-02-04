import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/DB.js";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(8080, () => {
  connectDB();
  console.log("server is working ");
});
