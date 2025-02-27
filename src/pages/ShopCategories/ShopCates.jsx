import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProductsByCategory } from "../../services/api";
import "./shopcategories.css";
import { Item } from "../../components/Items/Item";
import ScaleLoader from "react-spinners/ScaleLoader";

export const ShopCates = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const category = new URLSearchParams(location.search).get("category");

  useEffect(() => {
    const fetchProducts = async () => {
      if (category) {
        try {
          setLoading(true);
          const data = await getProductsByCategory(category);
          
          // delay ekak athi karanwa spinner eka show karanna
          setTimeout(() => {
            setProducts(data);
            setLoading(false);
          }, 500); 
          
        } catch (err) {
          console.error("Error fetching products:", err);
          setError(`Failed to load products. Error: ${err.message}`);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="shopCategories">
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing {products.length}</span> products in {category}
        </p>
      </div>

      {loading ? (
        <div className="loading-container">
          <ScaleLoader color="#36D7B7" height={35} width={5} />
          <p>Loading products...</p>
        </div>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="shopCategory-products">
          {products.length > 0 ? (
            products.map((item, index) => (
              <Item
                key={`${item.productName}-${item.productCategory}-${index}`}
                ProductId={item.productId}
                ProductName={item.productName}
                ProductImage={item.productImage}
                ProductPrice={item.productPrice}
                ProductQuantity={item.productQuantity}
              />
            ))
          ) : (
            <p className="no-products">No products found in this category.</p>
          )}
        </div>
      )}

      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};
