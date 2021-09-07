import './Nav.css';
import React from 'react';
import NavLink from './NavLink';


const Nav = props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavLink link="/" text = "Home" />
            <NavLink link="/users" text = "Usuários"/>
        </nav>
    </aside>


export default Nav  