import React from 'react';
import messages from './Messages.module.css';
import Dialog from "./Dialog/Dialog";
import DialogName from "./DialogName/DialogName";

const Messages = (props) => {
    let DialogElements = props.DialogsData
        .map ( dialog => <DialogName name={dialog.name} id={dialog.id}/> );

    return <div className={messages.messages}>
        <div className={messages.dialog_name}>
            { DialogElements }
        </div>
        <div className={messages.dialog}>
            <Dialog/>
        </div>
    </div>
}

export default Messages;