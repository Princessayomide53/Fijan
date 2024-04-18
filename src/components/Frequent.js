import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Frequent = () => {
  const questions = [
    { id: 1, quest: "What services does Fijan healthcare offer" },
    {
      id: 2,
      quest: "How are care givers at Fijan healthcare selected and trained",
    },
    {
      id: 3,
      quest:
        "How do you ensure the privacy and dignity of clients recieving home services",
    },
  ];
  const asked = [
    { id: 1, quest: "What services does Fijan healthcare offer" },
    {
      id: 2,
      quest: "How are care givers at Fijan healthcare selected and trained",
    },
    {
      id: 3,
      quest:
        "How do you ensure the privacy and dignity of clients recieving home services",
    },
  ];
  return (
    <section className="max-w-[83rem] m-auto  py-[4.5rem]">
      <span className="flex justify-center items-center">
        <div className="w-[74.25rem] h-[35rem] rounded-[3rem] bg-gradient-to-b from-[#0171BB] to-[#71C8E4] p-[5rem]">
          <h6 className="text-center text-white text-[1.4rem] font-semibold leading-[1.25rem] pb-[1rem]">
            HOT JOBS
          </h6>
          <h1 className="text-center special-font leading-[3.85rem] font-normal text-7xl text-white ">
            Nursing and Healthcare Hot jobs
          </h1>
          <p className="text-white text-center text-[1.39rem] font-normal leading-[2.01rem] pt-[4rem]">
            Shape your career in a place where your skills empower others.{" "}
            <br />
            Join Fijan healthcare for a rewarding journey in the healthcare
            excellence
          </p>

          <div className="flex justify-center mt-[6rem]">
            <button className="bg-[#098666] flex gap-3 text-lg font-medium leading-[16px] text-white px-7 py-3 rounded-full">
              Explore Careers
              <IoArrowForward className="text-white text-xl" />
            </button>
          </div>
        </div>
      </span>
      <div className="pt-[6rem]">
        <h6 className="text-center text-[#098666] text-[1.4rem] font-semibold leading-[1.25rem] pb-[1rem]">
          FREQUENTLY ASKED QUESTIONS
        </h6>
        <h1 className="text-center special-font leading-[3.85rem] font-normal text-7xl text-[#014470] ">
          Whats on your mind
        </h1>
        <div className="flex justify-around pt-[5rem]">
          <div>
            {questions.map((question, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b-[1px] border-[#D6D5D5]"
              >
                <p
                  className={`${index === 0 ? "w-[28rem]" : ""} ${
                    index === 1 ? "w-[23rem]" : ""
                  } ${
                    index === 2 ? "w-[23rem]" : ""
                  } text-[#26465B] text-lg w-[30rem] font-normal whitespace-normal leading-normal py-[1rem]`}
                >
                  {question.quest}
                </p>
                <IoIosArrowDown className="mt-5" />
              </div>
            ))}
          </div>
          <div>
            {asked.map((ask, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b-[1px] border-[#D6D5D5]"
              >
                <p
                  className={`${index === 0 ? "w-[28rem]" : ""} ${
                    index === 1 ? "w-[23rem]" : ""
                  } ${
                    index === 2 ? "w-[23rem]" : ""
                  } text-[#26465B] text-lg w-[30rem] font-normal whitespace-normal leading-normal py-[1rem]`}
                >
                  {ask.quest}
                </p>
                <IoIosArrowDown className="mt-5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frequent;
