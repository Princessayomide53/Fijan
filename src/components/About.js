import React from "react";
import "../App.css";
import about from "../Assets/about.png";

const About = () => {
  return (
    <section className="mac:max-w-[83rem] md:max-w-[45rem] pt-[3rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[22rem] mx-auto md:pt-[4rem] lg:pt-[6rem] mac:pt-[8rem] flex flex-col items-center justify-center gap-7 md:flex-row md:justify-around lg:justify-between xl:justify-around">
      <div>
        <h5 className="text-[#098666] text-center md:text-left text-xs md:text-base lg:text-[1.1rem] xl:text-[1.4rem] font-semibold leading-[1.25rem]">
          ABOUT US
        </h5>
        <h2 className="special-font text-[#014470] text-3xl md:text-3xl lg:text-5xl mac:text-7xl xl:text-6xl font-normal leading-normal lg:leading-[3.8rem]">
          Your health means the <br className="hidden md:block" />
          world to us
        </h2>
        <p className="text-[#26465B]  text-xs md:text-sm xl:text-[1.25rem] lg:leading-normal pt-[1rem] md:pt-[2rem] lg:text-sm mac:text-[1.38rem] font-normal mac:leading-[1.8rem]">
          Helping you and your loved one live a healthy,
          <br className="hidden md:block" /> happy and independent life is what
          keeks us on
          <br className="hidden md:block" /> our toes everyday.
          <br />
          <br /> We have a team of trusted and dedicated{" "}
          <br className="hidden md:block" />
          professionals who prioritise your health to give a
          <br className="hidden md:block" />
          quality life.
        </p>
      </div>
      <div>
        <img
          src={about}
          alt=""
          className="object-contain md:w-[18rem] w-[20rem] h-[15rem] md:mt-5 lg:mt-0 md:h-[14.5rem] mac:w-[38.304rem] xl:w-[32.304rem] lg:w-[25rem] lg:h-[23.375rem] xl:h-[27.375rem]"
        />
      </div>
    </section>
  );
};

export default About;
