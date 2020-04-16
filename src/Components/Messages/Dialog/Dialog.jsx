import React from 'react';
import dialog from './Dialog.module.css';
import DialogInput from "../DialogInput/DialogInput";

const Dialog = (props) => {
    let MessagesElements = props.state.map( message => <div><p className={`${dialog.other} + ${dialog.text}`}>{message.message}</p></div>);

    return <div className={dialog.dialog}>
        <div className={dialog.inner}>
            <div className={dialog.content}>
                { MessagesElements }
            </div>
            <DialogInput addMessage={props.addMessage}/>
        </div>
    </div>
}

export default Dialog;