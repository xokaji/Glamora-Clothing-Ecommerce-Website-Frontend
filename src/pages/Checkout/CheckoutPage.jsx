import React from "react";
import "./check.css";

const CheckoutPage = () => {
  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      
      <div className="checkout-section">
        <h3>Contact</h3>
        <input type="email" placeholder="Email" className="checkout-input" />
        <div className="newsletter-option">
          <input type="checkbox" id="newsletter" />
          <label htmlFor="newsletter">Email me with news and offers</label>
        </div>
      </div>

      <div className="checkout-section">
        <h3>Delivery</h3>
        <div className="delivery-option">
          <label>Country/Region</label>
          <select className="checkout-input">
            <option>Sri Lanka</option>
          </select>
        </div>
        <div className="name-fields">
          <input type="text" placeholder="First name" className="checkout-input" />
          <input type="text" placeholder="Last name" className="checkout-input" />
        </div>
        <input type="text" placeholder="Address" className="checkout-input" />
        <input type="text" placeholder="Apartment, suite, etc. (optional)" className="checkout-input" />
        <div className="city-fields">
          <input type="text" placeholder="City" className="checkout-input" />
          <input type="text" placeholder="Postal code (optional)" className="checkout-input" />
        </div>
        <input type="text" placeholder="Phone" className="checkout-input" />
        <div className="save-info">
          <input type="checkbox" id="save-info" />
          <label htmlFor="save-info">Save this information for next time</label>
        </div>
      </div>

      <div className="checkout-summary">
        <h3>Order Summary</h3>
        <div className="checkout-item">
          <img src="/hoodie.jpg" alt="Hoodie" className="checkout-item-img" />
          <div className="checkout-item-details">
            <h4>Classic Zip Up Hoodie - Unisex</h4>
            <p>Jet Black / S</p>
          </div>
        </div>
        <div className="discount-section">
          <input type="text" placeholder="Discount code or gift card" className="checkout-input" />
          <button className="apply-discount">Apply</button>
        </div>
        <div className="checkout-total">
          <p>Subtotal: Rs 9,900.00</p>
          <p>Shipping: Rs 399.00</p>
          <h3>Total: Rs 10,299.00</h3>
        </div>
      </div>

      <button className="proceed-payment">Proceed to Payment</button>
    </div>
  );
};

export default CheckoutPage;