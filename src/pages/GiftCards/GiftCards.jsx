import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./gifts.css";
import { getProductsByCategory } from "../../services/api"; 
import { ScaleLoader } from "react-spinners";

export const GiftCards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response] = await Promise.all([
          getProductsByCategory(2),
          new Promise(resolve => setTimeout(resolve, 1000)) 
        ]);
        setProducts(response);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

if (loading) {
    return (
      <div className="loadingContainer">
        <ScaleLoader color="#36d7b7" height={35} />
        <p>Loading Gift Collection....</p>
      </div>
    );
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
            <p><strong>LKR:</strong> Rs.{product.productPrice}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};