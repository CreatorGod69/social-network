import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Messages from './Components/Messages/Messages';
import Profile from './Components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom"


const App = (props) => {
  return (
    <BrowserRouter>
        <div className="app-wrapper">
          <Header />

            <div className="app-inner">
                <Navbar />
                <div className="app-content">
                    <Route path="/messages" 
                      render={ () => <Messages 
                        store={props.store} /> }/>
                    <Route path="/profile" 
                      render={ () => <Profile
                          store = {props.store}
                      state = {props.store.getState().profile}/> }/>
                </div>
            </div>

        </div>
    </BrowserRouter>)
}



export default App;
