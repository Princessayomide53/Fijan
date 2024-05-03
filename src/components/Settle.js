import React from "react";
import settle from "../Assets/settle.png";

const Settle = () => {
  return (
    <section className="relative pt-[3rem] pb-[3rem] md:pt-[5rem] md:pb-[4rem]">
      <div className="flex justify-center">
        <img
          src={settle}
          alt=""
          className="w-full object-cover h-[13.5rem] sm:h-full"
        />
      </div>
      <div className="absolute top-[10rem] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h3 className="md:text-[2rem] text-base special-font lg:text-[2.5rem] leading-[1rem] md:leading-tight xl:text-[3.7rem] xl:leading-[3.75rem] mac:text-[4rem]">
          Why Settle for Less? Discover the Difference in Our Exquisite Care
        </h3>
        <p className=" font-normal text-[10.5px] pt-[1.6rem] md:text-[0.79rem] w-[16rem] md:w-full lg:text-[0.85rem] xl:text-[0.95rem] leading-[0.8rem] mac:text-[1.15rem] md:leading-normal xl:leading-[32px] lg:leading-[2rem] xl:mt-10">
          Whether it's about services, inquiries, or seeking advice, we’re here
          to empower your health journey. Reach out and let us be a partner in
          your well-being.
        </p>
        <ul className="md:mt-5 xl:mt-12 flex justify-center mt-7">
          <li className="px-5 py-[6px] md:px-7 md:py-3 flex justify-center text-[9px] md:text-sm lg:text-base items-center rounded-full bg-[#098666] text-white">
            Get Started
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Settle;
