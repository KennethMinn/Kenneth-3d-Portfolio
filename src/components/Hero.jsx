// import { motion } from 'framer-motion';
import { styles } from '../styles';
// import { ComputersCanvas } from './canvas';
import { pc, pcHolder } from '../assets';

const Hero = () => {
  return (
    <section className=" w-full xs:h-auto xs:mb-[70px] md:mb-0 md:h-screen lg:h-screen mx-auto">
      <div
        className={`${styles.paddingX}  inset-0 mt-[75px] max-w-7xl mx-auto flex flex-row items-start gap-5`} //absolute
      >
        <div className=" flex flex-col justify-center items-center mt-5">
          <div className=" w-5 h-5 rounded-full bg-[#915eff]" />
          <div className=" w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className=" mt-10">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915eff]">Kenneth</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I&apos;m a passionate & hardworking <br className="block" />
            frontend developer from myanmar
          </p>
        </div>
      </div>

      <div className=" flex justify-center">
        <img
          src={pcHolder}
          className=" w-[500px] md:w-[800px] md:h-[400px] md:mt-[-75px] mix-blend-screen "
          alt=""
        />
      </div>

      {/* <ComputersCanvas /> */}
      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className=" w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className=" w-3 h-3 rounded-full bg-secondary mb-1"
            ></motion.dev>
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
