import React from 'react';
import './Header.css';
import header from './../images/header4.jpg';

const Header = () => {
    return (
        <div className="header">
            <img className=" header1" src={header} />
        </div>
    );
};

export default Header;