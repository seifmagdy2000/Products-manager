import React from "react";
import "./Product.css";

const Product = ({ isDark, product }) => {
  return (
    <div className={isDark ? "product-container-dark-mode" : "product-container"}>
      <img src={product.image || "default-image-url.jpg"} alt={product.name} className="product-image" />
      <p className="product-name">{product.name}</p>
      <p className="product-price">${product.price}</p>
      <p className="product-creation-time">Created: {new Date(product.createdAt).toLocaleString()}</p>
      <p className="product-update-time">Updated: {new Date(product.updatedAt).toLocaleString()}</p>
    </div>
  );
};

export default Product;
