import React, { useState } from 'react';
import './navbar.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [isOpen, setIsOpen] = useState(false);
    const [dropDown, setDropDown] = useState(false);

    const toggleDropDown = ()=>{
        setDropDown(!dropDown);
    }

    return (
        <div className="navBar">
            <div className="navLogo">
                <Link className='loGo' to="" id='nav'><p>GLAMORA</p></Link>
            </div>
            
            <div className="menuIcon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <CloseIcon /> : <MenuIcon />}
            </div>

            <ul className={`navLinks ${isOpen ? 'open' : ''}`}>
                <li onClick={() => { setMenu("shop"); setIsOpen(false); }}><Link to="/">HOME</Link></li>
                <li onClick={() => { setMenu("MEN"); setIsOpen(false); }}><Link to="/menProducts">MEN</Link></li>
                <li onClick={() => { setMenu("WOMEN"); setIsOpen(false); }}><Link to="/womenProducts">WOMEN</Link></li>
                <li onClick={() => { setMenu("accessories"); setIsOpen(false); }}><Link to="/accessories">ACCESSORIES</Link></li>
                <li onClick={() => { setMenu("gifts"); setIsOpen(false); }}><Link to="/gifts">GIFTS</Link></li>
            </ul>

            <div className="navLogincart">
                <Link to="/login"><AccountCircleOutlinedIcon className='navIcons' /></Link>
                <div className="worldicon"
                    onClick={toggleDropDown}><LanguageOutlinedIcon className='navIcons'/></div>
                    {dropDown&&(
                        <div className="listDropdown">
                            <ul>
                                <li>Kurunegala</li>
                                <li>Colombo</li>
                                <li>Kandy</li>
                            </ul>
                        </div>
                    )}
                <Link to="/cart"><AddShoppingCartOutlinedIcon className='navIcons' /></Link>
                <div className="navCartCount">0</div>
            </div>
        </div>
    );
};
//
