import { useState } from 'react'
import React from "react";
import Navbar from './components/Navbar'
import Broucher from './components/Broucher'
import About from './pages/About'
// import Design from './components/Design'
// import Particle from './components/Particle'
import Upcoming from './components/Upcoming'
import Footer from './components/Footer'
import Sponsors from './components/sponsors'
import './App.css'
// import Gallery from './components/Gallery'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
 
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      {/* <Particle/> */}
      <Home className="ho"/>
      <div className="all">
      <div className="up">
        <h1>Upcoming Event(Sentience)</h1>
      </div>
      <div className="upcome">
      
      <Upcoming/>
      </div>
      
      <div className="up">
        <h1>Past Events</h1>
      </div>
      <div className="upcome">
      <Broucher/>
      </div>

      <div className="up">
        <h1>Our Sponsors</h1>
      </div>
      <div className="upcome">
      <Sponsors/>
      </div>
      <Footer/>
      </div>
      </BrowserRouter>

    </>
  )
}

export default App
