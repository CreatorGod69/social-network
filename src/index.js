import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import store from './Redux/state';

let renderEntireTree = (store) => {
    ReactDOM.render(<App 
        state={store._state} 
        addPost={store.addPost} 
        addMessage={store.addMessage} 
        updateNewPostText={store.updateNewPostText}/>,
        document.getElementById('root'));
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

serviceWorker.unregister();