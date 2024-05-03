import React from 'react';
import ReusableHeader from '../ReusableHeader';
import Nursing from '../../Assets/Nursing.png';

const Hero = () => {
  return (
    <div>
      <ReusableHeader
        text='SERVICES - NURSING CARE'
        title='Nursing Care'
        imageSrc={Nursing}
      />
    </div>
  );
};

export default Hero;
