import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/home'

const App = () => {
  return (
  <>
    <Navbar /> 
    <Home />
    <div> Application </div>
  </>
  )
}

export default App
