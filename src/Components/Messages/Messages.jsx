import React from 'react';
import messages from './Messages.module.css';
import Dialog from "./Dialog/Dialog";
import DialogName from "./DialogName/DialogName";


let DialogsData = [
    {id: 1, name: 'Maria'},
    {id: 2, name: 'Katy'},
    {id: 3, name: 'Gector'},
    {id: 4, name: 'Vasya'},
    {id: 5, name: 'Andre'},
    {id: 6, name: 'Rick'},
]

let DialogElements = DialogsData
    .map ( dialog => <DialogName name={dialog.name} id={dialog.id}/> );

const Messages = (props) => {
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
