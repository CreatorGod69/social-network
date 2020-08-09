import React from 'react';
import l from './Login.module.css'
import {reduxForm, Field, reset} from 'redux-form'

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={l.form}>
            <Field className={l.login_input} name={'login'} component={'input'} placeholder='login'/>
            <Field type='password' className={l.login_input} name={'password'} component={'input'} placeholder="password"/>
            <h2 className={l.checkbox_title}><Field type={'checkbox'} className={l.checkbox} name={'checkbox'} component={'input'} /> remember me</h2>
            <div><button className={l.login_button}>Login</button></div>
        </form>
}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('login-form'))

const LoginReduxForm = reduxForm({
    form: 'login-form', 
    onSubmitSuccess: afterSubmit
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        return
    }

    return <div>
        <h1 className={l.title}>Login In</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login
