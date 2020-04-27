import React from 'react';
import messages from "./Dialog.module.css";

const Dialog = (props) => {
    return <div><p className={`${messages.me} + ${messages.text}`}>{props.messages}</p></div>
}

export default Dialog;