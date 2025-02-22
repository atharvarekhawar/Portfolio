import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[80vh] lg:min-h-[70vh]  flex justify-center items-center"
    >
      <div className="container mx-auto ">
        <div className=" flex-col text-center font-secondary">
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="mb-4 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
          >
            <p className="mr-4 text-white">
              I am a <span className="text-accent">Software Enginner</span>
            </p>
          </motion.div>
          <div className="text-[15px] lg:text-[22px]">
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="mb-4"
            >
              Based in India and have keen interest in building{" "}
              <span className="font-bold text-accent">Real world systems </span>
              using{" "}
              <span className="font-bold text-accent">
                <TypeAnimation
                  sequence={[
                    "Next.js",
                    2000,
                    "React.js",
                    2000,
                    "Javascript",
                    2000,
                    "Typescript",
                    2000,
                    "Tailwind",
                    2000,
                    "Node.js",
                    2000,
                    "Express.js",
                    2000,
                    "Kafka",
                    2000,
                    "Redis",
                    2000,
                    "AWS",
                    2000,
                    "Docker",
                    2000,
                  ]}
                  speed={50}
                  className="text-accent"
                  wrapper="span"
                  repeat={Infinity}
                />
              </span>
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex-col mx-auto mb-8 flex-wrap"
          >
            <Link to="contact" smooth={true}>
              <button className="btn btn-sm md:btn-lg mr-4 mb-2">
                Contact me
              </button>
            </Link>

            <Link to="work" smooth={true}>
              <button className="btn btn-sm md:btn-lg mr-4 mb-2">
                Projects
              </button>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex text-[25px] gap-x-6 max-w-max mx-auto "
          >
            <a
              href="https://github.com/atharvarekhawar"
              rel="noreferrer"
              target="_blank"
              className="hover:text-accent transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/atharva_rekhawar_28/"
              rel="noreferrer"
              target="_blank"
              className="hover:text-accent transition-all duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/atharva-rekhawar/"
              rel="noreferrer"
              target="_blank"
              className="hover:text-accent transition-all duration-300"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
