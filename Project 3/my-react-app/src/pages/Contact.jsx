import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Snackbar, Box } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Footer from './Footer';
import './Contact.css';
import { styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from "@mui/material/styles";

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


function Contact() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    // Check if email contains '@'
    if (!value.includes('@')) {
      setEmailError('Email must include "@"');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenSnackbar(true);

  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ marginTop: '20px' }}>
      <ThemeProvider theme={myTheme}>
        <CustomTypography variant="h4" sx={{ color: 'black', marginBottom: 2 }}>
          Have any questions?
        </CustomTypography>
        </ThemeProvider>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={email}
            onChange={handleEmailChange}
            error={!!emailError}
            helperText={emailError}
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            required
          />
          <Button variant="contained" fullWidth type="submit"
          sx={{
            color: 'white'
            }
          }>
            Submit
          </Button>
        </form>
      </Container>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Form submitted successfully!
        </MuiAlert>
      </Snackbar>

      <Box sx={{ bgcolor: 'white', height: '20vh' }}>

      </Box>

    </>
  );
}

export default Contact;
