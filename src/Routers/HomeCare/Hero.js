import React from 'react';
import ReusableHeader from '../ReusableHeader';
import Homecare from '../../Assets/Homecare.png';

const Hero = () => {
  return (
    <div className=''>
      <ReusableHeader
        text='JOB SEEKERS - NURSES'
        title='Nurses'
        imageSrc={Homecare}
      />
    </div>
  );
};

export default Hero;
