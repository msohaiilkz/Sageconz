import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Sectors from '../components/Sectors';
import Clients from '../components/Clients';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Sectors limit={3} />
      <Clients />
    </>
  );
};

export default Home;
