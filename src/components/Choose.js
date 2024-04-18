import React from "react";
import "../App.css";
import icon1 from "../Assets/icon1.png";
import icon2 from "../Assets/icon2.png";
import icon3 from "../Assets/icon3.png";
import icon4 from "../Assets/icon4.png";
import "../App.css";

const Choose = () => {
  const cards = [
    {
      id: 1,
      title: "Skilled medical professionals",
      icon: icon1,
      text: "Our team consist if highly qualified and experienced doctor, nurses and support staff who bring wealth of knowledge and expertise to our patients’ care. The diverse specialization ensure comprehensive treatment across various medical fields",
    },
    {
      id: 2,
      title: "Modern facilities",
      icon: icon2,
      text: "We invest in the state-of-art medical equipment and technology to deliver accurate and diagnoses and effective treatment. Our facilities ensure optimal comfort and efficiency during consultations and procedures",
    },
    {
      id: 3,
      title: "Flexible Appointments",
      icon: icon3,
      text: "We understand that life can be busy so we offer flexible appointment schedules to accomodate our patients’ needs. With multiple locations across the UK, accessing quality healthcare has never been more convienient.",
    },
    {
      id: 4,
      title: "Wide range of services",
      icon: icon4,
      text: "With an extensive array of medical services available at our facilities, patients can access the care they need without having to visit multiple providers. This convienience saves time and ensures seamless coordination between different aspect of a patient’s care.",
    },
  ];
  return (
    <section className="max-w-[83rem] mx-auto pt-[8rem]">
      <h6 className="text-[#098666] text-[1.38rem] font-semibold leading-[1.25rem] text-center pb-[1rem]">
        WHY CHOOSE US
      </h6>
      <h3 className="text-[#014470] text-center text-7xl special-font font-normal leading-[3.8rem]">
        Why Settle for Less? Discover the <br /> Difference in Our Exquisite
        Care
      </h3>
      <div className="flex py-[5.5rem] justify-between">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-[19.94rem] h-[23.25rem] bg-[#E1F8FF] px-[1.5rem] py-[2.2rem]"
          >
            <img src={card.icon} alt="" />
            <h2 className="text-[#014470] special-font text-[1.8rem] font-normal leading-normal">
              {card.title}
            </h2>{" "}
            <p className="text-[#26465B] font-normal leading-[1.4rem] text-[0.94rem] pt-[1rem]">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Choose;
