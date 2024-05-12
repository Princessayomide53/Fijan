import React from 'react';
import ReusableHeader from '../ReusableHeader';
import Nursing from '../../Assets/Nursing.png';

const Hero = () => {
  return (
    <div>
      <ReusableHeader
        text='JOB SEEKERS - MEDICAL DOCTORS'
        title='Medical Doctors'
        imageSrc={Nursing}
      />
    </div>
  );
};

export default Hero;
