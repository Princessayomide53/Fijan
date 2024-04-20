import React from "react";
import Contact from "../../Assets/Contact.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#ffffff] to-[#71C8E4] h-[12rem] w-full md:h-[18rem] xl:h-[26rem]">
      <div className="mac:max-w-[83rem] md:max-w-[45rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[22rem] mx-auto ">
        <h2 className="text-center pt-[1.5rem] md:pt-[2.5rem] text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem] text-[#014470] font-normal leading-[4rem] lg:leading-[5.2rem] xl:leading-[6.3rem] special-font">
          Contact Us
        </h2>
        <div className="relative flex flex-col items-center justify-center pt-[2.5rem] md:pt-[3rem] lg:pt-[3rem] xl:pt-[3.8rem] ">
          <img
            src={Contact}
            alt=""
            className="object-contain w-[20rem] md:w-[42rem] mac:w-[80rem] lg:w-[57rem] mac:h-[30rem] xl:w-[70rem] xl:h-[28rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
