import React from "react";
import l from "./Login.module.css";
import { reduxForm, Field } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import fc from "./../common/FormsControls/FormsControls.module.css";
import { required } from "../../utils/validators";

import { connect } from "react-redux";

import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit} className={l.form}>
      <Field
        className={l.login_input}
        name={"login"}
        validate={required}
        component={Input}
        placeholder="login"
      />
      <Field
        type="password"
        className={l.login_input}
        name={"password"}
        component={Input}
        validate={required}
        placeholder="password"
      />
      <h2 className={l.checkbox_title}>
        <Field
          type={"checkbox"}
          className={l.checkbox}
          name={"checkbox"}
          component={"input"}
        />
        remember me
      </h2>

      {error && <span className={fc.error}>{error}</span>}

      <div>
        <button className={l.login_button}>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login-form",
})(LoginForm);

const Login = ({ isAuth, login }) => {
  const onSubmit = (value) => {
    login(value.login, value.password, value.checkbox);
  };

  if (isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1 className={l.title}>Login In</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
