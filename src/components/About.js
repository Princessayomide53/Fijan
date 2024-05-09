import React from 'react';
import '../App.css';
import about from '../Assets/about.png';

const About = () => {
  return (
    <section className='mac:max-w-[83rem] md:max-w-[45rem] pt-[2.5rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[22rem] mx-auto md:pt-[4rem] lg:pt-[6rem] mac:pt-[8rem] flex flex-col items-center justify-center gap-7 md:flex-row md:justify-around lg:justify-between xl:justify-around'>
      <div>
        <h5 className='text-[#098666] text-center md:text-left text-lg md:text-base lg:text-[1.1rem] xl:text-[1.4rem] font-semibold leading-[1.25rem]'>
          ABOUT US
        </h5>
        <h2 className='special-font text-[#014470] text-[48px] text-center md:text-left leading-[40px] md:text-3xl lg:text-5xl mac:text-7xl xl:text-6xl font-normal md:leading-normal lg:leading-[3.8rem]'>
          Specialist in
          <br className='hidden md:block' /> healthcare placement
        </h2>
        <p className='text-[#26465B]  text-base md:text-sm xl:text-[1.25rem] lg:leading-normal pt-[2rem] md:pt-[2rem] lg:text-sm mac:text-[1.38rem] font-normal mac:leading-[1.8rem]'>
          At Fijan healthcare, we cater to a diverse range of
          <br className='hidden md:block' />
          staffing needs within learning disabilities, mental{' '}
          <br className='hidden md:block' />
          health, and specialist dementia environments.
          <br /> <br />
          Below, you will find the types of skilled professionals we{' '}
          <br className='hidden md:block' />
          typically place with our esteemed clients
        </p>
      </div>
      <div>
        <img
          src={about}
          alt=''
          className='object-contain md:w-[18rem] w-[20rem] h-[15rem] md:mt-5 lg:mt-0 md:h-[14.5rem] mac:w-[38.304rem] xl:w-[32.304rem] lg:w-[25rem] lg:h-[23.375rem] xl:h-[27.375rem]'
        />
      </div>
    </section>
  );
};

export default About;
