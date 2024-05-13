import React from 'react';
import settle from '../Assets/settle.png';
import mobile from '../Assets/mobile.png';

const Settle = () => {
  return (
    <section className='relative mb-[4rem] md:mt-[4rem] lg:mt-[1rem] mac:mt-[3rem] md:mb-[4rem]'>
      <div className='flex justify-center'>
        <img
          src={settle}
          alt=''
          className='w-full object-cover min-h-[17rem] hidden md:flex md:max-h-[36.5rem]'
        />
        <img
          src={mobile}
          alt=''
          className='w-full object-cover  flex md:hidden'
        />
        <div className='absolute inset-0 bg-black opacity-50'></div>
      </div>
      <div className='absolute top-[14rem] iphone:top-[16rem] md:top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 text-center text-white'>
        <h3 className='md:text-[2rem] font-normal w-[20.5rem] iphone:w-[21rem] text-[30px] iphone:text-[35px] leading-[40px] special-font lg:text-[2.5rem] md:w-[29rem] xl:w-[55rem] mac:w-[45rem] 2xl:w-[60rem] mx-auto md:leading-tight xl:text-[3.7rem] xl:leading-[3.75rem] mac:text-[4rem]'>
          Discover the Fijan healthcare difference and witness how we can
          transform your future
        </h3>
        <p className=' font-normal leading-[32px] text-[14px] iphone:text-[15px] pt-[35px] iphone:pt-[42px] md:pt-[1.6rem] md:text-[0.79rem] w-[19rem] md:w-[32rem] lg:w-[48rem] mx-auto lg:text-[0.85rem] xl:text-[0.95rem] mac:text-[1.15rem] md:leading-normal xl:leading-[32px] lg:leading-[2rem] xl:pt-10'>
          If you’re nurses, senior managers, or care workers UK, take the first
          step towards your healthcare career or enhance your workforce by
          speaking with our friendly team of healthcare recruitment advisors
        </p>
        <ul className='md:mt-7 xl:mt-12 flex justify-center mt-[32px] iphone:mt-[48px]'>
          <li className='px-7 flex-grow md:flex-grow-0 py-[10px] md:px-7 md:py-3 flex justify-center text-[15px] md:text-sm lg:text-base items-center rounded-full bg-[#098666] text-white'>
            Register Now
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Settle;
