import React from "react";
import care from "../Assets/care.png";
import "../App.css";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r  from-[#ffffff] to-[#71C8E4] w-full h-screen">
      <div className="max-w-[83rem] mx-auto flex justify-between">
        <div className="pt-[6.3rem]">
          <h2 className="text-[#014470] special-font text-[6rem] font-normal leading-[100px]">
            Quality{" "}
            <span className="text-[#098666]">
              healthcare
              <br />{" "}
            </span>
            for a healthy you
          </h2>{" "}
          <p className="text-[#014470] pt-8 text-[1.257rem] font-normal leading-[1.75rem]">
            At Fijan, we are more than just a healthcare agency.we are
            <br /> beacon of trust, dedication, and clinical xcellence across
            <br /> UK. We have a team of trusted and dedicated professionals
            <br /> who priortize your health to give a quality life.
          </p>
          <button className="px-7 py-[10px] mt-14 flex justify-center items-center rounded-full bg-[#098666] text-white">
            Get Started
          </button>
        </div>
        <div>
          <img
            src={care}
            alt=""
            className="w-[47.083rem] h-[51.525rem] -mt-[8rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
