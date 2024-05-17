import React from 'react';
import smile from '../../Assets/smile.png';
import smile2 from '../../Assets/smile2.png';

const Header = () => {
  return (
    <section className='bg-gradient-to-r from-[#ffffff] to-[#71C8E4] w-full h-[20.5rem] md:h-[18rem] lg:h-[23rem] xl:h-[26rem]'>
      <div className='mac:max-w-[83rem] md:max-w-[45rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[22rem] mx-auto '>
        <h2 className='text-center pt-[7rem]  md:pt-[5rem] lg:pt-[8rem] xl:pt-[8.1rem] text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[6.2rem] text-[#014470] font-normal leading-[4rem] lg:leading-[5.2rem] xl:leading-[6.3rem] special-font'>
          About Us
        </h2>
        <div className='md:flex hidden  items-center justify-center pt-[1.5rem] md:pt-[3rem] lg:pt-[3rem] xl:pt-[1rem]'>
          <img
            src={smile}
            alt=''
            className='object-contain w-[20rem] md:w-[42rem] mac:w-[80rem] lg:w-[57rem] mac:h-[30rem] xl:w-[70rem] xl:h-[28rem]'
          />
        </div>
        <div className='md:hidden flex items-center justify-center pt-[2.7rem] md:pt-[3rem] lg:pt-[2rem] xl:pt-[1rem]'>
          <img
            src={smile2}
            alt=''
            className='object-contain w-[20rem] md:w-[42rem] mac:w-[80rem] lg:w-[57rem] mac:h-[30rem] xl:w-[70rem] xl:h-[28rem]'
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
