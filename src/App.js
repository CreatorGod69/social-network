import React from 'react';
import './App.css';
import Header from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Messages from './components/Messages/MessagesContainer';
import Profile from './components/Profile/ProfileContainer';
import {BrowserRouter, Route} from "react-router-dom"
import Friends from "./components/Friends/FriendsContainer";
import Login from "./components/Login/Login";


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
                        <Route path="/login"
                               render={() => <Login />}/>
                    </div>
                </div>

            </div>
        </BrowserRouter>)
}


export default App;
