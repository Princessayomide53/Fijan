import React from 'react';
import Frame from '../../Assets/Frame.png';
import homecares from '../../Assets/homecares.png';
import { HashLink as HashRouterLink } from 'react-router-hash-link';

const Services = () => {
  return (
    <section className='mac:max-w-[83rem] pb-[3rem] md:max-w-[45rem] xl:max-w-[75rem] lg:max-w-[60rem] pro:max-w-[52rem] max-w-[22rem] mx-auto '>
      <div className='md:mt-[16rem] mt-[11.5rem] lg:mt-[18rem] xl:mt-[22rem] mac:mt-[26rem] flex flex-col gap-5  md:gap-8 lg:gap-0 md:flex-row md:justify-between'>
        <span>
          <p className='text-[#098666] text-center pb-[12px] md:pb-0 md:text-left font-medium leading-[20px]'>
            JOB SEEKERS - MEDICAL DOCTORS
          </p>
          <h3 className='text-[#014470] text-center md:text-left text-3xl md:text-4xl special-font lg:text-5xl lg:leading-[35px] xl:text-6xl mac:text-7xl font-normal xl:leading-[45px] mac:leading-[60px]'>
            Need to care
          </h3>
          <p className='pt-[38px] md:pt-[2.5rem] text-[14px] w-[20.5rem] iphone:w-[22rem] leading-[28px] mx-auto md:mx-0 md:text-[12px] md:w-[20rem] lg:w-full flex flex-wrap text-[#26465B] lg:text-sm xl:text-base mac:text-lg font-normal md:leading-normal'>
            Finding a job in care can prove a daunting experience especially for
            <br className='hidden lg:block' />
            those looking to enter the sector for the first time. There are a
            whole <br className='hidden lg:block' />
            host of checks and processes to complete before you are eligible to
            <br className='hidden lg:block' />
            work in care and sometimes the whole experience can be over
            <br className='hidden lg:block' />
            complicated and drawn out.
            <br className='hidden lg:block' /> At Careworkers UK, we are here to
            help you find your next care job in
            <br className='hidden lg:block' /> the most simple and manageable
            way. From the outset, we have the
            <br className='hidden lg:block' /> tools and experience to judge
            whether working in care is right for you{' '}
            <br className='hidden lg:block' />
            and with a transparent approach you will always know exactly where
            <br className='hidden lg:block' />
            you stand.
            <br className='hidden lg:block' /> If we feel you are suited to
            working in care, we will support and hold
            <br className='hidden lg:block' /> your hand through the entire
            recruitment process, giving you advice
            <br className='hidden lg:block' /> and guidance so you can enter
            this sector with minimal fuss.
          </p>
          <h5 className='pt-[30px] pb-[18px] text-[#014470] md:text-[16.5px] lg:text-[22px] leading-normal font-semibold'>
            Experienced Career
          </h5>
          <p className='text-[#26465B]  text-[14px]  leading-[28px] md:w-[21rem] lg:w-full lg:text-sm xl:text-base mac:text-lg font-normal md:leading-[20px] lg:leading-[30px]'>
            If you’re an experienced carer and it’s a change of scenery you’re
            <br className='hidden lg:block' />
            looking for, speak to the recruitment team today who’ll be able to
            <br className='hidden lg:block' />
            advise you on the opportunities we have available or see the current
            <br className='hidden lg:block' />
            jobs we have available below.
          </p>
        </span>
        <article className='relative mt-7 lg:mt-9 xl:mt-11 mac:mt-14'>
          <div>
            <h5 className='text-[#014470] font-semibold text-[26px] text-center md:text-left leading-[40px] md:text-lg lg:text-[22px] xl:text-[32px] md:leading-[30px]'>
              Join us Today and Unveil your Future
            </h5>

            <p className='lg:py-[24px] pt-[48px] pb-[32px] md:py-[18px] mac:py-[30px] text-[#26465B]  md:w-[20rem] lg:w-full md:text-[12px] text-[14px] leading-[28px] lg:text-sm xl:text-base mac:text-lg font-normal md:leading-[20px] lg:leading-[30px]'>
              When you feel prepared, apprise us of a suitable
              <br className='hidden md:block' /> rendezvous to connect with one
              of our esteemed
              <br className='hidden md:block' /> nursing team members at
              Fijanhealthcare. Commence <br className='hidden md:block' />
              your journey by clicking the “Register Today” button.
            </p>
            <HashRouterLink smooth to='#section1'>
              {' '}
              <div className='flex'>
                <button className='flex-grow md:flex-grow-0 px-5 xl:px-7 py-2 md:text-sm lg:text-base flex justify-center items-center rounded-full bg-[#098666] text-white'>
                  {/* <HashRouterLink smooth to='#section1'> */} Register Now
                </button>
              </div>
            </HashRouterLink>
          </div>
          <img
            src={Frame}
            alt=''
            className='lg:mr-[6rem] ml-[0.7rem] mt-[90px] h-[120px] md:h-[150px] object-contain md:mr-[4rem] md:mt-[87px] lg:mt-16 xl:mt-[72px] mac:mt-32 xl:mr-[10rem]'
          />
          <div className='bg-[#E1F8FF] w-[300px] md:h-[210px] mac:h-[250px]  rounded-lg px-[29px] lg:px-[44px] py-[1.2rem] lg:py-[1.5rem] xl:py-[2rem] mac:py-[2.5rem] absolute z-10 top-[400px] left-10 md:top-60 lg:top-[276px] xl:top-64 mac:top-80 md:right-1 lg:right-5 md:w-[300px] lg:w-[370px] xl:w-[414px]'>
            <h2 className='text-[#012D4A] text-[22px]  md:text-[28px] mac:text-[32px] font-medium leading-normal'>
              Other Services
            </h2>
            <p className='pt-[24px] pb-[10px] border-b-2 border-[#71C8E4] text-[#098666] font-medium leading-normal md:text-[20px] mac:text-[24px]'>
              Nurses
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
        <div className='w-[19.5rem] md:w-[22rem] mx-auto xl:w-[35rem] lg:w-[27.5rem]'>
          <h4 className='text-[#014470] md:text-left text-center text-[27px] lg:text-[20px] xl:text-[24px] font-semibold leading-normal'>
            What to Expect from Us
          </h4>

          <ul className='list-disc  mt-[1.5rem] lg:mt-[2rem] space-y-[1.2rem] lg:space-y-[1.5rem]'>
            <li className='text-[#26465B] font-normal leading-normal text-sm md:text-xs lg:text-base xl:text-lg'>
              A dedicated and professional recruitment team
            </li>
            <li className='text-[#26465B] font-normal leading-normal text-sm md:text-xs lg:text-base xl:text-lg'>
              Expert careers guidance and development
            </li>
            <li className='text-[#26465B] font-normal leading-normal text-sm md:text-xs lg:text-base xl:text-lg'>
              Ongoing support
            </li>
            <li className='text-[#26465B] font-normal leading-normal text-sm md:text-xs lg:text-base xl:text-lg'>
              Excellent understanding of the care sector
            </li>
            <li className='text-[#26465B] font-normal leading-normal text-sm md:text-xs lg:text-base xl:text-lg'>
              Commitment to best recruitment practices
            </li>
            <li className='text-[#26465B] pb-3 font-normal leading-normal text-sm md:text-xs lg:text-base xl:text-lg'>
              Esteemed Partner with Leading Healthcare Institutions
            </li>
            {/* <li> */}
            <div className='flex'>
              <button className='px-5 flex-grow md:px-5 md:flex-grow-0 xl:px-7 md:text-sm lg:text-base py-2 flex justify-center items-center rounded-full bg-[#098666] text-white'>
                {/* <HashRouterLink smooth to='#section1'> */} Download our CV
                template
                {/* </HashRouterLink> */}
              </button>
            </div>
            {/* </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
