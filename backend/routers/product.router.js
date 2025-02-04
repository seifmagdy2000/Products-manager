import express from "express";
import { createProduct } from "../controllers/product.controller.js";

const router = express.Router();

// Create a new product
router.post("/api/products", createProduct);

export default router;
