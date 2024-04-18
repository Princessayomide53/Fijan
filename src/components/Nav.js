import React from "react";
import Logo from "../Assets/Logo.png";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  return (
    <section className="bg-gradient-to-r from-[#ffffff] to-[#71C8E4] w-full py-7">
      <nav className="max-w-[83rem] mx-auto flex justify-between">
        <div className="flex items-center gap-2 mt-2">
          <img src={Logo} alt="" className="w-[39.301px] h-[49px]" />
          <h2 className="text-[#0171BB] text-[2.23rem] font-bold leading-[28.697px]">
            FIJAN
          </h2>
        </div>
        <ul className="flex space-x-[4rem] mt-2 z-20">
          <li className="">
            <Link to="/">
              <button
                className={
                  location.pathname === "/"
                    ? "px-7 py-3 bg-white text-[#014470] hover:bg-white transition duration-150 text-lg leading-[16px] font-medium rounded-full border-2 border-[#014470] flex justify-center items-center"
                    : "px-7 py-3 text-[#014470] text-lg  hover:bg-white transition duration-150 leading-[16px] font-medium rounded-full border-2 border-[#014470] flex justify-center items-center"
                }
              >
                Home
              </button>
            </Link>
          </li>

          <Link to="/about">
            <button
              className={
                location.pathname === "/about"
                  ? "px-7 py-3 bg-white text-[#014470] text-lg leading-[16px]  hover:bg-white transition duration-150 font-medium rounded-full border-2 border-[#014470] flex justify-center items-center"
                  : "px-7 py-3 text-[#014470] text-lg leading-[16px] font-medium rounded-full hover:bg-white transition duration-150 border-2 border-[#014470] flex justify-center items-center"
              }
            >
              About
            </button>
          </Link>
          <li className="">
            <Link to="/service">
              <button
                className={
                  location.pathname === "/service"
                    ? "px-7 py-3 bg-white text-[#014470] text-lg leading-[16px]  hover:bg-white transition duration-150 font-medium rounded-full border-2 border-[#014470] flex justify-center items-center"
                    : "px-7 py-3 text-[#014470] text-lg leading-[16px] font-medium rounded-full hover:bg-white transition duration-150 border-2 border-[#014470] flex justify-center items-center"
                }
              >
                Services
              </button>
            </Link>
          </li>
          <li className="">
            <Link to="/contact">
              <button
                className={
                  location.pathname === "/contact"
                    ? "px-7 py-3 bg-white text-[#014470] text-lg leading-[16px]  hover:bg-white transition duration-150 font-medium rounded-full border-2 border-[#014470] flex justify-center items-center"
                    : "px-7 py-3 text-[#014470] text-lg leading-[16px] font-medium rounded-full hover:bg-white transition duration-150 border-2 border-[#014470] flex justify-center items-center"
                }
              >
                Contact Us
              </button>
            </Link>
          </li>
          <li className="">
            <Link to="/careers">
              <button
                className={
                  location.pathname === "/careers"
                    ? "px-7 py-3 bg-white text-[#014470] text-lg leading-[16px]  hover:bg-white transition duration-150 font-medium rounded-full border-2 border-[#014470] flex justify-center items-center"
                    : "px-7 py-3 text-[#014470] text-lg leading-[16px] font-medium rounded-full hover:bg-white transition duration-150 border-2 border-[#014470] flex justify-center items-center"
                }
              >
                Careers
              </button>
            </Link>
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
