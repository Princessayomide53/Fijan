import React, { useEffect } from 'react';
import Header from './Header';
import OurServices from './OurServices';
import Mission from './Mission';
import Frequent from '../../components/Frequent';
import Values from './Values';
import Settle from '../../components/Settle';

const Abouts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  return (
    <div>
      <Header />
      <OurServices />
      <Mission />
      <Values />
      <Settle />
      <Frequent />
    </div>
  );
};

export default Abouts;
