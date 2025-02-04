import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(8080, () => {
  console.log("server is working ");
});
