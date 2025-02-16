import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useProductStore } from "../../store/product";
import "./Product.css";

const Product = ({ isDark, product }) => {
  const { deleteProduct } = useProductStore();
  const navigate = useNavigate(); 

  return (
    <div className={isDark ? "product-container-dark-mode" : "product-container"}>
      <img src={product.image || "default-image-url.jpg"} alt={product.name} className="product-image" />
      <p className="product-name">{product.name}</p>
      <p className="product-price">${product.price}</p>
      <p className="product-creation-time">
        Created: {product.createdAt ? new Date(product.createdAt).toLocaleString() : "N/A"}
      </p>
      <p className="product-update-time">
        Updated: {product.updatedAt ? new Date(product.updatedAt).toLocaleString() : "N/A"}
      </p>
      <div className="btns">
        <button type="button" onClick={() => navigate(`/edit/${product._id}`)}>
          <FaRegEdit />
        </button>
        <button type="button" onClick={() => deleteProduct(product._id)}>
          <MdOutlineDeleteOutline />
        </button>
      </div>
    </div>
  );
};

export default Product;
