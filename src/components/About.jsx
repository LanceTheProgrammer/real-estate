import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Me
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
      With over a decade of hands-on experience in customer service and tech support in the Portland Metro Area, I specialize in making technology accessible and stress-free. 
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.about_img1}
          alt=""
          className="w-full md:w-1/2 max-w-lg rounded-full"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">50+</p>
              <p>Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">6+</p>
              <p>Technical Certifications</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">95%+</p>
              <p>Customer Satisfaction</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
          Whether it's troubleshooting Android smartphones or resolving issues on Windows PCs, I've worked directly with customers to solve problems and simplify their digital lives. I take pride in not just fixing issues but also empowering users by helping them understand their devices better. If you're looking for patient, knowledgeable, and friendly support, you've come to the right place!
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded opacity-0">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
