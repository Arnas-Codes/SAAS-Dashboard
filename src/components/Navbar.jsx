import React from "react";
import BagIcon from "../assets/icons/Bag.png";

const navLinks = ["Furniture", "Shop", "About Us", "Contact"];

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 right-0 left-0 z-50 h-22 px-12 pt-6 text-white bg-transparent"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <h2 className="font-bold text-xl cursor-pointer">Panto</h2>
        
        {/* Navigation Links */}
        <div className="flex gap-12 text-md">
          {navLinks.map((nav, i) => (
            <p key={i} className="cursor-pointer hover:opacity-80 transition-opacity">
              {nav}
            </p>
          ))}
        </div>

        {/* Shopping Cart Icon */}
        <div className="cursor-pointer">
          <img className="w-10 p-2" src={BagIcon} alt="Cart" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
