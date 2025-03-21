import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDisplay.css";
import { getProductById } from "../../services/api";

const ProductDisplay = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(productId);
        setProduct(response);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-container">
      <div className="product-gallery">
        <img src={`http://localhost:5029/${product.productImageUrl}`} alt={product.productName} className="main-img" />
        <div className="thumbnail-row">
          <img src={`http://localhost:5029/${product.productImageUrl}`} alt={product.productName} className="thumbnail" />
        </div>
      </div>
      <div className="product-info">
        <h1 className="product-title">{product.productName}</h1>
        <p className="product-price">LKR {product.productPrice}</p>
        <p className="product-category">{product.productQuantity}</p>
        <span className="product-badge">REGULAR FIT</span>
        <p className="product-desc">{product.productDescription}</p>
        
        <p className="product-color">Available Color: Jet Black</p>
        {/* <div className="product-thumbnails">
          <img src={`http://localhost:5029/${product.productImageUrl}`} alt="Black" className="color-option" />
        </div> */}

        <p className="product-size">Available Size:</p>
        <div className="size-options">
          <button className="size-btn">S</button>
          <button className="size-btn">M</button>
          <button className="size-btn">L</button>
          <button className="size-btn">XL</button>
          <button className="size-btn">2XL</button>
        </div>

        <button className="add-to-cart">🛒 ADD TO CART</button>

        <div className="shipping-info">
          <p>🚚 Free shipping on orders over Rs.20,000</p>
          <p>🔄 Free Exchange & Returns</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;