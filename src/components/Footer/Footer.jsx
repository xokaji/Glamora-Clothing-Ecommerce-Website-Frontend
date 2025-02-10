import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import "./footer.css";


export const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-sections">
        <div className="footer-column">
          <h2>MENU</h2>
          <ul>
            {["Home", "Men's", "Women's", "Accessories", "Gift Cards"].map(
              (item, index) => (
                <li key={index}>
                  <a href="#a">{item}</a>
                </li>
              )
            )}
          </ul>
        </div>

        
        <div className="footer-column">
          <h2>SUPPORT</h2>
          <ul>
            {[
              "FAQ",
              "Delivery",
              "Make A Return",
              "Orders",
             
            ].map((item, index) => (
              <li key={index}>
                <a href="#b">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="footer-column">
          <h2>MY ACCOUNT</h2>
          <ul>
            {["Login", "Register"].map((item, index) => (
              <li key={index}>
                <a href="#c">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="footer-right">
          <button className="blog-btn">GLAMORA CHARITY</button>
        </div>
      </div>

    
      

      
      <div className="footer-links">
        {[
          "Contact Information",
          "Refund Policy",
          "Shipping Policy",
          "Terms of Service",
        ].map((item, index) => (
          <span key={index}>
            <a href="#sd">{item}</a>
            {index < 3 && " | "}
          </span>
        ))}
      </div>

    
      <div className="social-icons">
        <a href="www.glamora.com">
          <FaInstagram />
        </a>
        <a href="www.glamora.com">
          <FaFacebookF />
        </a>
        <a href="www.glamora.com">
          <FaTwitter />
        </a>
      </div>

    
      <p className="copyright">© 2025 | Glamora | All Rights Reserved.</p>
    </div>
  </footer>
);


