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
    {
      id: 5,
      title: "Wide range of services",
      icon: icon4,
      text: "With an extensive array of medical services available at our facilities, patients can access the care they need without having to visit multiple providers. This convienience saves time and ensures seamless coordination between different aspect of a patient’s care.",
    },
    {
      id: 6,
      title: "Wide range of services",
      icon: icon4,
      text: "With an extensive array of medical services available at our facilities, patients can access the care they need without having to visit multiple providers. This convienience saves time and ensures seamless coordination between different aspect of a patient’s care.",
    },
    {
      id: 7,
      title: "Wide range of services",
      icon: icon4,
      text: "With an extensive array of medical services available at our facilities, patients can access the care they need without having to visit multiple providers. This convienience saves time and ensures seamless coordination between different aspect of a patient’s care.",
    },
    {
      id: 8,
      title: "Wide range of services",
      icon: icon4,
      text: "With an extensive array of medical services available at our facilities, patients can access the care they need without having to visit multiple providers. This convienience saves time and ensures seamless coordination between different aspect of a patient’s care.",
    },
  ];
  return (
    <section className="mac:max-w-[70rem] md:max-w-[45rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[22rem] mx-auto lg:pt-[4rem] xl:pt-[6rem] mac:pt-[7rem]">
      <h6 className="text-[#098666] md:text-base lg:text-[1.2rem] xl:text-[1.38rem] font-semibold leading-[1.25rem] text-center pb-[1rem]">
        WHY CHOOSE US
      </h6>
      <h3 className="text-[#014470] leading-normal md:text-4xl lg:leading-tighter text-center lg:text-5xl xl:text-6xl mac:text-7xl special-font font-normal xl:leading-[3.8rem]">
        Why Settle for Less? Discover the <br /> Difference in Our Exquisite
        Care
      </h3>
      <div className="flex md:py-[4rem] xl:py-[5.5rem] justify-between overflow-x-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className="min-w-[17.94rem] max-w-[19.94rem] mx-[1.5rem] min-h-[16.25rem] max-h-[23.25rem] bg-[#E1F8FF] px-[1.5rem] py-[2.2rem]"
          >
            <img src={card.icon} alt="" />
            <h2 className="text-[#014470] special-font text-[1.45rem] lg:text-[1.8rem] font-normal leading-normal">
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
