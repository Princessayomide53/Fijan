import React from 'react';
import ReusableHeader from '../ReusableHeader';
import Nursing from '../../Assets/Nursing.png';
import Doctors from '../../Assets/Doctors.png';
import Doctor from '../../Assets/Doctor.png';

const Hero = () => {
  return (
    <div>
      <ReusableHeader
        text='JOB SEEKERS - MEDICAL DOCTORS'
        title='Medical Doctors'
        imageSrc={Doctor}
        imageSrc2={Doctors}
      />
    </div>
  );
};

export default Hero;
