import express from "express";
import {
  createProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// Create a new product
router.post("/api/products", createProduct);

//Delete a product
router.delete("/api/products/:id", deleteProduct);

export default router;
