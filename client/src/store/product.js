import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],

  setProducts: (products) => set({ products }),

  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill in all fields." };
    }

    try {
      console.log(newProduct);

      const res = await fetch("http://localhost:8080/api/products", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        return { success: false, message: "Failed to create product." };
      }

      const data = await res.json();

      set((state) => ({
        products: [...state.products, data.data],
      }));

      return { success: true, message: "Product added successfully!" };
    } catch (error) {
      return { success: false, message: "An error occurred." };
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
      set({ products: data.data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
}));
