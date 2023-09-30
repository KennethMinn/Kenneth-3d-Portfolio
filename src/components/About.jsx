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
          className="w-16 h-16 object-contain"
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
    ' HTML',
    'CSS',
    'SASS',
    'BOOTSTRAP',
    'TAILWIND',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'REACT',
    'REDUX',
    'RTK TOOLKIT',
    'PHP',
    'MYSQL',
    'NEXTJS',
    'LARAVEL',
  ];

  return (
    <div className={`${styles.paddingX} md:mt-0 lg:mt-0 `}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <div className=" flex md:flex-row flex-wrap justify-center gap-9 md:gap-0 lg:gap-0  md:justify-center md:items-center lg:justify-between">
        <div>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className=" mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify md:text-start"
          >
            As a frontend developer, I am proficient in
            {/* <span className=" font-bold">HTML</span>, */}
            {skills.map(skill => (
              <span className=" font-bold" key={skill}>
                {skill + ' '}
              </span>
            ))}
            and I am constantly expanding my knowledge of these languages as
            well as exploring new technologies and frameworks. I have experience
            with responsive design and user interface development, and I am
            comfortable working with both individual and team projects. I pride
            myself on my attention to detail and my ability to problem-solve and
            troubleshoot code. I am dedicated to creating user-friendly websites
            that are visually appealing and easy to navigate. I am also a strong
            communicator, and I enjoy working collaboratively with designers,
            developers, and other team members to ensure that all projects are
            completed to the highest standard. In my free time, I enjoy reading
            blogs and articles on the latest frontend development trends and
            experimenting with new technologies and techniques. I am excited to
            continue learning and growing as a frontend developer and to
            contribute my skills to exciting new projects.
          </motion.p>
        </div>
        <div className=" mt-0 md:mt-10 lg:mt-0">
          <div className="card">
            <div className="card-info">
              <img
                src="https://i.pinimg.com/736x/03/08/f6/0308f67c8ab0a6ee5b1e4e2bbc04ea79.jpg"
                className=" w-[100%] h-[100%] object-cover rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 flex justify-center flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

// const About = () => {
//   return (
//     <div className={styles.paddingX}>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>Introduction</p>
//         <h2 className={styles.sectionHeadText}>Overview.</h2>
//       </motion.div>

//       <motion.p
//         variants={fadeIn('', '', 0.1, 1)}
//         className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
//       >
//         As a frontend developer, I am proficient in{' '}
//         <span className=" font-bold">HTML</span>,{' '}
//         <span className=" font-bold"> CSS</span>,
//         <span className=" font-bold"> SASS</span>,
//         <span className=" font-bold"> BOOTSTRAP</span>,
//         <span className=" font-bold"> TAILWIND</span>,
//         <span className=" font-bold"> JAVASCRIPT</span>,
//         <span className=" font-bold"> REACT</span>,
//         <span className=" font-bold"> REDUX</span> and I am constantly expanding
//         my knowledge of these languages as well as exploring new technologies
//         and frameworks. I have experience with responsive design and user
//         interface development, and I am comfortable working with both individual
//         and team projects. I pride myself on my attention to detail and my
//         ability to problem-solve and troubleshoot code. I am dedicated to
//         creating user-friendly websites that are visually appealing and easy to
//         navigate. I am also a strong communicator, and I enjoy working
//         collaboratively with designers, developers, and other team members to
//         ensure that all projects are completed to the highest standard. In my
//         free time, I enjoy reading blogs and articles on the latest frontend
//         development trends and experimenting with new technologies and
//         techniques. I am excited to continue learning and growing as a frontend
//         developer and to contribute my skills to exciting new projects.
//       </motion.p>

// <div className="mt-20 flex justify-center flex-wrap gap-10">
//   {services.map((service, index) => (
//     <ServiceCard key={service.title} index={index} {...service} />
//   ))}
// </div>
//     </div>
//   );
// };

export default SectionWrapper(About, 'about');
