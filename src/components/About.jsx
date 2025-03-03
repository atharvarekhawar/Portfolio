import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about" className="section my-20">
      <div className="container mx-auto">
        <div className=" h-screen flex flex-col gap-y-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-row gap-x-4 lg:flex-col lg:gap-y-4 underline  min-w-[40%] lg:animate-bounce  font-tertiary items-center justify-center">
            <motion.p
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="mb-2 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              About
            </motion.p>
            <motion.p
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="mb-2 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              Me
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="font-tertiary text-gradient text-[14px] sm:text-[18px] text-center lg:text-left"
          >
            <p>
              Welcome to my About Me page ! My name is Atharva and I am a
              Software Engineer based in India. I am passionate about coding,
              and I love to collab with people to explore new technologies.
            </p>
            <br />
            <p>
              I&apos;m an ambitious and enthusiastic with a keen eye for detail
              and a dedication to delivering outstanding results. I&apos;m
              excited to collaborate with like-minded professionals and
              organizations to create transformative digital solutions. If
              you&apos;re interested in working together or discussing web
              development opportunities, feel free to connect with me!
            </p>
            <br />
            <p>
              On next section, you&apos;ll find more information about my
              projects. If you have any questions or would like to get in touch,
              please don&apos;t hesitate to reach out. Thank you for visiting my
              page!
            </p>
            <div className="flex-col mx-auto my-6 flex-wrap">
              <Link to="contact" smooth={true}>
                <button className="btn btn-sm md:btn-lg mr-4 mb-2">
                  Contact me
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
