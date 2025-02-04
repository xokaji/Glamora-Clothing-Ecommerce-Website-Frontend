import React from 'react'
import "./item.css"



export const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt=""/>
      <p>{props.name}</p>
      <div className="itemPrices">
        <div className="newPrice">
            Rs.{props.new_price}
        </div>
        <div className="oldPrice">
            Rs.{props.old_price}
        </div>
      </div>
    </div>
  )
}
