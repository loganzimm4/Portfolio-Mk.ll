import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background: '#212121'}}>
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 , color: 'white'}}>
            L
          </Typography>
          <IconButton>
            <MenuIcon sx={{color: 'white'}}/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}