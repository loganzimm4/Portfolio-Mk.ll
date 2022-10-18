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
import TextField from '@mui/material/TextField';

const Contact = () => {
  return (
    <div sx={{bgcolor: '#424242', width: '100%', height: '100%'}}>
    <CssBaseline />
    <main>
       <Box align='center' sx={{bgcolor: '#424242', color: '#ab47bc', height: '1000px'}}>
        <Typography variant='h1'> Contact </Typography>
        <Container maxWidth='md' sx={{bgcolor: '#212121', border: '2px solid', borderRadius: '25px', padding: '75px'}}>
        <TextField id="outlined-basic" label="First Name" variant="outlined" sx={{width: '50%'}}/>
        <TextField id="outlined-basic" label="Last Name" variant="outlined" sx={{width: '50%'}}/>
        <TextField fullWidth id="outlined-basic" label="E-Mail Adress" variant="outlined" />
        <TextField fullWidth id="outlined-basic" label="Message" variant="outlined" />
        </Container>
       </Box>
    </main>
    </div>
  )
}

export default Contact