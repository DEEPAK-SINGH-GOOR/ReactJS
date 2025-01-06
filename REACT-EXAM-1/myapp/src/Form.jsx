import React, { useState } from 'react';
import './style.css';

const data = () => {
  const [formdata, setFormdata] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });
  // data
  const [product, setProduct] = useState([]);

  const handleinput = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    setProduct([...product, formdata]);
  }

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input name="name" value={formdata.name} placeholder='Name' onChange={handleinput} />

        <input name="description" value={formdata.description} placeholder="Description" onChange={handleinput} />

        <input name="price" value={formdata.price} type="number" placeholder="Price" onChange={handleinput} />

        <input name="image" value={formdata.image} placeholder="Image URL" onChange={handleinput} />

        <button type="submit">Submit</button>

      </form>

      {/*  Product display */}
      <div className='product-container'>
        {product.map((product, index) => (
          <div key={index} className='product-card'>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default data;
