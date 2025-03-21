import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <div className="cart-container">
      <h2 className="cart-title">My Cart</h2>
      <p className="cart-shipping">You're LKR 5,100 from Free Standard Shipping</p>
      

      <div className="cart-item">
        <img src="/hoodie.jpg" alt="Hoodie" className="cart-item-img" />
        <div className="cart-item-details">
          <h3 className="item-name">Classic Zip Up Hoodie - Unisex</h3>
          <p className="item-desc">Jet Black / S</p>
          <p className="cart-item-price">LKR 4,950</p>
        </div>
        <div className="cart-item-quantity">
          <button className="quantity-btn">-</button>
          <span className="quantity">2</span>
          <button className="quantity-btn">+</button>
        </div>
        <button className="remove-item">✖</button>
      </div>

      <textarea
        className="cart-note"
        placeholder="Leave a note with your order"
      ></textarea>

      <div className="cart-total">
        <p className="total-label">Total</p>
        <p className="cart-total-price">LKR 9,900</p>
      </div>

      <Link to="/checkout">
        <button className="checkout-btn">CHECKOUT</button>
        </Link>
      <button className="continue-shopping">CONTINUE SHOPPING</button>
    </div>
  );
};

export default CartPage;