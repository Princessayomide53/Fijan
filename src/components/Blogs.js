import React from "react";
import Blog1 from "../Assets/Blog1.png";
import Blog2 from "../Assets/Blog2.png";
import Blog3 from "../Assets/Blog3.png";
import { IoArrowForward } from "react-icons/io5";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
const Blogs = () => {
  const blogs = [
    { id: 1, img: Blog1 },
    { id: 2, img: Blog3 },
    { id: 3, img: Blog2 },
  ];
  return (
    <section className="mac:max-w-[83rem] md:max-w-[45rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[22rem] mx-auto pt-[4.5rem] md:pb-[4rem] lg:pb-[6rem]">
      <h5 className="text-center text-[#098666] md:text-base lg:text-[1.2rem] xl:text-[1.38rem] font-semibold leading-[1.25rem] lg:pb-[1rem]">
        NAVIGATING HEALTHCARE INSIGHTS
      </h5>
      <h1 className="text-center special-font md:text-4xl md:leading-normal lg:leading-[3.85rem] font-normal lg:text-5xl xl:text-6xl mac:text-7xl text-[#014470] ">
        Our Blog
      </h1>
      <div className="flex items-center mt-[4rem]">
        {blogs.map((blog, index) => (
          <article className="flex" key={index}>
            <img src={blog.img} alt="" className="bg-opacity-90" />
          </article>
        ))}
      </div>
      <div className="relative ">
        <span className="mx-10 rounded-full bg-white">
          <IoArrowForward className="text-black  text-xl z-20 absolute left-[5rem] -top-[12rem]" />
        </span>
      </div>
      {/* <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide className="">
          <img src={Blog1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={Blog2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={Blog3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={Blog2} alt="" />
        </SwiperSlide>
      </Swiper> */}

      {/* <span className="flex justify-center items-center lg:pt-[4rem] xl:pt-[5rem] mac:pt-[6rem]">
        <div className="xl:w-[60.25rem] lg:w-[50.25rem] mac:w-[70.25rem] lg:h-[28.5rem] xl:h-[32rem] rounded-[3rem] bg-gradient-to-b from-[#0171BB] to-[#71C8E4] lg:p-[3rem] xl:p-[4rem] mac:p-[5rem]">
          <h6 className="text-center text-white text-[1.4rem] font-semibold leading-[1.25rem] pb-[1rem]">
            HOT JOBS
          </h6>
          <h1 className="text-center special-font leading-[3.85rem] font-normal lg:text-5xl xl:text-6xl mac:text-7xl text-white ">
            Nursing and Healthcare Hot jobs
          </h1>
          <p className="text-white text-center text-[1.25rem] mac:text-[1.39rem] font-normal leading-[2.01rem] pt-[4rem]">
            Shape your career in a place where your skills empower others.{" "}
            <br />
            Join Fijan healthcare for a rewarding journey in the healthcare
            excellence
          </p>

          <div className="flex justify-center mt-[6rem]">
            <button className="bg-[#098666] flex gap-3 text-lg font-medium leading-[16px] text-white px-7 py-3 rounded-full">
              Explore Careers
              <IoArrowForward className="text-white text-xl" />
            </button>
          </div>
        </div>
      </span> */}
    </section>
  );
};

export default Blogs;
