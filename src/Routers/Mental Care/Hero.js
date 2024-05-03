import React from 'react';
import ReusableHeader from '../ReusableHeader';
import Mental from '../../Assets/Mental.png';

const Hero = () => {
  return (
    <div>
      <ReusableHeader
        text='SERVICES - MENTAL HEALTH CARE'
        title='Mental Health Care'
        imageSrc={Mental}
      />
    </div>
  );
};

export default Hero;
