import React from "react";
import ProductCard from './Productcard.jsx';

const App = () => {
  const products = [
    {
      name: "Product A",
      description: "This is a description for Product A.",
      price: 29.99,
      image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
    },
    {
      name: "Product B",
      description: "This is a description for Product B.",
      price: 39.99,
      image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
    },
    {
      name: "Product C",
      description: "This is a description for Product C.",
      price: 19.99,
      image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
    },
    {
      name: "Product D",
      description: "This is a description for Product D.",
      price: 49.99,
      image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
    },
  ];

  return (
    <div>
      <div className="product-container">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
