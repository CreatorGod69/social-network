import React from "react";
import f from "./FormsControls.module.css";

export const FormControls = ({ input, meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div>
      {hasError && <span className={f.error}>{error}</span>}
      {children}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControls {...props}>
      <textarea {...input} {...restProps} />
    </FormControls>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControls {...props}>
      <input {...input} {...restProps} />
    </FormControls>
  );
};
