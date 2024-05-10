import React from 'react';
import '../App.css';
import icon1 from '../Assets/icon1.png';
import icon2 from '../Assets/icon2.png';
import icon3 from '../Assets/icon3.png';
import icon4 from '../Assets/icon4.png';
import '../App.css';

const Choose = () => {
  const cards = [
    {
      id: 1,
      title: 'Skilled medical professionals',
      icon: icon1,
      text: 'Our team consists of seasoned healthcare recruiters with extensive knowledge in the  field',
    },
    {
      id: 2,
      title: 'Modern facilities',
      icon: icon1,
      text: 'Our innovative approach to care worker placement ensures the perfect fit between candidates and employers.',
    },
    {
      id: 3,
      title: 'Flexible Appointments',
      icon: icon1,
      text: 'We provide round-the-clock assistance, ensuring your needs are promptly addressed and your expectations are exceeded.',
    },
    {
      id: 4,
      title: 'Wide range of services',
      icon: icon1,
      text: 'We adapt to your specific requirements, providing tailored solutions that meet your staffing needs effectively.',
    },
    {
      id: 5,
      title: 'Wide range of services',
      icon: icon1,
      text: 'We maintain exceptional awareness of the candidate market, ensuring we identify and engage with the most promising talent.',
    },
    {
      id: 6,
      title: 'Wide range of services',
      icon: icon1,
      text: 'With over 4 years of combined recruitment experience, we deeply understand the industry.',
    },
    {
      id: 7,
      title: 'Wide range of services',
      icon: icon1,
      text: 'Our extensive network grants us unparalleled access to a diverse pool of skilled healthcare professionals.',
    },
    {
      id: 8,
      title: 'Wide range of services',
      icon: icon1,
      text: 'We conduct thorough screening processes to ensure that only the most qualified and dedicated individuals join your team.',
    },
  ];
  return (
    <section className='mac:max-w-[78rem] md:max-w-[45rem] lg:max-w-[52rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[20.5rem] iphone:max-w-[22rem] mx-auto pt-[3.5rem] md:pt-[4rem] xl:pt-[6rem] mac:pt-[7rem]'>
      <h6 className='text-[#098666] text-lg md:text-base lg:text-[1.2rem] xl:text-[1.38rem] font-semibold leading-[1.25rem] text-center'>
        WHY CHOOSE US
      </h6>
      <h3 className='text-[#014470] text-[45px] leading-[40px] md:text-4xl lg:leading-tighter text-center lg:text-5xl xl:text-6xl mac:text-7xl special-font font-normal xl:leading-[3.8rem]'>
        Empowering you to reach your <br className='hidden md:block' />
        potential
      </h3>

      <p className='text-center text-sm px-1 md:px-10 lg:px-0 pt-[30px] lg:pt-[48px] text-[#26465B] md:text-[13px] lg:text-sm xl:text-[20px] leading-[20px] lg:leading-[30px] font-normal'>
        Year after year, we empower thousands of aspiring healthcare
        professionals, nurturing their potential and kick-starting{' '}
        <br className='hidden lg:block' />
        their careers nationwide. We assist numerous nurses and management
        professionals in discovering exciting job
        <br className='hidden lg:block' /> opportunities that align with their
        ambitions. By offering unwavering support and fostering growth, we
        remain
        <br className='hidden lg:block' /> dedicated to advancing the careers of
        those who choose to devote themselves to the care sector.
        <br className='block' /> <br className='block' /> We understand the
        immeasurable value of top-tier care staff. That’s why we go above and
        beyond to identify and <br className='hidden lg:block' />
        connect the most outstanding candidates with the right jobs. As a
        leading healthcare recruitment agency, here are the
        <br className='hidden lg:block' /> reasons why we stand out:
      </p>
      <div className='flex pt-[2.5rem] md:pt-[4rem] card md:py-0 lg:py-[3rem] xl:py-[4rem] mac:py-[3rem] justify-between overflow-x-auto'>
        {cards.map((card) => (
          <div
            key={card.id}
            className='min-w-[17rem]  lg:flex-shrink-0 lg:max-w-[294px] mx-[1rem] lg:mx-[1.5rem] min-h-[7.25rem] lg:max-h-[304px] bg-[#E1F8FF] px-[1rem] lg:px-[1.5rem] py-[0.95rem] md:px-[1.5rem] md:py-[1.5rem] lg:py-[2.12rem]'
          >
            <img
              src={card.icon}
              alt=''
              className='w-[2.5rem] h-[2.5rem] lg:w-[5rem] lg:h-[5rem]'
            />
            {/* <h2 className='text-[#014470] special-font text-[1.45rem] lg:text-[1.7rem] font-normal leading-normal'>
              {card.title}
            </h2>{' '} */}
            <p className='text-[#26465B] font-normal leading-[1.4rem] text-[0.86rem] lg:text-base pt-[1.2rem] md:pt-[1.5rem]'>
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Choose;
