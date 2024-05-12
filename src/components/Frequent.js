import React, { useState } from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Frequent = () => {
  const questions = [
    {
      id: 1,
      answer: 'What services does Fijan healthcare offer',
      quest: 'What services does Fijan healthcare offer',
    },
    {
      id: 2,
      answer: 'What services does Fijan healthcare offer',
      quest: 'How are care givers at Fijan healthcare selected and trained',
    },
    {
      id: 3,
      answer: 'What services does Fijan healthcare offer',
      quest:
        'How do you ensure the privacy and dignity of clients recieving home services',
    },
  ];
  const asked = [
    {
      id: 1,
      answer: 'What services does Fijan healthcare offer',
      quest: 'What services does Fijan healthcare offer',
    },
    {
      id: 2,
      answer: 'What services does Fijan healthcare offer',
      quest: 'How are care givers at Fijan healthcare selected and trained',
    },
    {
      id: 3,
      answer: 'What services does Fijan healthcare offer',
      quest:
        'How do you ensure the privacy and dignity of clients recieving home services',
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
    <section className='mac:max-w-[83rem] md:max-w-[45rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[20.5rem] iphone:max-w-[21rem] mx-auto md:h-[21rem] lg:h-[26rem] mac:h-[28rem]'>
      <div className='pt-[1rem]'>
        <h6 className='text-center text-lg md:text-base text-[#098666] lg:text-[1.1rem] xl:text-[1.4rem] font-semibold leading-[1.25rem]'>
          FREQUENTLY ASKED QUESTIONS
        </h6>
        <h1 className='text-center text-[45px] leading-[40px] md:leading-[1.4rem] special-font md:text-[2.8rem] lg:leading-[3.85rem] font-normal lg:text-[3.5rem] xl:text-6xl mac:text-7xl text-[#014470] '>
          Whats on your mind
        </h1>
        <div className='flex flex-col py-[70px] md:flex-row md:justify-around lg:justify-between xl:justify-around md:py-[2.5rem] mac:py-[2rem]'>
          <div>
            {questions.map((question, index) => (
              <div key={index} className=''>
                <div className='flex items-center justify-between border-b-[1px] border-[#D6D5D5]'>
                  <p
                    className={`${index === 0 ? 'mac:w-[28rem]' : ''} ${
                      index === 1 ? 'mac:w-[23rem]' : ''
                    } ${index === 2 ? 'mac:w-[23rem]' : ''} ${
                      index === 0 ? 'lg:w-[18rem]' : ''
                    } ${index === 1 ? 'lg:w-[15rem]' : ''} ${
                      index === 2 ? 'lg:w-[15rem]' : ''
                    } ${index === 0 ? 'xl:w-[27rem]' : ''} ${
                      index === 1 ? 'xl:w-[22rem]' : ''
                    } ${index === 2 ? 'lg:w-[18rem]' : ''} ${
                      index === 1 ? 'w-[17rem]' : ''
                    } ${
                      index === 2 ? 'w-[17rem]' : ''
                    } text-[#26465B] lg:text-[15px] text-sm md:w-[18rem] md:text-[13px] mac:text-lg lg:w-[21rem] xl:w-[25rem] mac:w-[30rem] font-normal whitespace-normal leading-normal py-[1.2rem]`}
                  >
                    {question.quest}
                  </p>
                  {open[index] ? (
                    <IoIosArrowUp
                      className='mt-3 cursor-pointer text-xl text-[#098666] md:text-black'
                      onClick={() => {
                        handleOpen(index);
                      }}
                    />
                  ) : (
                    <IoIosArrowDown
                      className='mt-3 cursor-pointer text-xl text-[#098666] md:text-black'
                      onClick={() => {
                        handleOpen(index);
                      }}
                    />
                  )}
                </div>
                {/* <IoIosArrowDown /> */}
                {open[index] && (
                  <div className='flex-grow [7.625rem] mt-2 transition-all duration-300 ease-in-out font-medium bg-white rounded-md shadow-lg px-[1.52rem] py-[1rem] flex justify-start items-center'>
                    <p className='text-[#26465B] lg:text-[15px] text-sm font-medium md:text-[13px] leading-normal lg:leading-normal'>
                      {question.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div>
            {asked.map((ask, index) => (
              <div key={index}>
                <div className='flex items-center justify-between border-b-[1px] border-[#D6D5D5]'>
                  <p
                    className={`${index === 0 ? 'mac:w-[28rem]' : ''} ${
                      index === 1 ? 'mac:w-[23rem]' : ''
                    } ${index === 2 ? 'mac:w-[23rem]' : ''} ${
                      index === 0 ? 'lg:w-[18rem]' : ''
                    } ${index === 1 ? 'lg:w-[15rem]' : ''} ${
                      index === 2 ? 'lg:w-[15rem]' : ''
                    }${index === 0 ? 'xl:w-[27rem]' : ''} ${
                      index === 1 ? 'xl:w-[22rem]' : ''
                    } ${index === 2 ? 'lg:w-[18rem]' : ''}   ${
                      index === 1 ? 'w-[17rem]' : ''
                    } ${
                      index === 2 ? 'w-[17rem]' : ''
                    } text-[#26465B] text-sm lg:text-[15px] md:text-[13px]  md:w-[18rem] mac:text-lg lg:w-[21rem] xl:w-[25rem] mac:w-[30rem] font-normal whitespace-normal leading-normal py-[1.2rem]`}
                  >
                    {ask.quest}
                  </p>
                  {show[index] ? (
                    <IoIosArrowUp
                      className='mt-3 cursor-pointer text-xl text-[#098666] md:text-black'
                      onClick={() => {
                        handlesOpen(index);
                      }}
                    />
                  ) : (
                    <IoIosArrowDown
                      className='mt-3 cursor-pointer text-xl text-[#098666] md:text-black'
                      onClick={() => {
                        handlesOpen(index);
                      }}
                    />
                  )}
                  {/* <IoIosArrowDown className='mt-5 text-xl text-[#098666] md:text-black' /> */}
                </div>{' '}
                {show[index] && (
                  <div className='flex-grow [7.625rem] mt-2 transition-all duration-300 ease-in-out font-medium bg-white rounded-md shadow-lg px-[1.52rem] py-[1rem] flex justify-start items-center'>
                    <p className='text-[#26465B] lg:text-[15px] text-sm font-medium md:text-[13px] leading-normal lg:leading-normal'>
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
