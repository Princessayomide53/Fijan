import React from "react";
import "../App.css";
import Mask1 from "../Assets/Mask1.png";
import Mask2 from "../Assets/Mask2.png";
import Mask3 from "../Assets/Mask3.png";

const Services = () => {
  const services = [
    {
      id: 1,
      img: Mask1,
      title: "home care",
      text: "learn more",
    },
    {
      id: 1,
      img: Mask2,
      title: "home care",
      text: "learn more",
    },
    {
      id: 1,
      img: Mask3,
      title: "mental health care",
      text: "learn more",
    },
  ];
  return (
    <section className="w-full max-w-[83rem] mx-auto pt-[8rem]">
      <h5 className="text-[#098666] uppercase text-center text-[1.25rem] font-semibold leading-[1.25rem]">
        Our services
      </h5>

      <h2 className="special-font text-[#014470] text-center text-[4.5rem] font-normal leading-[4.5rem]">
        What we do
      </h2>
      <div className="flex justify-between pt-[4.1rem]">
        {services.map((item, index) => (
          <div className="" key={index}>
            <img src={item.img} alt="" />
            {/* <div className="bg-gradient-to-r from-gray-600 to-black bg-opacity-90 w-[24rem] h-[15rem]"></div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
