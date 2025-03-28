import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './routes/MainPage.js';
import Header from './routes/Header.js';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div>
        <Routes>
        <Route path="/" exact={true} element={<MainPage/>}></Route>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
