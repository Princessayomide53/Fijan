import React from 'react';
import care from '../Assets/care.png';
import '../App.css';

const Hero = () => {
  return (
    <section className='bg-gradient-to-r  from-[#ffffff] to-[#71C8E4] w-full md:h-[29.5rem] lg:h-[40.5rem] xl:h-[48rem]'>
      <div className='mac:max-w-[83rem] md:max-w-[45rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[22rem] lg:max-w-[60rem] mx-auto flex flex-col justify-center md:flex-row md:justify-between'>
        <div className='lg:pt-[13.5rem] pt-[7.8rem] md:pt-[8.5rem]'>
          <h2 className='text-[#014470] text-[3rem] md:text-[3.5rem] leading-tight md:leading-tight special-font lg:text-[4.2rem] xl:text-[5rem] mac:text-[6rem] font-normal lg:leading-[70px] xl:leading-[100px]'>
            Quality{' '}
            <span className='text-[#098666]'>
              healthcare
              <br />{' '}
            </span>
            for a healthy you
          </h2>{' '}
          <p className='text-[#014470] pt-7 md:pt-4 lg:pt-8 md:text-[12px] lg:text-[14px] xl:text-[1.1rem] mac:text-[1.257rem] font-normal lg:leading-normal xl:leading-[1.75rem]'>
            At Fijan, we are more than just a healthcare agency.we are
            <br className='md:block hidden' /> beacon of trust, dedication, and
            clinical xcellence across
            <br className='md:block hidden' /> UK. We have a team of trusted and
            dedicated professionals
            <br className='md:block hidden' /> who priortize your health to give
            a quality life.
          </p>
          <button className='px-12 md:px-7 py-[10px] mt-10 lg:mt-14 md:mt-6 flex justify-center md:text-[12px] lg:text-base items-center rounded-full bg-[#098666] text-white'>
            Get Started
          </button>
        </div>
        <div>
          <img
            src={care}
            alt=''
            className='mac:w-[47.083rem] w-[20rem] h-[21.5rem] -mt-[1.5rem] md:-mt-[0rem] md:w-[23.5rem] md:h-[29.5rem] lg:w-[35rem] lg:h-[40rem] xl:w-[44.083rem]  xl:h-[50.525rem] lg:mt-[0.5rem] xl:-mt-[2.5rem]'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
