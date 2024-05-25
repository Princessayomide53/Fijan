import React from 'react';
import line from '../Assets/Line.png';

const Consultation = () => {
  const Consult = [
    {
      id: 1,
      title: 'Understanding you',
      text: 'We begin by understanding your unique needs. This step helps us tailor our services just for you.',
      num: '1',
      img: line,
    },
    {
      id: 2,
      title: 'Crafting your care Journey',
      text: 'We design a custom care plan that fits your needs and preferences, ensuring your care journey is tailored just for you.',
      num: '2',
      img: line,
    },
    {
      id: 3,
      title: 'Discipline',
      text: 'Onces your personalized care plan is set, we match you with a caregiver, starting with your wellness journey with care and support outlined in your plan..',
      num: '3',
    },
  ];
  return (
    <section
      id='section1'
      className='bg-[#E8FAFF] w-full md:h-[55rem] lg:h-[58.5rem] mt-[3rem] mb-[84px] md:mt-0 md:mb-0 md:my-[4rem] xl:mt-[5rem] xl:my-0 xl:mb-[3rem]'
    >
      <div className='mac:max-w-[73rem] md:max-w-[38rem] xl:max-w-[65rem] lg:max-w-[53rem] pro:max-w-[52rem] max-w-[20rem] iphone:max-w-[22rem] mx-auto py-[3rem]'>
        <h5 className='text-[#098666] text-lg text-center md:text-base lg:text-[1.1rem] xl:text-[1.4rem] font-semibold leading-[1.25rem]'>
          SEND US A MESSAGE
        </h5>
        <h2 className='special-font text-center text-[45px] pt-[10px] md:pt-0 leading-[40px] text-[#014470] md:text-3xl lg:text-5xl mac:text-7xl xl:text-6xl font-normal md:leading-tight lg:leading-[3.8rem]'>
          Quick Contact
        </h2>
        <div className='pt-[3rem] lg:pt-[5rem] flex flex-col items-center gap-12 md:flex-row md:justify-between'>
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
                className='border-2 border-[#E2E2E2] pl-5 focus:outline-blue-300 bg-[#E8FAFF] w-full h-[2.5rem] md:h-[4rem] rounded-md'
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
                  className='border-2 border-[#E2E2E2] focus:outline-blue-400 bg-[#E8FAFF] pl-5 w-full h-[2.5rem] md:h-[4rem] rounded-md'
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
                  className='border-2 border-[#E2E2E2] focus:outline-blue-300 bg-[#E8FAFF] w-full pl-5 h-[2.5rem] md:h-[4rem] rounded-md'
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
                className='border-2 border-[#E2E2E2] pl-5 focus:outline-blue-300 bg-[#E8FAFF] w-full h-[8rem] md:h-[12rem]'
              />
            </div>

            <article className='flex flex-col gap-10 md:gap-0 md:flex-row md:justify-between md:items-center pt-3'>
              <div className='flex flex-col gap-3 '>
                <p className='md:text-base lg:text-[1.125rem] font-medium leading-[32px] text-[#26465B]'>
                  Add Your CV
                </p>
                <input
                  type='file'
                  className='file:mr-3 file:bg-white file:px-5 file:py-2 file:rounded-lg file:text-[#26465B] file:border-[2px] file:border-[#84C3B3]'
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

      {/* <div className='mac:max-w-[83rem] md:max-w-[45rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[22rem] mx-auto py-[3rem]'>
        <h5 className='text-[#098666] text-lg text-center md:text-base lg:text-[1.1rem] xl:text-[1.4rem] font-semibold leading-[1.25rem]'>
          OUR SIMPLE STEP PROCESS
        </h5>
        <h2 className='special-font text-center text-[45px] pt-[10px] md:pt-0 leading-[40px] text-[#014470] md:text-3xl lg:text-5xl mac:text-7xl xl:text-6xl font-normal md:leading-tight lg:leading-[3.8rem]'>
          From Consultation to Comfort,
          <br className='hidden md:block' /> Explore Our Streamlined Care Steps
        </h2>
        <div className='pt-[3rem] flex flex-col items-center gap-12 md:flex-row md:justify-between'>
          <div className='xl:w-[43%] lg:w-[45%] md:w-[43%] w-[20.5rem]'>
            {Consult.map((con, index) => (
              <>
                <article className='flex items-center gap-5' key={index}>
                  <h3 className='text-[#014470] special-font text-4xl lg:text-7xl font-normal leading-normal'>
                    {con.num}
                  </h3>
                  <span className='flex flex-col md:gap-3'>
                    <h5 className='text-[#014470] special-font text-[28px] lg:text-[1.75rem] font-normal leading-normal'>
                      {con.title}
                    </h5>
                    <p className='text-[#26465B] whitespace-pre-wrap text-[15px] lg:text-[13px] xl:text-[15px] font-normal leading-[1.38rem]'>
                      {con.text}
                    </p>
                  </span>
                </article>{' '}
                <div className='flex items-center justify-center'>
                  <img src={con.img} alt='' />
                </div>
              </>
            ))}
          </div>{' '}
          <div className='lg:w-[48.5%] w-[20rem] xl:w-[45%] lg:mt-5 xl:mt-0 md:w-[50%]'>
            <form className='mac:space-y-[2.5rem] space-y-[2.2rem] md:space-y-[2.5rem] lg:space-y-[2.7rem] '>
              <div className='flex flex-col gap-3'>
                <label
                  htmlFor='name'
                  className='md:text-base lg:md:text-base lg:text-[1.25rem] font-medium leading-normal text-[#26465B]'
                >
                  Name:
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='border-b-2 border-[#098666] pl-5 focus:outline-blue-300 bg-[#E8FAFF] w-full h-[2.5rem] md:h-[4rem] rounded-md'
                />
              </div>
              <div className='flex  gap-[2.2rem] md:flex-row md:gap-5 xl:justify-between'>
                <div className='flex flex-col gap-3'>
                  <label
                    htmlFor='phoneNumber'
                    className='md:text-base lg:text-[1.25rem] font-medium leading-normal text-[#26465B]'
                  >
                    Phone Number:
                  </label>
                  <input
                    type='text'
                    id='phoneNumber'
                    name='phoneNumber'
                    className='border-b-2 border-[#098666] focus:outline-blue-400 bg-[#E8FAFF] pl-5 w-full h-[2.5rem] md:h-[4rem] rounded-md'
                  />
                </div>
                <div className='flex flex-col gap-3'>
                  <label
                    htmlFor='email'
                    className='md:text-base lg:text-[1.25rem] font-medium leading-normal text-[#26465B]'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='border-b-2 border-[#098666] focus:outline-blue-300 bg-[#E8FAFF] w-full pl-5 h-[2.5rem] md:h-[4rem] rounded-md'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-3'>
                <label
                  htmlFor='name'
                  className='md:text-base lg:text-[1.25rem] font-medium leading-normal text-[#26465B]'
                >
                  Message:
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='border-b-2 border-[#098666] pl-5 focus:outline-blue-300 bg-[#E8FAFF] w-full h-[2.5rem] md:h-[4rem] rounded-md'
                />
              </div>

              <div className='w-full'>
                <button
                  type='submit'
                  className='w-full h-[54px] rounded-full bg-[#098666] text-white'
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Consultation;
