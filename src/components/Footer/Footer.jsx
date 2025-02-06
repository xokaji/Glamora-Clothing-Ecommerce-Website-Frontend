import React from 'react'
import './footer.css'
import footer_logo from '../assets/img/logo_big.png'
import insta from '../assets/img/instagram_icon.png'
import whtsapp from '../assets/img/whatsapp_icon.png'
import pinterest from '../assets/img/pintester_icon.png'


export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerLogo">
            <img src={footer_logo} alt="logo"/>
            <p>ShopMart</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={insta} alt="insta" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest} alt="pinterest" />
            </div>
            <div className="footer-icons-container">
                <img src={whtsapp} alt="whatsapp" />
            </div>
        </div>
        <div className="footer-copyrights">
            <hr/>
            <p>Copyrights @2025 - All Rights Reserved</p>
        </div>
    </div>
  )
}
