import React,{useRef} from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from '@emailjs/browser';
import {toast} from 'react-hot-toast'


const Contact = () => {

  
const form = useRef();


const submitHandler = (e) => {
  e.preventDefault();
 

  emailjs.sendForm('service_zsdzw9t', 'template_y3j5i8g', form.current, 'TmJOJjp64KSbZO-1Y')
    .then((result) => {
        toast.success("Message sent successfully")
        console.log(result);
    }, (error) => {
        toast.error("Error occured!! try again")
        console.log(error);
    });
};

  return (
    <div id="contact" className="  py-4 sm:py-6 md:py-10 lg:py-16 lg:section md:my-20 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div >
              <h4 className="text-xl uppercase text-accent font-semibold mb-2 tracking-wide">
                get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br />
                together{" "}
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-4 pb-20 p-10 items-start "
            ref={form}
            onSubmit={submitHandler}
          >
            <input
              className="bg-transparent border-b outline-none py-3 w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your Name"
              name="name"             
            />
            <input
              required
              className=" bg-transparent  border-b outline-none py-3 w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="Your Email"             
              name="email"
            />
            <textarea
              className="bg-transparent border-b outline-none py-12 w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your Message"
              name="message"
            ></textarea>
            
            <input type="submit" value="Send Message" className="btn btn-lg cursor-pointer"  />
          
            
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
