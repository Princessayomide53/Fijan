import React from "react";
import about1 from "../../Assets/about1.png";
import about2 from "../../Assets/about2.png";
import about3 from "../../Assets/about3.png";
import about4 from "../../Assets/about4.png";

const OurServices = () => {
  return (
    <section className="max-w-[83rem] mx-auto pt-[20rem]">
      <h5 className="text-[#098666] text-[1.58rem] font-semibold leading-[1.58rem]">
        OUR SERVICES
      </h5>
      <h3 className="special-font text-[#014470] text-[4.5rem] font-normal leading-[4.4rem]">
        Our Exquisite Journey
      </h3>
      <div className="flex gap-[5rem] pt-[2rem]">
        <p className="text-[#26465B] flex-wrap text-[1.1rem] text-justify font-normal whitespace-pre-wrap leading-[1.75rem]">
          Lorem ipsum dolor sit amet consectetur. Viverra ultricies risus semper
          cum nunc mattis sed curabitur. Sem nisl at vulputate velit accumsan
          iaculis. Consequat netus in et tincidunt. Tellus commodo tristique
          maecenas quis nisl. laoreet in ultrices dolor condimentum enim massa
          odio. Tristique duis fermentum magnis tristique etiam euismod lacinia.
          Ornare velit vulputate volutpat fames consectetur massa venenatis arcu
          orci. Pretium vitae.
        </p>
        <p className="text-[#26465B] flex-wrap text-justify text-[1.1rem] px-5 whitespace-pre-wrap font-normal leading-[1.75rem]">
          Lorem ipsum dolor sit amet consectetur. Viverra ultricies risus semper
          cum nunc mattis sed curabitur. Sem nisl at vulputate velit accumsan
          iaculis. Consequat netus in et tincidunt. Tellus commodo tristique
          maecenas quis nisl. laoreet in ultrices dolor condimentum enim massa
          odio. Tristique duis fermentum magnis tristique etiam euismod lacinia.
          Ornare velit vulputate volutpat fames consectetur massa venenatis arcu
          orci. Pretium vitae.
        </p>
      </div>
      <div className="flex justify-around items-center object-contain pt-[3rem] pb-[7rem]">
        <img src={about1} alt="" />
        <img src={about2} alt="" />
        <img src={about3} alt="" />
        <img src={about4} alt="" />
      </div>
    </section>
  );
};

export default OurServices;
