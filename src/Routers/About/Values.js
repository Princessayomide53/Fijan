import React from 'react';
import Icon from '../../Assets/Icon.png';

const Values = () => {
  const values = [
    {
      id: 1,
      title: 'Discipline',
      text: 'Lorem ipsum dolor sit amet consectetur. Viverra gravida consectetur duis lacinia. Varius nec non ultrices pellentesque in imperdiet. Sagittis elementum pharetra nisi.',
    },
    {
      id: 2,
      title: 'Hardwork',
      text: 'Lorem ipsum dolor sit amet consectetur. Viverra gravida consectetur duis lacinia. Varius nec non ultrices pellentesque in imperdiet. Sagittis elementum pharetra nisi.',
    },
    {
      id: 3,
      title: 'Honesty',
      text: 'Lorem ipsum dolor sit amet consectetur. Viverra gravida consectetur duis lacinia. Varius nec non ultrices pellentesque in imperdiet. Sagittis elementum pharetra nisi.',
    },
    {
      id: 4,
      title: 'Mutual Respect',
      text: 'Lorem ipsum dolor sit amet consectetur. Viverra gravida consectetur duis lacinia. Varius nec non ultrices pellentesque in imperdiet. Sagittis elementum pharetra nisi.',
    },
  ];
  return (
    <section className='mac:max-w-[83rem] md:max-w-[45rem] xl:max-w-[75rem] lg:max-w-[60rem] pro:max-w-[52rem] max-w-[22rem] mx-auto pt-[3rem] md:pt-[4rem] lg:pt-[5rem]'>
      <h5 className='text-[#098666] text-center text-base lg:text-[1.38rem] font-semibold leading-[1.58rem]'>
        OUR CORE VALUES
      </h5>
      <h3 className='special-font text-3xl text-center leading-normal md:text-[2.5rem] text-[#014470] lg:text-[3.2rem] mac:text-[4.5rem] font-normal md:leading-[4.4rem]'>
        Exquisite Care, Exceptional Values
      </h3>
      <article className='grid grid-cols-1 md:grid-cols-2 gap-[3rem] place-items-center pb-[2rem] pt-[2rem] md:pt-[3rem] lg:pt-[4.5rem] md:pb-[4rem] lg:pb-[6rem]'>
        {values.map((val, index) => (
          <div
            key={index}
            className='shadow-md h-[9.3rem] lg:w-[25.75rem] xl:w-[34.75rem] px-[0.7rem] mac:w-[36.75rem] md:px-[0.75rem] py-[0.75rem] lg:px-[1rem] xl:px-[2rem] lg:py-[1rem] rounded-xl md:h-[11.125rem] lg:h-[11.225rem] mac:h-[10.125rem]'
          >
            <div className='flex gap-5 md:gap-5'>
              <div className='w-[120px] h-[120px] md:w-[150px] md:h-[150px] mt-7'>
                <img src={Icon} alt='' className=' object-fill' />
              </div>
              <div className='flex flex-col md:gap-y-2 lg:gap-y-3 xl:gap-y-5'>
                <h2 className='text-[#014470] text-xl special-font md:text-[18px] lg:text-[20px]  xl:text-[1.75rem] leading-normal'>
                  {val.title}
                </h2>
                <p className='text-[#26465B] text-[10.5px] md:text-xs lg:text-[13px] xl:text-[0.9375rem] leading-[22.4px] lg:leading-[1.4rem]'>
                  {val.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Values;
