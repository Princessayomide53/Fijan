import React from "react";

const ContactPage = () => {
  return (
    <section className="mac:pt-[25rem] md:pt-[12rem] pt-[7rem] lg:pt-[16rem] xl:pt-[20rem] pb-[5rem] md:pb-[7.8rem] max-w-[20rem] md:max-w-[38rem] lg:max-w-[48rem] xl:max-w-[55rem] mac:max-w-[65rem] mx-auto">
      <h5 className="special-font text-[#014470] text-[1.5rem] md:text-[3rem] lg:text-[3.5rem] font-normal leading-normal pb-[1rem] md:pb-[2rem]">
        Contact us today and feel good again
      </h5>
      <div className="">
        <form className="mac:space-y-[2.7rem] space-y-[2.2rem] md:space-y-[2.5rem] lg:space-y-[2.7rem] ">
          <div className="flex flex-col gap-5">
            <label
              htmlFor="name"
              className="text-sm md:text-base lg:md:text-base lg:text-[1.25rem] font-medium leading-normal text-[#26465B]"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-2 border-[#E4E4E4] pl-5 focus:outline-blue-300  rounded-md w-full h-[3rem] md:h-[4rem]"
            />
          </div>
          <div className="flex flex-col gap-[2.2rem] md:flex-row md:gap-5 lg:gap-7 w-full">
            <div className="flex flex-col gap-5 flex-grow">
              <label
                htmlFor="phoneNumber"
                className="md:text-base text-sm lg:text-[1.25rem] font-medium leading-normal text-[#26465B]"
              >
                Phone Number:
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="border-2 border-[#E4E4E4] focus:outline-blue-400  rounded-md pl-5 w-full h-[3rem] md:h-[4rem]"
              />
            </div>
            <div className="flex flex-col gap-5 flex-grow">
              <label
                htmlFor="email"
                className="md:text-base text-sm lg:text-[1.25rem] font-medium leading-normal text-[#26465B]"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-2 text-sm border-[#E4E4E4] focus:outline-blue-300  rounded-md w-full pl-5 h-[3rem] md:h-[4rem]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <label
              htmlFor="name"
              className="md:text-base text-sm lg:text-[1.25rem] font-medium leading-normal text-[#26465B]"
            >
              Message:
            </label>
            <textarea
              type="text"
              id="name"
              name="name"
              className="border-2 border-[#E4E4E4] pl-5 focus:outline-blue-300  rounded-md w-full h-[10rem] md:h-[15rem]"
            />
          </div>

          <div className="flex justify-end items-end">
            <button
              type="submit"
              className="px-7 h-[54px] rounded-full bg-[#098666] text-white"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
