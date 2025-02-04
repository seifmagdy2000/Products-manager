import Product from "../../models/product.model.js";

// Create a new product
export const createProductService = async (productData) => {
  return await Product.create(productData);
};
