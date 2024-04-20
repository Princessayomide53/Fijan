import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  return (
    <section
      className={`bg-gradient-to-r relative py-10 from-[#ffffff] to-[#71C8E4] w-full `}
    >
      <nav className="mac:max-w-[83rem] absolute top-7 left-0 right-0 md:max-w-[45rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[22rem] lg:max-w-[60rem] mx-auto flex justify-between">
        <div className="flex items-center gap-2 mt-2">
          <img
            src={Logo}
            alt=""
            className="xl:w-[39.301px] lg:w-[35.301px] lg:h-[45px] xl:h-[49px]"
          />
          <h2 className="text-[#0171BB] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[2rem] mac:text-[2.23rem] font-bold leading-[28.697px]">
            FIJAN
          </h2>
        </div>
        <ul className="lg:flex hidden xl:space-x-[2.5rem] lg:space-x-[1.5rem] mac:space-x-[4rem] mt-2 z-20">
          <li className="">
            <Link to="/">
              <button
                className={
                  location.pathname === "/"
                    ? "xl:px-7 lg:px-5 py-3 bg-white text-[#014470] hover:bg-white transition duration-150 lg:text-base xl:text-lg leading-[16px] font-medium rounded-full border-2 border-[#014470] flex justify-center items-center"
                    : "xl:px-7 lg:px-5 py-3 text-[#014470] lg:text-base xl:text-lg hover:bg-white transition duration-150 leading-[16px] font-medium rounded-full border-2 border-[#014470] flex justify-center items-center"
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
                  ? "xl:px-7 lg:px-5 py-3 bg-white text-[#014470] lg:text-base xl:text-lg leading-[16px]  hover:bg-white transition duration-150 font-medium rounded-full border-2 border-[#014470] flex justify-center items-center"
                  : "xl:px-7 lg:px-5 py-3 text-[#014470] lg:text-base xl:text-lg leading-[16px] font-medium rounded-full hover:bg-white transition duration-150 border-2 border-[#014470] flex justify-center items-center"
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
                    ? "xl:px-7 lg:px-5 py-3 bg-white text-[#014470] lg:text-base xl:text-lg leading-[16px]  hover:bg-white transition duration-150 font-medium rounded-full border-2 border-[#014470] flex justify-center items-center"
                    : "xl:px-7 lg:px-5 py-3 text-[#014470] lg:text-base xl:text-lg leading-[16px] font-medium rounded-full hover:bg-white transition duration-150 border-2 border-[#014470] flex justify-center items-center"
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
                    ? "xl:px-7 lg:px-5 py-3 bg-white text-[#014470] lg:text-base xl:text-lg leading-[16px]  hover:bg-white transition duration-150 font-medium rounded-full border-2 border-[#014470] flex justify-center items-center"
                    : "xl:px-7 lg:px-5 py-3 text-[#014470] lg:text-base xl:text-lg leading-[16px] font-medium rounded-full hover:bg-white transition duration-150 border-2 border-[#014470] flex justify-center items-center"
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
                    ? "xl:px-7 lg:px-5 py-3 bg-white text-[#014470] lg:text-base xl:text-lg leading-[16px]  hover:bg-white transition duration-150 font-medium rounded-full border-2 border-[#014470] flex justify-center items-center"
                    : "xl:px-7 lg:px-5 py-3 text-[#014470] lg:text-base xl:text-lg leading-[16px] font-medium rounded-full hover:bg-white transition duration-150 border-2 border-[#014470] flex justify-center items-center"
                }
              >
                Careers
              </button>
            </Link>
          </li>
        </ul>
        <ul className="mt-2 hidden lg:flex">
          <li className=" lg:px-5 xl:px-7 py-3 flex justify-center items-center rounded-full bg-[#098666] text-white">
            Get Started
          </li>
        </ul>
        <div className="lg:hidden block ">
          <Hamburger
            direction="squash"
            size={25}
            color="black"
            className="burger-menu"
            toggled={nav}
            toggle={() => setNav(!nav)}
          />
        </div>{" "}
      </nav>{" "}
      {nav && (
        <div className="w-full absolute top-[5.5rem] left-0 h-screen z-20  bg-gradient-to-r from-[#ffffff] to-[#71C8E4]">
          <ul className="flex flex-col space-y-[2.5rem] mt-5 p-7">
            <li className="text-[#014470] text-xl hover:text-[#098666]">
              <Link to="/">Home</Link>
            </li>
            <li className="text-[#014470] text-xl hover:text-[#098666]">
              <Link to="/about">About</Link>
            </li>
            <li className="text-[#014470] text-xl hover:text-[#098666]">
              <Link to="/services">Services</Link>
            </li>
            <li className="text-[#014470] text-xl hover:text-[#098666]">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="text-[#014470] text-xl hover:text-[#098666]">
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Nav;
