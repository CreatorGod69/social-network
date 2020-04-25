import React from 'react';
import messages from './Messages.module.css';
import Dialog from "./Dialog/Dialog";
import DialogName from "./DialogName/DialogName";

const Messages = (props) => {
    let state = props.store.getState();
    let DialogElements = state.messages.DialogsData
        .map ( dialog => <DialogName name={dialog.name} id={dialog.id}/> );

    return <div className={messages.messages}>
        <div className={messages.dialog_name}>
            { DialogElements }
        </div>
        <div className={messages.dialog}>
            <Dialog store={props.store}/>
        </div>
    </div>
}

export default Messages;
