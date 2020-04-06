import React from 'react';
import dialog from './Dialog.module.css';
import DialogInput from "../DialogInput/DialogInput";

let MessagesData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: '???' },
    { id: 4, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, natus. Quidem dolorem totam architecto eveniet unde mollitia, qui accusantium culpa?" },
]

let MessagesElements = MessagesData
    .map( message => <div><p className={`${dialog.me} + ${dialog.text}`}>{message.message}</p></div>
    );

const Dialog = () => {
    return <div className={dialog.dialog}>
        <div className={dialog.inner}>
            <div className={dialog.content}>
                { MessagesElements }
            </div>
            <DialogInput />
        </div>
    </div>
}

export default Dialog;