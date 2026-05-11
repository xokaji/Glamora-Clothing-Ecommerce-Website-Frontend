import React, { useState, useContext } from "react";
import "./navbar.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import logo from "../assets/img/logo.jpg";

export const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleToggleMenu = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (!next) setDropDown(false);
      return next;
    });
  };

  const handleNavClick = () => {
    setIsOpen(false);
    setDropDown(false);
  };

  return (
    <div className="navBar">
      <div className="navLogo">
        <img src={logo} alt="Logo" className="navLogoImg" width={50} />
        <Link className="loGo" to="" id="nav">
          <p>SOBA FASIONS</p>
        </Link>
      </div>

      <button
        type="button"
        className="menuIcon"
        onClick={handleToggleMenu}
        aria-label="Toggle navigation"
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <ul className={`navLinks ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={handleNavClick}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/menProducts" onClick={handleNavClick}>
            MEN
          </Link>
        </li>
        <li>
          <Link to="/womenProducts" onClick={handleNavClick}>
            WOMEN
          </Link>
        </li>
        <li>
          <Link to="/accessories" onClick={handleNavClick}>
            ACCESORIES
          </Link>
        </li>

        <li className="navMobileIcons">
          <Link
            to="/login"
            className="navMobileIconLink"
            onClick={handleNavClick}
            aria-label="Account"
          >
            <AccountCircleOutlinedIcon className="navIcons" />
          </Link>

          <button
            type="button"
            className="navMobileIconButton"
            onClick={toggleDropDown}
            aria-label="Select location"
          >
            <LanguageOutlinedIcon className="navIcons" />
          </button>

          <Link
            to="/cart"
            className="navMobileIconLink navMobileCart"
            onClick={handleNavClick}
            aria-label="Cart"
          >
            <AddShoppingCartOutlinedIcon className="navIcons" />
            <span className="navCartCountMobile">{cartItems.length}</span>
          </Link>

          {dropDown && (
            <div className="listDropdown listDropdownMobile">
              <ul>
                <li>Kurunegala</li>
                <li>Colombo</li>
                <li>Kandy</li>
              </ul>
            </div>
          )}
        </li>
        {}
      </ul>

      <div className="navLogincart navDesktopOnly">
        <Link to="/login">
          <AccountCircleOutlinedIcon className="navIcons" />
        </Link>
        <button
          type="button"
          className="worldicon"
          onClick={toggleDropDown}
          aria-label="Select location"
        >
          <LanguageOutlinedIcon className="navIcons" />
        </button>
        {dropDown && (
          <div className="listDropdown">
            <ul>
              <li>Kurunegala</li>
              <li>Colombo</li>
              <li>Kandy</li>
            </ul>
          </div>
        )}
        <Link to="/cart">
          <AddShoppingCartOutlinedIcon className="navIcons" />
        </Link>
        <div className="navCartCount">{cartItems.length}</div>
      </div>
    </div>
  );
};

