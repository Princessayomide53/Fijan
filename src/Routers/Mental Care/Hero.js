import React from 'react';
import ReusableHeader from '../ReusableHeader';
import Mental from '../../Assets/Mental.png';

const Hero = () => {
  return (
    <div>
      <ReusableHeader
        text='JOB SEEKERS - CARE SUPPORT WORKERS'
        title='Care Support Workers'
        imageSrc={Mental}
      />
    </div>
  );
};

export default Hero;
