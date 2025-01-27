import React from "react";
import Navbar from './components/Navbar'
import Broucher from './components/Brochure'
import About from './pages/About'
// import Design from './components/Design'
// import Particle from './components/particle'
import Upcoming from './components/Upcoming'
import Footer from './components/Footer'
import Sponsors from './components/sponsors'
import './App.css'
// // import Gallery from './components/Gallery'
import Home from './pages/Home'
import GallPage from './pages/GallPage'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        {/* <div className="App" id='Particles'><Particle/></div> */}
       <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/gall" element={<GallPage />} />

        </Routes>
      {/* <Particle/> */}
      
      <Home className="ho" id="canvas" />
      <div className="all">
      <div className="up  robotic-text ">
        <h1>Upcoming Events</h1>
      </div>
      <div className="upcome">
      
      <Upcoming/>
      </div>
      
      <div className="up  robotic-text">
        <h1>Past Events</h1>
      </div>
      <div className="upcome">
      <Broucher/>
      </div>

      <div className="up  robotic-text" >
        <h1>Our Sponsors</h1>
      </div>
      <div className="upcome">
      <Sponsors/>
      </div>
      <Footer/>
      </div>
      </BrowserRouter>

    </>
  );
}


export default App
