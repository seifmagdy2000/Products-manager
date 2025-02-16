import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/DB.js";
import productRouter from "./routers/product.router.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", productRouter);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${PORT}`);
});
