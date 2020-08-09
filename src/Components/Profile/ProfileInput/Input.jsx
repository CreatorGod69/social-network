import React from 'react'
import input from './Input.module.css'
import Post from '../Post/Post'
import { reduxForm, Field, reset } from 'redux-form'

const InputForm = (props) => {
    let PostsElements = props.post.map (post => <Post
        key={post.id}
        img = {post.img}
        name = {post.name}
        message = {post.message}
        data = {post.data}/>
    )

    return <div className={input.post}>
                    <form onSubmit={props.handleSubmit}>
                        <Field rows='3'
                        placeholder='Write a message'
                        required
                        component={'textarea'}
                        name={'profile'}></Field>
                        <div>
                            <button className={input.btn}>POST</button>
                        </div>
                    </form>
                    <div>
                        { PostsElements }
                    </div>
                </div>

}

const afterSubmit = (result, dispatch) => {
    dispatch(reset('profile-form'))
}

const InputReduxForm = reduxForm({
    form: 'profile-form', 
    onSubmitSuccess: afterSubmit
})(InputForm)

const Input = (props) => {
    const onSubmit = (value) => {
        props.addPost(value.post)
    }

    return <InputReduxForm post={props.post} updateNewPostText={props.updateNewPostText} onSubmit={onSubmit}/>
}

export default Input