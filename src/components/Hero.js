import React from 'react';
import care from '../Assets/care.png';
import '../App.css';
import { Link } from 'react-router-dom';
import { HashLink as HashRouterLink } from 'react-router-hash-link';

const Hero = () => {
  return (
    <section className='bg-gradient-to-r  from-[#ffffff] to-[#71C8E4] w-full h-[35rem] md:h-[29.5rem] lg:h-[40.5rem] xl:h-[48rem]'>
      <div className='mac:max-w-[83rem] md:max-w-[45rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[20.5rem] iphone:max-w-[22rem] lg:max-w-[60rem] mx-auto flex flex-col justify-center md:flex-row md:justify-between'>
        <div className='lg:pt-[13.5rem] pt-[7.8rem] md:pt-[8.5rem]'>
          <h2 className='text-[#014470] text-[3rem] md:text-[3.5rem]  leading-tight md:leading-tight special-font lg:text-[4.2rem] xl:text-[5rem] mac:text-[100px] font-normal lg:leading-[70px] xl:leading-[80px]'>
            Welcome to Fijan
            <br /> Healthcare
          </h2>{' '}
          <p className='text-[#014470] pt-7 md:pt-4 lg:pt-9 md:w-[20rem] lg:w-[26rem] xl:w-[32rem] mac:w-[36.5rem] md:text-[11.1px] lg:text-[14px] xl:text-[1.1rem] mac:text-[1.257rem] font-normal lg:leading-normal xl:leading-[1.75rem]'>
            Your Trusted Partner in Healthcare Recruitment. As a
            <br className='md:block hidden' /> specialised healthcare
            recruitment agency, We are commited
            <br className='md:block hidden' /> to provide exceptional staffing
            solutions to leading care <br className='md:block hidden' />
            agencies and hospitals across the United Kingdom.
          </p>
          <HashRouterLink smooth to='#section1'>
            <button className='px-12 md:px-7 py-[10px] mt-10 lg:mt-14 md:mt-6 flex justify-center md:text-[12px] lg:text-base items-center rounded-full bg-[#098666] text-white'>
              Register Now
            </button>
          </HashRouterLink>
        </div>
        <div>
          <img
            src={care}
            alt=''
            className='mac:w-[45.083rem] hidden md:flex w-[20rem] h-[21.5rem] -mt-[1.5rem] md:-mt-[0rem] md:w-[23.5rem] md:h-[29.5rem] lg:w-[35rem] lg:h-[40rem] xl:w-[44.083rem]  xl:h-[50.525rem] lg:mt-[0.5rem] xl:-mt-[2.5rem]'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
