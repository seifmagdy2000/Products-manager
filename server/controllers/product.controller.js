import {
  createProductService,
  deleteProductService,
  getAllProductsService,
} from "../services/products.services.js";

//create product
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
    res.status(500).json({ success: false, message: "Server error" });
  }
}

//Delete product
export async function deleteProduct(req, res) {
  try {
    const { id } = req.params;
    const deletedProduct = await deleteProductService(id);
    res
      .status(200)
      .json({ success: true, message: "product was deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "failed to delete product" });
  }
}
export async function getAllProducts(req, res) {
  try {
    const allProducts = await getAllProductsService();
    res.status(200).json({ success: true, data: allProducts });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to get all products" });
  }
}
