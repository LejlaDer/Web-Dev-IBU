import React from 'react';
import { Container, Typography, Grid, CardMedia, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HouseIcon from '@mui/icons-material/House';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Height, Margin } from '@mui/icons-material';
import catBg from '../images/catBackground.png'
import catBg2 from '../images/catBackground2.png'
import catBg3 from '../images/catBackground3.png'




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

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <ThemeProvider theme={myTheme}>
      <CustomTypography variant="h4" sx={{ color: 'black', marginBottom: 2, marginTop: '30px' }}>
        Services & Pricing 
      </CustomTypography>
    </ThemeProvider> 

    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" centered 
    sx={{
      marginTop: '20px',
    }}>
      <Tab icon={<HouseIcon />} label="Long term sitting" />
      <Tab icon={<Brightness4Icon />} label="1 day visit or check up" />
      <Tab icon={<FavoriteIcon/>} label="Medication administration" />
    </Tabs>

    {value === 0 && (
      <Container maxWidth="lg" sx={{ marginTop: '10px' }}>
        <CardMedia component="img" height="20%" image={catBg} alt="cat"/>
        <Box sx={{ bgcolor: 'white', height: '20vh' }}></Box>
      </Container>
       
    )}

    {value === 1 && (
      <Container maxWidth="lg" sx={{ marginTop: '10px' }}>
      <CardMedia component="img" height="20%" image={catBg2} alt="cat"/>
      <Box sx={{ bgcolor: 'white', height: '10vh' }}></Box>
    </Container>
    )}

    {value === 2 && (
      <Container maxWidth="lg" sx={{ marginTop: '10px' }}>
      <CardMedia component="img" height="20%" image={catBg3} alt="cat"/>
      <Box sx={{ bgcolor: 'white', height: '10vh' }}></Box>
    </Container>
    )}
    </>
  );
}
