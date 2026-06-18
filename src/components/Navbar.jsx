import React from "react";
import { motion } from "framer-motion";
import BagIcon from "../assets/icons/Bag.png";
import { navAnimation } from "../Animation";

const navLinks = ["Furniture", "Shop", "About Us", "Contact"];

const Navbar = () => {
  return (
    <motion.nav
      variants={navAnimation}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 text-[#E58411]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold cursor-pointer">
          Panto
        </h1>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li
              key={link}
              className="cursor-pointer relative group"
            >
              {link}

              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Cart */}
        <button className="hover:scale-110 transition-transform duration-300">
          <img
            src={BagIcon}
            alt="Shopping Cart"
            className="w-8 md:w-10"
          />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;