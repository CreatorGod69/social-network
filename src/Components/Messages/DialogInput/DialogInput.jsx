import React from 'react';
import dialog from "./DialogInput.module.css";
import {addMessagesActionCreator, updateNewMessagesText} from "../../../Redux/state";

const DialogInput = (props) => {
        let newMessageElement = React.createRef();

        let addMessage = () => {
            let text = newMessageElement.current.value;
            if (text !== '') {
                props.dispatch(addMessagesActionCreator());
            }
            props.dispatch(updateNewMessagesText(text));
        }

        let onMessagesChange = () => {
            let action = updateNewMessagesText(newMessageElement.current.value);
            props.dispatch(action);
        }

        return <div className={dialog.form} action="">
            <div>
                <textarea
                    className={dialog.textarea}
                    ref={newMessageElement} rows="3"
                    placeholder="Write a message"
                    onChange={onMessagesChange}
                    value={props.newMessageText}
                    required></textarea>
            </div>
            <button className={dialog.btn} onClick={addMessage} href="">POST</button>
        </div>
}


export default DialogInput;
