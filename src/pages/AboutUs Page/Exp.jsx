import React from "react";
import { AboutData } from "./AboutData";
import ArrowIcon from "../../assets/icons/ArrowIcon.png";

import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp } from "../../Animation";

const Exp = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 flex flex-col gap-24 overflow-hidden">
     {AboutData.map((item) => (
  <div
    key={item.id}
    className={`flex flex-col md:flex-row items-center gap-12 ${
      item.id === 2 ? "md:flex-row-reverse" : ""
    }`}
  >
    {/* IMAGE CONTAINER */}
    <motion.div
      variants={item.id === 2 ? fadeRight : fadeLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full md:w-1/2"
    >
      {item.id === 1 ? (
        <div className="overflow-hidden rounded-lg">
          <img
            src={item.images[0]}
            alt={item.name}
            loading="lazy"
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <img
              src={item.images[0]}
              alt=""
              loading="lazy"
              className="w-full h-40 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
            />
            <img
              src={item.images[1]}
              alt=""
              loading="lazy"
              className="w-full h-40 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
            />
          </div>

          <img
            src={item.images[2]}
            alt=""
            loading="lazy"
            className="w-full h-84 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
    </motion.div>

    {/* TEXT CONTAINER */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full md:w-1/2 space-y-4"
    >
      <p className="text-amber-600 font-bold tracking-wider uppercase text-sm">
        {item.name}
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 capitalize">
        {item.serviceName}
      </h2>

      <p className="text-gray-600 leading-relaxed">
        {item.description}
      </p>

      <button className="flex items-center gap-2 text-amber-600 font-semibold hover:gap-3 transition-all duration-300">
        More Info
        <img src={ArrowIcon} alt="" className="w-4 h-4" />
      </button>
    </motion.div>
  </div>
))}
    </div>
  );
};

export default Exp;