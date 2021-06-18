import React from 'react'
import header from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
    return <header className={header.header}>
        <a href="http://localhost:3000/profile" className={header.logo}>{props.isAuth && props.login}</a>

          {/* <NavLink to={ !props.isAuth && './login' }>
            <div>
              <button className={header.logout} onClick={ props.isAuth && props.logout }>{
                props.isAuth ? 'Log Out' : 'Log In'
              }</button>
            </div>
          </NavLink> */}

          {!props.isAuth
          ? <NavLink to={'./login'}><button className={header.logout}>Log In</button></NavLink> 
          : <button className={header.logout} onClick={props.logout}>Log Out</button>}
  </header>
}

export default Header