import React from 'react';
import input from './Input.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";

const Input = (props) => {
    let newPostElement = React.createRef();

    let addPost = ()  => {
        if (newPostElement.current.value !== '') {
            let action = addPostActionCreator("Maria", "10/11/2020");
            props.dispatch(action);
        }
        props.dispatch(updateNewPostTextActionCreator(""));
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return <div className={input.post}>
            <div className={input.input}>
                <div className={input.form} action="">
                    <div>
                        <textarea rows="3" 
                        ref={newPostElement} 
                        placeholder="Write a message" 
                        value={props.newPostText} 
                        onChange={onPostChange}  
                        required></textarea>
                    </div>
                    <button className={input.btn} onClick={addPost} href="">POST</button>
                </div>
            </div>
        </div>
}

export default Input;