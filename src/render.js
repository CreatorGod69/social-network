import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './Redux/state';
import {addMessage} from './Redux/state';
import {updateNewPostText} from './Redux/state';

export let renderEntireTree = (state) => {
    ReactDOM.render(<App 
        state={state} 
        addPost={addPost} 
        addMessage={addMessage} 
        updateNewPostText={updateNewPostText}/>,
         document.getElementById('root'));
}