import React from 'react';
import header from './Header.module.css'

const Header = () => {
    return <header className={header.header}>
        <div className={header.header__inner}>
          <a href="https://active-be.ru" className={header.logo}>BeActive</a>
          <h1>Social Network</h1>
        </div>
  </header>
}

export default Header;