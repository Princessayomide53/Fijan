import React from "react";
import Contact from "../../Assets/Contact.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#ffffff] to-[#71C8E4] w-full h-[26rem]">
      <div className="max-w-[83rem] mx-auto ">
        <h2 className="text-center pt-[2.5rem] text-[7.5rem] text-[#014470] font-normal leading-[6.3rem] special-font">
          Contact Us
        </h2>
        <div className="relative flex flex-col items-center justify-center pt-[3.7rem]">
          <img src={Contact} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
