import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/home'
import Contact from './Components/Contact'
import {Route, Routes} from 'react-router-dom'
import { createTheme, ThemeProvider} from '@mui/material'

const App = () => {
  const theme = createTheme({
    pallete:{
      primary:{
        main: '#ab47bc'
      },
      secondary:{
        main: '#ea80fc'
      },
    },
    typography:{
        fontFamily: [
          'Rubik',
          'sans-serif'
        ].join(',')
    }
  });

  return (
  <>
    <ThemeProvider theme={theme} > 
      <Navbar />
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Contact' element={<Contact />}/>
       </Routes>
    </ThemeProvider>
  </>
  )
}

export default App
