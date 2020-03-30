import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Posts from './Components/Profile/Posts/Posts';

const App = () => {
  return (
    <div className="header-wrapper">
      <Header />

      <div className='app-wrapper'>
        <Navbar />
        <Profile />
      </div>

    </div>
  );
}

export default App;
