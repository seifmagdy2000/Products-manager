import React, { useState } from 'react';
import './Form.css';
import { useProductStore } from '../../store/product';

const Form = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  });

  const { createProduct } = useProductStore();
  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await createProduct(newProduct);

    if (response.success) {
      setMessage("Product added successfully!");
      setNewProduct({ name: "", price: "", image: "" });
    } else {
      setMessage(` Error: ${response.message}`);
    }
  }

  return (
    <div className='create-container'>
      <h1>Add Product</h1>
      {message && <p className="message">{message}</p>}
      <form method='POST' onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product name" onChange={handleChange} value={newProduct.name} required />
        <input type="text" name="price" placeholder="Product price" onChange={handleChange} value={newProduct.price} required />
        <input type="text" name="image" placeholder="Image image" onChange={handleChange} value={newProduct.image} required />
        <button className='form-btn' type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
