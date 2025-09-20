// import { useState } from 'react'
import React from 'react';
import { Routes, Route} from 'react-router-dom';
// import { useState} from 'react';
import HomePage from './Page/HomePage';
import "./App.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dashboard from './Page/Dashboard';
import Usertrack from './Usertrack';




function App() {
  Usertrack();
  return (
    <div className='app-wrapper'>
    <div className="main-content">
    <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </div>
    </div>
   
  );
}

export default App;
