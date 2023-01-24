import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from './Logo.webp'
import Container from '@mui/material/Container';

export default function Navbar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background: '#212121'}}>
        <Toolbar>
          <Button href='/' variant='contained' color='secondary' sx={{bgcolor: '#ab47bc'}}> Home </Button>
            <Container 
              href='/'
              component='img'
              sx={{
                height: '80px',
                width: '120px',
                padding: '5px',
              }}
            src={Logo}/>
          <Button href='/Contact' variant='contained' color='secondary' sx={{bgcolor: '#ab47bc'}}> Contact </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}