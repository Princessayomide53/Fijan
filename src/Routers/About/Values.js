import React from 'react';
import Icon from '../../Assets/Icon.png';

const Values = () => {
  const values = [
    {
      id: 1,
      title: 'Discipline',
      text: 'We maintain a strong work ethic and professional attitude,adhering to high standards of conduct and responsibility. By staying focused and dedicated to our mission, we ensure consistent and reliable services for our clients.',
    },
    {
      id: 2,
      title: 'Hardwork',
      text: 'Our team is committed to going above and beyond in our efforts to provide exceptional care and support. Through diligence and perseverance, we overcome challenges and continuously improve our services.',
    },
    {
      id: 3,
      title: 'Honesty',
      text: 'We value open and transparent communication, fostering trust and credibility in all our interactions. Our commitment to honesty ensures that we act with integrity, always putting the needs of our clients first.',
    },
    {
      id: 4,
      title: 'Mutual Respect',
      text: 'We foster an environment of empathy, understanding and collaboration, recognizing the unique value and contributions of every individual. By promoting a culture of respect, We create strong relationship with our clients..',
    },
  ];
  return (
    <section className='mac:max-w-[83rem] md:max-w-[45rem] xl:max-w-[75rem] lg:max-w-[60rem] pro:max-w-[52rem] max-w-[20.5rem] iphone:max-w-[22rem] mx-auto pt-[3.6rem] md:pt-[4rem] lg:pt-[5rem]'>
      <h5 className='text-[#098666] pb-[12px] md:pb-0 text-center text-base lg:text-[1.38rem] font-semibold leading-[1.58rem]'>
        OUR CORE VALUES
      </h5>
      <h3 className='special-font text-[42px] text-center leading-[40px] md:text-[2.5rem] text-[#014470] lg:text-[3.2rem] mac:text-[4.5rem] font-normal md:leading-[4.4rem]'>
        Exquisite Care,
        <br className='md:hidden' /> Exceptional Values
      </h3>
      <article className='grid grid-cols-1 md:grid-cols-2 gap-[32px] md:gap-[2.5rem] place-items-center pb-[4.5rem] pt-[2rem] md:pt-[3rem] lg:pt-[4.5rem] md:pb-[4rem] lg:pb-[6rem]'>
        {values.map((val, index) => (
          <div
            key={index}
            className='shadow-lg shadow-[#0000001F] h-[9.3rem] lg:w-[25.75rem] xl:w-[34.75rem] px-[0.9rem] mac:w-[36.75rem] md:px-[0.75rem] py-[0.75rem] lg:px-[1rem] xl:px-[2rem] lg:py-[1rem] rounded-3xl md:h-[12.125rem] lg:h-[12.225rem] mac:h-[11.125rem]'
          >
            <div className='flex gap-3 md:gap-5'>
              <div className='w-[120px] h-[120px] md:w-[150px] md:h-[150px] mt-[47px] md:mt-7 xl:mt-9'>
                <img src={Icon} alt='' className=' object-fill' />
              </div>
              <div className='flex flex-col md:gap-y-2 lg:gap-y-3 xl:gap-y-2'>
                <h2 className='text-[#014470] text-xl special-font font-normal md:text-xl lg:text-[20px]  xl:text-[1.75rem] leading-normal'>
                  {val.title}
                </h2>
                <p className='text-[#26465B] font-normal text-[11px] md:pt-0 pt-[0.2rem] md:text-[12px] lg:text-[13px] xl:text-[0.8775rem] leading-[18px] md:leading-[22.4px] lg:leading-[1.4rem]'>
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
