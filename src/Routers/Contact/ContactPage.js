import React from 'react';

const ContactPage = () => {
  return (
    <section className='mac:pt-[26rem] md:pt-[13rem] pt-[10rem] lg:pt-[18rem] xl:pt-[23rem] pb-[5rem] md:pb-[7.8rem] max-w-[20.5rem] iphone:max-w-[21rem] md:max-w-[38rem] lg:max-w-[48rem] xl:max-w-[55rem] mac:max-w-[65rem] mx-auto'>
      <h5 className=' text-[#26465B] text-[14px] md:text-[1rem] lg:text-[1.11rem] xl:text-[1.25rem] font-normal md:leading-[20px] lg:leading-[30px] pb-[90px] md:pb-[75px] lg:pb-[108px]'>
        We’re here to assist you with your recruitment needs. Contact our team
        today to discuss how we can support
        <br className='hidden mac:block' /> your organisation in finding
        qualified and compassionate care workers. Call us or email us for your
        carers <br className='hidden mac:block' /> recruitment. We look forward
        to hearing from you.
      </h5>
      <div className='mac:max-w-[73rem] bg-white md:max-w-[38rem] xl:max-w-[65rem] lg:max-w-[53rem] pro:max-w-[52rem] max-w-[20rem] iphone:max-w-[22rem] mx-auto'>
        <h5 className='text-[#098666] text-base pb-[12px] md:pb-0 text-center md:text-base lg:text-[1.1rem] xl:text-[1.4rem] font-semibold leading-[1.25rem]'>
          SEND US A MESSAGE
        </h5>
        <h2 className='special-font text-center text-[42px] pt-[7px] md:pt-0 leading-[40px] text-[#014470] md:text-3xl lg:text-5xl mac:text-7xl xl:text-6xl font-normal md:leading-tight lg:leading-[3.8rem]'>
          Quick Contact
        </h2>
        <div className='pt-[3.1rem] lg:pt-[5rem] flex flex-col items-center gap-12 md:flex-row md:justify-between'>
          <form className='mac:space-y-[2.5rem] w-full space-y-[2.2rem] md:space-y-[2.5rem] lg:space-y-[2.7rem] '>
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
                className='border-2 border-[#E2E2E2] pl-5 focus:outline-blue-300  w-full h-[70px] bg-white md:h-[4rem] rounded-md'
              />
            </div>
            <div className='flex flex-col flex-grow gap-[2.2rem] md:flex-row w-full md:gap-5 xl:gap-20'>
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
                  className='md:text-base block md:hidden lg:text-[1.125rem] font-medium leading-[32px] text-[#26465B]'
                >
                  Tel:{' '}
                  <span className='text-[#984429] font-normal leading-[32px] text-sm italic'>
                    (Required)
                  </span>
                </label>
                <input
                  type='text'
                  id='phoneNumber'
                  name='phoneNumber'
                  className='border-2 border-[#E2E2E2] focus:outline-blue-400  pl-5 w-full h-[70px] bg-white md:h-[4rem] rounded-md'
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
                  className='border-2 border-[#E2E2E2] focus:outline-blue-300  w-full pl-5 h-[70px] bg-white md:h-[4rem] rounded-md'
                />
              </div>
            </div>
            <div className='flex flex-col gap-3 w-full'>
              <label
                htmlFor='name'
                className='md:text-base  lg:text-[1.125rem] font-medium leading-[32px] text-[#26465B]'
              >
                Introduce yourself:{' '}
                <span className='text-[#984429] font-normal leading-[32px] text-sm italic'>
                  (Required){' '}
                </span>
              </label>
              <textarea
                name='name'
                className='border-2 border-[#E2E2E2] pl-5 focus:outline-blue-300  w-full h-[180px] md:h-[12rem]'
              />
            </div>

            <article className='flex flex-col gap-10 md:gap-0 md:flex-row md:justify-between md:items-center pt-3'>
              <div className='flex flex-col gap-3 '>
                <p className='md:text-base lg:text-[1.125rem] font-medium leading-[32px] text-[#26465B]'>
                  Add Your CV
                </p>
                <input
                  type='file'
                  className=''
                  // placeholder='choose a file'
                />

                <p className='pt-1 text-[11px] leading-normal font-normal text-[#26465B]'>
                  Max. file size: 2 MB.
                </p>
              </div>

              <button
                type='submit'
                className='px-7 h-[45px] rounded-full bg-[#098666] text-white'
              >
                Submit
              </button>
            </article>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
