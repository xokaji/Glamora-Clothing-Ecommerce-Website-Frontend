import React from 'react';
import "./item.css";

export const Item = (props) => {
  const { ProductImage, ProductName, ProductPrice, ProductQuantity, onProductClick } = props;

  return (
    <div className="item" onClick={onProductClick}>
      <img src={ProductImage} alt={ProductName} />
      <p>{ProductName}</p>
      <div className="itemPrices">
        <div className="newPrice">Rs.{ProductPrice}</div>
        <div className="oldPrice">Rs.{ProductQuantity}</div>
      </div>
    </div>
  );
};