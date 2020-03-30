import React from 'react';
import navbar from './Navbar.module.css'

const Navbar = () => {
    return <nav className={navbar.nav}>
    <a>Profile</a>
    <a>Messages</a>
    <a>News</a>
    <a>Music</a>
    <a>Settings</a>
  </nav>
}

export default Navbar;