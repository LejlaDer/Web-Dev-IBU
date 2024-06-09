import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Typography, Avatar, Container, Button } from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import PetsIcon from '@mui/icons-material/Pets';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import avatarImg from '../images/avatar.jpg';
import { orange } from '@mui/material/colors';
import './Home.css';

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

function Home() {
  return (
    <>
      <div className="heroImage">
        <div className="heroText">
          <h1>We provide the highest quality cat-sitting</h1>
          <ThemeProvider theme={myTheme}>
          <CustomTypography>
          <p>Enjoy your time away, stress-free</p>
          </CustomTypography>
          </ThemeProvider>
          <Button
            variant="contained"
            size="medium"
            href="contact"
            sx={{ color: 'white' }}
          >
            Book now
          </Button>
        </div>
      </div>

      <Box sx={{ flexGrow: 1, mt: 4, mx: 'auto', maxWidth: '1200px' }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                border: '2px solid #ccc',
                borderRadius: '5px',
                padding: 3,
                textAlign: 'center',
                boxShadow: '0px 0px 12px -2px rgba(0,0,0,0.76)',
              }}
            >
              <PetsIcon sx={{ color: orange[500] }} fontSize="large" />
              <ThemeProvider theme={myTheme}>
              <CustomTypography variant="h6" component="div" gutterBottom>
                EXPERIENCED SITTERS
              </CustomTypography>
              </ThemeProvider>
              <Typography variant="body1">
                Our experienced team ensures that your feline friends receive personalized attention and love. We prioritize your cat's well-being and happiness. Each of our sitters has undergone rigorous training and background checks to ensure they meet our high standards.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                border: '2px solid #ccc',
                borderRadius: '5px',
                padding: 3,
                textAlign: 'center',
                boxShadow: '0px 0px 12px -2px rgba(0,0,0,0.76)',
              }}
            >
              <FavoriteIcon sx={{ color: orange[500] }} fontSize="large" />
              <ThemeProvider theme={myTheme}>
              <CustomTypography variant="h6" component="div" gutterBottom>
                PERSONALIZED CARE
              </CustomTypography>
              </ThemeProvider>
              <Typography variant="body1">
                We know that no two cats are the same, which is why we offer personalized care plans tailored to each feline's specific needs and preferences. Before our first visit, we take the time to learn about your cat's routine, dietary requirements, and any special instructions.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                border: '2px solid #ccc',
                borderRadius: '5px',
                padding: 3,
                textAlign: 'center',
                boxShadow: '0px 0px 12px -2px rgba(0,0,0,0.76)',
              }}
            >
              <HomeIcon sx={{ color: orange[500] }} fontSize="large" />
              <ThemeProvider theme={myTheme}>
              <CustomTypography variant="h6" component="div" gutterBottom>
                COMMUNITY TRUSTED
              </CustomTypography>
              </ThemeProvider>
              <Typography variant="body1">
                Our reputation in the community speaks for itself. Being the only cat-sitter business in Sarajevo, we have built strong, trusting relationships with our clients, who consistently rely on us for their cat-sitting needs, reflecting the satisfaction they have in our services.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <br></br>

      <Container maxWidth="sm" sx={{marginTop: '10px'}}>
        <Box
          sx={{
            height: '30vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 3,
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar
                  src={avatarImg}
                  alt="Avatar"
                  sx={{ width: 150, height: 150, margin: '0 auto' }}
                />
                <Typography variant="body1" sx={{ marginTop: 1 }}>
                  Jane Doe, Owner
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h6" sx={{ fontSize: '1.2rem', textAlign: 'center' }}>
                "I ensure your feline companions receive personalized care and attention, providing peace of mind while you're away."
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', padding: 4 }}>
          <ThemeProvider theme={myTheme}>
            <CustomTypography variant="h4" sx={{ color: 'black', marginBottom: 2 }}>
              Have any questions?
            </CustomTypography>
          </ThemeProvider>
          <Button
            variant="contained"
            component={Link}
            to="/contact"
            sx={{ color: 'white' }}
          >
            Head to Contact Page
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Home;
