import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import Input from "./Input";
import StoreContext from "../../../StoreContext";

const InputContainer = (props) => {
    return (
        <StoreContext.Consumer>
            { (store) => {
                    let state = store.getState();

                    let addPost = (text) => {
                        if (text !== '') {
                            let action = addPostActionCreator("Maria", "10/11/2020");
                            store.dispatch(action);
                        }
                    }

                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    }

                    return <Input
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        newPostText={state.profile.newPostText}
                        post={state.profile.PostsData}/>
                }
            }
        </StoreContext.Consumer>)
}

export default InputContainer;