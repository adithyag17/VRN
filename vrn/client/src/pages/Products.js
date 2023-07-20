import React, { useState } from "react";
import "./Products.css"; // Import the CSS file

const Products = () => {
  const [cart, setCart] = useState([]);

  const productsData = [
    {
      product_name: "LED Bulb",
      cost: 10.99,
      wattage: 9,
    },
    {
      product_name: "Fluorescent Tube",
      cost: 14.99,
      wattage: 18,
    },
    {
      product_name: "Halogens Spotlights",
      cost: 19.99,
      wattage: 20,
    },
    {
      product_name: "Smart LED Strip",
      cost: 29.99,
      wattage: 25,
    },
    {
      product_name: "Ceiling LED Panel",
      cost: 39.99,
      wattage: 30,
    },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="product-container">
        {productsData.map((product, index) => (
          <div className="product-card" key={index}>
            <h2>{product.product_name}</h2>
            <p>Cost: ${product.cost}</p>
            <p>Wattage: {product.wattage}W</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart-container">
        <h2>Cart</h2>
        {cart.map((product, index) => (
          <div key={index}>
            <h3>{product.product_name}</h3>
            <p>Cost: ${product.cost}</p>
            <p>Wattage: {product.wattage}W</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
