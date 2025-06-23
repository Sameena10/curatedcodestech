// import { useState } from 'react'
import React from 'react';
import { Routes, Route} from 'react-router-dom';
// import { useState} from 'react';
import HomePage from './Page/HomePage';
import "./App.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function App() {
  return (
    <div className='app-wrapper'>
    <div className="main-content">
    <Routes>
            <Route path="/" element={<HomePage/>} />
                   
    </Routes>
    </div>
    </div>
   
  );
}

export default App;
