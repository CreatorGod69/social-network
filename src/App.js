import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Input from './Components/Profile/Input/Input';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />

      <div className='app-inner'>
        <Navbar />
        <Profile />
      </div>

    </div>
  );
}

export default App;
