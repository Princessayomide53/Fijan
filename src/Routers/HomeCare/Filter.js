import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';

const Filter = () => {
  return (
    <section className='my-[2rem] md:mt-[4rem] mb-[1rem] lg:my-[4rem] md:block py-[45px] md:h-[550px] xl:h-[445px] md:py-[60px] bg-[#E8FAFF]'>
      <h2 className='special-font text-[42px] leading-[35px] text-[#014470] text-center font-normal md:text-5xl xl:text-[72px] md:leading-[60px]'>
        Check our latest Care
        <br className='md:hidden' /> Support <br className='hidden md:block' />{' '}
        Worker Jobs
      </h2>
      <div className='flex flex-col xl:flex-row xl:justify-evenly pt-[50px] md:pt-[60px] lg:pt-[80px] xl:pt-[104px] mac:max-w-[83rem]  md:max-w-[45rem] xl:max-w-[75rem] lg:max-w-[50rem] pro:max-w-[52rem] max-w-[22rem]  mx-auto'>
        <article className='flex gap-7 flex-1 xl:flex-none'>
          {' '}
          <div className='relative flex flex-1 xl:flex-none'>
            {' '}
            <input
              type='text'
              placeholder='Search'
              className='bg-white flex-1 xl:flex-none xl:px-5 py-3 placeholder:text-[#90C2E4] pl-5 focus:outline-blue-300 border-2 border-[#E2E2E2]'
            />{' '}
            <CiSearch className='absolute text-[#26465B] right-5 top-3 text-2xl font-semibold' />
          </div>
          <div className='relative hidden md:flex flex-1 xl:flex-none'>
            {' '}
            <select className='py-3 flex-1 xl:flex-none xl:w-[215px] pl-5 appearance-none border-2 border-[#E2E2E2] focus:outline-blue-300 text-[#26465B] text-sm md:text-lg font-semibold leading-normal'>
              <option className='text-[#26465B]'>All Job Category</option>
              <option className='text-[#26465B]'>Nurses</option>
              <option className='text-[#26465B]'>Medical Doctors</option>
              <option className='text-[#26465B]'>Care Support Worker</option>
            </select>
            <IoIosArrowDown className='text-base md:text-xl  text-[#26465B] absolute right-5 top-[18px] z-20' />
          </div>
        </article>

        <div className='flex gap-3 md:gap-5 mt-8 xl:mt-0 flex-1 xl:flex-none'>
          <div className='relative flex md:hidden flex-1 xl:flex-none'>
            {' '}
            <select className='py-3 flex-1 xl:flex-none xl:w-[215px] pl-[14px] md:pl-5 appearance-none border-2 border-[#E2E2E2] bg-white focus:outline-blue-300 text-[#26465B] text-sm md:text-lg font-semibold leading-normal'>
              <option className='text-[#26465B]'>All Job Category</option>
              <option className='text-[#26465B]'>Nurses</option>
              <option className='text-[#26465B]'>Medical Doctors</option>
              <option className='text-[#26465B]'>Care Support Worker</option>
            </select>
            <IoIosArrowDown className=' md:text-xl text-base  text-[#26465B] absolute right-[14px] md:right-5 top-[18px] z-20' />
          </div>
          <div className='relative flex flex-1 xl:flex-none'>
            {' '}
            <select className='py-3 flex-1 xl:flex-none pl-5 w-[175px] border-2 appearance-none border-[#E2E2E2] focus:outline-blue-300 bg-white text-[#26465B] text-sm md:text-lg font-semibold leading-normal'>
              <option>All Job Type</option>
              <option className='text-[#26465B]'>Full Time</option>
              <option className='text-[#26465B]'>Per Time</option>
              <option className='text-[#26465B]'>Contract</option>
            </select>
            <IoIosArrowDown className='text-base md:text-xl text-[#26465B] absolute right-5 top-[18px] z-20' />
          </div>

          <div className='relative hidden md:flex flex-1 xl:flex-none'>
            {' '}
            <select className='py-3 xl:flex-none flex-1 xl:w-[210px] pl-5 border-2 appearance-none bg-white border-[#E2E2E2] focus:outline-blue-300 text-[#26465B] text-sm md:text-lg font-semibold leading-normal'>
              <option>All Job Location</option>
              <option className='text-[#26465B]'>Toronto</option>
              <option className='text-[#26465B]'>Florida</option>
              <option className='text-[#26465B]'>New York</option>
              <option className='text-[#26465B]'>LA</option>
            </select>
            <IoIosArrowDown className='text-base md:text-xl text-[#26465B] absolute right-5 top-[18px] z-20' />
          </div>
        </div>
        <div className='relative mt-7 md:hidden flex flex-1 xl:flex-none'>
          {' '}
          <select className='py-3 xl:flex-none flex-1 xl:w-[210px] pl-5 border-2 appearance-none bg-white border-[#E2E2E2] focus:outline-blue-300 text-[#26465B] text-sm md:text-lg font-semibold leading-normal'>
            <option>All Job Location</option>
            <option className='text-[#26465B]'>London</option>
            <option className='text-[#26465B]'>Milton Keynes</option>
            <option className='text-[#26465B]'>Northampton </option>
            {/* <option className='text-[#26465B]'>LA</option> */}
          </select>
          <IoIosArrowDown className='text-base md:text-xl text-[#26465B] absolute right-5 top-[18px] z-20' />
        </div>

        <button className='xl:flex-none text-sm md:text-lg mt-10 xl:mt-0 py-3 lg:px-5 xl:px-7 rounded-full xl:py-0 bg-[#098666] text-white'>
          Search
        </button>
      </div>
    </section>
  );
};

export default Filter;
