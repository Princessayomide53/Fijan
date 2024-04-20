import React from "react";
import Careers from "../../Assets/Careers.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#ffffff] to-[#71C8E4] w-full h-[13rem] md:h-[18rem] lg:h-[22rem] xl:h-[26rem] mb[5rem] md:mb-[9rem] lg:mb-[9rem] xl:mb-[10rem] mac:mb-[15rem]">
      <div className="mac:max-w-[83rem] md:max-w-[45rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[22rem] mx-auto ">
        <h2 className="text-center pt-[1.5rem] md:pt-[2.5rem] text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem] text-[#014470] font-normal leading-[4rem] lg:leading-[5.8rem] xl:leading-[6.3rem] special-font">
          Careers
        </h2>
        <p className="text-[#014470] md:pt-[1.2rem] lg:pt-[1rem] text-center pt-[0.7rem] text-[1rem] md:text-[1.5rem] lg:text-[2rem] font-normal leading-normal">
          Nursing and Healthcare Hot jobs
        </p>
        <div className="relative flex flex-col items-center justify-center pt-[2.2rem] md:pt-[3rem] mac:pt-[3.7rem]">
          <img
            src={Careers}
            alt=""
            className="object-contain w-[20rem] md:w-[42rem] mac:w-[80rem] lg:w-[55rem] mac:h-[30rem] xl:w-[70rem] xl:h-[28rem]"
          />
          <h2 className="absolute special-font text-[1.3rem] leading-tight md:text-[3rem] lg:text-[3.5rem] xl:text-[5rem] w-full font-normal md:leading-[3rem] lg:leading-[4.357rem] top-[6rem] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            Join the team that’s saving lives and <br />
            shaping the future of healthcare
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
