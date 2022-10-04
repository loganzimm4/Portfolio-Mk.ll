import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import JavascriptSharpIcon from '@mui/icons-material/JavascriptSharp';
import CssSharpIcon from '@mui/icons-material/CssSharp';
import HtmlSharpIcon from '@mui/icons-material/HtmlSharp';

const Home = () => {
    
function Copyright() {
    <Typography variant="body2" align="center" sx={{color:'white'}}>
      {'Copyright © '}
      <Link href="https://mui.com/" >
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
};

const cards = [1, 2, 3];

  return (
    <>
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
          <Container maxWidth="sm">
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
        <Container sx={{ py: 8, bgcolor:'#424242' }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor:'#424242' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://cdn.worldvectorlogo.com/logos/react-1.svg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      Description
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color='secondary'>View</Button>
                    <Button size="small" color='secondary'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
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
          Something meaningful
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
      </>
  )
};

export default Home