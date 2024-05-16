import React, { useEffect } from 'react';
import Hero from './Hero';
import Nurses from './Nurses';
import Jobs from '../../components/Jobs';
import Frequent from '../../components/Frequent';
import HealthCare from './HealthCare';
import Filter from '../HomeCare/Filter';

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  return (
    <div>
      <Hero />
      <Nurses />
      <Filter />
      <Jobs />
    </div>
  );
};

export default Career;
