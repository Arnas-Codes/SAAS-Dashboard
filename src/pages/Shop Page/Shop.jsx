import React, { useState } from "react";
import { motion } from "framer-motion";

import Rating from "../../assets/images/shopImages/ShopIcons/Rating.png";
import Plus from "../../assets/images/shopImages/ShopIcons/Plus.png";
import ArrowIcon from "../../assets/icons/ArrowIcon.png";

import { chairData, navItems } from "./ShopData";
import { fadeUp, scaleIn, staggerContainer } from "../../Animation";

const Shop = () => {
  const [isActive, setIsActive] = useState("Chair");

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 flex flex-col items-center gap-10 overflow-hidden">
      
      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-gray-800 text-center"
      >
        Best Selling Product
      </motion.h2>

      {/* Navigation */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-2 bg-gray-100 rounded-full p-2"
      >
        {navItems.map((nav) => (
          <button
            key={nav}
            onClick={() => setIsActive(nav)}
            className={`px-5 py-2 rounded-full transition-all duration-300 font-medium ${
              isActive === nav
                ? "bg-white shadow text-black"
                : "text-gray-600 hover:text-black"
            }`}
          >
            {nav}
          </button>
        ))}
      </motion.div>

      {/* Product Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          w-full
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
        "
      >
        {chairData.map((item) => (
          <motion.div
            key={item.id}
            variants={scaleIn}
            whileHover={{
              y: -10,
            }}
            className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-sm
              hover:shadow-xl
              transition-all
              duration-300
            "
          >
            <div className="bg-gray-100 p-6">
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                className="
                  w-full
                  h-60
                  object-contain
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />
            </div>

            <div className="p-5 flex flex-col gap-2">
              <span className="text-sm text-gray-400">
                Chair
              </span>

              <h3 className="text-xl font-bold text-gray-800">
                {item.name}
              </h3>

              <img
                src={Rating}
                alt={`Rating ${item.rating}`}
                className="w-fit"
              />

              <div className="flex justify-between items-center mt-3">
                <p className="text-xl font-bold text-gray-900">
                  <sup className="text-xs">$</sup>
                  {item.price}
                </p>

                <button>
                  <img
                    src={Plus}
                    alt="Add to cart"
                    className="w-10 hover:scale-110 transition-transform"
                  />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All */}
      <motion.button
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          flex
          items-center
          gap-2
          text-[#E58411]
          font-medium
          hover:gap-3
          transition-all
          duration-300
        "
      >
        View All

        <img
          src={ArrowIcon}
          alt=""
          className="w-4 h-4"
        />
      </motion.button>
    </section>
  );
};

export default Shop;