import React from "react";
import rectangleImg from "../assets/images/Rectangle.png";
import SearchIcon from "../assets/icons/Search.png";

const Hero = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center flex items-start justify-center text-white"
      style={{ backgroundImage: `url(${rectangleImg})` }}
    >
      {/* Content Container wrapper to center and stack elements */}
      <div className="flex flex-col items-center text-center max-w-3xl px-6 gap-6 mt-20">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-6xl font-bold leading-tight mt-15">
          Make your interior more minimalistic & modern
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-200 max-w-xl opacity-90">
          Turn your room with Panto into a lot more minimalist and modern with
          ease and speed.
        </p>

        {/* Search Bar Container */}
        <div className="relative w-xs md:w-md lg:w-lg mt-4 mx-auto">
          <input
            type="text"
            placeholder="Search furniture..."
            className="w-full pl-6 pr-14 py-2 md:py-3 lg:py-4 rounded-full 
               backdrop-blur-xs bg-white/15 text-white placeholder-white/70
               border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-md transition-all"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity">
            <img
              src={SearchIcon}
              alt="Search"
              className="w-16 h-16 object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
