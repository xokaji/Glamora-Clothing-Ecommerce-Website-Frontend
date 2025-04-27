import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./accessories.css";
import { getProductsByCategory } from "../../services/api"; 
import { ScaleLoader } from "react-spinners";

export const Accessories = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response] = await Promise.all([
          getProductsByCategory(3),
          new Promise(resolve => setTimeout(resolve, 1000)) 
        ]);
        setProducts(response);
        setFilteredProducts(response); // initially show all products
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter products based on the search query
    if (searchQuery.trim()) {
      const filtered = products.filter(product =>
        product.productName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // If search is empty, show all products
    }
  }, [searchQuery, products]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  if (loading) {
    return (
      <div className="loadingContainer">
        <ScaleLoader color="#36d7b7" height={35} />
        <p>Loading Accessories Collection....</p>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="home">
      {/* Search Bar */}
      <div className="searchBarContainer">
        <input
          type="text"
          placeholder="Search for accessories..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="searchBar"
        />
      </div>
      
      {/* <h1>Accessories Collection</h1> */}
      <div className="productGrid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link to={`/product/${product.productId}`} key={product.productId} className="productCard">
              <img
                src={`http://localhost:5029/${product.productImageUrl}`}
                alt={product.productName}
                onError={(e) => {
                  e.target.src = "/images/fallback.jpg"; 
                }}
              />
              <p>{product.productName}</p>
              <p><strong>LKR</strong> {product.productPrice}</p>
            </Link>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};
