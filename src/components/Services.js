import React from 'react';
import '../App.css';
import Mask1 from '../Assets/Mask1.png';
import Mask2 from '../Assets/Mask2.png';
import Mask3 from '../Assets/Mask3.png';
import { IoArrowForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      img: Mask1,
      title: 'NURSES',
      text: 'Learn more',
      Link: '/nurses',
    },
    {
      id: 2,
      img: Mask2,
      title: 'MEDICAL DOCTORS',
      text: 'Learn more',
      Link: '/medicalDoctors',
    },
    {
      id: 3,
      img: Mask3,
      title: 'CARE SUPPORT WORKER',
      text: 'Learn more',
      Link: '/careSupport',
    },
  ];
  return (
    <section className='w-full mac:max-w-[83rem] md:max-w-[45rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[20.5rem] iphone:max-w-[22rem] lg:max-w-[60rem] pt-[3.5rem] mx-auto md:pt-[4rem] xl:pt-[5rem] mac:pt-[6rem]'>
      <h5 className='text-[#098666] uppercase text-lg text-center md:text-base lg:text-[1.25rem] font-semibold leading-[1.25rem]'>
        Our services
      </h5>

      <h2 className='special-font text-[#014470] text-[48px] leading-[40px] text-center md:text-[3rem] lg:text-[4.5rem] font-normal md:leading-tight md:-mt-2 lg:leading-[4rem]'>
        What we do
      </h2>
      <p className='text-center text-sm md:text-[13px] lg:text-[20px] leading-[20px] lg:leading-[30px] pt-[18px] md:px-16 lg:px-0 text-[#014470] md:pt-[25px] lg:pt-[33px] font-normal'>
        Your Trusted Partner in Healthcare Recruitment. As a specialised
        healthcare recruitment agency, We are commited
        <br className='hidden lg:block' /> to provide exceptional staffing
        solutions to leading care agencies and hospitals across the United
        Kingdom.
      </p>
      <div className='flex flex-col justify-center items-center gap-7 md:gap-0 md:flex-row md:justify-between pt-[2rem] md:pt-[2.5rem] lg:pt-[4rem]'>
        {services.map((item, index) => (
          <div className='relative z-10' key={index}>
            <img
              src={item.img}
              alt=''
              className='mac:w-[25.3125rem] w-[20rem] h-[22rem] md:w-[13.5125rem] md:h-[18.75rem] lg:w-[17.8125rem] lg:h-[21.75rem] xl:w-[22.8125rem] xl:h-[28.75rem] mac:h-[30.75rem] object-contain'
            />
            <div className='absolute inset-0 z-10 flex flex-col  items-end '>
              <h3 className='text-white uppercase xl:text-[18px] mac:text-[22px] mt-[15rem] md:text-[13px] lg:text-base font-semibold leading-normal px-7 md:mt-[12.2rem] lg:mt-[15rem] mac:mt-[23rem] xl:mt-[20.1rem]'>
                {item.title}
              </h3>

              <Link to={item.Link}>
                {' '}
                <button className='bg-white flex gap-2 mt-[2.05rem] mr-[19.8px] text-[#014470] text-base md:mt-[0.85rem] md:mr-[5.15px] font-normal py-2 xl:mr-[11px] lg:mr-[7px] px-[1.2rem] mac:mr-[12px] rounded-tl-lg rounded-br-[23px] md:rounded-br-[23px] lg:rounded-br-[29px] xl:rounded-br-[32px] mac:rounded-br-[50px] lg:mt-[1.45rem] xl:mt-[2.5rem] mac:mt-[2rem]'>
                  {item.text}
                  <IoArrowForward className='text-[#014470] text-[18px] z-10 mt-1' />
                </button>{' '}
              </Link>
            </div>
            {/* <div className="bg-gradient-to-r from-gray-600 to-black bg-opacity-90 w-[24rem] h-[15rem]"></div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
