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
import Link from '@mui/material/Link';
import JavascriptSharpIcon from '@mui/icons-material/JavascriptSharp';
import CssSharpIcon from '@mui/icons-material/CssSharp';
import HtmlSharpIcon from '@mui/icons-material/HtmlSharp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import reactLogo from './reactLogo.png'

const Home = () => {

  return (
    <div sx={{bgcolor: '#424242', width: '100%', height: '100%'}}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: '#424242',
            color: 'white',
            pt: 8,
            pb: 6,
          }}
        > 
        
          <Container maxWidth="sm" sx={{paddingBottom: '100px'}}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
              sx={{color:'#ab47bc'}}
            >
              Logan Zimmerman
            </Typography>
            <Box sx={{alignItems:'center', justifyContent:'center', display:'flex'}}>
                <CssSharpIcon sx={{fontSize:'100px'}}/>
                <JavascriptSharpIcon sx={{fontSize:'100px'}}/>
                <HtmlSharpIcon sx={{fontSize:'100px'}}/>
            </Box>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Full-stack Developer with experience in JS, HTML, CSS, React, Ruby on Rails, etc. 
              This site is a continuing work-in-progress as I learn and create more projects to be a small 
              representation of my capabilities. Thanks for visiting!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" color='secondary'>About Me</Button>
              <Button variant="contained" color='secondary'>Contact</Button>
            </Stack>
          </Container>
        </Box>
        
        <Box sx={{bgcolor: '#424242', width: '100%'}}>
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '100px', paddingBottom: '100px'}}>
                <Card variant='outlined' sx={{bgcolor: '#212121', color: '#fff', width: '250px', height: '300px', margin: '30px'}}>
                    <CardContent>
                        Project 1
                    </CardContent>
                </Card>
                <Card variant='outlined' sx={{bgcolor: '#212121', color: '#fff', width: '250px', height: '300px', margin: '30px'}}>
                    <CardContent>
                        Project 2
                    </CardContent>
                </Card>
                <Card variant='outlined' sx={{bgcolor: '#212121', color: '#fff', width: '250px', height: '300px', margin: '30px'}}>
                    <CardContent>
                        Project 3
                    </CardContent>
                </Card>
            </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: '#424242', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom sx={{color:'#ab47bc'}}>
          Logan Zimmerman: Software Engineer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          social links
        </Typography>
        <Box sx={{alignItems:'center', justifyContent:'center', display:'flex'}}>
                <Link href='https://www.linkedin.com/in/logan-zimmerman-developer/'> <LinkedInIcon sx={{margin: '25px', color:'#ab47bc'}} cursor='pointer'/> </Link>
                <Link href='https://github.com/loganzimm4'><GitHubIcon sx={{margin: '25px', color:'#ab47bc'}} cursor='pointer'/></Link>
                <Link><EmailIcon sx={{margin: '25px', color:'#ab47bc'}} cursor='pointer'/></Link>
            </Box>
      </Box>
      {/* End footer */}
      </div>
  )
};

export default Home