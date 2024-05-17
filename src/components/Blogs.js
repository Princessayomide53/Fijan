import React from 'react';
import Blog1 from '../Assets/Blog1.png';
import Blog2 from '../Assets/Blog2.png';
import Blog3 from '../Assets/Blog3.png';
import blogs1 from '../Assets/blogs1.png';
import blogs2 from '../Assets/blogs2.png';
import blogs3 from '../Assets/blogs3.png';
import { IoArrowForwardSharp, IoArrowBackSharp } from 'react-icons/io5';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

const Blogs = () => {
  const blogs = [
    { id: 1, img: Blog1 },
    { id: 2, img: Blog3 },
    { id: 3, img: Blog2 },
  ];
  return (
    <section className='mac:max-w-[83rem] max-w-[20.5rem] iphone:max-w-[22rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[75rem] pro:max-w-[52rem] md:pt-[3rem] mx-auto pb-[3.5rem] md:pb-[0rem] lg:pb-[2rem] xl:pb-[0rem] mac:pb-[3rem]'>
      <div className='hidden md:block'>
        <h5 className='text-center text-[#098666] text-lg md:text-base lg:text-[1.2rem] xl:text-[1.38rem] font-semibold leading-[1.25rem] '>
          NAVIGATING HEALTHCARE INSIGHTS
        </h5>
        <h1 className='text-center md:pb-[2.8rem] pb-[44.1px] lg:pb-[3.5rem] text-[45px] leading-[40px] special-font md:text-4xl md:leading-tight lg:leading-[3.85rem] font-normal lg:text-5xl xl:text-6xl mac:text-7xl text-[#014470] '>
          Our Blog
        </h1>
        {/* <div className='flex items-center mt-[2.5rem] md:mt-[4rem]'>
        {blogs.map((blog, index) => (
          <article className='flex' key={index}>
            <img src={blog.img} alt='' className='bg-opacity-90' />
          </article>
        ))}
      </div> */}
        {/* <div className="relative ">
        <span className="mx-10 rounded-full bg-white">
          <IoArrowForward className="text-black  text-xl z-20 absolute left-[5rem] -top-[12rem]" />
        </span>
      </div> */}
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          // pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className='swiper_container'
        >
          <SwiperSlide className=''>
            <img src={Blog1} alt='' className='img' />
            <div className='absolute md:top-[12rem] lg:top-[16rem] lg:left-[2rem] md:left-[3rem] xl:left-[3rem] mac:left-0 mac:w-[30rem]  flex justify-center items-center'>
              <h2 className='lg:text-[24px] mac:text-[30px] font-medium  leading-normal text-center text-white'>
                Mental Healthcare In The UK: <br />
                Addressing The Rising <br />
                Concern in 10 Unique Ways
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className=''>
            <img src={Blog2} alt='' className='img' />
            <div className='absolute md:top-[12rem] lg:top-[16rem] lg:left-[2rem] md:left-[3rem] xl:left-[3rem] mac:left-0 mac:w-[30rem]  flex justify-center items-center'>
              <h2 className='lg:text-[24px] mac:text-[30px] font-medium leading-normal text-center text-white'>
                Mental Healthcare In The UK: <br />
                Addressing The Rising <br />
                Concern in 10 Unique Ways
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className=''>
            <img src={Blog3} alt='' className='img' />
            <div className='absolute md:top-[12rem] lg:top-[16rem] mac:w-[30rem] lg:left-[2rem] md:left-[3rem] xl:left-[3rem] mac:left-0  flex justify-center items-center'>
              <h2 className='lg:text-[24px] mac:text-[30px] font-medium  leading-normal text-center text-white'>
                Mental Healthcare In The UK: <br />
                Addressing The Rising <br />
                Concern in 10 Unique Ways
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className=''>
            <img src={Blog2} alt='' className='img' />
            <div className='absolute md:top-[12rem] lg:top-[16rem] mac:w-[30rem] lg:left-[2rem] md:left-[3rem] xl:left-[3rem] mac:left-0 flex justify-center items-center'>
              <h2 className='lg:text-[24px] mac:text-[30px] font-medium leading-normal text-center text-white'>
                Mental Healthcare In The UK: <br />
                Addressing The Rising <br />
                Concern in 10 Unique Ways
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='slider-controler'>
          <div className='swiper-button-prev slider-arrow'>
            <IoArrowBackSharp className='text-black text-2xl' />
          </div>
          <div className='swiper-button-next slider-arrow'>
            <IoArrowForwardSharp className='text-black text-2xl' />
          </div>
          <div className='swiper-pagination'></div>
        </div>

        {/* <span className='flex justify-center items-center lg:pt-[4rem] xl:pt-[5rem] mac:pt-[6rem]'>
        <div className='xl:w-[60.30rem] lg:w-[50.25rem] mac:w-[70.25rem] lg:h-[28.5rem] xl:h-[32rem] rounded-[3rem] bg-gradient-to-b from-[#0171BB] to-[#71C8E4] lg:p-[3rem] xl:p-[4rem] mac:p-[5rem]'>
          <h6 className='text-center text-white text-[1.4rem] font-semibold leading-[1.25rem] pb-[1rem]'>
            HOT JOBS
          </h6>
          <h1 className='text-center special-font leading-[3.85rem] font-normal lg:text-5xl xl:text-6xl mac:text-7xl text-white '>
            Nursing and Healthcare Hot jobs
          </h1>
          <p className='text-white text-center text-[1.25rem] mac:text-[1.39rem] font-normal leading-[2.01rem] pt-[4rem]'>
            Shape your career in a place where your skills empower others.{' '}
            <br />
            Join Fijan healthcare for a rewarding journey in the healthcare
            excellence
          </p>

          <div className='flex justify-center mt-[6rem]'>
            <button className='bg-[#098666] flex gap-3 text-lg font-medium leading-[16px] text-white px-7 py-3 rounded-full'>
              Explore Careers
              <IoArrowForward className='text-white text-xl' />
            </button>
          </div>
        </div>
      </span> */}
      </div>
      <div className='block md:hidden'>
        <h5 className='text-center text-[#098666] pb-2 md:pb-0 text-lg md:text-base lg:text-[1.2rem] xl:text-[1.38rem] font-semibold leading-[1.25rem] '>
          NAVIGATING HEALTHCARE INSIGHTS
        </h5>
        <h1 className='text-center md:pb-[2.8rem] pb-[44.1px] lg:pb-[3.5rem] text-[45px] leading-[40px] special-font md:text-4xl md:leading-tight lg:leading-[3.85rem] font-normal lg:text-5xl xl:text-6xl mac:text-7xl text-[#014470] '>
          Our Blog
        </h1>
        <div className='flex justify-center'>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className='mySwiper'
            spaceBetween={30}
          >
            <SwiperSlide className=''>
              <div className='flex justify-center relative max-w-[19.5rem] mx-auto '>
                <img
                  src={blogs3}
                  alt=''
                  className='w-[254.898px] iphone:w-[284.898px] h-[387px]'
                />

                <div className='absolute top-[16rem] w-[17rem] left-5 flex justify-center items-center'>
                  <h2 className='text-lg font-medium px-2 leading-normal text-center text-white'>
                    Mental Healthcare In The UK: <br />
                    Addressing The Rising Concern in 10 Unique Ways
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex justify-center relative max-w-[19.5rem] mx-auto '>
                <img
                  src={blogs2}
                  alt=''
                  className='w-[254.898px] iphone:w-[284.898px] h-[387px]'
                />

                <div className='absolute top-[16rem] w-[17rem] left-5 flex justify-center items-center'>
                  <h2 className='text-lg font-medium px-2 leading-normal text-center text-white'>
                    Mental Healthcare In The UK: <br />
                    Addressing The Rising Concern in 10 Unique Ways
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex justify-center relative max-w-[19.5rem] mx-auto '>
                <img
                  src={blogs1}
                  alt=''
                  className='w-[254.898px] iphone:w-[284.898px] h-[387px]'
                />

                <div className='absolute top-[16rem] w-[17rem] left-5 flex justify-center items-center'>
                  <h2 className='text-lg font-medium px-2 leading-normal text-center text-white'>
                    Mental Healthcare In The UK: <br />
                    Addressing The Rising Concern in 10 Unique Ways
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
