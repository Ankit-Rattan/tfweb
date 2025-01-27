import React from "react";
import Navbar from './components/Navbar'
import Broucher from './components/Brochure'
import About from './pages/About'
import Upcoming from './components/Upcoming'
import Footer from './components/Footer'
import Sponsors from './components/sponsors'
import './App.css'
import Home from './pages/Home'
import GallPage from './pages/GallPage'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
       <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/gall" element={<GallPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <div className="all">
      <Footer/>
      </div>
      </BrowserRouter>

    </>
  );
}


export default App
