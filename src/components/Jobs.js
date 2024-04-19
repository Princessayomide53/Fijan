import React from "react";
import "../App.css";

const Jobs = () => {
  const jobs = [
    {
      id: 1,
      title: "HEALTHCARE ASSISTANT",
      pay: "$10.42",
      text: "Sutton Coldfield",
      description:
        "A beautiful Nursing home in the leafy town of Sutton Coldfield, sitting on bus and tarain routesiffering regular hours to experienced staff",
      details: "SEE FULL DETAILS HERE",
    },
    {
      id: 2,
      title: "HEALTHCARE ASSISTANT",
      pay: "$10.42",
      text: "Sutton Coldfield",
      description:
        "A beautiful Nursing home in the leafy town of Sutton Coldfield, sitting on bus and tarain routesiffering regular hours to experienced staff",
      details: "SEE FULL DETAILS HERE",
    },
    {
      id: 3,
      title: "HEALTHCARE ASSISTANT",
      pay: "$10.42",
      text: "Sutton Coldfield",
      description:
        "A beautiful Nursing home in the leafy town of Sutton Coldfield, sitting on bus and tarain routesiffering regular hours to experienced staff",
      details: "SEE FULL DETAILS HERE",
    },
  ];
  return (
    <section className="mac:max-w-[83rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[22rem] mx-auto md:pt-[4rem] xl:pt-[6rem] mac:pt-[6rem]">
      <h6 className="text-center md:text-base text-[#098666] lg:text-[1.25rem] xl:text-[1.4rem] font-semibold leading-[1.25rem] pb-[1rem]">
        HOT JOBS
      </h6>

      <h1 className="text-center special-font md:text-4xl leading-normal lg:leading-[3.85rem] font-normal lg:text-5xl xl:text-6xl mac:text-7xl text-[#014470] ">
        Nursing and Healthcare Hot jobs
      </h1>
      <div className="flex md:justify-around md:pt-[2.5rem] mac:justify-between lg:py-[3.7rem] xl:py-[5rem]">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="md:w-[12.8375rem] md:h-[18.5375rem] lg:w-[17.5375rem] xl:w-[17.9375rem] mac:w-[19.9375rem] lg:h-[21.375rem] bg-[#0171BB] rounded-xl px-[1.2rem] md:py-[1.2rem] lg:py-[1.7rem]"
          >
            <h4 className="text-[#fff] lg:pb-[1rem] md:pb-[0.5rem] mac:pb-[1.5rem] md:text-[12px] lg:text-[1rem] mac:text-[1.25rem] font-bold leading-[1.25rem]">
              {job.title}
            </h4>
            <p className="text-white pb-[0.8rem] text-[12.5px] lg:text-base font-light leading-[1.25rem]">
              {job.pay}
            </p>{" "}
            <p className="text-white text-[12.5px] lg:text-base md:pb-[0.9rem] lg:pb-[1.2rem] font-light leading-[1.25rem] border-b-[1px] border-[#fff]">
              {job.text}
            </p>
            <p className="text-white md:py-[0.9rem] lg:py-[1.2rem] text-[11.5px] text-justify lg:text-base font-light leading-[1.35rem]">
              {job.description}
            </p>
            <p className="text-white pt-[0.8rem] lg:pt-[1rem] underline text-xs lg:text-base font-light leading-[1.35rem]">
              {job.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Jobs;
