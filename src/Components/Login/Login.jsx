import React from 'react';
import l from './Login.module.css'


const Login = (props) => {
    return <div>
        <div className={l.form}>
            <input className={l.login_input} placeholder="login"/>
            <input type="password" className={l.login_input} placeholder="password"/>
        </div>
        <button className={l.login_button}>Login</button>
    </div>
}

export default Login;