import React from 'react';
import {addMessagesActionCreator, updateNewMessagesText} from "../../Redux/messages-reducer";
import Messages from "./Messages";
import StoreContext from "../../StoreContext";

const MessagesContainer = (props) => {
    return <StoreContext.Consumer>
        { (store) => {
                let state = store.getState();

                let onAddMessage = () => {
                    if (store.getState().messages.newMessageText !== '') {
                        store.dispatch(addMessagesActionCreator());
                    }
                }

                let onMessagesChange = (text) => {
                    let action = updateNewMessagesText(text);
                    store.dispatch(action);
                }

                return <Messages addMessages={onAddMessage}
                                 updateNewMessagesText={onMessagesChange}
                                 newMessages={state.messages.newMessageText}
                                 DialogsData={state.messages.DialogsData}
                                 MessagesData={state.messages.MessagesData}/>
            }
        }
    </StoreContext.Consumer>
}


export default MessagesContainer;
