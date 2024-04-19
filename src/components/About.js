import React from "react";
import "../App.css";
import about from "../Assets/about.png";

const About = () => {
  return (
    <section className="mac:max-w-[83rem] md:max-w-[45rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[22rem] mx-auto  md:pt-[6rem] mac:pt-[8rem] flex md:justify-around lg:justify-between xl:justify-around">
      <div>
        <h5 className="text-[#098666] md:text-base lg:text-[1.1rem] xl:text-[1.4rem] font-semibold leading-[1.25rem] pb-[1.3rem]">
          ABOUT US
        </h5>
        <h2 className="special-font text-[#014470] md:text-3xl lg:text-5xl mac:text-7xl xl:text-6xl font-normal leading-[3.8rem]">
          Your health means the <br />
          world to us
        </h2>
        <p className="text-[#26465B] md:text-sm xl:text-[1.25rem] lg:leading-normal pt-[2rem] lg:text-sm mac:text-[1.38rem] font-normal mac:leading-[1.8rem]">
          Helping you and your loved one live a healthy,
          <br /> happy and independent life is what keeks us on
          <br /> our toes everyday.
          <br />
          <br /> We have a team of trusted and dedicated <br />
          professionals who prioritise your health to give a<br />
          quality life.
        </p>
      </div>
      <div>
        <img
          src={about}
          alt=""
          className="object-contain md:w-[18rem] md:h-[23rem] mac:w-[38.304rem] xl:w-[32.304rem] lg:w-[25rem] lg:h-[23.375rem] xl:h-[27.375rem]"
        />
      </div>
    </section>
  );
};

export default About;
