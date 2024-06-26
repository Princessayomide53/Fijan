import React from 'react';

const HealthCare = () => {
  const jobs = [
    {
      id: 1,
      title: 'HEALTHCARE ASSISTANT',
      pay: '$10.42',
      text: 'Sutton Coldfield',
      description:
        'A beautiful Nursing home in the leafy town of Sutton Coldfield, sitting on bus and tarain routesiffering regular hours to experienced staff',
      details: 'SEE FULL DETAILS HERE',
    },
    {
      id: 2,
      title: 'HEALTHCARE ASSISTANT',
      pay: '$10.42',
      text: 'Sutton Coldfield',
      description:
        'A beautiful Nursing home in the leafy town of Sutton Coldfield, sitting on bus and tarain routesiffering regular hours to experienced staff',
      details: 'SEE FULL DETAILS HERE',
    },
    {
      id: 3,
      title: 'HEALTHCARE ASSISTANT',
      pay: '$10.42',
      text: 'Sutton Coldfield',
      description:
        'A beautiful Nursing home in the leafy town of Sutton Coldfield, sitting on bus and tarain routesiffering regular hours to experienced staff',
      details: 'SEE FULL DETAILS HERE',
    },
  ];

  const nurses = [
    {
      id: 1,
      title: 'Support Worker',
      pay: '$10.42',
      text: 'Sutton Coldfield',
      description:
        'A beautiful Nursing home in the leafy town of Sutton Coldfield, sitting on bus and tarain routesiffering regular hours to experienced staff',
      details: 'SEE FULL DETAILS HERE',
    },
    {
      id: 2,
      title: 'Support Worker',
      pay: '$10.42',
      text: 'Sutton Coldfield',
      description:
        'A beautiful Nursing home in the leafy town of Sutton Coldfield, sitting on bus and tarain routesiffering regular hours to experienced staff',
      details: 'SEE FULL DETAILS HERE',
    },
    {
      id: 3,
      title: 'Support Worker',
      pay: '$10.42',
      text: 'Sutton Coldfield',
      description:
        'A beautiful Nursing home in the leafy town of Sutton Coldfield, sitting on bus and tarain routesiffering regular hours to experienced staff',
      details: 'SEE FULL DETAILS HERE',
    },
  ];
  return (
    <section className='mac:max-w-[80rem] md:max-w-[45rem] lg:max-w-[57rem] xl:max-w-[65rem] pro:max-w-[52rem] max-w-[22rem] mx-auto pt-[0rem] md:pt-[0rem] mac:pt-[0rem] mac:pb-[8.5rem]'>
      {/* <h1 className='text-center md:text-left md:px-2 xl:px-7 mac:px-0 special-font text-3xl md:text-4xl leading-normal lg:leading-[3.85rem] font-normal lg:text-5xl xl:text-6xl mac:text-[3.5rem] text-[#014470] '>
        Healthcare Assistant
      </h1> */}

      <div className='flex flex-col justify-center items-center gap-10 md:gap-0 md:flex-row md:justify-between xl:justify-around py-[2rem] md:py-[2.5rem] mac:justify-between lg:py-[3.7rem] xl:py-[3.5rem]'>
        {jobs.map((job) => (
          <div
            key={job.id}
            className='md:w-[12.8375rem] w-[16rem] h-[17rem] md:h-[18.5375rem] lg:w-[17.5375rem] py-[1rem] xl:w-[17.9375rem] mac:w-[19.9375rem] xl:h-[22.575rem] lg:h-[22.375rem] bg-[#E1F8FF] rounded-xl px-[1.2rem] md:py-[1.2rem] lg:py-[1.7rem]'
          >
            <h4 className='text-[#0171BB] pb-[0.35rem] lg:pb-[1rem] md:pb-[0.5rem] mac:pb-[1.5rem] md:text-[12px] lg:text-[1rem] mac:text-[1.25rem] font-bold leading-[1.25rem]'>
              {job.title}
            </h4>
            <p className='text-[#26465B] pb-[0.8rem] text-[12.5px] lg:text-base font-light leading-[1.25rem]'>
              {job.pay}
            </p>{' '}
            <p className='text-[#26465B] text-[12.5px] pb-[0.9rem] lg:text-base md:pb-[0.9rem] lg:pb-[1.2rem] font-light leading-[1.25rem] border-b-[1px] border-[#26465B4D]'>
              {job.text}
            </p>
            <p className='text-[#26465B] py-[0.9rem] lg:py-[1.2rem] text-[11.5px] text-justify lg:text-base font-light leading-[1.35rem]'>
              {job.description}
            </p>
            <p className='text-[#0171BB] lg:pt-[0.8rem] pt-[1rem] xl:pt-[1rem] underline text-xs lg:text-sm xl:text-base font-light leading-[1.35rem]'>
              {job.details}
            </p>
          </div>
        ))}
      </div>
      <div className='pt-[0rem]'>
        <h1 className='text-center md:text-left md:px-2 xl:px-7 mac:px-0 special-font text-3xl md:text-4xl leading-normal lg:leading-[3.85rem] font-normal lg:text-5xl xl:text-6xl mac:text-[3.5rem] text-[#014470] '>
          Support Worker
        </h1>
        <div className='flex flex-col justify-center items-center gap-10 md:gap-0 md:flex-row md:justify-between xl:justify-around py-[2rem] md:pt-[2.5rem] mac:justify-between lg:py-[3.7rem] xl:py-[3.5rem]'>
          {nurses.map((jobs) => (
            <div
              key={jobs.id}
              className='md:w-[12.8375rem] w-[16rem] h-[17rem] md:h-[18.5375rem] lg:w-[17.5375rem] py-[1rem] xl:w-[17.9375rem] mac:w-[19.9375rem] xl:h-[22.575rem] lg:h-[22.375rem] bg-[#098666] rounded-xl px-[1.2rem] md:py-[1.2rem] lg:py-[1.7rem]'
            >
              <h4 className='text-white pb-[0.35rem] lg:pb-[1rem] md:pb-[0.5rem] mac:pb-[1.5rem] md:text-[12px] lg:text-[1rem] mac:text-[1.25rem] font-bold leading-[1.25rem]'>
                {jobs.title}
              </h4>
              <p className='text-white pb-[0.8rem] text-[12.5px] lg:text-base font-light leading-[1.25rem]'>
                {jobs.pay}
              </p>{' '}
              <p className='text-white text-[12.5px] pb-[0.9rem] lg:text-base md:pb-[0.9rem] lg:pb-[1.2rem] font-light leading-[1.25rem] border-b-[1px] border-white'>
                {jobs.text}
              </p>
              <p className='text-white py-[0.9rem] lg:py-[1.2rem] text-[11.5px] text-justify lg:text-base font-light leading-[1.35rem]'>
                {jobs.description}
              </p>
              <p className='text-white lg:pt-[0.8rem] pt-[1rem] xl:pt-[1rem] underline text-xs lg:text-sm xl:text-base font-light leading-[1.35rem]'>
                {jobs.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthCare;
