import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./men.css";
import { getProductsByCategory } from "../../services/api"; 

export const Men = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {

        const response = await getProductsByCategory(0);
        setProducts(response);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="home">
      <h1>Most Recent Women's Products</h1>
      <div className="productGrid">
        {products.map((product) => (
          <Link to={`/product/${product.productId}`} key={product.productId} className="productCard">
            <img
              src={`http://localhost:5029/${product.productImageUrl}`}
              alt={product.productName}
              onError={(e) => {
                e.target.src = "/images/fallback.jpg"; 
              }}
            />
            <p>{product.productName}</p>
            <p><strong>Price:</strong> Rs.{product.productPrice}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};