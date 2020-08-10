import React from 'react'
import f from './FormsControls.module.css'

export const FormControls = ({input, meta, child, ...props}) => {
  const hasError =  meta.touched && meta.error 
  return <div>
    { hasError && <span className={f.error}>{meta.error}</span> }
    {props.children}
  </div>
}

export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props
  return <FormControls {...props}><textarea {...input} {...restProps}/></FormControls>
}

export const Input = (props) => {
  const {input, meta, child, ...restProps} = props
  return <FormControls {...props}><input {...input} {...restProps}/></FormControls>
}