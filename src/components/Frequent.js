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
    <section className="mac:max-w-[83rem] md:max-w-[45rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[22rem] mx-auto md:h-[35rem] lg:h-0">
      <div className="pt-[1rem]">
        <h6 className="text-center md:text-base text-[#098666] lg:text-[1.1rem] xl:text-[1.4rem] font-semibold leading-[1.25rem] lg:pb-[1rem]">
          FREQUENTLY ASKED QUESTIONS
        </h6>
        <h1 className="text-center special-font md:text-[2.8rem] lg:leading-[3.85rem] font-normal lg:text-[3.5rem] xl:text-6xl mac:text-7xl text-[#014470] ">
          Whats on your mind
        </h1>
        <div className="flex md:justify-around lg:justify-between xl:justify-around md:py-[4rem] mac:py-[5rem]">
          <div>
            {questions.map((question, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b-[1px] border-[#D6D5D5]"
              >
                <p
                  className={`${index === 0 ? "mac:w-[28rem]" : ""} ${
                    index === 1 ? "mac:w-[23rem]" : ""
                  } ${index === 2 ? "mac:w-[23rem]" : ""} ${
                    index === 0 ? "lg:w-[25rem]" : ""
                  } ${index === 1 ? "lg:w-[18rem]" : ""} ${
                    index === 2 ? "lg:w-[18rem]" : ""
                  } ${index === 0 ? "xl:w-[27rem]" : ""} ${
                    index === 1 ? "xl:w-[22rem]" : ""
                  } ${
                    index === 2 ? "lg:w-[18rem]" : ""
                  } text-[#26465B] lg:text-[15px] md:w-[18rem] md:text-[13px] mac:text-lg lg:w-[21rem] xl:w-[25rem] mac:w-[30rem] font-normal whitespace-normal leading-normal py-[1rem]`}
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
                  className={`${index === 0 ? "mac:w-[28rem]" : ""} ${
                    index === 1 ? "mac:w-[23rem]" : ""
                  } ${index === 2 ? "mac:w-[23rem]" : ""} ${
                    index === 0 ? "lg:w-[27rem]" : ""
                  } ${index === 1 ? "lg:w-[18rem]" : ""} ${
                    index === 2 ? "lg:w-[18rem]" : ""
                  }${index === 0 ? "xl:w-[27rem]" : ""} ${
                    index === 1 ? "xl:w-[22rem]" : ""
                  } ${
                    index === 2 ? "lg:w-[18rem]" : ""
                  }  text-[#26465B] lg:text-[15px] md:text-[13px] md:w-[18rem] mac:text-lg lg:w-[21rem] xl:w-[25rem] mac:w-[30rem] font-normal whitespace-normal leading-normal py-[1rem]`}
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
