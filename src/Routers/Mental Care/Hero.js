import React from 'react';
import ReusableHeader from '../ReusableHeader';
import Mental from '../../Assets/Mental.png';
import Support from '../../Assets/Support.png';
import Supports from '../../Assets/Supports.png';

const Hero = () => {
  return (
    <div>
      <ReusableHeader
        text='JOB SEEKERS - CARE SUPPORT WORKERS'
        title='Care Support Workers'
        imageSrc={Support}
        imageSrc2={Supports}
      />
    </div>
  );
};

export default Hero;
