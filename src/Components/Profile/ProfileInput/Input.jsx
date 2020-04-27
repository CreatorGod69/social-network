import React from 'react';
import input from './Input.module.css';
import Post from "../Post/Post";

const Input = (props) => {
    let PostsElements = props.post.map (post => <Post
        key={post.id}
        img = {post.img}
        name = {post.name}
        message = {post.message}
        data = {post.data}/>
    );
    let newPostElement = React.createRef();

    let addPost = ()  => {
        props.addPost(newPostElement.current.value);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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
        <div>
        { PostsElements }
        </div>
    </div>
}

export default Input;