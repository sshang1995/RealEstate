import React from "react";
import { assets } from "../../assets/assets";
import { motion } from "motion/react";
import "./About.css";

export const About = () => {
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
        {/* <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span> */}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Me
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <div className="img w-full sm:w-1/2 max-w-lg">
          <img src={assets.professional_img} alt="" />
        </div>
        <div className="flex flex-col item-center md:items-start text-gray-600">
          {/* <div className="grid grid-cols-2 gap-6 ms:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+ </p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+ </p>
              <p>Project Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">800+ </p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+ </p>
              <p>Ongoing Projects</p>
            </div>
          </div> */}
          <br />
          <p className="max-w-lg text-xl">
            {/* className="my-10 max-w-lg" */}
            Hi, I’m Lily Shang, your trusted real estate expert! Whether you're
            buying, selling, or investing, I’m here to make the process smooth,
            stress-free, and successful.
          </p>
          <br />
          <p className="max-w-lg text-xl">
            I believe that every transaction is more than just a deal—it’s about
            finding the perfect home, securing the right investment, or making
            the next big move in your life.
          </p>
          <br />
          <p className="max-w-lg text-xl">
            I have local expertise, and strong negotiation skills to ensure you
            get the best results. Let’s connect and make your real estate dreams
            a reality!
          </p>
          {/* <button className="bg-blue-600 text-white px-8 py-2 rounded">
            Learn More
          </button> */}
        </div>
      </div>
    </motion.div>
  );
};
