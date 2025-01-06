import React, { useState } from 'react';
import './style.css'; // Make sure you import the CSS

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', description: '', price: '', image: '' }); // Reset form after submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        name="description"
        value={formData.description}
        placeholder="Description"
        onChange={handleChange}
      />
      <input
        name="price"
        value={formData.price}
        type="number"
        placeholder="Price"
        onChange={handleChange}
      />
      <input
        name="image"
        value={formData.image}
        placeholder="Image URL"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const Product = ({ products }) => {
  return (
    <div className="product-container">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h1>Product Form</h1>
      <Form onSubmit={handleAddProduct} />
      <Product products={products} />
    </div>
  );
};

export default App;
