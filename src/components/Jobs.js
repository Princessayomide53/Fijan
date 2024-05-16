import React from 'react';
import '../App.css';
import { IoArrowForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Jobs = () => {
  const jobs = [
    {
      id: 1,
      title: 'RMN',
      title2: 'RMN',
      pay: '$10.42',
      text: 'Sutton Coldfield',
      description:
        'A beautiful Nursing home in the leafy town of Sutton Coldfield, sitting on bus and tarain routesiffering regular hours to experienced staff',
      details: 'SEE FULL DETAILS HERE',
    },
    {
      id: 2,
      title: 'RMN',
      title2: 'RMN',
      pay: '$10.42',
      text: 'Sutton Coldfield',
      description:
        'A beautiful Nursing home in the leafy town of Sutton Coldfield, sitting on bus and tarain routesiffering regular hours to experienced staff',
      details: 'SEE FULL DETAILS HERE',
    },
    {
      id: 3,
      title: 'RMN',
      title2: 'RMN',
      pay: '$10.42',
      text: 'Sutton Coldfield',
      description:
        'A beautiful Nursing home in the leafy town of Sutton Coldfield, sitting on bus and tarain routesiffering regular hours to experienced staff',
      details: 'SEE FULL DETAILS HERE',
    },
  ];
  return (
    <section className='mac:max-w-[83rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[20.5rem] iphone:max-w-[22rem] mx-auto pt-[3.5rem] pb-[2rem] md:py-[3rem] lg:py-0 lg:pt-[3rem] lg:pb-[4rem] xl:pb-[0rem] xl:pt-[3rem] mac:pt-[4rem] mac:pb-[2rem]'>
      <h6 className='text-center text-lg text-[#098666] lg:text-[1.25rem] xl:text-[1.4rem] font-semibold leading-[1.25rem] '>
        HOT JOBS
      </h6>

      <h1 className='text-center special-font text-[42px] leading-[40px] md:text-4xl md:leading-normal lg:leading-[3.85rem] font-normal lg:text-5xl xl:text-6xl mac:text-7xl text-[#014470] '>
        Nursing and Healthcare Hot jobs
      </h1>
      <div className='flex flex-col justify-center items-center gap-10 md:gap-0 md:flex-row md:justify-around pt-[67px] pb-[55px] md:pt-[2.5rem] md:pb-[1rem] lg:pb-0 mac:justify-between lg:py-[3rem] xl:py-[4rem]'>
        {jobs.map((job) => (
          <div
            key={job.id}
            className='md:w-[12.8375rem] w-[300px] iphone:w-[319px] h-[342px] md:h-[18.5375rem] lg:w-[17.5375rem] py-[1.5rem] xl:w-[17.9375rem] mac:w-[19.9375rem] xl:h-[22.575rem] lg:h-[20.375rem] bg-[#0171BB] rounded-xl px-[1.2rem] md:py-[1.2rem] lg:py-[1.7rem]'
          >
            <h4 className='text-[#fff] hidden md:block lg:pb-[1rem] md:pb-[0.5rem] mac:pb-[1.5rem] md:text-[14px] lg:text-[1rem] mac:text-[1.25rem] font-bold leading-[1.25rem]'>
              {job.title}
            </h4>{' '}
            <h4 className='text-[#fff] block pb-[1.5rem] md:hidden lg:pb-[1rem] md:pb-[0.5rem] mac:pb-[1.5rem] md:text-[12px] lg:text-[1rem] mac:text-[1.25rem] font-bold leading-[1.25rem]'>
              {job.title2}
            </h4>
            <p className='text-white pb-[0.8rem] text-[16px] md:text-sm lg:text-base font-light leading-[1.25rem]'>
              {job.pay}
            </p>{' '}
            <p className='text-white text-[16px] pb-[0.9rem] md:text-sm lg:text-base md:pb-[0.7rem] lg:pb-[1.2rem] font-light leading-[20px] md:leading-[1.25rem] border-b-[1px] border-[#fff]'>
              {job.text}
            </p>
            <p className='text-white py-[0.9rem] lg:py-[1.2rem] text-[16px] leading-[22.4px] text-justify md:text-xs xl:text-base font-light md:leading-[1.35rem]'>
              {job.description}
            </p>
            <p className='text-white lg:pt-[0.8rem] pt-[0.5rem] xl:pt-[1rem] underline text-[16px] md:text-sm xl:text-base font-light leading-[1.35rem]'>
              {job.details}
            </p>
          </div>
        ))}
      </div>
      <div className='flex md:justify-center'>
        <button className='bg-[#098666] flex-grow justify-center md:flex-grow-0 mb-[15px] md:my-[2rem] lg:my-[3rem] xl:my-[0rem] flex gap-3 text-lg font-medium leading-[16px] text-white px-7 py-5 md:py-3 rounded-full'>
          <Link to='/employers'> Explore Careers</Link>
          <IoArrowForward className='text-white text-[18px]' />
        </button>
      </div>
    </section>
  );
};

export default Jobs;
