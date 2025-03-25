import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./cart.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.productPrice * item.quantity);
    }, 0);
  };

  const continueShopping = () => {
    navigate(-1); 
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">My Cart</h2>
      <p className="cart-shipping">
        {calculateTotal() < 20000 
          ? `You're LKR ${20000 - calculateTotal()} from Free Standard Shipping`
          : 'You qualify for Free Standard Shipping!'}
      </p>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button className="continue-shopping" onClick={continueShopping}>
            CONTINUE SHOPPING
          </button>
        </div>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
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
                  className="quantity-btn" 
                  onClick={() => updateQuantity(index, item.quantity - 1)}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button 
                  className="quantity-btn" 
                  onClick={() => updateQuantity(index, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button 
                className="remove-item" 
                onClick={() => removeItem(index)}
              >
                ✖
              </button>
            </div>
          ))}

          <textarea
            className="cart-note"
            placeholder="Leave a note with your order"
          ></textarea>

          <div className="cart-total">
            <p className="total-label">Total</p>
            <p className="cart-total-price">LKR {calculateTotal()}</p>
          </div>

          <Link to="/checkout">
            <button className="checkout-btn">CHECKOUT</button>
          </Link>
          <button className="continue-shopping" onClick={continueShopping}>
            CONTINUE SHOPPING
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;