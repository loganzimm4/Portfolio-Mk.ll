import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/home'
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
      Typography:{
        fontFamily: ['Nunito']
      }
    }
  }
  )
  return (
  <>
    <ThemeProvider theme={theme} >
      <Navbar /> 
      <Home />
    </ThemeProvider>
  </>
  )
}

export default App
