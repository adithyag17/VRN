import React, { useState } from "react";
import axios from "axios";
import "./Products.css"; // Import the CSS file

const Products = () => {
  const [cart, setCart] = useState([]);
  //const username = "adithyag17";
  const [totalAmount, setTotalAmount] = useState(0);
  const gstamount = useState(0);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    address: "",
    gstin: "",
    email: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [serialInvoiceNumber, setSerialInvoiceNumber] = useState(1);
  const [productNumber, setProductNumber] = useState(1);
  const productsData = [
    {
      product_name: "LED Bulb",
      rate: 10.99,
      wattage: 9,
      HSN: 222,
    },
    {
      product_name: "Fluorescent Tube",
      rate: 14.99,
      wattage: 18,
      HSN: 222,
    },
    {
      product_name: "Halogens Spotlights",
      rate: 19.99,
      wattage: 20,
      HSN: 222,
    },
    {
      product_name: "Smart LED Strip",
      rate: 29.99,
      wattage: 25,
      HSN: 222,
    },
    {
      product_name: "Ceiling LED Panel",
      rate: 39.99,
      wattage: 30,
      HSN: 222,
    },
    {
      product_name: "Ceiling LED Panel",
      rate: 39.99,
      wattage: 30,
      HSN: 222,
    },
  ];

  const handleAddToCart = (product) => {
    const existingItem = cart.find(
      (item) => item.product.product_name === product.product_name
    );
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item === existingItem
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (productToRemove) => {
    const updatedCart = cart
      .map((item) => {
        if (item.product.product_name === productToRemove.product_name) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  const generateJSON = () => {
    setShowForm(true);
  };
  const calculateTotalAmount = () => {
    const total = cart.reduce((accumulator, item) => {
      return accumulator + item.product.rate * item.quantity;
    }, 0);
    setTotalAmount(total);
  };
  const handleSubmitForm = () => {
    // Recalculate the total amount
    const newTotalAmount = cart.reduce(
      (total, item) => total + item.product.rate * item.quantity,
      0
    );

    const dataToSend = {
      serialInvoiceNumber,
      productNumber,
      customerDetails,
      cart: cart.map((item) => ({ ...item.product, quantity: item.quantity })),
      totalAmount: newTotalAmount.toFixed(2), // Include the recalculated total amount
      gstamount: newTotalAmount * 0.18,
      grandtotalAmount: newTotalAmount + newTotalAmount * 0.18,
    };

    // Send the JSON object to the server
    axios
      .post("http://localhost:8081/api/sendJSON", dataToSend)
      .then((response) => {
        console.log("JSON object sent to server:", response.data);
      })
      .catch((error) => {
        console.error("Error sending JSON object:", error);
      });

    // Increment serial invoice number and product number for the next JSON
    setSerialInvoiceNumber(serialInvoiceNumber + 1);
    setProductNumber(productNumber + 1);

    setShowForm(false);
  };
  return (
    <div className="wrapper-parent">
      <div className="wrapper-child">
        <h1>Products</h1>
        <div className="product-container">
          {productsData.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-image"></div>
              <h2 className="product-title">
                {product.product_name} &nbsp;
                <p className="product-rate">${product.rate}</p>
              </h2>
              <p className="product-wattage">Wattage: {product.wattage}W</p>
              <button
                className="product-add-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div className="cart-container">
          <h2>Cart</h2>
          {cart.map((item, index) => (
            <div key={index}>
              <h3>{item.product.product_name}</h3>
              <p>rate: ${item.product.rate}</p>
              <p>Wattage: {item.product.wattage}W</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleRemoveFromCart(item.product)}>
                Remove from Cart
              </button>
              <button onClick={generateJSON}>Generate JSON</button>
              <hr />
            </div>
          ))}
        </div>
        {showForm && (
          <div className="form-container">
            <h2>Customer Details Form</h2>
            <form>
              <label>Name:</label>
              <input
                type="text"
                value={customerDetails.name}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    name: e.target.value,
                  })
                }
              />
              <label>Address:</label>
              <input
                type="text"
                value={customerDetails.address}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    address: e.target.value,
                  })
                }
              />
              <label>GSTIN:</label>
              <input
                type="text"
                value={customerDetails.gstin}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    gstin: e.target.value,
                  })
                }
              />
              <label>Email:</label>
              <input
                type="text"
                value={customerDetails.email}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    email: e.target.value,
                  })
                }
              />
              <button onClick={handleSubmitForm}>Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
