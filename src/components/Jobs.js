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
    <section className="max-w-[83rem] mx-auto pt-[4rem]">
      <h6 className="text-center text-[#098666] text-[1.4rem] font-semibold leading-[1.25rem] pb-[1rem]">
        HOT JOBS
      </h6>

      <h1 className="text-center special-font leading-[3.85rem] font-normal text-7xl text-[#014470] ">
        Nursing and Healthcare Hot jobs
      </h1>
      <div className="flex justify-around py-[6.5rem]">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="w-[19.9375rem] h-[21.375rem] bg-[#0171BB] rounded-xl px-[1.2rem] py-[1.7rem]"
          >
            <h4 className="text-[#fff] pb-[1.5rem] text-[1.25rem] font-bold leading-[1.25rem]">
              {job.title}
            </h4>
            <p className="text-white pb-[0.8rem] text-base font-light leading-[1.25rem]">
              {job.pay}
            </p>{" "}
            <p className="text-white text-base pb-[1.2rem] font-light leading-[1.25rem] border-b-[1px] border-[#fff]">
              {job.text}
            </p>
            <p className="text-white py-[1.2rem] text-justify text-base font-light leading-[1.35rem]">
              {job.description}
            </p>
            <p className="text-white pt-[1rem] underline text-base font-light leading-[1.35rem]">
              {job.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Jobs;
