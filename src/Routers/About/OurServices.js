import React from 'react';
import about1 from '../../Assets/about1.png';
import about2 from '../../Assets/about2.png';
import about3 from '../../Assets/about3.png';
import about4 from '../../Assets/about4.png';

const OurServices = () => {
  return (
    <section className='mac:max-w-[83rem] md:max-w-[45rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[22rem] mx-auto md:mt-[13rem] mt-[6.5rem] lg:mt-[19rem] xl:mt-[26rem]'>
      <h5 className='text-[#098666] text-sm md:text-base lg:text-[1.58rem] font-semibold leading-[1.58rem]'>
        OUR SERVICES
      </h5>
      <h3 className='special-font text-[#014470] text-3xl md:text-[3rem] lg:text-[3rem] xl:text-[4.5rem] font-normal md:leading-[3rem] lg:leading-[4.4rem]'>
        Our Exquisite Journey
      </h3>
      <div className='flex flex-col md:flex-row gap-[3rem] md:gap-[5rem] py-[2rem]'>
        <p className='text-[#26465B] flex-wrap text-sm lg:text-[1.1rem] text-justify font-normal whitespace-pre-wrap leading-[1.75rem]'>
          Lorem ipsum dolor sit amet consectetur. Viverra ultricies risus semper
          cum nunc mattis sed curabitur. Sem nisl at vulputate velit accumsan
          iaculis. Consequat netus in et tincidunt. Tellus commodo tristique
          maecenas quis nisl. laoreet in ultrices dolor condimentum enim massa
          odio. Tristique duis fermentum magnis tristique etiam euismod lacinia.
          Ornare velit vulputate volutpat fames consectetur massa venenatis arcu
          orci. Pretium vitae.
        </p>
        <p className='text-[#26465B] flex-wrap text-justify text-sm lg:text-[1.1rem] md:px-5 whitespace-pre-wrap font-normal leading-[1.75rem]'>
          Lorem ipsum dolor sit amet consectetur. Viverra ultricies risus semper
          cum nunc mattis sed curabitur. Sem nisl at vulputate velit accumsan
          iaculis. Consequat netus in et tincidunt. Tellus commodo tristique
          maecenas quis nisl. laoreet in ultrices dolor condimentum enim massa
          odio. Tristique duis fermentum magnis tristique etiam euismod lacinia.
          Ornare velit vulputate volutpat fames consectetur massa venenatis arcu
          orci. Pretium vitae.
        </p>
      </div>
      <div className='flex flex-col gap-8 md:flex-row flex-wrap md:justify-around xl:flex-nowrap lg:justify-between mac:justify-around items-center object-contain md:pt-[1.5rem] lg:pt-[3rem] mb-[7rem]'>
        <img src={about1} alt='' className='lg:w-[14.5rem] h-[8.5rem]' />
        <img
          src={about2}
          alt=''
          className='lg:w-[16.5rem] h-[12.5rem]  md:-mt-2 lg:-mt-0'
        />
        <img src={about4} alt='' className='lg:w-[17rem] h-[14rem]' />
        <img
          src={about3}
          alt=''
          className='lg:w-[18rem] h-[18rem] md:mt-7 lg:mt-0'
        />
      </div>
    </section>
  );
};

export default OurServices;
