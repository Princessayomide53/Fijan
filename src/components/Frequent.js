import React, { useState } from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Frequent = () => {
  const questions = [
    {
      id: 1,
      answer:
        'We recruit a wide range of healthcare professionals, including doctors, nurses, care support workers and many more.',
      quest: 'What types of healthcare professionals do you recruit?',
    },
    {
      id: 2,
      answer:
        'We conduct thorough screenings, interviews and background checks to ensure that our candidates meet the highest standards of professionalism, experience and expertise.',
      quest: 'How do you ensure the quality of the candidates you provide?',
    },
    {
      id: 3,
      answer:
        'Our recruitment process involves sourcing and screening candidates, conducting interviews, checking references, and ensuring all ensuring all necessary certifications and qualications are in order.',
      quest: 'What is your recruitment process?',
    },
  ];
  const asked = [
    {
      id: 1,
      answer:
        'We provide both temporary and permanent staffing solutions to meet the diverse needs of our client.',
      quest: 'Do you offer temporary or permanent staffing solutions?',
    },
    {
      id: 2,
      answer:
        'To get started, simply contact ue to discuss your staffing needs and requirements, and we will begin the process of finding the best candidate for your organization.',
      quest: 'How can i get started with your recruitment process?',
    },
    {
      id: 3,
      answer:
        'Our commitment to personalized service, attention to detail and focus on building strong relationship with clients and candidates make us stand out in the health care industry.',
      quest: 'What sets your agency apart from other recruitment agencies?',
    },
  ];
  const [open, setOpen] = useState(questions.map(() => false));
  const [show, setShow] = useState(questions.map(() => false));
  const handleOpen = (index) => {
    setOpen((prevOpen) => {
      const newOpen = prevOpen.map((_, i) =>
        i === index ? !prevOpen[index] : false
      );
      return newOpen;
    });
  };
  const handlesOpen = (index) => {
    setShow((prevOpens) => {
      const newOpen = prevOpens.map((_, i) =>
        i === index ? !prevOpens[index] : false
      );
      return newOpen;
    });
  };
  return (
    <section className='mac:max-w-[83rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[20.3rem] iphone:max-w-[22rem] mx-auto md:h-[26rem] lg:h-[29.5rem] xl:h-[26.7rem]'>
      <div className='pt-[1rem]'>
        <h6 className='text-center text-lg pb-[12px] md:pb-0 md:text-base text-[#098666] lg:text-[1.1rem] xl:text-[1.4rem] font-semibold leading-[1.25rem]'>
          FREQUENTLY ASKED QUESTIONS
        </h6>
        <h1 className='text-center text-[45px] leading-[40px] md:leading-[1.4rem] special-font md:text-[2.8rem] lg:leading-[3.85rem] font-normal lg:text-[3.5rem] xl:text-6xl mac:text-7xl text-[#014470] '>
          Whats on your mind
        </h1>
        <div className='flex flex-col py-[50px] md:flex-row md:justify-between xl:justify-around md:py-[2.5rem] mac:py-[2rem]'>
          <div className='md:space-y-[9px] xl:space-y-0'>
            {questions.map((question, index) => (
              <div
                onClick={() => {
                  handleOpen(index);
                }}
                key={index}
                className={` ${
                  open[index] ? 'border-[1px] border-[#D6D5D5]' : ''
                }`}
              >
                <div
                  className={`${
                    open[index]
                      ? 'bg-[#098666] text-white  border-[#098666]'
                      : ''
                  } flex items-center px-3 justify-between border-b-[1px] border-[#D6D5D5]`}
                >
                  <p
                    className={`${index === 0 ? 'mac:w-[28rem]' : ''} ${
                      index === 1 ? 'mac:w-[27rem]' : ''
                    } ${index === 2 ? 'mac:w-[27.3rem]' : ''} ${
                      index === 0 ? 'lg:w-[21rem]' : ''
                    } ${index === 1 ? 'lg:w-[21.8rem]' : ''} ${
                      index === 0 ? 'md:w-[17.5rem]' : ''
                    }${index === 1 ? 'md:w-[17.5rem]' : ''}${
                      index === 2 ? 'md:w-[18rem]' : ''
                    } ${index === 2 ? 'lg:w-[19rem]' : ''} ${
                      index === 0 ? 'xl:w-[27rem]' : ''
                    } ${index === 1 ? 'xl:w-[27rem]' : ''} ${
                      index === 2 ? 'xl:w-[27.3rem]' : ''
                    } ${index === 1 ? 'w-[17rem]' : ''}
                    ${index === 0 ? 'w-[16.5rem]' : ''} ${
                      index === 2 ? 'w-[17rem]' : ''
                    } ${
                      open[index] ? 'text-white' : ''
                    } text-[#26465B] lg:text-[15px] text-sm md:w-[16.5rem] md:text-[13px] mac:text-lg lg:w-[21rem] xl:w-[25rem] mac:w-[30rem] font-normal whitespace-normal leading-normal py-[1.2rem]`}
                  >
                    {question.quest}
                  </p>
                  {open[index] ? (
                    <IoIosArrowUp
                      className={`mt-3 cursor-pointer ${
                        open[index] ? 'text-white md:text-white' : ''
                      } text-xl text-[#098666] md:text-black `}
                      onClick={() => {
                        handleOpen(index);
                      }}
                    />
                  ) : (
                    <IoIosArrowDown
                      className={`mt-3 cursor-pointer text-xl text-[#098666] md:text-black ${
                        open[index] ? 'text-white md:text-white' : ''
                      }`}
                      onClick={() => {
                        handleOpen(index);
                      }}
                    />
                  )}
                </div>
                {/* <IoIosArrowDown /> */}
                {open[index] && (
                  <div className='flex-grow [7.625rem] mt-2 transition-all duration-300 ease-in-out font-medium bg-white rounded-md shadow-lg px-3 py-[1rem] flex justify-start items-center'>
                    <p
                      className={`${index === 0 ? 'mac:w-[28rem]' : ''} ${
                        index === 1 ? 'mac:w-[27rem]' : ''
                      } ${index === 2 ? 'mac:w-[27.3rem]' : ''} ${
                        index === 0 ? 'lg:w-[21rem]' : ''
                      } ${index === 1 ? 'lg:w-[21.8rem]' : ''} ${
                        index === 2 ? 'lg:w-[21rem]' : ''
                      } ${index === 0 ? 'xl:w-[27rem]' : ''} ${
                        index === 1 ? 'xl:w-[27rem]' : ''
                      } ${index === 2 ? 'xl:w-[27.3rem]' : ''}
                      ${index === 0 ? 'md:w-[17.5rem]' : ''}${
                        index === 1 ? 'md:w-[17.5rem]' : ''
                      }${index === 2 ? 'md:w-[18rem]' : ''} ${
                        index === 1 ? 'w-full' : ''
                      } ${
                        index === 2 ? 'w-full' : ''
                      }  text-[#26465B] lg:text-[14.5px] text-sm font-medium md:text-[12.85px] leading-normal lg:leading-normal`}
                    >
                      {question.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div>
            {asked.map((ask, index) => (
              <div
                onClick={() => {
                  handlesOpen(index);
                }}
                key={index}
                className={` ${
                  show[index] ? 'border-[1px] border-[#D6D5D5]' : ''
                }`}
              >
                <div
                  className={`${
                    show[index]
                      ? 'bg-[#098666] text-white  border-[#098666]'
                      : ''
                  } flex items-center px-3  justify-between border-b-[1px] border-[#D6D5D5]`}
                >
                  <p
                    className={`${index === 0 ? 'mac:w-[28rem]' : ''} ${
                      index === 1 ? 'mac:w-[27rem]' : ''
                    } ${index === 2 ? 'mac:w-[27.3rem]' : ''} ${
                      index === 0 ? 'lg:w-[21rem]' : ''
                    } ${index === 1 ? 'lg:w-[21.8rem]' : ''} ${
                      index === 0 ? 'md:w-[17.5rem]' : ''
                    }${index === 1 ? 'md:w-[17.5rem]' : ''}${
                      index === 2 ? 'md:w-[18rem]' : ''
                    } ${index === 2 ? 'lg:w-[19rem]' : ''} ${
                      index === 0 ? 'xl:w-[27rem]' : ''
                    } ${index === 1 ? 'xl:w-[27rem]' : ''} ${
                      index === 2 ? 'xl:w-[27.3rem]' : ''
                    } ${index === 1 ? 'w-[17rem]' : ''}
                    ${index === 0 ? 'w-[16.5rem]' : ''} ${
                      index === 2 ? 'w-[17rem]' : ''
                    } ${
                      show[index] ? 'text-white' : ''
                    } text-[#26465B] text-sm lg:text-[15px] md:text-[13px]  md:w-[18rem] mac:text-lg lg:w-[21rem] xl:w-[25rem] mac:w-[30rem] font-normal whitespace-normal leading-normal py-[1.2rem]`}
                  >
                    {ask.quest}
                  </p>
                  {show[index] ? (
                    <IoIosArrowUp
                      className={`mt-3 cursor-pointer ${
                        show[index] ? 'text-white md:text-white' : ''
                      } text-xl text-[#098666] md:text-black `}
                      onClick={() => {
                        handlesOpen(index);
                      }}
                    />
                  ) : (
                    <IoIosArrowDown
                      className={`mt-3 cursor-pointer ${
                        show[index] ? 'text-white md:text-white' : ''
                      } text-xl text-[#098666] md:text-black `}
                      onClick={() => {
                        handlesOpen(index);
                      }}
                    />
                  )}
                  {/* <IoIosArrowDown className='mt-5 text-xl text-[#098666] md:text-black' /> */}
                </div>{' '}
                {show[index] && (
                  <div className='flex-grow [7.625rem] mt-2 transition-all duration-300 ease-in-out font-medium bg-white rounded-md shadow-lg px-3 py-[1rem] flex justify-start items-center'>
                    <p
                      className={`${index === 0 ? 'mac:w-[28rem]' : ''} ${
                        index === 1 ? 'mac:w-[27rem]' : ''
                      } ${index === 2 ? 'mac:w-[27.3rem]' : ''} ${
                        index === 0 ? 'lg:w-[21rem]' : ''
                      } ${index === 1 ? 'lg:w-[21.2rem]' : ''} ${
                        index === 2 ? 'lg:w-[21.5rem]' : ''
                      } ${index === 0 ? 'xl:w-[27rem]' : ''} ${
                        index === 1 ? 'xl:w-[27rem]' : ''
                      } ${index === 2 ? 'xl:w-[27.3rem]' : ''}
                      ${index === 0 ? 'md:w-[17.5rem]' : ''}${
                        index === 1 ? 'md:w-[17.5rem]' : ''
                      }${index === 2 ? 'md:w-[18rem]' : ''} ${
                        index === 1 ? 'w-full' : ''
                      } ${
                        index === 2 ? 'w-full' : ''
                      }  text-[#26465B] lg:text-[14.5px] text-sm font-medium md:text-[12.85px] leading-normal lg:leading-normal`}
                    >
                      {ask.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frequent;
