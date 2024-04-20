import React from "react";
import line from "../Assets/Line.png";

const Consultation = () => {
  const Consult = [
    {
      id: 1,
      title: "Understanding you",
      text: "We begin by understanding your unique needs. This step helps us tailor our services just for you.",
      num: "1",
      img: line,
    },
    {
      id: 2,
      title: "Crafting your care Journey",
      text: "We design a custom care plan that fits your needs and preferences, ensuring your care journey is tailored just for you.",
      num: "2",
      img: line,
    },
    {
      id: 3,
      title: "Discipline",
      text: "Onces your personalized care plan is set, we match you with a caregiver, starting with your wellness journey with care and support outlined in your plan..",
      num: "3",
    },
  ];
  return (
    <section className="bg-[#E8FAFF] w-full md:h-[45rem] lg:h-[50rem] my-[3rem] md:my-[4rem] xl:my-[6rem]">
      <div className="mac:max-w-[83rem] md:max-w-[45rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[22rem] mx-auto py-[3rem]">
        <h5 className="text-[#098666] text-xs text-center md:text-base lg:text-[1.1rem] xl:text-[1.4rem] font-semibold leading-[1.25rem]">
          OUR SIMPLE STEP PROCESS
        </h5>
        <h2 className="special-font text-center text-3xl text-[#014470] md:text-3xl lg:text-5xl mac:text-7xl xl:text-6xl font-normal leading-tight lg:leading-[3.8rem]">
          From Consultation to Comfort,
          <br /> Explore Our Streamlined Care Steps
        </h2>
        <div className="pt-[3rem] flex flex-col items-center gap-12 md:flex-row md:justify-between">
          <div className="xl:w-[43%] lg:w-[45%] md:w-[43%] w-[20.5rem]">
            {Consult.map((con, index) => (
              <>
                <article className="flex items-center gap-5" key={index}>
                  <h3 className="text-[#014470] special-font text-4xl lg:text-7xl font-normal leading-normal">
                    {con.num}
                  </h3>
                  <span className="flex flex-col gap-3">
                    <h5 className="text-[#014470] special-font text-xl lg:text-[1.75rem] font-normal leading-normal">
                      {con.title}
                    </h5>
                    <p className="text-[#26465B] whitespace-pre-wrap text-[11px] lg:text-[13px] xl:text-[15px] font-normal leading-[1.38rem]">
                      {con.text}
                    </p>
                  </span>
                </article>{" "}
                <div className="flex items-center justify-center">
                  <img src={con.img} alt="" />
                </div>
              </>
            ))}
          </div>{" "}
          <div className="lg:w-[48.5%] w-[20rem] xl:w-[45%] lg:mt-5 xl:mt-0 md:w-[50%]">
            <form className="mac:space-y-[2.5rem] space-y-[2.2rem] md:space-y-[2.5rem] lg:space-y-[2.7rem] ">
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="name"
                  className="md:text-base lg:md:text-base lg:text-[1.25rem] font-medium leading-normal text-[#26465B]"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border-b-2 border-[#098666] pl-5 focus:outline-blue-300 bg-[#E8FAFF] rounded-xl w-full h-[3rem]"
                />
              </div>
              <div className="flex flex-col gap-[2.2rem] md:flex-row md:gap-5 xl:justify-between">
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="phoneNumber"
                    className="md:text-base lg:text-[1.25rem] font-medium leading-normal text-[#26465B]"
                  >
                    Phone Number:
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="border-b-2 border-[#098666] focus:outline-blue-400 bg-[#E8FAFF] rounded-xl pl-5 w-full h-[3rem]"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="email"
                    className="md:text-base lg:text-[1.25rem] font-medium leading-normal text-[#26465B]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border-b-2 border-[#098666] focus:outline-blue-300 bg-[#E8FAFF] rounded-xl w-full pl-5 h-[3rem]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="name"
                  className="md:text-base lg:text-[1.25rem] font-medium leading-normal text-[#26465B]"
                >
                  Message:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border-b-2 border-[#098666] pl-5 focus:outline-blue-300 bg-[#E8FAFF] rounded-xl w-full h-[3rem]"
                />
              </div>

              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-[54px] rounded-full bg-[#098666] text-white"
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
