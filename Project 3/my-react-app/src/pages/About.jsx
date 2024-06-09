import React from 'react';
import { Container, Typography, Grid, CardMedia, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import image1 from '../images/img1.jpg';
import image2 from '../images/img2.jpg';
import image3 from '../images/img3.jpg';

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

function AboutPage() {
  return (
    <>
    <Container maxWidth="lg" sx={{ marginTop: '20px' }}>
    <ThemeProvider theme={myTheme}>
      <CustomTypography variant="h4" gutterBottom>
        About Us
      </CustomTypography>
      </ThemeProvider>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <CardMedia component="img" height="300" image={image1} alt="Image 1" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardMedia component="img" height="300" image={image2} alt="Image 2" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardMedia component="img" height="300" image={image3} alt="Image 3" />
        </Grid>
      </Grid>
      <Typography variant="body1" sx={{ textAlign: 'center', marginTop: '20px', fontSize: '1.2rem' }}>
      Nestled in the vibrant streets of Sarajevo, you'll find "Pansion za Mace" – a cozy retreat just for our furry pals. Started in 2021 by a passionate cat lover and her team, this place is all about pampering your kitties, especially after the chaos of the pandemic. Run by a bunch of cat-crazy folks, Pansion za Mace is where every whiskered friend gets treated like a VIP. Whether they're into snuggles, playtime, or just lounging around, we've got it all covered. But it's not just about the cats – it's about the community. Here, cat enthusiasts gather, swapping stories and sharing tips over a cup of coffee. It's a hub of friendship and furry fun, where everyone's welcome. So, if you're in Sarajevo and need a cozy spot for your kitty to hang out, swing by Pansion za Mace. We're here to make sure your feline friend feels right at home – because every cat deserves to be treated like royalty!
      </Typography>
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
            color: 'white'
            }
          }
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

export default AboutPage;
