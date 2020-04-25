import React from 'react';
import dialog from "./DialogInput.module.css";

const DialogInput = (props) => {
        let newMessageElement = React.createRef();

        let addMessage = () => {
            props.addMessages();
            props.updateNewMessagesText("");
        }

        let onMessagesChange = () => {
            props.updateNewMessagesText(newMessageElement.current.value);
        }

        return <div className={dialog.form} action="">
            <div>
                <textarea
                    className={dialog.textarea}
                    ref={newMessageElement} rows="3"
                    placeholder="Write a message"
                    onChange={onMessagesChange}
                    value={props.newMessages}
                    required></textarea>
            </div>
            <button className={dialog.btn} onClick={addMessage} href="">POST</button>
        </div>
}


export default DialogInput;
