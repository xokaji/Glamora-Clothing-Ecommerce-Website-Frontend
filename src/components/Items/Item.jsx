import React from 'react';
import "./item.css";

export const Item = (props) => {
  return (
    <div className="item">
      <img src={props.ProductImage} alt={props.ProductName} />
      <p>{props.ProductName}</p>
      <div className="itemPrices">
        <div className="newPrice">
            Rs.{props.ProductPrice} || "NAAA"
        </div>
        <div className="oldPrice">
            Rs.{props.ProductQuantity}
        </div>
      </div>
    </div>
  );
};
