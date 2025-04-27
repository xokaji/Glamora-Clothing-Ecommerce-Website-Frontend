import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./productDisplay.css";
import { getProductById } from "../../services/api";
import { CartContext } from "../../context/CartContext";

const ProductDisplay = () => {
  const { addToCart } = useContext(CartContext);
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(productId);
        setProduct(response);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      localStorage.setItem("redirectAfterLogin", window.location.pathname);
      navigate("/login");
      return;
    }
  
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
  
    const cartItem = {
      ...product,
      selectedSize,
      quantity,
    };
  
    addToCart(cartItem); 
    navigate("/cart");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-container">
      <div className="product-gallery">
        <img
          src={`http://localhost:5029/${product.productImageUrl}`}
          alt={product.productName}
          className="main-img"
        />
        <div className="thumbnail-row">
          <img
            src={`http://localhost:5029/${product.productImageUrl}`}
            alt={product.productName}
            className="thumbnail"
          />
        </div>
      </div>
      <div className="product-info">
        <h1 className="product-title">{product.productName}</h1>
        <p className="product-price">LKR {product.productPrice}</p>
        <p className="product-desc">{product.productDescription}</p>

        {/* <p className="product-color">Available Color: Jet Black</p> */}

        <p className="product-size">Available Size:</p>
        <div className="size-options">
          {["S", "M", "L"].map((size) => (
            <button
              key={size}
              className={`size-btn ${selectedSize === size ? "selected" : ""}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="quantity-selector">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>

        <button className="add-to-cart" onClick={handleAddToCart}>
          🛒 ADD TO CART
        </button>

        <div className="shipping-info">
          <p>🚚 Free shipping on orders over Rs.20,000</p>
          <p>🔄 Free Exchange & Returns</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
