import React from 'react';
import DialogName from "./DialogName/DialogName";
import messages from './Messages.module.css';
import Dialog from "./Dialog/Dialog";

const Messages = (props) => {
    let MessagesElements = props.MessagesData
        .map(messages => <Dialog messages={messages.message} key={messages.id} id={messages.id}/>);

    let DialogElements = props.DialogsData
        .map(dialog => <DialogName name={dialog.name} key={dialog.id} id={dialog.id}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessages(newMessageElement.current.value);
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
