import React from "react";
import Icon from "../../Assets/Icon.png";

const Values = () => {
  const values = [
    {
      id: 1,
      title: "Discipline",
      text: "Lorem ipsum dolor sit amet consectetur. Viverra gravida consectetur duis lacinia. Varius nec non ultrices pellentesque in imperdiet. Sagittis elementum pharetra nisi.",
    },
    {
      id: 2,
      title: "Hardwork",
      text: "Lorem ipsum dolor sit amet consectetur. Viverra gravida consectetur duis lacinia. Varius nec non ultrices pellentesque in imperdiet. Sagittis elementum pharetra nisi.",
    },
    {
      id: 3,
      title: "Honesty",
      text: "Lorem ipsum dolor sit amet consectetur. Viverra gravida consectetur duis lacinia. Varius nec non ultrices pellentesque in imperdiet. Sagittis elementum pharetra nisi.",
    },
    {
      id: 4,
      title: "Mutual Respect",
      text: "Lorem ipsum dolor sit amet consectetur. Viverra gravida consectetur duis lacinia. Varius nec non ultrices pellentesque in imperdiet. Sagittis elementum pharetra nisi.",
    },
  ];
  return (
    <section className="max-w-[83rem] mx-auto pt-[5rem]">
      <h5 className="text-[#098666] text-center text-[1.38rem] font-semibold leading-[1.58rem]">
        OUR CORE VALUES
      </h5>
      <h3 className="special-font text-center text-[#014470] text-[4.5rem] font-normal leading-[4.4rem]">
        Exquisite Care, Exceptional Values
      </h3>
      <article className="grid grid-cols-2 gap-[3rem] place-items-center pt-[4.5rem] pb-[6rem]">
        {values.map((val, index) => (
          <div
            key={index}
            className="shadow-md w-[36.75rem] px-[2rem] py-[1rem] rounded-xl h-[10.125rem]"
          >
            <div className="flex gap-5">
              <div className="w-[150px] h-[150px] mt-7">
                <img src={Icon} alt="" className=" object-fill" />
              </div>
              <div className="flex flex-col gap-y-5">
                <h2 className="text-[#014470] special-font text-[28px] lg:text-[1.75rem] leading-normal">
                  {val.title}
                </h2>
                <p className="text-[#26465B] text-[15px] lg:text-[0.9375rem] leading-[22.4px] lg:leading-[1.4rem]">
                  {val.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Values;
