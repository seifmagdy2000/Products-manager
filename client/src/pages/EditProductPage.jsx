import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductStore } from "../store/product";
import "./EditProductPage.css";

const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, updateProduct } = useProductStore(); // Fetch product list from store

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
  });

  // Fetch existing product details
  useEffect(() => {
    const existingProduct = products.find((product) => product._id === id);
    if (existingProduct) {
      setFormData({
        name: existingProduct.name,
        price: existingProduct.price,
        image: existingProduct.image,
      });
    }
  }, [id, products]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(id, formData);
    navigate("/");
  };

  return (
    <div className="edit-container">
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditProductPage;
