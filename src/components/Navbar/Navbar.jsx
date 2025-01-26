import React, { useState } from 'react'
import './navbar.css'
import logo from "../assets/img/logo.png"
import cartIcon from "../assets/img/cart_icon.png"
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [menu, setMenu] = useState("shop");

  return (
    <div className="navBar">
        <div className="navLogo">
            <img src={logo} alt="logo" />
            <p>ShopMart</p>
        </div>
        <ul className="navLinks">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: "none", color:"#626262"}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration: "none", color:"#626262"}} to="/men">Men</Link>{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration: "none", color:"#626262"}} to="/women">Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: "none", color:"#626262"}} to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="navLogincart">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cartIcon} alt="cart" /></Link>
            <div className="navCartCount">0</div>
        </div>
    </div>
    
  )
}
