import React, { useState } from 'react';
import Logof from '../Assets/Logof.png';
import { FiFacebook } from 'react-icons/fi';
import { FaXTwitter, FaInstagram, FaPinterest } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineEmail, MdOutlineLocalPhone } from 'react-icons/md';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa6';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    // console.log(isOpen, 'open');
  };
  return (
    <section
      className={`bg-[#012D4A] ${isOpen ? 'h-[62.86rem]' : 'h-[58.56rem]'} ${
        isOpen ? 'md:h-[44.56rem]' : 'md:h-[40.86rem]'
      }  pro:h-[41.56rem]  ${
        isOpen ? 'lg:h-[38.16rem]' : 'lg:h-[32.86rem]'
      } md:mt-[2rem] lg:mt-[3.5rem]`}
    >
      <article className='md:border-b-2 border-[#005773] px-4 iphone:px-0'>
        <div className='mac:max-w-[83rem] md:max-w-[45rem] flex gap-3 md:gap-0 flex-col md:flex-row md:justify-between lg:max-w-[60rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[22rem] mx-auto pt-[2rem] md:py-[1rem]'>
          <div className='flex gap-3 md:gap-5 items-center'>
            <img src={Logof} alt='' />
            <h3 className='text-white text-[26px] md:text-[36.523px] font-semibold leading-[28.697px]'>
              FIJAN
            </h3>
          </div>
          <div className='text-white font-semibold leading-normal block pt-[31px] md:hidden'>
            <h2 className='text-[18px] md:text-[13px] lg:text-[15px] mac:text-lg'>
              About us
            </h2>

            <p className='text-white pt-3 text-[16px]  md:text-[13px] lg:text-[15px] mac:text-lg font-normal leading-[28px]'>
              At Fijan, we are dedicated to
              <br /> providing exquisite, personalized
              <br /> healthcare services.
            </p>
            <div className='space-y-[16px] pt-[15px] md:hidden'>
              <h3 className='text-white text-[16px]  md:text-[13px] lg:text-[15px] mac:text-lg font-semibold leading-normal'>
                Socials
              </h3>
              <div className='text-white flex md:text-xl text-2xl lg:text-2xl space-x-[16px]'>
                <FiFacebook />
                <FaXTwitter />
                <FaInstagram />
                <FaPinterest />
              </div>
            </div>
          </div>
          <div className='flex relative my-[2rem]'>
            <div className='absolute md:-top-5 top-0 md:right-[2rem] xl:right-3 mac:right-0'>
              <input
                type='text'
                placeholder='Start your health journey'
                className='md:w-[320px] w-[270px] iphone:w-[290px] lg:w-[420px] placeholder:text-[11px] h-[42px] focus:outline-blue-400 bg-[#F5FDFF] placeholder:text-[#90C2E4] rounded-full pl-4 md:pl-7'
              />
              <button className='bg-[#098666]  absolute top-0 -right-10 md:-right-5  text-white px-[32px] py-[10px] rounded-full'>
                Get Started
              </button>
            </div>
            {/* <div className='ml-auto md:ml-0'>
              <FaArrowUp className='text-2xl text-white mt-1 md:mt-2 ' />
            </div> */}
          </div>
        </div>
      </article>
      <article className='md:border-b-2 border-[#005773]'>
        <div className='mac:max-w-[83rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[20rem] iphone:max-w-[22rem] mx-auto pb-[3rem] md:pb-[4rem] lg:pb-[6rem] pt-[2.5rem]'>
          <div className='grid grid-cols-1 gap-12 md:gap-7 lg:gap-0 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-14 md:justify-center lg:justify-items-center'>
            <div className='text-white hidden md:flex flex-col font-semibold leading-normal text-[10px]  md:text-[13px] lg:text-[15px] mac:text-lg'>
              <h2>About us</h2>
              <p className='text-white pt-3 text-[10px]  md:text-[13px] lg:text-[15px] mac:text-lg font-normal leading-[28px]'>
                At Fijan, we are dedicated to
                <br /> providing exquisite, personalized
                <br /> healthcare services.
              </p>

              <div className='space-y-[16px] pt-[32px]'>
                <h3 className='text-white text-[16px] md:text-[13px] lg:text-[15px] mac:text-lg font-semibold leading-normal'>
                  Socials
                </h3>
                <div className='text-white flex md:text-xl text-xl lg:text-2xl space-x-[16px]'>
                  <FiFacebook />
                  <FaXTwitter />
                  <FaInstagram />
                  <FaPinterest />
                </div>
              </div>
            </div>
            <span className='flex justify-between md:contents'>
              <div className='space-y-[16px] pt-[1.5rem] md:pt-0 text-white'>
                <p className='text-white text-[16px]  md:text-[16px] lg:text-[16px] mac:text-lg font-semibold leading-normal'>
                  Quick links
                </p>
                <p className='text-white text-[14px]  md:text-[13px] lg:text-[14px] mac:text-base font-normal leading-normal'>
                  <Link to='/'> Home</Link>
                </p>
                <p className='text-white text-[14px]  md:text-[13px] lg:text-[14px] mac:text-base font-normal leading-normal'>
                  <Link to='/about'> About us</Link>
                </p>
                <p className='text-white text-[14px]  md:text-[13px] lg:text-[14px] mac:text-base font-normal leading-normal'>
                  <Link to='/employers'> Employers</Link>
                </p>
                <p className='text-white text-[14px]  md:text-[13px] lg:text-[14px] mac:text-base font-normal leading-normal'>
                  <Link to='/contact'> Contact</Link>
                </p>
                <p
                  onClick={toggleDropdown}
                  className='text-white cursor-pointer flex gap-3 text-[14px]  md:text-[13px] lg:text-[14px] mac:text-base font-normal leading-normal'
                >
                  Job Seekers{' '}
                  <IoIosArrowDown
                    className={`${isOpen ? 'hidden' : 'flex'} mt-[6px]`}
                  />
                  {isOpen ? <IoIosArrowUp className='mt-[6px]' /> : ''}
                </p>
                {isOpen ? (
                  <div className='text-[11px] space-y-1 lg:text-sm lg:space-y-2 font-normal capitalize -mt-3'>
                    <p className='hover:text-[#098666]'>
                      <Link to='/nurses'>nurses</Link>
                    </p>
                    <p className='hover:text-[#098666]'>
                      <Link to='/medicalDoctors'>doctors</Link>
                    </p>
                    <p className='hover:text-[#098666]'>
                      <Link to='/careSupport'>care support</Link>
                    </p>
                  </div>
                ) : (
                  ''
                )}

                {/* <p className='text-white text-[16px]  md:text-[13px] lg:text-[15px] mac:text-lg font-normal leading-normal'>
                HomeCare
              </p>
              <p className='text-white text-[16px]  md:text-[13px] lg:text-[15px] mac:text-lg font-normal leading-normal'>
                Nursing care
              </p>
              <p className='text-white text-[16px]  md:text-[13px] lg:text-[15px] mac:text-lg font-normal leading-normal'>
                Mental home care
              </p> */}
              </div>

              <div className='space-y-[16px] pt-[1.5rem] md:pt-0 text-white'>
                <p className='text-white text-[16px]  md:text-[16px] lg:text-[16px] mac:text-lg font-semibold leading-normal'>
                  Support
                </p>
                <p className='text-white text-[14px]  md:text-[13px] lg:text-[14px] mac:text-base font-normal leading-normal'>
                  Privacy policy
                </p>
                <p className='text-white text-[14px]  md:text-[13px] lg:text-[14px] mac:text-base font-normal leading-normal'>
                  FAQ
                </p>
                <p className='text-white text-[14px]  md:text-[13px] lg:text-[14px] mac:text-base font-normal leading-normal'>
                  Condition of use
                </p>
                <p className='text-white text-[14px]  md:text-[13px] lg:text-[14px] mac:text-base font-normal leading-normal'>
                  Cookies policy
                </p>
              </div>
            </span>
            <div className='space-y-[16px] pt-[1.5rem] hidden md:pt-0 text-white'>
              <p className='text-white text-[16px]  md:text-[16px] lg:text-[16px] mac:text-lg font-semibold leading-normal'>
                Quick links
              </p>
              <p className='text-white text-[14px]  md:text-[13px] lg:text-[14px] mac:text-base font-normal leading-normal'>
                <Link to='/'> Home</Link>
              </p>
              <p className='text-white text-[14px]  md:text-[13px] lg:text-[14px] mac:text-base font-normal leading-normal'>
                <Link to='/about'> About us</Link>
              </p>
              <p className='text-white text-[14px]  md:text-[13px] lg:text-[14px] mac:text-base font-normal leading-normal'>
                <Link to='/employers'> Employers</Link>
              </p>
              <p className='text-white text-[14px]  md:text-[13px] lg:text-[14px] mac:text-base font-normal leading-normal'>
                <Link to='/contact'> Contact</Link>
              </p>
              <p
                onClick={toggleDropdown}
                className='text-white cursor-pointer flex gap-3 text-[14px]  md:text-[13px] lg:text-[14px] mac:text-base font-normal leading-normal'
              >
                Job Seekers <IoIosArrowDown className='mt-[6px]' />
              </p>
              {isOpen ? <IoIosArrowUp className='mt-[6px]' /> : ''}
            </div>

            <div className='space-y-[16px] hidden pt-[1.5rem] md:pt-0 text-white'>
              <p className='text-white text-[16px]  md:text-[16px] lg:text-[16px] mac:text-lg font-semibold leading-normal'>
                Support
              </p>
              <p className='text-white text-[14px]  md:text-[13px] lg:text-[14px] mac:text-base font-normal leading-normal'>
                Privacy policy
              </p>
              <p className='text-white text-[14px]  md:text-[13px] lg:text-[14px] mac:text-base font-normal leading-normal'>
                FAQ
              </p>
              <p className='text-white text-[14px]  md:text-[13px] lg:text-[14px] mac:text-base font-normal leading-normal'>
                Condition of use
              </p>
              <p className='text-white text-[14px]  md:text-[13px] lg:text-[14px] mac:text-base font-normal leading-normal'>
                Cookies policy
              </p>
            </div>
            <div className='space-y-[16px]'>
              <h3 className='text-white text-[16px]  md:text-[13px] lg:text-[15px] mac:text-lg font-semibold leading-normal'>
                Contact
              </h3>

              <p className='text-white flex gap-2 items-center text-[14px]  md:text-[13px] lg:text-[14px] mac:text-base font-normal leading-normal'>
                <IoLocationOutline className='md:text-xl text-2xl lg:text-2xl' />
                Address: 1564 The birminham
                <br /> road, United Kingdom
              </p>
              <p className='text-white flex gap-2 items-center text-[14px]  md:text-[13px] lg:text-[14px] mac:text-base font-normal leading-normal'>
                <MdOutlineEmail className='md:text-xl text-2xl lg:text-2xl' />
                Email: hello@fijan.co.uk
              </p>
              <p className='text-white flex gap-2 items-center text-[14px]  md:text-[13px] lg:text-[14px] mac:text-base font-normal leading-normal'>
                <MdOutlineLocalPhone className='md:text-xl text-2xl lg:text-2xl' />
                Phone: +442200567789
              </p>
            </div>
          </div>
        </div>
      </article>

      <p className='text-center hidden md:block font-normal mt-7 text-[#F0F0F0] text-xs leading-normal'>
        {' '}
        Copyright © 2023 Fijan
      </p>
    </section>
  );
};

export default Footer;
