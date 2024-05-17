import React, { useState } from 'react';

const Nurses = () => {
  const jobs = [
    {
      id: 1,
      title: 'Candidate Attraction',
      description:
        'Finding suitable candidates for your care worker positions is essential for maintaining the quality of care within your organisation. Our candidate attraction services utilise various channels and strategies to reach a diverse pool of qualified professionals.We employ targeted advertising campaigns, industry-specific job boards, social media platforms, and our extensive network to attract talent.By understanding your specific requirements and organisational culture, we can create compelling job descriptions and market your opportunities effectively to potential candidates.',
    },
    {
      id: 2,
      title: 'Campaign Management',
      description:
        'Managing a recruitment campaign can be a time-consuming and complex task. As your care worker agency, we take care of the entire campaign management process for you.From designing and implementing recruitment strategies to monitoring and evaluating campaign performance, we ensure that your recruitment efforts are efficient and effective. Our team of experienced recruiters will handle all aspects of the campaign, including screening applications, conducting interviews, and managing communication with candidates.By leveraging our expertise, you can focus on other critical aspects of your organisation, confident that your recruitment campaign is in capable hands.',
    },
    {
      id: 3,
      title: 'Contract and Temporary Placement',
      description:
        'Flexibility is crucial in the healthcare industry, where demand can fluctuate. Our contract and temporary placement services allow you to quickly and easily fill short-term staffing gaps.Whether you require temporary cover for sick leave, vacation periods, or increased workload, we have a pool of skilled and qualified care workers ready to step in. Our home care recruitment agency UK handles all the necessary paperwork, payroll, and compliance to ensure a smooth transition for your organisation and the temporary care worker.By partnering with us for contract and temporary placements, you can maintain continuity of care without compromising quality.',
    },
    {
      id: 4,
      title: 'Permanent Search and Selection',
      description:
        'When looking to invest long-term in your care workforce, our endless search and selection services are designed to find the perfect fit. We work closely with you to understand your organisation’s culture, values, and specific requirements for each position.Our dedicated team of recruiters conducts thorough candidate assessments, including interviews, reference checks, and background screenings. We present you with a shortlist of highly qualified candidates who not only possess the necessary skills and experience but also align with your organisation’s mission and values.By partnering with us for permanent search and selection, you can make informed hiring decisions and build a solid and dedicated care team.',
    },
    {
      id: 5,
      title: 'Executive Headhunting',
      description:
        'For senior-level positions within your care organisation, we offer executive headhunting services. We understand the unique skills and experience required for leadership roles in the healthcare industry.Our executive recruiters leverage their industry knowledge and extensive network to identify and approach top-level talent with the expertise and leadership qualities to drive your organisation forward. Through a rigorous selection process, we ensure that the candidates we present to you are highly skilled, experienced, and well-suited to the demands of executive roles.Partnering with us for executive headhunting enables you to secure top-tier talent and strengthen your organisation’s leadership team.',
    },
    {
      id: 6,
      title: 'Recruitment Process Outsourcing (RPO) ',
      description:
        'Managing the entire recruitment process can be a daunting task for any organisation. Our recruitment process outsourcing (RPO) services provide a comprehensive solution for all your recruitment needs.We become an extension of your HR department, managing everything from candidate sourcing and screening to interview coordination, offer management, and onboarding. By outsourcing your recruitment process to us, you can reduce administrative burden, improve efficiency, and ensure a consistent and streamlined approach to hiring across your organisation.As one of the best recruitment agencies for care assistants, we provide fully customisable RPO services, allowing you to retain control while benefiting from our expertise and resources.',
    },
  ];
  const [hover, setHover] = useState(null);

  const handleMouseEnter = (id) => {
    setHover(id);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };
  return (
    <section className='mac:max-w-[80rem] md:max-w-[45rem] lg:max-w-[57rem] xl:max-w-[73rem] pro:max-w-[52rem] max-w-[22rem] mx-auto pt-[9.5rem] md:pt-[3rem] lg:pt-[5rem] xl:pt-[11rem] mac:pt-[9rem]'>
      {/* <h1 className=' text-center md:text-left special-font md:px-2 xl:px-7 mac:px-0 text-3xl md:text-4xl leading-normal lg:leading-[3.85rem] font-normal lg:text-5xl xl:text-6xl mac:text-[3.5rem] text-[#014470] '>
        Registered General Nurse - RGN
      </h1> */}
      <p className='pt-[1rem] md:pt-[2.2rem] text-[14px] leading-[28px] md:text-[12px] max-w-[20.5rem] md:max-w-[35rem] lg:max-w-[45rem] xl:max-w-[60rem] mac:max-w-[70rem] mx-auto flex flex-wrap text-[#26465B] lg:text-sm xl:text-base mac:text-lg font-normal md:leading-normal lg:leading-[30px]'>
        As a recruitment agency for care workers, we understand the unique
        challenges and requirements that employers in the healthcare
        <br className='hidden mac:block' /> industry face. We are dedicated to
        providing comprehensive and tailored solutions to meet your staffing
        needs.
        <br className='hidden mac:block' />
        With our expertise and extensive network, we can assist you in finding
        qualified and compassionate care workers who align with
        <br className='hidden mac:block' /> your organisation’s values and
        goals. Our range of services is designed to streamline the recruitment
        process, saving you time and <br className='hidden mac:block' />
        resources while ensuring the highest standard of care for your clients.
      </p>
      <h1 className=' text-center special-font pt-[64px] md:pt-[50px] xl:pt-[75px] mac:px-0 text-3xl md:text-4xl leading-normal lg:leading-[3.85rem] font-normal lg:text-5xl xl:text-7xl mac:text-[3.5rem] text-[#014470] '>
        Our Services
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 md:pb-[1rem] lg:pb-[2.5rem] lg:grid-cols-2 xl:grid-cols-3 gap-y-[50px] md:gap-y-[55px] lg:gap-y-[83px] gap-x-[20px] pt-[30px] pb-[50px] md:pt-[46px] hover:bg-white'>
        {jobs.map((cards) => (
          <div
            key={cards.id}
            onMouseEnter={() => handleMouseEnter(cards.id)}
            onMouseLeave={handleMouseLeave}
            className='w-[300px] iphone:w-[340px] mx-auto md:w-[340px] md:h-[622px] lg:w-[413px] xl:w-[380px] mac:w-[413px] lg:h-[662px] bg-[#E1F8FF] py-[32px] px-[18px] md:px-[25px] transition-colors duration-300 ease-in-out hover:bg-white hover:shadow-md hover:shadow-[#00000026]'
          >
            {hover === cards.id ? (
              <div className=' bg-[#0171BB] w-10 h-10 flex justify-center items-center rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 38 38'
                  fill='#0171BB'
                >
                  <path
                    d='M34.0443 19.0002C34.0443 27.7447 27.7471 34.0418 19.0026 34.0418C10.2581 34.0418 3.96094 27.7447 3.96094 19.0002C3.96094 10.2557 10.2581 3.9585 19.0026 3.9585C27.7471 3.9585 34.0443 10.2557 34.0443 19.0002Z'
                    stroke='white'
                    stroke-width='1.58333'
                  />
                  <path
                    d='M16.1845 12.3053C16.0339 12.669 16.0339 13.1301 16.0339 14.0522V15.9364C16.0339 15.9812 16.0339 16.0036 16.0199 16.0175C16.006 16.0314 15.9836 16.0314 15.9389 16.0314H14.0547C13.1325 16.0314 12.6714 16.0314 12.3077 16.1821C11.8228 16.3829 11.4375 16.7682 11.2366 17.2532C11.0859 17.6169 11.0859 18.078 11.0859 19.0002C11.0859 19.9223 11.0859 20.3834 11.2366 20.7471C11.4375 21.2321 11.8228 21.6174 12.3077 21.8183C12.6714 21.9689 13.1325 21.9689 14.0547 21.9689H15.9389C15.9836 21.9689 16.006 21.9689 16.0199 21.9828C16.0339 21.9967 16.0339 22.0191 16.0339 22.0639V23.9481C16.0339 24.8703 16.0339 25.3313 16.1845 25.6951C16.3854 26.18 16.7707 26.5653 17.2556 26.7662C17.6193 26.9168 18.0804 26.9168 19.0026 26.9168C19.9248 26.9168 20.3859 26.9168 20.7496 26.7662C21.2345 26.5653 21.6198 26.18 21.8207 25.6951C21.9714 25.3313 21.9714 24.8703 21.9714 23.9481V22.0639C21.9714 22.0191 21.9714 21.9967 21.9853 21.9828C21.9992 21.9689 22.0216 21.9689 22.0664 21.9689H23.9505C24.8727 21.9689 25.3338 21.9689 25.6975 21.8183C26.1824 21.6174 26.5677 21.2321 26.7686 20.7471C26.9193 20.3834 26.9193 19.9223 26.9193 19.0002C26.9193 18.078 26.9193 17.6169 26.7686 17.2532C26.5677 16.7682 26.1825 16.3829 25.6975 16.1821C25.3338 16.0314 24.8727 16.0314 23.9505 16.0314H22.0664C22.0216 16.0314 21.9992 16.0314 21.9853 16.0175C21.9714 16.0036 21.9714 15.9812 21.9714 15.9364V14.0522C21.9714 13.1301 21.9714 12.669 21.8207 12.3053C21.6198 11.8203 21.2345 11.435 20.7496 11.2342C20.3859 11.0835 19.9248 11.0835 19.0026 11.0835C18.0804 11.0835 17.6193 11.0835 17.2556 11.2342C16.7707 11.435 16.3854 11.8203 16.1845 12.3053Z'
                    stroke='white'
                    stroke-width='1.58333'
                  />
                </svg>
              </div>
            ) : (
              <div className='bg-white w-12 h-12 flex justify-center items-center rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='38'
                  height='38'
                  viewBox='0 0 38 38'
                  fill='none'
                >
                  <path
                    d='M34.0443 19C34.0443 27.7446 27.7471 34.0417 19.0026 34.0417C10.2581 34.0417 3.96094 27.7446 3.96094 19C3.96094 10.2555 10.2581 3.95837 19.0026 3.95837C27.7471 3.95837 34.0443 10.2555 34.0443 19Z'
                    stroke='#02BCF7'
                    stroke-width='1.58333'
                  />
                  <path
                    d='M16.1845 12.3051C16.0339 12.6689 16.0339 13.1299 16.0339 14.0521V15.9363C16.0339 15.9811 16.0339 16.0035 16.0199 16.0174C16.006 16.0313 15.9836 16.0313 15.9389 16.0313H14.0547C13.1325 16.0313 12.6714 16.0313 12.3077 16.1819C11.8228 16.3828 11.4375 16.7681 11.2366 17.2531C11.0859 17.6168 11.0859 18.0779 11.0859 19C11.0859 19.9222 11.0859 20.3833 11.2366 20.747C11.4375 21.232 11.8228 21.6173 12.3077 21.8181C12.6714 21.9688 13.1325 21.9688 14.0547 21.9688H15.9389C15.9836 21.9688 16.006 21.9688 16.0199 21.9827C16.0339 21.9966 16.0339 22.019 16.0339 22.0638V23.948C16.0339 24.8701 16.0339 25.3312 16.1845 25.6949C16.3854 26.1799 16.7707 26.5652 17.2556 26.7661C17.6193 26.9167 18.0804 26.9167 19.0026 26.9167C19.9248 26.9167 20.3859 26.9167 20.7496 26.7661C21.2345 26.5652 21.6198 26.1799 21.8207 25.6949C21.9714 25.3312 21.9714 24.8701 21.9714 23.948V22.0638C21.9714 22.019 21.9714 21.9966 21.9853 21.9827C21.9992 21.9688 22.0216 21.9688 22.0664 21.9688H23.9505C24.8727 21.9688 25.3338 21.9688 25.6975 21.8181C26.1824 21.6173 26.5677 21.232 26.7686 20.747C26.9193 20.3833 26.9193 19.9222 26.9193 19C26.9193 18.0779 26.9193 17.6168 26.7686 17.2531C26.5677 16.7681 26.1825 16.3828 25.6975 16.1819C25.3338 16.0313 24.8727 16.0313 23.9505 16.0313H22.0664C22.0216 16.0313 21.9992 16.0313 21.9853 16.0174C21.9714 16.0035 21.9714 15.9811 21.9714 15.9363V14.0521C21.9714 13.1299 21.9714 12.6689 21.8207 12.3051C21.6198 11.8202 21.2345 11.4349 20.7496 11.234C20.3859 11.0834 19.9248 11.0834 19.0026 11.0834C18.0804 11.0834 17.6193 11.0834 17.2556 11.234C16.7707 11.4349 16.3854 11.8202 16.1845 12.3051Z'
                    stroke='#098666'
                    stroke-width='1.58333'
                  />
                </svg>
              </div>
            )}

            <h3 className='pt-[15px] special-font text-[#014470] text-[23px] md:text-[20px] lg:text-[28px] xl:text-[24px] mac:text-[28px] font-normal leading-normal'>
              {cards.title}
            </h3>
            <p className='pt-[18px] font-normal leading-[26px] text-[14px] md:text-[13px] lg:text-base text-[#26465B]'>
              {cards.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Nurses;
