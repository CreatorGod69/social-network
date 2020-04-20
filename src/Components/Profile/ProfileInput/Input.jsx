import React from 'react';
import input from './Input.module.css';

const Input = (props) => {
    let newPostElement = React.createRef();

    let addPost = ()  => {
        if (newPostElement.current.value !== '') {
            // props.addPost("Maria", "21/11/2004");
            props.dispatch({type: 'ADD-POST', namePost: "Maria", dataPost:"21/11/2004"});
        }
        // props.updateNewPostText("");
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: ""});
    }

    let onPostChange = () => {
        // props.updateNewPostText(newPostElement.current.value);
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: newPostElement.current.value});
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