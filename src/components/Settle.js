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
          className='w-full object-cover min-h-[17rem] hidden md:flex md:max-h-[36rem]'
        />
        <img
          src={mobile}
          alt=''
          className='w-full object-cover  flex md:hidden'
        />
        <div className='absolute inset-0 bg-black opacity-50'></div>
      </div>
      <div className='absolute top-[15rem] md:top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 text-center text-white'>
        <h3 className='md:text-[2rem] w-[20rem] text-[40px] leading-[40px] special-font lg:text-[2.5rem] md:w-[28rem] xl:w-[40rem] mac:w-[45rem] 2xl:w-[50rem] mx-auto md:leading-tight xl:text-[3.7rem] xl:leading-[3.75rem] mac:text-[4rem]'>
          Why Settle for Less? Discover the Difference in Our Exquisite Care
        </h3>
        <p className=' font-normal leading-[32px] text-[16px] pt-[42px] md:pt-[1.6rem] md:text-[0.79rem] w-[18rem] md:w-[32rem] lg:w-[40rem] mx-auto lg:text-[0.85rem] xl:text-[0.95rem] mac:text-[1.15rem] md:leading-normal xl:leading-[32px] lg:leading-[2rem] xl:mt-10'>
          Whether it's about services, inquiries, or seeking advice, we’re here
          to empower your health journey. Reach out and let us be a partner in
          your well-being.
        </p>
        <ul className='md:mt-5 xl:mt-12 flex justify-center mt-[48px]'>
          <li className='px-7 py-[10px] md:px-7 md:py-3 flex justify-center text-[15px] md:text-sm lg:text-base items-center rounded-full bg-[#098666] text-white'>
            Get Started
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Settle;
