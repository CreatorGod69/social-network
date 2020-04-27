import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import store from './Redux/redux-store';
import StoreContext from "./StoreContext";
import {BrowserRouter} from "react-router-dom";

let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        </BrowserRouter>, document.getElementById('root'));
}

renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});

window.store = store;

serviceWorker.unregister();