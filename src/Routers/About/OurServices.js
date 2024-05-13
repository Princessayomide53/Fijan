import React from 'react';
import about1 from '../../Assets/about1.png';
import about2 from '../../Assets/about2.png';
import about3 from '../../Assets/about3.png';
import about4 from '../../Assets/about4.png';

const OurServices = () => {
  return (
    <section className='mac:max-w-[83rem] md:max-w-[45rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[22rem] mx-auto md:mt-[13rem] mt-[10rem] lg:mt-[19rem] xl:mt-[26rem]'>
      <h5 className='text-[#098666] text-center md:text-left text-sm leading-[20px] md:text-base lg:text-[1.58rem] font-semibold md:leading-[1.58rem]'>
        OUR SERVICES
      </h5>
      <h3 className='special-font text-center md:text-left text-[#014470] text-3xl md:text-[3rem] lg:text-[3rem] xl:text-[4.5rem] font-normal md:leading-[3rem] lg:leading-[4.4rem]'>
        Who we are
      </h3>
      <div className='flex flex-col md:flex-row gap-[3rem] md:gap-[5rem] py-[2rem]'>
        <p className='text-[#26465B] flex-wrap text-sm lg:text-[1.1rem] text-justify font-normal whitespace-pre-wrap leading-[1.75rem]'>
          Fijan healthcare is a pioneering healthcare recruitment agency
          committed to revolutionising the healthcare staffing landscape and
          addressing the care sector’s pressing challenges. With an unparalleled
          amalgamation of over four decades of experience in recruitment and
          care, we have cemented an unmatched reputation within the healthcare
          recruitment domain.Situated in the UK, our head office serves as the
          nerve centre for devising cutting-edge healthcare recruitment
          strategies and executing impactful campaigns that span the nation.
        </p>
        <div className='md:hidden grid grid-cols-1 gap-7 '>
          <img src={about1} alt='' className='lg:w-[14.5rem]  h-[8.5rem]' />
          <img
            src={about2}
            alt=''
            className='lg:w-[16.5rem] h-[12.5rem] md:-mt-2 lg:-mt-0 flex justify-self-end'
          />
        </div>

        <p className='text-[#26465B] flex-wrap text-justify text-sm lg:text-[1.1rem] md:px-5 whitespace-pre-wrap font-normal leading-[1.75rem]'>
          Our adept team of Recruitment Advisors endeavours to identify and
          connect the most adept and dedicated nurses and care professionals
          with the specific requirements and aspirations of each esteemed care
          provider.We recognise the singular nature of care work – a vocation
          that embodies profound responsibilities and trust. This understanding
          propels us to ensure that our recruitment processes transcend mere
          efficiency and accuracy; they are infused with meticulousness and
          depth
        </p>
      </div>
      <div className=' flex-col gap-8 hidden md:flex-row flex-wrap md:justify-around xl:flex-nowrap lg:justify-between mac:justify-around items-center object-contain md:pt-[1.5rem] lg:pt-[3rem] mb-[7rem]'>
        <img
          src={about1}
          alt=''
          className='lg:w-[14.5rem] hidden md:flex h-[8.5rem]'
        />
        <img
          src={about2}
          alt=''
          className='lg:w-[16.5rem] h-[12.5rem] hidden md:flex md:-mt-2 lg:-mt-0'
        />
        <img
          src={about4}
          alt=''
          className='lg:w-[17rem] hidden md:flex h-[14rem]'
        />
        <img
          src={about3}
          alt=''
          className='lg:w-[18rem] h-[18rem] hidden md:flex md:mt-7 lg:mt-0'
        />
      </div>{' '}
      <div className='md:hidden gap-7 grid grid-cols-1 mb-16'>
        <img src={about4} alt='' className='lg:w-[17rem] h-[14rem]' />
        <img
          src={about3}
          alt=''
          className='lg:w-[18rem] h-[18rem] flex justify-self-end md:mt-7 lg:mt-0'
        />
      </div>
    </section>
  );
};

export default OurServices;
