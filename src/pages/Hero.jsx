import React from "react";
import rectangleImg from "../assets/images/Rectangle.png";
import SearchIcon from "../assets/icons/Search.png";

const Hero = () => {
  return (
<div
  className="h-screen w-full bg-bottom bg-cover bg-no-repeat flex items-center justify-center text-white"
  style={{ backgroundImage: `url(${rectangleImg})` }}
>


      {/* Content Container wrapper to center and stack elements */}
      <div className="flex flex-col items-center text-center max-w-3xl px-6 gap-6">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Make your interior more minimalistic & modern
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-200 max-w-xl opacity-90">
          Turn your room with Panto into a lot more minimalist and modern with
          ease and speed.
        </p>

        {/* Search Bar Container */}
        <div className="relative w-full max-w-md mt-4 mx-auto">
          <input
            type="text"
            placeholder="Search furniture..."
            className="w-full pl-6 pr-14 py-3 md:py-4 rounded-full 
               backdrop-blur-xs bg-white/15 text-white placeholder-white/70
               border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-md transition-all"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity">
            <img
              src={SearchIcon}
              alt="Search"
              className="w-6 h-6 object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
