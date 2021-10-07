import React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';


function App() {

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <CssBaseline/>
      <Box>
        <AppBar>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <CameraAltIcon />
            </IconButton> 
            <Typography 
              variant="h5" 
              component="div" 
              sx={{ flexGrow: 1 }}>
                Album layout
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <main>
        <Box sx={{bgcolor: 'background.paper',pt: 15,pb: 6,}}>
          <Container maxWidth="sm">
            <Typography 
              variant="h3"
              component="div" 
              gutterBottom 
              align="center">
                Album layout
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
            </Typography>
            <Stack spacing={2} direction="row" justifyContent="center">
              <Button variant="contained">Contained</Button>
              <Button variant="outlined">Outlined</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">Heading</Typography>
                    <Typography>This is a media card. You can use this section to describe thecontent.</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default App;
