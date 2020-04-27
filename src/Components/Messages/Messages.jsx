import React from 'react';
import messages from './Messages.module.css';
import DialogName from "./DialogName/DialogName";
// import DialogInput from "./MessagesContainer";

const Messages = (props) => {
    debugger
    let MessagesElements = props.MessagesData
        .map(message => <div><p className={`${messages.me} + ${messages.text}`}>{message.message}</p></div>);

    let DialogElements = props.DialogsData
        .map(dialog => <DialogName name={dialog.name} id={dialog.id}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessages();
        props.updateNewMessagesText("");
    }

    let onMessagesChange = () => {
        props.updateNewMessagesText(newMessageElement.current.value);
    }

    return <div className={messages.messages}>
        <div>{DialogElements}</div>
        <div className={messages.dialog}>
            <div className={messages.inner}>
                <div className={messages.content}>
                    {MessagesElements}

                </div>
                {/*<DialogInput store={props.store}/>*/}
                <div className={messages.form} action="">
                    <div>
                        <textarea
                            className={messages.textarea}
                            ref={newMessageElement} rows="3"
                            placeholder="Write a message"
                            onChange={onMessagesChange}
                            value={props.newMessages}
                            required></textarea>
                    </div>
                    <button className={messages.btn} onClick={addMessage} href="">POST</button>
                </div>
            </div>
        </div>
    </div>
}

export default Messages;
