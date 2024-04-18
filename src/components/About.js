import React from "react";
import "../App.css";
import about from "../Assets/about.png";

const About = () => {
  return (
    <section className="max-w-[83rem] mx-auto pt-[8rem] flex justify-around">
      <div>
        <h5 className="text-[#098666] text-[1.4rem] font-semibold leading-[1.25rem] pb-[1.3rem]">
          ABOUT US
        </h5>
        <h2 className="special-font text-[#014470] text-7xl font-normal leading-[3.8rem]">
          Your health means the <br />
          world to us
        </h2>
        <p className="text-[#26465B] pt-[2rem] text-[1.38rem] font-normal leading-[1.8rem]">
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
        <img src={about} alt="" />
      </div>
    </section>
  );
};

export default About;
