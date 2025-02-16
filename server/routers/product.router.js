import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// Create a new product
router.post("/products", createProduct);

// Get all products
router.get("/products/", getAllProducts);

//Delete a product
router.delete("/products/:id", deleteProduct);

//Update a product
router.put("/products/:id", updateProduct);

export default router;
