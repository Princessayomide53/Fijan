import React, { useState } from 'react';
import Logo from '../Assets/Logo.png';
import { Link, useLocation } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { HashLink as HashRouterLink } from 'react-router-hash-link';

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    // console.log(isOpen, 'open');
  };
  const toggled = () => {
    setIsOpen(false);
  };

  const closeNav = () => {
    setNav(false);
  };

  const location = useLocation();
  return (
    <section
      className={`bg-gradient-to-r z-[100] fixed py-[2.6rem] lg:py-14 from-[#ffffff] to-[#71C8E4] w-full `}
    >
      <nav className='mac:max-w-[83rem] absolute top-7 lg:top-8 z-50 left-0 right-0 md:max-w-[45rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[20.5rem] iphone:max-w-[22rem] lg:max-w-[60rem] mx-auto flex justify-between'>
        <div className='flex items-center gap-2 mt-2'>
          <Link to='/'>
            <img
              src={Logo}
              alt=''
              className='h-[2rem] xl:w-[39.301px] lg:w-[35.301px] lg:h-[45px] xl:h-[49px]'
            />
          </Link>

          <h2 className='text-[#0171BB] md:text-[1.5rem] lg:text-[1.5rem] xl:text-[2rem] mac:text-[2.23rem] font-bold leading-[28.697px]'>
            <Link to='/'> FIJAN</Link>
          </h2>
        </div>
        <ul className='lg:flex hidden xl:space-x-[1.5rem] lg:space-x-[1.4rem] mac:space-x-[3rem] lg:mt-4 xl:mt-3 mt-2 z-20'>
          <li className=''>
            <Link to='/'>
              <button
                className={
                  location.pathname === '/'
                    ? 'xl:px-7 lg:px-4 py-1 bg-white text-[#098666] hover:bg-white transition duration-150 lg:text-base xl:text-lg leading-[16px] font-medium rounded-full border-2 border-[#098666] flex justify-center items-center'
                    : 'xl:px-7 lg:px-4 py-1 text-[#014470] lg:text-base xl:text-lg hover:bg-white transition duration-150 leading-[16px] font-medium rounded-full border-2 border-[#014470] flex justify-center items-center'
                }
              >
                Home
              </button>
            </Link>
          </li>
          <Link to='/about'>
            <button
              className={
                location.pathname === '/about'
                  ? 'xl:px-7 lg:px-4 py-1 bg-white text-[#098666] lg:text-base xl:text-lg leading-[16px]  hover:bg-white transition duration-150 font-medium rounded-full border-2 border-[#098666] flex justify-center items-center'
                  : 'xl:px-7 lg:px-4 py-1 text-[#014470] lg:text-base xl:text-lg leading-[16px] font-medium rounded-full hover:bg-white transition duration-150 border-2 border-[#014470] flex justify-center items-center'
              }
            >
              About
            </button>
          </Link>
          <li className=''>
            {/* <Link to=''> */}
            <button
              onMouseEnter={toggleDropdown}
              // onMouseLeave={toggleDropdown}
              className={`${
                location.pathname.startsWith('/nurses') ||
                location.pathname.startsWith('/medicalDoctors') ||
                location.pathname.startsWith('/careSupport') ||
                isOpen
                  ? "xl:px-7 lg:px-4 gap-2 py-1 bg-white text-[#098666] lg:text-base xl:text-lg leading-[16px]  hover:bg-white transition duration-150 font-medium rounded-full border-2 border-[#098666] flex justify-center items-center'"
                  : 'xl:px-7 lg:px-4 gap-2 py-1 text-[#014470] lg:text-base xl:text-lg leading-[16px] font-medium rounded-full hover:bg-white transition duration-150 border-2 border-[#014470] flex justify-center items-center'
              }`}
            >
              Job seekers
              <IoIosArrowDown className={`${isOpen ? 'mt-1' : 'mt-1'}`} />
            </button>
            {isOpen && (
              <div
                onMouseLeave={toggled}
                className='absolute top-12 lg:left-[21rem] xl:left-[28.4rem] mac:left-[33rem] w-[195px] h-[108px] mt-2 bg-white shadow-lg rounded-md'
              >
                <ul className='space-y-[10px] '>
                  <Link to='/nurses'>
                    <li
                      className={` pl-5 pt-2 text-[#014470] hover:bg-[#098666] hover:w-full hover:py-1 hover:text-white`}
                    >
                      Nurses
                    </li>
                  </Link>
                  <li
                    className={` pl-5 text-[#014470] hover:bg-[#098666] hover:w-full hover:py-1 hover:text-white`}
                  >
                    <Link to='/medicalDoctors'>Medical doctors</Link>
                  </li>
                  <li
                    className={` pl-5 text-[#014470] hover:bg-[#098666] hover:w-full hover:py-1 hover:text-white`}
                  >
                    <Link to='/careSupport'>Care support worker</Link>
                  </li>
                </ul>
              </div>
            )}
            {/* </Link> */}
          </li>{' '}
          <li className=''>
            <Link to='/employers'>
              <button
                className={
                  location.pathname === '/employers'
                    ? 'xl:px-7 lg:px-4 py-1 bg-white text-[#098666] lg:text-base xl:text-lg leading-[16px]  hover:bg-white transition duration-150 font-medium rounded-full border-2 border-[#098666] flex justify-center items-center'
                    : 'xl:px-7 lg:px-4 py-1 text-[#014470] lg:text-base xl:text-lg leading-[16px] font-medium rounded-full hover:bg-white transition duration-150 border-2 border-[#014470] flex justify-center items-center'
                }
              >
                Employers
              </button>
            </Link>
          </li>
          <li className=''>
            <Link to='/contact'>
              <button
                className={
                  location.pathname === '/contact'
                    ? 'xl:px-7 lg:px-4 py-1 bg-white text-[#098666] lg:text-base xl:text-lg leading-[16px]  hover:bg-white transition duration-150 font-medium rounded-full border-2 border-[#098666] flex justify-center items-center'
                    : 'xl:px-7 lg:px-4 py-1 text-[#014470] lg:text-base xl:text-lg leading-[16px] font-medium rounded-full hover:bg-white transition duration-150 border-2 border-[#014470] flex justify-center items-center'
                }
              >
                Contact Us
              </button>
            </Link>
          </li>
        </ul>
        <ul className='mt-2 hidden lg:flex'>
          <li className=' lg:px-5 xl:px-7 py-1 flex justify-center items-center rounded-full bg-[#098666] text-white'>
            <HashRouterLink smooth to='#section1'>
              {' '}
              Register Now
            </HashRouterLink>
          </li>
        </ul>
        <div className='lg:hidden block '>
          <Hamburger
            direction='squash'
            size={25}
            color='black'
            className='burger-menu'
            toggled={nav}
            toggle={() => setNav(!nav)}
          />
        </div>{' '}
      </nav>{' '}
      {nav && (
        <div className='w-full fixed top-[5rem] left-0 h-screen z-20  bg-gradient-to-r from-[#ffffff] to-[#71C8E4]'>
          <ul className='flex flex-col space-y-[3rem] mt-5 p-7'>
            <li
              onClick={closeNav}
              className='text-[#014470] text-xl hover:text-[#098666]'
            >
              <Link to='/'>Home</Link>
            </li>
            <li
              onClick={closeNav}
              className='text-[#014470] text-xl hover:text-[#098666]'
            >
              <Link to='/about'>About</Link>
            </li>
            <li
              onClick={toggleDropdown}
              className='text-[#014470] relative flex justify-between text-xl hover:text-[#098666]'
            >
              Services
              {isOpen ? (
                <IoIosArrowUp className='md:text-2xl' />
              ) : (
                <IoIosArrowDown className='md:text-2xl' />
              )}
              {isOpen && (
                <div className='absolute top-10 md:top-12 left-0 w-full h-[150px] bg-white shadow-lg rounded-md'>
                  <ul className='space-y-[13px]'>
                    <li
                      className={`pl-5 pt-2 hover:bg-[#098666] hover:w-full hover:py-1 hover:text-white`}
                    >
                      <Link onClick={closeNav} to='/nurses'>
                        {' '}
                        Nurses
                      </Link>
                    </li>

                    <li
                      className={`pl-5 pt-2 hover:bg-[#098666] hover:w-full hover:py-1 hover:text-white`}
                    >
                      <Link onClick={closeNav} to='/medicalDoctors'>
                        {' '}
                        Medical doctors
                      </Link>
                    </li>

                    <li
                      className={`pl-5 pt-2 hover:bg-[#098666] hover:w-full hover:py-1 hover:text-white`}
                    >
                      <Link onClick={closeNav} to='/careSupport'>
                        {' '}
                        Care support worker
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              onClick={closeNav}
              className='text-[#014470] text-xl hover:text-[#098666]'
            >
              <Link to='/contact'>Contact Us</Link>
            </li>
            <li
              onClick={closeNav}
              className='text-[#014470] text-xl hover:text-[#098666]'
            >
              <Link to='/employers'>Employers</Link>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Nav;
