import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'
import Gallery from './components/Gallery'
import Home from './pages/Home'

function App() {
 
  return (
    <>
      <Navbar/>
      <Home/>
      <Gallery/>
    </>
  )
}

export default App
