import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Gallery from './pages/Gallery';
import Footer from './pages/Footer';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { orange } from '@mui/material/colors';

const myTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={myTheme}>
    <div className='content'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer/>
    </div>
    </ThemeProvider>
  );
}

export default App;
