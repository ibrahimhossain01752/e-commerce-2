import React from 'react';
import { BsFillBagDashFill } from "react-icons/bs";

import './Nav.css';
import logo from './../images/logo1.jpg';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div className="nav">
            <div className="container">
                <div className="nav-container">
                    <div className="nav-left">
                       <Link to="/"> <img className="logo" src={logo}/></Link>
                    </div>
                    <div className="nav-right">
                       <Link to="/cart">
                            <div className="basket">
                                <BsFillBagDashFill className="cart-icon"/>
                                <span>4</span>
                            </div>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;