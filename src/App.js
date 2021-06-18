import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Messages from './components/Messages/MessagesContainer';
import Profile from './components/Profile/ProfileContainer';
import {Redirect, Route, withRouter} from "react-router-dom"
import Friends from "./components/Friends/FriendsContainer";
import Login from "./components/Login/Login";
import { initializeApp } from './redux/app-reducer'
import { connect } from 'react-redux';
import {compose} from 'redux'
import Preloader from './components/common/Preloader/Preloader';

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
//123456
//rainbowdeity69@gmail.com
        return (
                <div className="app-wrapper">
                    <Header/>
                    <div className="app-inner">
                        <Navbar/>
                        <div className="app-content">
                        
                            <Route path="/messages"
                            component={Messages}/>

                            <Route path="/">
                                <Redirect to="/profile" />
                            </Route>

                            <Route path="/profile/:userId?"
                            component={Profile}/>

                            <Route path="/users" 
                            component={Friends}/>

                            <Route path="/login" 
                            component={Login}/>
                        </div>
                    </div>
                </div>
        )}
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
