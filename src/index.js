import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import store from './Redux/state';

let renderEntireTree = (state) => {
    ReactDOM.render(<App 
        state={state} 
        addPost={store.addPost.bind(store)} 
        addMessage={store.addMessage.bind(store)} 
        updateNewPostText={store.updateNewPostText.bind(store)}/>,
        document.getElementById('root'));
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

serviceWorker.unregister();