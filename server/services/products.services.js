import Product from "../models/product.model.js";

// Create a new product
export const createProductService = async (productData) => {
  try {
    if (!productData || Object.keys(productData).length === 0) {
      throw new Error("Invalid input: Product data is required");
    }

    const newProduct = await Product.create(productData);
    return newProduct;
  } catch (error) {
    console.error("Error creating the product:", error.message);
    throw new Error(error.message || "Failed to create product");
  }
};

// Delete a product
export const deleteProductService = async (id) => {
  try {
    if (!id) {
      throw new Error("Invalid input: Product ID is required");
    }

    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      throw new Error("Product not found");
    }

    return deletedProduct;
  } catch (error) {
    console.error("Failed to delete product:", error.message);
    throw new Error(error.message || "Failed to delete product");
  }
};

// Get all products
export const getAllProductsService = async () => {
  try {
    const allProducts = await Product.find({}).lean();
    return allProducts;
  } catch (error) {
    console.error("Failed to get all products:", error.message);
    throw new Error(error.message || "Failed to get all products");
  }
};

// Update a product
export const updateProductService = async (id, updatedProduct) => {
  try {
    if (!id || !updatedProduct || Object.keys(updatedProduct).length === 0) {
      throw new Error("Invalid input: Product ID and update data are required");
    }

    const newProduct = await Product.findByIdAndUpdate(id, updatedProduct, {
      new: true,
      runValidators: true,
    });

    if (!newProduct) {
      throw new Error("Product not found");
    }

    return newProduct;
  } catch (error) {
    console.error("Error updating product:", error.message);
    throw new Error(error.message || "Failed to update product");
  }
};
