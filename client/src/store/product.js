import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],

  setProducts: (products) => set({ products }),

  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill in all fields." };
    }

    try {
      console.log("Creating product:", newProduct);

      const res = await fetch("http://localhost:8080/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        const errorData = await res.json();
        return {
          success: false,
          message: errorData.message || "Failed to create product.",
        };
      }

      const data = await res.json();
      set((state) => ({ products: [...state.products, data.data] }));

      return { success: true, message: "Product added successfully!" };
    } catch (error) {
      console.error("Error creating product:", error);
      return {
        success: false,
        message: "An error occurred while creating the product.",
      };
    }
  },

  fetchProducts: async () => {
    try {
      const res = await fetch("http://localhost:8080/api/products", {
        method: "GET",
      });

      if (!res.ok) {
        console.error("Failed to fetch products");
        return;
      }

      const data = await res.json();
      set({ products: data.data || [] });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },

  deleteProduct: async (productId) => {
    try {
      const res = await fetch(
        `http://localhost:8080/api/products/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        console.error("Failed to delete product");
        return;
      }

      set((state) => ({
        products: state.products.filter((product) => product._id !== productId),
      }));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  },

  updateProduct: async (productId, updatedProduct) => {
    if (
      !updatedProduct.name ||
      !updatedProduct.price ||
      !updatedProduct.image
    ) {
      return { success: false, message: "Please fill in all fields." };
    }

    try {
      console.log("Updating product:", productId, updatedProduct);

      const res = await fetch(
        `http://localhost:8080/api/products/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        return {
          success: false,
          message: errorData.message || "Failed to update product.",
        };
      }

      const data = await res.json();
      set((state) => ({
        products: state.products.map((product) =>
          product._id === productId ? data.data : product
        ),
      }));

      return { success: true, message: "Product updated successfully!" };
    } catch (error) {
      console.error("Error updating product:", error);
      return {
        success: false,
        message: "An error occurred while updating the product.",
      };
    }
  },
}));
