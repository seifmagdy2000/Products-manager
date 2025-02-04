import Product from "../../models/product.model.js";

// Create a new product
export const createProductService = async (productData) => {
  try {
    return await Product.create(productData);
  } catch (error) {
    console.error("Error creating the product:", error.message);
    throw new Error("Failed to create product");
  }
};

// Delete a product
export const deleteProductService = async (id) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      throw new Error("Product not found");
    }

    return deletedProduct;
  } catch (error) {
    console.error("Failed to delete product:", error.message);
    throw new Error("Failed to delete product");
  }
};

export const getAllProductsService = async () => {
  try {
    const allproducts = await Product.find();
    return allproducts;
  } catch (error) {
    throw new Error("Faild to get all products");
  }
};
