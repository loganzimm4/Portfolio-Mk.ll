import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

const Contact = () => {
  return (
    <div sx={{bgcolor: '#424242', width: '100%', height: '100%'}}>
    <CssBaseline />
    <main>
       <Box align='center' sx={{bgcolor: '#424242', color: '#ab47bc', }}>
        <Typography variant='h1'> Contact </Typography>
        <Container maxWidth='md' sx={{bgcolor: '#212121'}}> wassssup </Container>
       </Box>
    </main>
    </div>
  )
}

export default Contact