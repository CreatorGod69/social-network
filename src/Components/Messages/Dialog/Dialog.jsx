import React from 'react';
import dialog from './Dialog.module.css';
import DialogInput from "../DialogInput/DialogInput";

const Dialog = (props) => {
    // debugger;
    let MessagesElements = props.MessagesData.map( message => <div><p className={`${dialog.me} + ${dialog.text}` }>{message.message}</p></div>);

    return <div className={dialog.dialog}>
        <div className={dialog.inner}>
            <div className={dialog.content}>
                { MessagesElements }
            </div>
            <DialogInput newMessageText={props.newMessageText} dispatch={props.dispatch}/>
        </div>
    </div>
}

export default Dialog;