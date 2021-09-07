import './Logo.css';
import React from 'react';
import logo from '../../assets/imgs/logopersonapi.png';
const Logo = props =>

    <aside className="logo">
        <a href="/" className="logo">
            <img src={logo} alt="" />
        </a>
    </aside>


export default Logo;