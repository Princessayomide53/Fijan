import React from "react";
import Logo from "../Assets/Logo.png";

const Nav = () => {
  return (
    <section className="bg-gradient-to-r from-[#ffffff] to-[#71C8E4] w-full py-7">
      <nav className="max-w-[83rem] mx-auto flex justify-between">
        <div className="flex gap-2">
          <img src={Logo} alt="" className="w-[1.7rem] h-[2rem]" />
          <h2 className="text-[#0171BB] text-[2rem] -mt-2 font-bold leading-normal">
            FIJAN
          </h2>
        </div>
        <ul className="flex space-x-[5rem]">
          <li className="px-8 py-2 rounded-full border-2 border-[#014470]">
            Home
          </li>
          <li className="px-8 py-2 rounded-full border-2 border-[#014470]">
            About
          </li>
          <li className="px-8 py-2 rounded-full border-2 border-[#014470]">
            Services
          </li>
          <li className="px-8 py-2 rounded-full border-2 border-[#014470]">
            Contact Us
          </li>
          <li className="px-8 py-2 rounded-full border-2 border-[#014470]">
            Careers
          </li>
        </ul>
        <ul>Get Started</ul>
      </nav>
    </section>
  );
};

export default Nav;
