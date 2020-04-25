import React from 'react';
import dialog from './Dialog.module.css';
import DialogInput from "../DialogInput/DialogInputContainer";

const Dialog = (props) => {
    let state = props.store.getState();
    let MessagesElements = state.messages.MessagesData.map( message => <div><p className={`${dialog.me} + ${dialog.text}` }>{message.message}</p></div>);

    return <div className={dialog.dialog}>
        <div className={dialog.inner}>
            <div className={dialog.content}>
                { MessagesElements }
            </div>
            <DialogInput store={props.store}/>
        </div>
    </div>
}

export default Dialog;