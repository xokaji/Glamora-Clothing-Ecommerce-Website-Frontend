import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./check.css";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    subscribe: false,
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    postalCode: "",
    phone: "",
    saveInfo: false,
    discountCode: ""
  });
  const navigate = useNavigate();

  useEffect(() => {

    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.productPrice * item.quantity);
    }, 0);
  };

  const calculateShipping = () => {
    return calculateSubtotal() >= 20000 ? 0 : 399;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Order submitted:", { formData, cartItems });

    localStorage.removeItem('cart');

    navigate('/order-confirmation');
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-container">
        <h2 className="checkout-title">Your cart is empty</h2>
        <button 
          className="continue-shopping" 
          onClick={() => navigate('/')}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="checkout-section">
          <h3>Contact</h3>
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            className="checkout-input" 
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <div className="newsletter-option">
            <input 
              type="checkbox" 
              id="newsletter" 
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleInputChange}
            />
            <label htmlFor="newsletter">Email me with news and offers</label>
          </div>
        </div>

        <div className="checkout-section">
          <h3>Delivery</h3>
          <div className="delivery-option">
            <label>Country/Region</label>
            <select className="checkout-input" disabled>
              <option>Sri Lanka</option>
            </select>
          </div>
          <div className="name-fields">
            <input 
              type="text" 
              name="firstName"
              placeholder="First name" 
              className="checkout-input" 
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <input 
              type="text" 
              name="lastName"
              placeholder="Last name" 
              className="checkout-input" 
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <input 
            type="text" 
            name="address"
            placeholder="Address" 
            className="checkout-input" 
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          <input 
            type="text" 
            name="apartment"
            placeholder="Apartment, suite, etc. (optional)" 
            className="checkout-input" 
            value={formData.apartment}
            onChange={handleInputChange}
          />
          <div className="city-fields">
            <input 
              type="text" 
              name="city"
              placeholder="City" 
              className="checkout-input" 
              value={formData.city}
              onChange={handleInputChange}
              required
            />
            <input 
              type="text" 
              name="postalCode"
              placeholder="Postal code (optional)" 
              className="checkout-input" 
              value={formData.postalCode}
              onChange={handleInputChange}
            />
          </div>
          <input 
            type="tel" 
            name="phone"
            placeholder="Phone" 
            className="checkout-input" 
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <div className="save-info">
            <input 
              type="checkbox" 
              id="save-info" 
              name="saveInfo"
              checked={formData.saveInfo}
              onChange={handleInputChange}
            />
            <label htmlFor="save-info">Save this information for next time</label>
          </div>
        </div>

        <div className="checkout-summary">
          <h3>Order Summary</h3>
          {cartItems.map((item, index) => (
            <div className="checkout-item" key={index}>
              <img 
                src={`http://localhost:5029/${item.productImageUrl}`} 
                alt={item.productName} 
                className="checkout-item-img" 
              />
              <div className="checkout-item-details">
                <h4>{item.productName}</h4>
                <p>Jet Black / {item.selectedSize} × {item.quantity}</p>
                <p>LKR {item.productPrice * item.quantity}</p>
              </div>
            </div>
          ))}
          <div className="discount-section">
            <input 
              type="text" 
              name="discountCode"
              placeholder="Discount code or gift card" 
              className="checkout-input" 
              value={formData.discountCode}
              onChange={handleInputChange}
            />
            <button 
              type="button" 
              className="apply-discount"
              onClick={() => alert("Discount code applied (mock)")}
            >
              Apply
            </button>
          </div>
          <div className="checkout-total">
            <p>Subtotal: LKR {calculateSubtotal().toFixed(2)}</p>
            <p>Shipping: LKR {calculateShipping().toFixed(2)}</p>
            <h3>Total: LKR {calculateTotal().toFixed(2)}</h3>
          </div>
        </div>

        <button type="submit" className="proceed-payment">
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;