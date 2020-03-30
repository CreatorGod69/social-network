import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Posts from './Components/Posts';

const App = () => {
  return (
    <div className="header-wrapper">
      <Header />

      <div className='app-wrapper'>
        <Navbar />
        <Profile />
        <Posts/>
      </div>

    </div>
  );
}

export default App;
