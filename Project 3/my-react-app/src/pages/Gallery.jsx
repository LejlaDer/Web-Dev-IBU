import React from 'react';
import { Container, Typography, Grid, CardMedia, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import InstagramEmbed1 from './Instagram/Instagram1.jsx';
import InstagramEmbed2 from './Instagram/Instagram2.jsx';
import InstagramEmbed3 from './Instagram/Instagram3.jsx';

const myTheme = createTheme({
    typography: {
      fontFamily: 'Covered By Your Grace, cursive',
      letterSpacing: '2px',
      fontWeight: '400',
      textAlign: 'center',
    },
  });
  
  const CustomTypography = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.fontFamily,
    letterSpacing: theme.typography.letterSpacing,
    fontWeight: theme.typography.fontWeight,
    textAlign: theme.typography.textAlign,
  }));

function Gallery() {
  return (
    <>
    <Container maxWidth="lg" sx={{ marginTop: '20px' }}>
  <ThemeProvider theme={myTheme}>
    <CustomTypography variant="h4" gutterBottom>
      Insta Gallery
    </CustomTypography>
  </ThemeProvider>
  <Grid container spacing={3} justifyContent="center">
    <Grid item xs={12} sm={6} md={4}>
      <div className="App">
        <InstagramEmbed1 />
      </div>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <div className="App">
        <InstagramEmbed2 />
      </div>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <div className="App">
        <InstagramEmbed3 />
      </div>
    </Grid>
  </Grid>
</Container>


    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', padding: 4 }}>
      <ThemeProvider theme={myTheme}>
      <CustomTypography variant="h4" gutterBottom>
        Have any questions?
      </CustomTypography>
      </ThemeProvider>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'orange',
            color: 'white',
            '&:hover': {
              backgroundColor: 'orange',
              opacity: '0.8',
            },
          }}
          component={Link}
          to="/contact"
        >
          Head to Contact Page
        </Button>
      </Box>
      
    </Container>


    </>
  );
};

export default Gallery;
