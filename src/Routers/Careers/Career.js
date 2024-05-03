import React, { useEffect } from 'react';
import Hero from './Hero';
import Nurses from './Nurses';
import Settle from '../../components/Settle';
import Frequent from '../../components/Frequent';
import HealthCare from './HealthCare';

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  return (
    <div>
      <Hero />
      <Nurses />
      <HealthCare />
      <Settle />
      <Frequent />
    </div>
  );
};

export default Career;
