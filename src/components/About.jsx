import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="object-contain w-16 h-16"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'ReactJs',
    'NextJs',
    'Prisma',
    'GraphQl',
    'Rest',
    'Redux',
    'Zustand',
    'React Query',
    'Php',
    'Laravel',
    'Mysql',
  ];

  return (
    <div className={`${styles.paddingX} mt-[0px] md:mt-[200px]`}>
      <motion.div variants={textVariant()} className="text-center ">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <div className="flex flex-wrap justify-center mt-10 md:flex-row gap-9 md:gap-0 lg:gap-0 md:justify-around md:items-center lg:justify-around">
        <div className=" p-5 md:p-8 bg-slate-900 rounded-2xl w-[325px] md:w-[1120px] font-medium text-xs md:text-[14px]">
          <div>
            <span className="text-red-500 me-2">class </span>
            <span className="text-white ">Kenneth</span>
          </div>
          <div className="mt-1 ">{'{'}</div>
          <div className=" ms-[30px]">
            <div className=" mt-[7px] text-white">
              <span className="text-red-500 ">constructor</span> {'( ) {'}
              <div className=" ms-[30px] py-1 space-y-1">
                <div className="">
                  this.<span className="text-red-500 ">name</span> =
                  &quot;Kenneth Minn&quot;
                  <span className="text-xs font-semibold ">；</span>
                </div>
                <div className="">
                  this.<span className="text-red-500 ">email</span> =
                  &quot;minthukha2472005@gmail.com&quot;
                  <span className="text-xs font-semibold ">；</span>
                </div>
              </div>
              <div className="">{'}'}</div>
            </div>

            <div className=" mt-[30px] text-white">
              <span className="text-red-500 ">workExperience</span> {'( ) {'}
              <div className=" ms-[30px] py-1 space-y-1">
                <div className="">
                  <span className="text-red-500 ">return </span> {'['}
                </div>
                <div className=" ms-[20px]">
                  {'{'} <br />
                  <span className=" md:ms-4">
                    frontend developer : &apos;Developed Kanote web application
                    together with the team at{' '}
                    <span className="font-extrabold">Tee Htwin</span>&apos;
                  </span>{' '}
                  <br />
                  {'},'}
                </div>
                <div className=" ms-[20px]">
                  {'{'} <br />
                  <span className=" md:ms-4">
                    frontend developer : &apos;Developed Korean Projects and
                    International Projects together with the team at{' '}
                    <span className="font-extrabold ">ITWizard</span>
                    &apos;
                  </span>
                  <br />
                  {'}'}
                </div>
                <div>{']'}</div>
              </div>
              <div className="">{'}'}</div>
            </div>

            <div className=" mt-[30px] text-white">
              <span className="text-red-500 ">certificates</span> {'( ) {'}
              <div className=" ms-[30px] py-1">
                <div className="">
                  <span className="text-red-500 ">return </span> {'['}
                </div>
                <div className=" space-y-1 my-2 ms-[20px]">
                  <div className="">
                    {'{'}{' '}
                    <span>
                      Udemy : &quot;The Complete JavaScript Course&quot;
                    </span>
                    {' } ,'}
                  </div>
                  <div className="">
                    {'{'}{' '}
                    <span>
                      Udemy : &quot;The Complete ReactJs Developer Course&quot;
                    </span>
                    {' } ,'}
                  </div>
                  <div className="">
                    {'{'}{' '}
                    <span>
                      CreativeCoder MM : &quot;Php + Laravel Deep Dive
                      Course&quot;
                    </span>
                    {' } ,'}
                  </div>
                  <div className="">
                    {'{'}{' '}
                    <span className="">
                      MMSIT : &quot;FullStack Development&quot;
                    </span>
                    {' } ,'}
                  </div>
                </div>
                <div>{']'}</div>
              </div>
              <div className="">{'}'}</div>
            </div>

            <div className=" mt-[30px] text-white">
              <span className="text-red-500 ">skills</span> {'( ) {'}
              <div className=" ms-[30px] py-1 space-y-1">
                <div className="">
                  <span className="text-red-500 ">return </span> {'['}
                </div>
                <div className=" ms-[20px]">
                  {skills.map((skill, i) => (
                    <span className="font-semibold " key={i}>
                      {' '}
                      &apos; {skill} &apos; ,
                    </span>
                  ))}
                </div>
                <div>{']'}</div>
              </div>
              <div className="">{'}'}</div>
            </div>
          </div>
          <div>{'}'}</div>
        </div>
        {/* <div className="hidden mt-0 md:mt-10 lg:mt-0 md:block">
          <div className="card">
            <div className="card-info">
              <img
                src="https://i.pinimg.com/736x/03/08/f6/0308f67c8ab0a6ee5b1e4e2bbc04ea79.jpg"
                className=" w-[100%] h-[100%] object-cover rounded-[20px]"
              />
            </div>
          </div>
        </div> */}
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};
export default SectionWrapper(About, 'about');
