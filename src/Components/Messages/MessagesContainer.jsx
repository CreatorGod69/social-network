import React from 'react';
import {addMessagesActionCreator, updateNewMessagesText} from "../../Redux/messages-reducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {
        // let state = props.store.getState();

        let onAddMessage = () => {
            if (props.store.getState().messages.newMessageText !== '') {
                props.store.dispatch(addMessagesActionCreator());
            }
        }

        let onMessagesChange = (text) => {
            let action = updateNewMessagesText(text);
            props.store.dispatch(action);
        }
debugger
        return <Messages addMessages={onAddMessage}
                            updateNewMessagesText={onMessagesChange}
                            newMessages={props.store.getState().messages.newMessageText}
                         DialogsData={props.store.getState().messages.DialogsData}
                         MessagesData={props.store.getState().messages.MessagesData}/>
}


export default MessagesContainer;
