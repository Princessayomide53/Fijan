import React from 'react';
import Frame from '../../Assets/Frame.png';
import homecares from '../../Assets/homecares.png';

const Services = () => {
  return (
    <section className='mac:max-w-[83rem] pb-[3rem] md:max-w-[45rem] xl:max-w-[75rem] lg:max-w-[60rem] pro:max-w-[52rem] max-w-[22rem] mx-auto '>
      <div className='md:mt-[16rem] mt-[7rem] lg:mt-[18rem] xl:mt-[22rem] mac:mt-[26rem] flex flex-col gap-5  md:gap-8 lg:gap-0 md:flex-row md:justify-between'>
        <span>
          <p className='text-[#098666] font-medium leading-[20px]'>
            JOB SEEKERS - NURSES
          </p>
          <h3 className='text-[#014470] text-3xl md:text-4xl special-font lg:text-5xl lg:leading-[35px] xl:text-6xl mac:text-7xl font-normal xl:leading-[45px] mac:leading-[60px]'>
            Discover a World of
            <br /> Nursing Opportunities
          </h3>
          <p className='pt-[1rem] md:pt-[2.5rem] text-[12px] w-[20.5rem] md:text-[12px] md:w-[20rem] lg:w-full flex flex-wrap text-[#26465B] lg:text-sm xl:text-base mac:text-lg font-normal md:leading-normal'>
            Fijanhealthcare offers a plethora of captivating and diverse nursing
            <br className='hidden lg:block' />
            opportunities await you. Whether you seek to augment your work hours
            <br className='hidden lg:block' />
            with temporary shifts or embark on an exciting new permanent nursing
            <br className='hidden lg:block' />
            role, our dedicated team is primed to tailor your next nursing job
            <br className='hidden lg:block' />
            to your desires and aspirations.
          </p>
          <h5 className='pt-[30px] pb-[18px] text-[#014470] md:text-[16.5px] lg:text-[22px] leading-normal font-semibold'>
            Seasoned Recruiters with a Personal Flair
          </h5>
          <p className='text-[#26465B]  text-[12px] md:w-[21rem] lg:w-full lg:text-sm xl:text-base mac:text-lg font-normal leading-[20px] lg:leading-[30px]'>
            We take pride in delivering a top-tier, friendly service driven by a
            genuine <br className='hidden lg:block' /> desire to comprehend your
            unique nursing journey. Whether you’re{' '}
            <br className='hidden lg:block' />
            yearning for a specialised position within the esteemed NHS or
            envision <br className='hidden lg:block' />
            yourself excelling in a leadership role within a nurturing nursing
            home, our <br className='hidden lg:block' />
            adept nursing team boasts the expertise and wisdom to counsel you on{' '}
            <br className='hidden lg:block' />
            your path to an elevated nursing career.
          </p>
        </span>
        <article className='relative mt-7  lg:mt-9 xl:mt-11 mac:mt-14'>
          <div>
            <h5 className='text-[#014470] font-semibold md:text-lg lg:text-[22px] xl:text-[32px] leading-[30px]'>
              Join us Today and Unveil your Future
            </h5>

            <p className='lg:py-[24px] py-[12px] md:py-[18px] mac:py-[30px] text-[#26465B] w-[20rem] lg:w-full md:text-[12px] text-[12px] lg:text-sm xl:text-base mac:text-lg font-normal leading-[20px] lg:leading-[30px]'>
              When you feel prepared, apprise us of a suitable
              <br /> rendezvous to connect with one of our esteemed
              <br /> nursing team members at Fijanhealthcare. Commence <br />
              your journey by clicking the “Register Today” button.
            </p>
            <button className=' px-5 xl:px-7 py-2 md:text-sm lg:text-base flex justify-center items-center rounded-full bg-[#098666] text-white'>
              {/* <HashRouterLink smooth to='#section1'> */} Register Now
              {/* </HashRouterLink> */}
            </button>
          </div>
          <img
            src={Frame}
            alt=''
            className='lg:mr-[6rem] ml-[0.7rem] mt-16 h-[120px] md:h-[155px] object-contain md:mr-[4rem] md:mt-24 lg:mt-16 xl:mt-[72px] mac:mt-32 xl:mr-[10rem]'
          />
          <div className='bg-[#E1F8FF] w-[290px] md:h-[210px] mac:h-[250px]  rounded-lg px-[29px] lg:px-[44px] py-[1.2rem] lg:py-[1.5rem] xl:py-[2rem] mac:py-[2.5rem] absolute z-10 top-52 left-10 md:top-60 lg:top-[276px] xl:top-64 mac:top-80 md:right-1 lg:right-5 md:w-[300px] lg:w-[370px] xl:w-[414px]'>
            <h2 className='text-[#012D4A] text-[22px]  md:text-[28px] mac:text-[32px] font-medium leading-normal'>
              Other Services
            </h2>
            <p className='pt-[24px] pb-[10px] border-b-2 border-[#71C8E4] text-[#098666] font-medium leading-normal md:text-[20px] mac:text-[24px]'>
              Medical Doctor
            </p>
            <p className='pt-[18px] pb-[10px]  text-[#098666] font-medium leading-normal md:text-[20px] mac:text-[24px]'>
              Care Support Worker
            </p>
          </div>
        </article>
      </div>
      <div className='mac:mt-24 md:mt-[5rem] lg:mt-[7rem] mt-[7rem] pb-5 flex flex-col gap-10 md:gap-20 lg:gap-0 justify-center md:flex-row md:justify-between items-center'>
        <img
          src={homecares}
          alt=''
          className='h-[16rem] w-[20rem] md:w-[18.5rem] md:h-[15.5rem] lg:w-[27rem] lg:h-[23rem] xl:w-[35rem] mac:w-[42rem] xl:h-[28rem] mac:h-[32rem]'
        />
        <div className='w-[19.5rem] md:w-[22rem] xl:w-[35rem] lg:w-[27.5rem]'>
          <h4 className='text-[#014470] md:text-left text-center text-[16px] lg:text-[20px] xl:text-[24px] font-semibold leading-normal'>
            What to Expect from Us
          </h4>

          <ul className='list-disc mt-[1.5rem] lg:mt-[2rem] space-y-[1.2rem] lg:space-y-[1.5rem]'>
            <li className='text-[#26465B] font-normal leading-normal text-sm md:text-xs lg:text-base xl:text-lg'>
              Unparalleled Career Guidance
            </li>
            <li className='text-[#26465B] font-normal leading-normal text-sm md:text-xs lg:text-base xl:text-lg'>
              Exquisite Personalized Recruitment Experience
            </li>
            <li className='text-[#26465B] font-normal leading-normal text-sm md:text-xs lg:text-base xl:text-lg'>
              Nursing Opportunities in Various Work Settings
            </li>
            <li className='text-[#26465B] font-normal leading-normal text-sm md:text-xs lg:text-base xl:text-lg'>
              Prompt and Weekly Renumeration
            </li>
            <li className='text-[#26465B] font-normal leading-normal text-sm md:text-xs lg:text-base xl:text-lg'>
              Complimentary DBS Application
            </li>
            <li className='text-[#26465B] pb-3 font-normal leading-normal text-sm md:text-xs lg:text-base xl:text-lg'>
              Esteemed Partner with Leading Healthcare Institutions
            </li>
            {/* <li> */}
            <button className=' px-5 xl:px-7 md:text-sm lg:text-base py-2 flex justify-center items-center rounded-full bg-[#098666] text-white'>
              {/* <HashRouterLink smooth to='#section1'> */} Download our CV
              template
              {/* </HashRouterLink> */}
            </button>
            {/* </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
