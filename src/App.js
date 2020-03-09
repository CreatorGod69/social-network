import React from 'react';
import './App.css';
import Header from './Componenrs/Header';
import Navbar from './Componenrs/Navbar';
import Profile from './Componenrs/Profile';

const App = () => {
  return (
    <div className='app-wrapper'>

      <Header />
      <Navbar />
      <Profile />

    </div>
  );
}

export default App;
