import React from 'react';
import navbar from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={navbar.nav}>
    <NavLink to="/profile" activeClassName={navbar.active}>Profile</NavLink>
    <NavLink to="/messages" activeClassName={navbar.active}>Messages</NavLink>
    <NavLink to="/users" activeClassName={navbar.active}>Users</NavLink>
    <NavLink to="/news" activeClassName={navbar.active}>News</NavLink>
    <NavLink to="/settings" activeClassName={navbar.active}>Settings</NavLink>
  </nav>
}

export default Navbar;