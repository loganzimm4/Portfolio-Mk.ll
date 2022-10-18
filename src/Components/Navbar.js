import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import Logo from './Logo.webp'
import Container from '@mui/material/Container';
import SvgIcon from '@mui/material/SvgIcon';

export default function Navbar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background: '#212121'}}>
        <Toolbar>
        <Container 
            component='img'
            sx={{
              height: '80px',
              width: '120px',
              marginLeft: '0',
              padding: '5px'
            }}
            src={Logo} />
          <Button href='/Contact' variant='contained' color='secondary' sx={{bgcolor: '#ab47bc'}}> Contact </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}