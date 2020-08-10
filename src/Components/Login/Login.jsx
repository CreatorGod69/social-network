import React from 'react'
import l from './Login.module.css'
import { reduxForm, Field, reset } from 'redux-form'
import { Input } from './../common/FormsControls/FormsControls'
import { required } from './../../utils/validators'

import { connect } from 'react-redux'

import { login } from './../../redux/auth-reducer'

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={l.form}>
            <Field 
                className={l.login_input} 
                name={'login'} 
                validate={required} 
                component={Input} 
                placeholder='login'
            />

            <Field 
                type='password' 
                className={l.login_input} 
                name={'password'} 
                component={Input}
                validate={required} 
                placeholder='password'
            />

            <h2 className={l.checkbox_title}>
                <Field type={'checkbox'} className={l.checkbox} name={'checkbox'} component={'input'} /> 
                remember me
            </h2>

            <div><button className={l.login_button}>Login</button></div>
        </form>
}

const afterSubmit = (result, dispatch) => dispatch(reset('login-form'))

const LoginReduxForm = reduxForm({
    form: 'login-form', 
    onSubmitSuccess: afterSubmit
})(LoginForm)

const Login = (props) => {
    const onSubmit = (value) => {
        props.login(value.login, value.password, value.checkbox)
    }

    return <div>
        <h1 className={l.title}>Login In</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default connect(null, {login})(Login)
