import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../assets/icons/ArrowIcon.png";
import { fadeUp, staggerContainer } from "../Animation";

const features = [
  {
    name: "Luxury Facilities",
    description:
      "The advantage of hiring a workspace with us is that it gives you comfortable service and all-around facilities.",
  },
  {
    name: "Affordable Price",
    description:
      "You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.",
  },
  {
    name: "Many Choices",
    description:
      "We provide many unique workspace choices so that you can choose the workspace to your liking.",
  },
];

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 flex flex-col lg:flex-row justify-between gap-10">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold max-w-xs leading-tight"
      >
        Why Choosing Us
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.name}
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className="flex flex-col justify-between gap-4"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.name}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>

            <button className="flex items-center gap-2 text-[#E58411] font-medium text-sm cursor-pointer hover:gap-3 transition-all duration-300 w-fit">
              More Info
              <img
                src={ArrowIcon}
                alt=""
                className="w-4 h-4 object-contain"
              />
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;