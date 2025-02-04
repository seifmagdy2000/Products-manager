import { createProductService } from "../services/products.services.js";
export async function createProduct(req, res) {
  const { name, price, image } = req.body;

  // Validate input fields
  if (!name || !price || !image) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill all fields" });
  }

  try {
    const newProduct = await createProductService({
      name,
      price,
      image,
    });
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error creating the product:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
}
