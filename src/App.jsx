import { useState } from 'react'

import Navbar from './components/Navbar'
import Broucher from './components/Broucher'
import './App.css'
import Gallery from './components/Gallery'
import Home from './pages/Home'

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
