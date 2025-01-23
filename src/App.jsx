import { useState } from 'react'

import Navbar from './components/Navbar'
import Broucher from './components/Broucher'
import './App.css'
import Gallery from './components/Gallery'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
        {/* <Gallery /> */}
      </BrowserRouter>
    </>
  );
}


export default App
