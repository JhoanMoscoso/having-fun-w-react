import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Topbar from './components/Topbar.jsx'

import Home from './pages/Home';
import E1BadgesColor from './pages/E1BadgesColor';
import E2PersonObject from './pages/E2PersonObject';

function App() {
  

  return (
    <BrowserRouter>
      <div className='p-8 mx-auto h-screen'>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/badges-color' element={<E1BadgesColor />} />
          <Route path='/person-object' element={<E2PersonObject />} />
        </Routes>      
      </div>
    </BrowserRouter>
  )
}

export default App
