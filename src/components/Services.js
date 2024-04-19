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
    <section className="w-full mac:max-w-[83rem] md:max-w-[45rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[22rem] lg:max-w-[60rem] mx-auto md:pt-[4rem] xl:pt-[5rem] mac:pt-[6rem]">
      <h5 className="text-[#098666] uppercase text-center md:text-base lg:text-[1.25rem] font-semibold leading-[1.25rem]">
        Our services
      </h5>

      <h2 className="special-font text-[#014470] text-center md:text-[3rem] lg:text-[4.5rem] font-normal md:leading-normal lg:leading-[4.5rem]">
        What we do
      </h2>
      <div className="flex justify-between md:pt-[2.5rem] lg:pt-[4rem]">
        {services.map((item, index) => (
          <div className="" key={index}>
            <img
              src={item.img}
              alt=""
              className="mac:w-[25.8125rem] md:w-[13.5125rem] lg:w-[17.8125rem] lg:h-[21.75rem] xl:w-[22.8125rem] xl:h-[28.75rem] mac:h-[30.75rem] object-contain"
            />
            {/* <div className="bg-gradient-to-r from-gray-600 to-black bg-opacity-90 w-[24rem] h-[15rem]"></div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
