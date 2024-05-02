import React from 'react';
import ReusableHeader from '../ReusableHeader';
import Homecare from '../../Assets/Homecare.png';

const Hero = () => {
  return (
    <div className=''>
      <ReusableHeader
        text='SERVICES - HOMECARE'
        title='Home Care'
        imageSrc={Homecare}
      />
    </div>
  );
};

export default Hero;
