import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import PortfolioSection from './components/sections/PortfolioSection';
import TeamSection from './components/sections/TeamSection';
import ContactSection from './components/sections/ContactSection';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <TeamSection />
        <ContactSection />
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
