import React from 'react';

const ReusableHeader = ({ text, title, imageSrc, additionalParagraph }) => {
  return (
    <section className='bg-gradient-to-r from-[#ffffff] to-[#71C8E4] h-[18.5rem] w-full md:h-[21rem] lg:h-[22.5rem] xl:h-[27rem]'>
      <div className='mac:max-w-[83rem] md:max-w-[45rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[22rem] mx-auto '>
        <p className='text-[#098666] text-sm md:text-xl pt-[8.5rem] md:pt-[7.5rem] lg:pt-[9rem] xl:pt-[9.5rem] text-center font-medium leading-[18px] md:leading-[20px]'>
          {text}
        </p>
        <h2 className='text-center text-[3.5rem] md:text-[5.5rem] lg:text-[6rem] xl:text-[7.5rem] text-[#014470] font-normal leading-[3.5rem] md:leading-[4rem] lg:leading-[4.7rem] xl:leading-[4rem] special-font'>
          {title}
        </h2>
        <div className='relative flex flex-col items-center justify-center pt-[1.5rem] md:pt-[3rem] lg:pt-[2rem] xl:pt-[3rem]'>
          <img
            src={imageSrc}
            alt=''
            className='object-contain w-[20rem] md:w-[42rem] mac:w-[80rem] lg:w-[57rem] mac:h-[30rem] xl:w-[70rem] xl:h-[28rem]'
          />
          {/* {additionalParagraph && <p>{additionalParagraph}</p>} */}
        </div>
      </div>
    </section>
  );
};

export default ReusableHeader;
