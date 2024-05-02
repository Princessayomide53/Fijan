import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Consultation from '../../components/Consultation';
import Frequent from '../../components/Frequent';

const Homecare = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Consultation />
      <Frequent />
    </div>
  );
};

export default Homecare;
