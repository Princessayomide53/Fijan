import React from "react";
import Careers from "../../Assets/Careers.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#ffffff] to-[#71C8E4] w-full h-[26rem] pb-[40rem]">
      <div className="max-w-[83rem] mx-auto ">
        <h2 className="text-center pt-[2.5rem] text-[7.5rem] text-[#014470] font-normal leading-[6.3rem] special-font">
          Careers
        </h2>
        <p className="text-[#014470] pt-[1rem] text-center text-[2rem] font-normal leading-normal">
          Nursing and Healthcare Hot jobs
        </p>
        <div className="relative flex flex-col items-center justify-center pt-[3.7rem]">
          <img src={Careers} alt="" />
          <h2 className="absolute special-font text-[5rem] w-full font-normal leading-[4.357rem] top-[10rem] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            Join the team that’s saving lives and <br />
            shaping the future of healthcare
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
