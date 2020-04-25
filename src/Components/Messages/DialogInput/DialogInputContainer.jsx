import React from 'react';
import {addMessagesActionCreator, updateNewMessagesText} from "../../../Redux/messages-reducer";
import DialogInput from "./DialogInput";

const DialogInputContainer = (props) => {
        let state = props.store.getState();

        let onAddMessage = () => {
            if (state.messages.newMessageText !== '') {
                props.store.dispatch(addMessagesActionCreator());
            }
        }

        let onMessagesChange = (text) => {
            let action = updateNewMessagesText(text);
            props.store.dispatch(action);
        }

        return <DialogInput addMessages={onAddMessage}
                            updateNewMessagesText={onMessagesChange}
                            newMessages={state.messages.newMessageText}
        />
}


export default DialogInputContainer;
