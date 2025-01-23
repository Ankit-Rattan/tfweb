import { useState } from 'react'

import Navbar from './components/Navbar'
import Broucher from './components/Broucher'
import './App.css'
import Gallery from './components/Gallery'
import Home from './pages/Home'
import About from './pages/About'
function App() {
 
  return (
    <>
      <Navbar/>
      <Home/>
      <Broucher/>
      {/* <Gallery/> */}
    </>
  )
}

export default App
