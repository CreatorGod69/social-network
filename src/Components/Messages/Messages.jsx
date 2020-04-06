import React from 'react';
import messages from './Messages.module.css';
import DialogBlock from "./Dialog/DialogBlock";
import {NavLink} from "react-router-dom";
import dialog from "./DialogName/DialogName.module.css";

// let DialogsData = [
//     {id: 1, name: 'Hi'},
//     {id: 2, name: 'How are you?'},
//     {id: 3, name: 'Where are you?'},
//     {id: 4, name: '???'},
//     {id: 5, name: 'Maria?'},
// ]

let DialogsData = [
    {id: 1, name: 'Maria'},
    {id: 2, name: 'Katy'},
    {id: 3, name: 'Gector'},
    {id: 4, name: 'Vasya'},
    {id: 5, name: 'Andre'},
    {id: 6, name: 'Rick'},
]

const DialogName = (props) => {
    // let path = "messages/" + props.id;
    return <NavLink to={"/messages/id" + props.id}>
        <div className={dialog.dialog}>
            <h1>{props.name}</h1>
        </div>
    </NavLink>
}

const Messages = (props) => {
    return <div className={messages.messages}>
        <div className={messages.dialog_name}>
            <DialogName name={DialogsData[0].name} id={DialogsData[0].id}/>
            <DialogName name={DialogsData[1].name} id={DialogsData[1].id}/>
            <DialogName name={DialogsData[2].name} id={DialogsData[2].id}/>
            <DialogName name={DialogsData[3].name} id={DialogsData[3].id}/>
            <DialogName name={DialogsData[4].name} id={DialogsData[4].id}/>
            <DialogName name={DialogsData[5].name} id={DialogsData[5].id}/>
        </div>
        <div className={messages.dialog}>
            <DialogBlock/>
        </div>
    </div>
}

export default Messages;
