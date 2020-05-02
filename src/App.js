import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Messages from './Components/Messages/MessagesContainer';
import Profile from './Components/Profile/ProfileContainer';
import {BrowserRouter, Route} from "react-router-dom"
import Friends from "./Components/Friends/FriendsContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>

                <div className="app-inner">
                    <Navbar/>
                    <div className="app-content">
                        <Route path="/messages"
                               render={() => <Messages />}/>
                        <Route path="/profile/:userId?"
                               render={() => <Profile />}/>
                        <Route path="/users"
                               render={() => <Friends />}/>
                    </div>
                </div>

            </div>
        </BrowserRouter>)
}


export default App;
