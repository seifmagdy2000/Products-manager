import React from 'react'
import './Form.css'
import{ useState } from 'react';

const Form = () => {
  const [newProduct,setNewProduct]= useState({
      name:"",
      price:"",
      url: ""
    });

  function handleSubmit(event)
  {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const name = formData.get('name');
    const price = formData.get('price');
    const url = formData.get('url');
    console.log(newProduct);
        
  }
  function handleChange(event)
  {
    const {name, value} = event.currentTarget;
    setNewProduct(prev=>({
      ...prev,
      [name]:value
    }))
  }
  return (
      <div className='create-container'>
        <h1>Add Product</h1>
        <form method='POST' onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Product name" onChange={handleChange} value={newProduct.name} required />
          <input type="text" name="price" placeholder="Product price" onChange={handleChange} value={newProduct.price} required />
          <input type="text" name="url" placeholder="Image URL" onChange={handleChange} value={newProduct.url} required />
          <button type="submit">Add</button>
       </form>
      </div>
  )
}

export default Form