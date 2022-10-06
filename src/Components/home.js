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
            
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Full-stack Developer recently graduated from The Flatiron School. 
              This site is a continuing work-in-progress as I learn and create more projects to be a small 
              representation of my capabilities. Thanks for visiting!
            </Typography>
            <Box sx={{alignItems:'center', justifyContent:'center', display:'flex'}}>
                <CssSharpIcon sx={{fontSize:'100px'}}/>
                <JavascriptSharpIcon sx={{fontSize:'100px'}}/>
                <HtmlSharpIcon sx={{fontSize:'100px'}}/>
            </Box>
            
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/* <Button variant="contained" color='secondary'>About Me</Button>
              <Button variant="contained" color='secondary'>Contact</Button> */}
            </Stack>
          </Container>
        </Box>

        <Box sx={{bgcolor: '#424242', width: '100%'}}>
          <Typography variant='h2' sx={{color: '#ab47bc', display: 'flex', justifyContent: 'center', paddingBottom: '25px', paddingTop: '25px'}}> About Me </Typography>
          <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '100px', paddingTop: '25px'}}>
              <Typography variant='h5' sx={{color: '#fff'}}> I am a Bootcamp graduate from The Flatiron School. 
                  There, I learned the core principles and basic coding practices to best create applications that are useful 
                  and easy to use. We were taught about JS, React, HTML, CSS, Ruby, Ruby on Rails, Github, SQL, and several 
                  programs to utilize these skills, like VSCode, our terminals, Postman, and obviously Google! My journey into
                  code was a long time in the making. My grandpa was fascinated with computers from their inception and always 
                  had a curiosity for them, researching and building his own. After his passing, I began learning everything 
                  I could about them. I was very into video games, and still am, and began morphing the two hobbies into one, 
                  where I began building gaming pc's for myself and my friends almost all through high school and after learning 
                  so much about computer hardware, there was only one obvious next step; computer programming. I began teaching 
                  myself around September of 2021 and started my bootcamp in April of 2022. I am very excited to continue my pursuit 
                  of coding and am currently working on several projects to add to this page. So welcome to my portfolio!
              </Typography>
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