import React from 'react';
import ReusableHeader from '../ReusableHeader';
import Homecare from '../../Assets/Homecare.png';
import nurses from '../../Assets/nurses.png';

const Hero = () => {
  return (
    <div className=''>
      <ReusableHeader
        text='JOB SEEKERS - NURSES'
        title='Nurses'
        imageSrc={Homecare}
        imageSrc2={nurses}
      />
    </div>
  );
};

export default Hero;
