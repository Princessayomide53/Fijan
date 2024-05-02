import React from 'react';
import Frame from '../../Assets/Frame.png';
import homecares from '../../Assets/homecares.png';

const Services = () => {
  return (
    <section className='mac:max-w-[83rem] md:max-w-[45rem] xl:max-w-[75rem] lg:max-w-[60rem] pro:max-w-[52rem] max-w-[22rem] mx-auto '>
      <div className='md:mt-[16rem] mt-[7rem] lg:mt-[22rem] mac:mt-[26rem] flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between'>
        <span>
          <p className='text-[#098666] font-medium leading-[20px]'>
            SERVICES - HOMECARE
          </p>
          <h3 className='text-[#014470] text-3xl md:text-4xl special-font lg:text-5xl lg:leading-[35px] xl:text-6xl mac:text-7xl font-normal xl:leading-[45px] mac:leading-[60px]'>
            Healthcare at the comfort
            <br /> of your home
          </h3>
          <p className='pt-[2.5rem] md:text-[13px] md:w-[19.5rem]  lg:w-[28rem] xl:w-[34rem] flex flex-wrap text-[#26465B] lg:text-base xl:text-[16.5px] font-normal leading-normal'>
            Our Nursing Care service is a heartfelt commitment to the well-being
            of the elderly, recognizing the unique and evolving needs that come
            with the golden years.
            <br />
            <br /> Tailored to provide gentle and skilled support, our service
            focuses on creating an environment where seniors can age with
            dignity and comfort.
            <br />
            <br /> Our seniors are invaluable treasures, and our care is the
            lifeline they need to thrive and enjoy life.
            <br />
            <br />
            At the heart of our service is the belief that aging should be a
            time of comfort, joy, and cherished moments.
          </p>
        </span>
        <article className='relative mt-16 md:mt-24 lg:mt-24'>
          <img
            src={Frame}
            alt=''
            className='lg:mr-[6rem] h-[240px] ml-[0.7rem] mt-5 md:h-[280px] lg:h-full xl:h-[300px] object-contain md:mr-[6rem] md:-mt-2 lg:-mt-7 xl:mt-3 mac:mt-5 xl:mr-[10rem]'
          />
          <div className='bg-[#E1F8FF] w-[290px] h-[370px] md:h-[390px] lg:h-[425px] xl:h-[480px] rounded-lg px-[44px] py-[2.5rem] absolute z-10 -top-10 left-10 md:-top-16 md:right-1 lg:right-5 md:w-[320px] lg:w-[370px] xl:w-[414px]'>
            <h2 className='text-[#012D4A] text-[22px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-medium leading-normal'>
              Other Services
            </h2>
            <p className='pt-[18px] xl:pt-[20px] xl:pb-[15px] pb-[10px] border-b-2 border-[#71C8E4] text-[#012D4A] font-medium leading-normal lg:text-[20px] xl:text-[24px]'>
              Nursing Care
            </p>
            <p className='pt-[18px] xl:pt-[20px] xl:pb-[15px] pb-[10px] border-b-2 border-[#71C8E4] text-[#012D4A] font-medium leading-normal lg:text-[20px] xl:text-[24px]'>
              Mental Health Care
            </p>
            <p className='pt-[18px] xl:pt-[20px] xl:pb-[15px] pb-[10px] border-b-2 border-[#71C8E4] text-[#012D4A] font-medium leading-normal lg:text-[20px] xl:text-[24px]'>
              Nursing Care
            </p>
            <p className='pt-[18px] xl:pt-[20px] xl:pb-[15px] pb-[10px] border-b-2 border-[#71C8E4] text-[#012D4A] font-medium leading-normal lg:text-[20px] xl:text-[24px]'>
              Mental Health Care
            </p>
            <p className='pt-[18px] xl:pt-[20px] xl:pb-[15px] pb-[10px] text-[#012D4A] font-medium leading-normal lg:text-[20px] xl:text-[24px]'>
              Health Care Staffing
            </p>
          </div>
        </article>
      </div>
      <div className='mac:mt-24 md:mt-[5rem] lg:mt-[6rem] xl:mt-[7rem] mt-[8rem] pb-5 flex flex-col gap-10 justify-center md:flex-row md:justify-between items-center'>
        <img
          src={homecares}
          alt=''
          className='h-[18.5rem] w-[20rem] md:w-[18.5rem] md:h-[19rem] lg:w-[27rem] lg:h-[26rem] xl:w-[35rem] xl:h-[30rem]'
        />
        <div className='w-[19.5rem] md:w-[22rem] xl:w-[35rem] lg:w-[27.5rem]'>
          <h4 className='text-[#014470] md:text-left text-center text-[16px] lg:text-[20px] xl:text-[24px] font-semibold leading-normal'>
            What you should expect when you choose us
          </h4>

          <ul className='list-disc mt-[1.5rem] lg:mt-[2rem] space-y-[1.2rem] lg:space-y-[1.5rem]'>
            <li className='text-[#26465B] font-normal leading-normal text-sm md:text-xs lg:text-base xl:text-lg'>
              We put you, your needs and your wellbeing first
            </li>
            <li className='text-[#26465B] font-normal leading-normal text-sm md:text-xs lg:text-base xl:text-lg'>
              We guarantee you safety and a high quality of care as we maintain
              care standards and guidelines
            </li>
            <li className='text-[#26465B] font-normal leading-normal text-sm md:text-xs lg:text-base xl:text-lg'>
              Professional services from a team of skilled experts who offer
              personalized services
            </li>
            <li className='text-[#26465B] font-normal leading-normal text-sm md:text-xs lg:text-base xl:text-lg'>
              Find your family in our caregivers. You will br treated like
              you’re one of us
            </li>
            <li className='text-[#26465B] font-normal leading-normal text-sm md:text-xs lg:text-base xl:text-lg'>
              Our unrelenting commitment to our core values of compassion,
              empathy, and kindness for our patients
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
