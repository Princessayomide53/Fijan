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
    <section className="max-w-[83rem] mx-auto pt-[4.5rem] pb-[8rem]">
      <h5 className="text-center text-[#098666] text-[1.4rem] font-semibold leading-[1.25rem] pb-[1rem]">
        NAVIGATING HEALTHCARE INSIGHTS
      </h5>
      <h1 className="text-center special-font leading-[3.85rem] font-normal text-7xl text-[#014470] ">
        Our Blog
      </h1>
      <div className="flex items-center mt-[6rem]">
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
    </section>
  );
};

export default Blogs;
