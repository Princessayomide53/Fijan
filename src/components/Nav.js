import React from "react";
import Logo from "../Assets/Logo.png";

const Nav = () => {
  return (
    <section className="bg-gradient-to-r from-[#ffffff] to-[#71C8E4] w-full py-7">
      <nav className="max-w-[83rem] mx-auto flex justify-between">
        <div className="flex items-center gap-2 mt-2">
          <img src={Logo} alt="" className="w-[39.301px] h-[49px]" />
          <h2 className="text-[#0171BB] text-[2.23rem] font-bold leading-[28.697px]">
            FIJAN
          </h2>
        </div>
        <ul className="flex space-x-[4rem] mt-2">
          <li className="">
            <button className="px-7 py-3 text-[#014470] text-lg leading-[16px] font-medium rounded-full border-2 border-[#014470] flex justify-center items-center">
              Home
            </button>
          </li>
          <li className="">
            <button className="px-7 py-3 text-[#014470] text-lg leading-[16px] font-medium flex justify-center items-center rounded-full border-2 border-[#014470]">
              About
            </button>
          </li>
          <li className="">
            <button className="px-7 py-3 text-[#014470] text-lg leading-[16px] font-medium flex justify-center items-center rounded-full border-2 border-[#014470]">
              Services
            </button>
          </li>
          <li className="">
            <button className="px-7 py-3 text-[#014470] text-lg leading-[16px] font-medium flex justify-center items-center rounded-full border-2 border-[#014470]">
              Contact Us
            </button>
          </li>
          <li className="">
            <button className="px-7 py-3 text-[#014470] text-lg leading-[16px] font-medium flex justify-center items-center rounded-full border-2 border-[#014470]">
              Careers
            </button>
          </li>
        </ul>
        <ul className="mt-2">
          <li className="px-7 py-3 flex justify-center items-center rounded-full bg-[#098666] text-white">
            Get Started
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Nav;
