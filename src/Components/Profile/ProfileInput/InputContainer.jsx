import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import Input from "./Input";

const InputContainer = (props) => {
    let state = props.store.getState();

    let addPost = (text)  => {
        if (text !== '') {
            let action = addPostActionCreator("Maria", "10/11/2020");
            props.store.dispatch(action);
        }
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (<Input
        updateNewPostText={onPostChange}
        addPost={addPost}
        newPostText={state.profile.newPostText}/>)
}

export default InputContainer;