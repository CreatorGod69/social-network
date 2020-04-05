import React from 'react';
import messages from './Messages.module.css';
import DialogBlock from "./Dialog/DialogBlock";
import {NavLink} from "react-router-dom";
import dialog from "./DialogName/DialogName.module.css";

const DialogName = (props) => {
    // let path = "messages/" + props.id;
    return <NavLink to={"/messages" + "/id" + props.id}>
        <div className={dialog.dialog}>
            <h1>{props.name}</h1>
        </div>
    </NavLink>
}

const Messages = (props) => {
    return <div className={messages.messages}>
        <div className={messages.dialog_name}>
            <DialogName name="Rick Mortyn" id="1"/>
            <DialogName name="John Doe" id="2"/>
            <DialogName name="Maria Berestovaya" id="3"/>
            <DialogName name="Katy Berestovaya" id="4"/>
            <DialogName name="Gector Bredbery" id="5"/>
            <DialogName name="Andre" id="6"/>
        </div>
        <div className={messages.dialog}>
            <DialogBlock/>
        </div>
    </div>
}

export default Messages;