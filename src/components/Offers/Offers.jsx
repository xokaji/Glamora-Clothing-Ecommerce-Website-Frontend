import React from 'react'
import "./offers.css"
import exclusive_image from "../assets/img/tr1.png"
import { Link } from 'react-router-dom'



export const Offers = () => {
  return (
    <div className="offers">
        <div className="offers-left">
            <h1>Discover the latest</h1>
            <h1>Women's fashion with</h1>
            <h1>Exclusive collection</h1>
            <p>ONLY FOR BEST PRODUCTS SELLERS</p>
            <button><Link className='womenLink' to="/womenProducts">Check Now</Link></button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="ex"/>
        </div>
    </div>
  )
}
