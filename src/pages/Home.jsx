import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Sectors from '../components/Sectors';
import ClientsSection from '../components/ClientsSection';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Sectors limit={3} />
      <ClientsSection />
    </>
  );
};

export default Home;
