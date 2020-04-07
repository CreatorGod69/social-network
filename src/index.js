import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let DialogsData = [
    {id: 1, name: 'Maria'},
    {id: 2, name: 'Katy'},
    {id: 3, name: 'Gector'},
    {id: 4, name: 'Vasya'},
    {id: 5, name: 'Andre'},
    {id: 6, name: 'Rick'},
  ]

let PostsData = [
    {name: "Alex", message: "Hi! How are you?"},
    {name: "Vika", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, molestias?"},
]

ReactDOM.render(<App PostsData={PostsData} DialogsData={DialogsData} />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();