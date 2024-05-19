import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundUp } from 'react-icons/io';

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setIsVisible(scrollTop > 700);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      {' '}
      {isVisible && (
        <div className='relative'>
          {' '}
          <IoIosArrowRoundUp
            onClick={scrollToTop}
            className='fixed cursor-pointer top-[38rem] z-20 right-10 bg-[#012D4A] text-white text-sm md:text-base w-9 h-9  md:w-11 md:h-11 rounded-lg'
          />
        </div>
      )}{' '}
    </div>
  );
};

export default Scroll;
