// Footer.jsx
import React from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
  return (
   <footer>
    <Box sx={{ backgroundColor: '#f5f0e4', color: 'black', padding: 2 }} className="footer">
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body1">
            &copy; {new Date().getFullYear()} Pansion za Mace
          </Typography>
          <Box>
            <IconButton
              component="a"
              href="https://www.instagram.com/pansion.za.mace/"
              target="_blank"
              sx={{ color: '#E65728' }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.facebook.com"
              target="_blank"
              sx={{ color: '#E65728' }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com"
              target="_blank"
              sx={{ color: '#E65728' }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
    </footer> 
  );
};

export default Footer;
