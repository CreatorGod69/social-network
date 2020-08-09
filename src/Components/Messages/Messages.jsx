import React from 'react'
import DialogName from './DialogName/DialogName'
import messages from './Messages.module.css'
import Dialog from './Dialog/Dialog'
import { Textarea } from './../common/FormsControls/FormsControls'
import { required, maxLenghtCreator } from './../../utils/validators'

import { reduxForm, reset, Field } from 'redux-form'

let maxLenght30 = maxLenghtCreator(30)

const DialogForm = (props) => {
    return <form className={messages.form} onSubmit={props.handleSubmit}>
            <Field
            className={messages.textarea} 
            validate={[required, maxLenght30]}
            component={Textarea}
            name={'dialog'}></Field>
        <button className={messages.btn}>POST</button>
    </form>
}

const afterSubmit = (result, dispatch) => {
    dispatch(reset('dialog-form'))
}

const DialogReduxForm = reduxForm({
    form: 'dialog-form', 
    onSubmitSuccess: afterSubmit
})(DialogForm)

const Messages = (props) => {
    let MessagesElements = props.MessagesData
        .map(messages => <Dialog messages={messages.message} key={messages.id} id={messages.id}/>);

    let DialogElements = props.DialogsData
        .map(dialog => <DialogName name={dialog.name} key={dialog.id} id={dialog.id}/>);

    const onSubmit = (value) => {
        props.addMessages(value.dialog)
        console.log(value.dialog)
    }

    return <div className={messages.messages}>
        <div>{DialogElements}</div>
        <div className={messages.dialog}>
            <div className={messages.inner}>
                <div className={messages.content}>
                    {MessagesElements}
                </div>
                <DialogReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    </div>
}



export default Messages;
