import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/DB.js";
import Product from "../models/product.model.js";
import productRouter from "./routers/product.router.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(productRouter);

app.get("/", (req, res) => {
  res.send("working");
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${PORT}`);
});
