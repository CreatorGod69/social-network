import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import store from './Redux/store';

let renderEntireTree = (state) => {
    ReactDOM.render(<App 
        state={state} 
        dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root'));
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

serviceWorker.unregister();