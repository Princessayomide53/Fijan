import React from 'react';
import Logof from '../Assets/Logof.png';
import { FiFacebook } from 'react-icons/fi';
import { FaXTwitter, FaInstagram, FaPinterest } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineEmail, MdOutlineLocalPhone } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { FaArrowUp } from 'react-icons/fa6';

const Footer = () => {
  return (
    <section className='bg-[#012D4A] h-[62.56rem] md:h-[34.56rem] md:mt-[3.5rem]'>
      <article className='md:border-b-2 border-[#005773]'>
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
        <div className='mac:max-w-[83rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[20rem] iphone:max-w-[22rem] mx-auto pb-[3rem] md:pb-[5rem] lg:pb-[7rem] pt-[2.5rem]'>
          <div className='grid grid-cols-1 gap-12 md:gap-0 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-14 md:justify-center lg:justify-items-center'>
            <div className='text-white hidden md:flex flex-col font-semibold leading-normal text-[10px]  md:text-[13px] lg:text-[15px] mac:text-lg'>
              <h2>About us</h2>
              <p className='text-white pt-3 text-[10px]  md:text-[13px] lg:text-[15px] mac:text-lg font-normal leading-[28px]'>
                At Fijan, we are dedicated to
                <br /> providing exquisite, personalized
                <br /> healthcare services.
              </p>
            </div>
            <div className='space-y-[16px] pt-[1.5rem] md:pt-0 text-white'>
              <p className='text-white text-[16px]  md:text-[13px] lg:text-[15px] mac:text-lg font-medium leading-normal'>
                Home
              </p>
              <p className='text-white text-[16px]  md:text-[13px] lg:text-[15px] mac:text-lg font-medium leading-normal'>
                Careers
              </p>
              <p className='text-white flex gap-3 text-[16px]  md:text-[13px] lg:text-[15px] mac:text-lg font-medium leading-normal'>
                Services <IoIosArrowDown className='mt-[6px]' />
              </p>
              <p className='text-white text-[16px]  md:text-[13px] lg:text-[15px] mac:text-lg font-normal leading-normal'>
                HomeCare
              </p>
              <p className='text-white text-[16px]  md:text-[13px] lg:text-[15px] mac:text-lg font-normal leading-normal'>
                Nursing care
              </p>
              <p className='text-white text-[16px]  md:text-[13px] lg:text-[15px] mac:text-lg font-normal leading-normal'>
                Mental home care
              </p>
            </div>
            <div className='space-y-[16px]'>
              <h3 className='text-white text-[16px]  md:text-[13px] lg:text-[15px] mac:text-lg font-semibold leading-normal'>
                Contact
              </h3>

              <p className='text-white flex gap-2 items-center text-[16px]  md:text-[13px] lg:text-[15px] mac:text-lg font-normal leading-normal'>
                <IoLocationOutline className='md:text-xl text-2xl lg:text-2xl' />
                Address: 1564 The birminham
                <br /> road, United Kingdom
              </p>
              <p className='text-white flex gap-2 items-center text-[16px]  md:text-[13px] lg:text-[15px] mac:text-lg font-normal leading-normal'>
                <MdOutlineEmail className='md:text-xl text-2xl lg:text-2xl' />
                Email: hello@fijan.co.uk
              </p>
              <p className='text-white flex gap-2 items-center text-[16px]  md:text-[13px] lg:text-[15px] mac:text-lg font-normal leading-normal'>
                <MdOutlineLocalPhone className='md:text-xl text-2xl lg:text-2xl' />
                Phone: +442200567789
              </p>
            </div>
            <div className='space-y-[16px]'>
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
        </div>
      </article>
    </section>
  );
};

export default Footer;
