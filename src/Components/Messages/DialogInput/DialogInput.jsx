import React from 'react';
import dialog from "./DialogInput.module.css";

const DialogInput = (props) => {
        let newMessageElement = React.createRef();

        let addMessage = () => {
            debugger;
            let text = newMessageElement.current.value;
            if (text !== '') {
                // props.addMessage(text);
                props.dispatch({type: 'ADD-MESSAGE', message: text});
            }
            props.dispatch({type: 'UPDATE-NEW-MESSAGES-TEXT', newText: ""});
        }

        let onMessagesChange = () => {
            props.dispatch({type: 'UPDATE-NEW-MESSAGES-TEXT', newText: newMessageElement.current.value});
        }

        return <div className={dialog.form} action="">
            <div>
                <textarea
                    className={dialog.textarea}
                    ref={newMessageElement} rows="3"
                    placeholder="Write a message"
                    onChange={onMessagesChange}
                    required></textarea>
            </div>
            <button className={dialog.btn} onClick={addMessage} href="">POST</button>
        </div>
}


export default DialogInput;
