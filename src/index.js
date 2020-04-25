import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import store from './Redux/redux-store';

let renderEntireTree = (state) => {
    ReactDOM.render(<App
        store = {store}
        state={state} 
        dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root'));
}

renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});

window.store = store;

serviceWorker.unregister();