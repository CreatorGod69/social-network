import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import {updateNewPostText, addMessage, addPost, subscribe} from './Redux/state';
import state from './Redux/state';

let renderEntireTree = (state) => {
    ReactDOM.render(<App 
        state={state} 
        addPost={addPost} 
        addMessage={addMessage} 
        updateNewPostText={updateNewPostText}/>,
        document.getElementById('root'));
}

renderEntireTree(state);

subscribe(renderEntireTree);

serviceWorker.unregister();