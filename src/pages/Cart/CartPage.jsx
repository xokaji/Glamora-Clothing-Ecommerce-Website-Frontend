import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./cart.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;

    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.productPrice * item.quantity;
    }, 0);
  };

  const total = calculateTotal();

  const shippingMessage = (() => {
    if (cartItems.length === 0) {
      return "Free standard shipping on orders over LKR 20000";
    }

    if (total < 20000) {
      return `You're LKR ${20000 - total} from Free Standard Shipping`;
    }

    return "You qualify for Free Standard Shipping!";
  })();

  const continueShopping = () => {
    navigate(-3);
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <h2 className="cart-title">My Cart</h2>
          <p className="cart-shipping">{shippingMessage}</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p className="empty-cart-title">Your cart is empty</p>
            <p className="empty-cart-subtitle">
              Add something you like, then come back here.
            </p>
            <button className="continue-shopping" onClick={continueShopping}>
              CONTINUE SHOPPING
            </button>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div
                  className="cart-item"
                  key={`${item.productId ?? item.productName}-${item.selectedSize ?? ""}-${item.productPrice}-${item.productImageUrl}`}
                >
                  <img
                    src={`http://localhost:5029/${item.productImageUrl}`}
                    alt={item.productName}
                    className="cart-item-img"
                  />
                  <div className="cart-item-details">
                    <h3 className="item-name">{item.productName}</h3>
                    <p className="item-desc">Jet Black / {item.selectedSize}</p>
                    <p className="cart-item-price">LKR {item.productPrice}</p>
                  </div>
                  <div className="cart-item-quantity">
                    <button
                      type="button"
                      className="quantity-btn"
                      onClick={() => updateQuantity(index, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      type="button"
                      className="quantity-btn"
                      onClick={() => updateQuantity(index, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => removeItem(index)}
                    aria-label="Remove item"
                  >
                    ✖
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <textarea
                className="cart-note"
                placeholder="Leave a note with your order"
              ></textarea>

              <div className="cart-total">
                <p className="total-label">Total</p>
                <p className="cart-total-price">LKR {total}</p>
              </div>

              <div className="cart-actions">
                <Link to="/checkout" className="checkout-link">
                  <button type="button" className="checkout-btn">
                    CHECKOUT
                  </button>
                </Link>
                <button
                  className="continue-shopping"
                  onClick={continueShopping}
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
