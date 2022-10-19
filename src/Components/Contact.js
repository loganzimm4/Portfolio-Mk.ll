import { React, useState } from 'react'
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
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [eMail, setEMail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_loganzimm', 'template_ui9pe5r', e.target, '0oPaSVFPSatfT--MW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
    <div sx={{bgcolor: '#212121', width: '100%', height: '100%'}}>
    <CssBaseline />
    <main>
       <Box align='center' sx={{bgcolor: '#424242', color: '#ab47bc', height: '700px'}}>
        
        <Typography variant='h1'> Contact </Typography>
        <Container maxWidth='md' sx={{bgcolor: '#212121', border: '2px solid', borderRadius: '25px', padding: '75px', input: {color: 'white'}}}>
          <form type='submit' onSubmit={e => handleSubmit(e)}>
        <TextField 
          name="First-Name"
          label="First Name" 
          variant="outlined" 
          color="secondary" 
          sx={{width: '48%', marginTop: '25px', marginBottom:'25px', input: {color: 'white'}}}
          onChange={e => setFirstName(e.target.value)}
          />
        <TextField 
        name="Last-Name" 
        label="Last Name" 
        variant="outlined" 
        color="secondary" 
        sx={{width: '48%', marginTop: '25px', marginBottom:'25px', input: {color: 'white'}}}
        onChange={e => setLastName(e.target.value)}
        />
        <TextField 
        fullWidth 
        name="E-Mail-Address" 
        label="E-Mail Address" 
        variant="outlined" 
        color="secondary" 
        sx={{marginTop: '25px', marginBottom:'25px', input: {color: 'white'}}}
        onChange={e => setEMail(e.target.value)}
        />
        <TextField 
        fullWidth 
        multiline 
        rows={4} 
        name="Message" 
        label="Message" 
        variant="outlined" 
        color="secondary" 
        inputProps={{ style: { color: "white" } }} 
        sx={{marginTop: '25px', marginBottom:'25px'}}
        onChange={e => setMessage(e.target.value)}
        />
        <Button type='submit' variant='contained' color='secondary' sx={{bgcolor: '#ab47bc'}}> Send! </Button>
        </form>
        </Container>
       </Box>
    </main>
    <Box sx={{ bgcolor: '#212121', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom sx={{color:'#ab47bc'}}>
          Logan Zimmerman: Software Engineer
        </Typography>
        <Box sx={{alignItems:'center', justifyContent:'center', display:'flex'}}>
            <Link href='https://www.linkedin.com/in/logan-zimmerman-developer/'> <LinkedInIcon sx={{margin: '25px', color:'#ab47bc'}} cursor='pointer'/> </Link>
            <Link href='https://github.com/loganzimm4'><GitHubIcon sx={{margin: '25px', color:'#ab47bc'}} cursor='pointer'/></Link>
            <Link href='/Contact'><EmailIcon sx={{margin: '25px', color:'#ab47bc'}} cursor='pointer'/></Link>    
        </Box>
      </Box>
    </div>
  )
}

export default Contact