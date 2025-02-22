import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/Jarvis.png";
import Img2 from "../assets/FormHub.png";
import Img3 from "../assets/NextDraw.png";
import { DiOpensource } from "react-icons/di";
import { FaLink } from "react-icons/fa";

const Work = () => {
  return (
    <section id="work" className="py-16 lg:section md:my-20 ">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-10 ">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-6  lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent font-bold ">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-md mb-6 ">
                Welcome to my project section, where you&apos;ll find examples
                of my work as a Full stack developer. I specialize in creating
                dynamic and responsive web applications using cutting-edge
                technologies like Next.js, React, Tailwind CSS, Node.js
                ,Express.js, Redux and many more.
              </p>
            </div>
            <div className="group relative w-[60%] h-[135px] md:h-[200px] lg:w-[90%] lg:h-[240px] overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/80 w-full h-[240px] absolute z-40 transition-all duration-300"></div>
              <img
                src={Img1}
                alt="Jarvis"
                className="group-hover:scale-125 transition-all duration-500 h-[135px] w-full sm:h-auto "
              />
              <div className="absolute -bottom-full left-6 sm:left-12 group-hover:sm:bottom-24 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-gradient sm:text-2xl "></span>
              </div>

              <div className="absolute -bottom-full left-6 sm:left-12 group-hover:sm:bottom-14 group-hover:bottom-10 transition-all duration-700 z-50">
                <span className="text-xl sm:text-3xl text-gradient">
                  Jarvis
                </span>
              </div>

              <div className=" flex gap-x-2 sm:gap-x-4 absolute -bottom-full left-6 sm:left-12 group-hover:sm:bottom-6 group-hover:bottom-2 transition-all duration-700 z-50">
                <div className="flex justify-center items-center">
                  <DiOpensource fill="#FF56F6" />
                  <a
                    href="https://github.com/atharvarekhawar/Jarvis"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex-1 flex flex-col  gap-y-6 mb-10 lg:mb-0 lg:justify-center lg:items-center"
          >
            <div className=" group relative w-[60%] h-[135px] md:h-[200px] lg:w-[90%] lg:h-[240px] overflow-hidden border-2 border-white/50 rounded-xl sm:mb-6">
              <div className="group-hover:bg-black/80 w-full h-[270px] absolute z-40 transition-all duration-300"></div>
              <img
                src={Img2}
                alt="FormHub"
                className="group-hover:scale-125 transition-all duration-500 h-[135px] w-full sm:h-auto"
              />
              <div className="absolute -bottom-full left-6 sm:left-12 group-hover:sm:bottom-24 group-hover:bottom-16 transition-all duration-500 z-50">
                <span className="text-gradient sm:text-2xl"></span>
              </div>
              <div className="absolute -bottom-full left-6 sm:left-12 group-hover:sm:bottom-14 group-hover:bottom-10 transition-all duration-700 z-50">
                <span className="text-xl sm:text-3xl text-gradient">
                  FormHub
                </span>
              </div>
              <div className=" flex gap-x-4 absolute -bottom-full left-6 sm:left-12 group-hover:sm:bottom-8 group-hover:bottom-4 transition-all duration-700 z-50">
                <div className="flex justify-center items-center ">
                  <FaLink fill="#FF56F6" />
                  <a
                    href="https://formhhub.vercel.app/"
                    target="_blank"
                    className="text-white"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <DiOpensource fill="#FF56F6" />
                  <a
                    href="https://github.com/atharvarekhawar/Form-builder"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
            <div className=" group relative w-[60%] h-[135px] md:h-[200px] lg:w-[90%] lg:h-[240px] overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/80 w-full h-[270px] absolute z-40 transition-all duration-300"></div>
              <img
                src={Img3}
                alt="NextDraw"
                className="group-hover:scale-125 transition-all duration-500 h-[135px] w-full sm:h-auto"
              />
              <div className="absolute -bottom-full left-6 sm:left-12 group-hover:sm:bottom-24 group-hover:bottom-16 transition-all duration-500 z-50">
                <span className="text-gradient sm:text-2xl"></span>
              </div>
              <div className="absolute -bottom-full left-6 sm:left-12 group-hover:sm:bottom-14 group-hover:bottom-10 transition-all duration-700 z-50">
                <span className="text-xl sm:text-3xl text-gradient">
                  NextDraw
                </span>
              </div>
              <div className=" flex gap-x-4 absolute -bottom-full left-6 sm:left-12 group-hover:sm:bottom-6 group-hover:bottom-2 transition-all duration-700 z-50">
                <div className="flex justify-center items-center">
                  <DiOpensource fill="#FF56F6" />
                  <a
                    href="https://github.com/atharvarekhawar/nextdraw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
