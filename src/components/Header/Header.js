import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            {/* <h1>This is Header</h1> */}
        </div>
    );
};

export default Header;