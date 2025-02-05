import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// Create a new product
router.post("/api/products", createProduct);

// Get all products
router.get("/api/products/", getAllProducts);

//Delete a product
router.delete("/api/products/:id", deleteProduct);

//Update a product
router.put("/api/products/:id", updateProduct);

export default router;
