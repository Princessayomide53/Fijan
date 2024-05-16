import React, { useEffect } from 'react';
import Hero from './Hero';
import Services from './Services';
import Consultation from '../../components/Consultation';
import Frequent from '../../components/Frequent';
import Filter from '../HomeCare/Filter';
import Jobs from '../../components/Jobs';

const Mental = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  return (
    <div>
      <Hero />
      <Services />
      <Filter />
      <Jobs />
      {/* <Consultation /> */}
      {/* <Frequent /> */}
    </div>
  );
};

export default Mental;
