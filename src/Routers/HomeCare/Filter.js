import React from 'react';
import { CiSearch } from 'react-icons/ci';

const Filter = () => {
  return (
    <section className='my-[4rem] hidden h-[445px] py-[60px] bg-[#E8FAFF]'>
      <h2 className='special-font text-[#014470] text-center font-normal text-[72px] leading-[60px]'>
        Check our latest Care Support <br /> Worker Jobs
      </h2>
      <div className='flex  justify-around pt-[104px]'>
        <div className='relative'>
          {' '}
          <input
            type='text'
            placeholder='Search'
            className='bg-white px-5 py-3 placeholder:text-[#90C2E4] focus:outline-blue-300 border-2 border-[#E2E2E2]'
          />{' '}
          <CiSearch className='absolute text-[#26465B] left-[14rem] top-3 text-2xl' />
        </div>

        <select className='py-3 px-7 border-2 border-[#E2E2E2] focus:outline-blue-300 text-[#26465B] text-lg font-semibold leading-normal'>
          <option>All Job Category</option>
        </select>
        <select className='py-3 px-7 border-2 border-[#E2E2E2] focus:outline-blue-300 text-[#26465B] text-lg font-semibold leading-normal'>
          <option>All Job Type</option>
        </select>
        <select className='py-3 px-7 border-2 border-[#E2E2E2] focus:outline-blue-300 text-[#26465B] text-lg font-semibold leading-normal'>
          <option>All Job Location</option>
        </select>
        <button className=' lg:px-5 xl:px-7 py-1 flex justify-center items-center rounded-full bg-[#098666] text-white'>
          Search
        </button>
      </div>
    </section>
  );
};

export default Filter;
