import React, { useEffect } from 'react';

const AllJobs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  return (
    <section className='h-full mac:max-w-[83rem] pt-[7.5rem] md:pt-[8.5rem] lg:pt-[10rem] md:max-w-[45rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[20rem] iphone:max-w-[22rem] mx-auto '>
      <h2 className='text-[#014470] text-[42px] special-font md:text-5xl xl:text-[72px] leading-[70px] font-normal'>
        Home Support
      </h2>
      <p className='md:pt-[60px] pt-[30px] w-[20.5rem] iphone:w-[22rem] text-justify md:text-left md:w-full text-[#26465B] text-sm  lg:text-lg font-normal leading-[28px]'>
        A Live-in Care Nurse is a compassionate and dedicated healthcare
        professional who provides personalized and round-
        {/* <br className='hidden md:block' /> */}
        the-clock care to individuals in the comfort of their own homes. They
        offer essential medical assistance and support to
        {/* <br className='hidden md:block' />  */}
        individuals who require ongoing medical attention, such as the elderly,
        those with chronic illnesses, or individuals
        {/* <br className='hidden md:block' /> */}
        recovering from surgeries or injuries.
      </p>
      <h2 className='special-font pt-[50px] md:pt-[80px] xl:pt-[120px] text-center text-[45px] leading-[40px] text-[#014470] md:text-3xl lg:text-5xl mac:text-7xl xl:text-6xl font-normal md:leading-tight lg:leading-[3.8rem]'>
        Apply for this job
      </h2>
      <div className='pt-[3rem] pb-[4.5rem] md:pb-[30px] lg:pt-[4rem] md:max-w-[40rem] lg:max-w-[55rem] xl:max-w-[67rem] mac:max-w-[75rem] mx-auto flex flex-col items-center gap-12 md:flex-row md:justify-between'>
        <form className='mac:space-y-[2.5rem]  w-full space-y-[2.2rem] md:space-y-[2.5rem] lg:space-y-[2.7rem] '>
          <div className='flex flex-col  gap-3'>
            <label
              htmlFor='name'
              className='md:text-base  lg:text-[1.125rem] font-medium leading-[32px] text-[#26465B]'
            >
              Name:{' '}
              <span className='text-[#984429] font-normal leading-[32px] text-sm italic'>
                (Required)
              </span>
            </label>

            <input
              type='text'
              id='name'
              name='name'
              className='border-2 border-[#E2E2E2] pl-5 focus:outline-blue-300  w-full h-[2.5rem] md:h-[4rem] rounded-md'
            />
          </div>
          <div className='flex flex-grow gap-[2.2rem] md:flex-row w-full md:gap-5 xl:gap-20'>
            <div className='flex flex-col gap-3 w-full'>
              <label
                htmlFor='phoneNumber'
                className='md:text-base hidden md:block lg:text-[1.125rem] font-medium leading-[32px] text-[#26465B]'
              >
                Phone Number:{' '}
                <span className='text-[#984429] font-normal leading-[32px] text-sm italic'>
                  (Required)
                </span>
              </label>
              <label
                htmlFor='phoneNumber'
                className='md:text-base block md:hidden  lg:text-[1.125rem] font-medium leading-[32px] text-[#26465B]'
              >
                Tel:{' '}
                <span className='text-[#984429]  font-normal leading-[32px] text-sm italic'>
                  (Required)
                </span>
              </label>
              <input
                type='text'
                id='phoneNumber'
                name='phoneNumber'
                className='border-2 border-[#E2E2E2] focus:outline-blue-400  pl-5 w-full h-[2.5rem] md:h-[4rem] rounded-md'
              />
            </div>
            <div className='flex flex-col gap-3 w-full'>
              <label
                htmlFor='email'
                className='md:text-base  lg:text-[1.125rem] font-medium leading-[32px] text-[#26465B]'
              >
                Email:{' '}
                <span className='text-[#984429] font-normal leading-[32px] text-sm italic'>
                  (Required)
                </span>
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='border-2 border-[#E2E2E2] focus:outline-blue-300  w-full pl-5 h-[2.5rem] md:h-[4rem] rounded-md'
              />
            </div>
          </div>
          <div className='flex flex-col gap-3 w-full'>
            <label
              htmlFor='name'
              className='md:text-base  lg:text-[1.125rem] font-medium leading-[32px] text-[#26465B]'
            >
              Cover Letter{' '}
              <span className='text-[#984429] font-normal leading-[32px] text-sm italic'>
                (Required){' '}
              </span>
            </label>
            <textarea
              name='name'
              className='border-2 border-[#E2E2E2] pl-5 focus:outline-blue-300  w-full h-[8rem] md:h-[12rem]'
            />
          </div>

          <article className='flex flex-col gap-5 md:gap-0 pt-3'>
            <div className='flex flex-col gap-3 '>
              <p className='text-sm font-medium leading-[32px] text-[#26465B]'>
                Upload CV/Resume
              </p>
              <input
                type='file'
                className=''
                // placeholder='choose a file'
              />

              <p className='pt-[2px] text-[11px] leading-normal font-normal text-[#26465B]'>
                Allowed Type(s): .pdf, .doc, .docx
              </p>
            </div>
            <span className='flex gap-7 pt-3 md:pt-5'>
              <input type='checkbox' />

              <p className='text-[#26465B] text-sm font-normal leading-normal'>
                By using this form you agree with the storage and handling of
                your data by this website. *
              </p>
            </span>
            <button
              type='submit'
              className='md:self-start mt-3 md:mt-10 md:px-7 h-[45px] rounded-full bg-[#098666] text-white'
            >
              Submit
            </button>
          </article>
        </form>
      </div>
    </section>
  );
};

export default AllJobs;
