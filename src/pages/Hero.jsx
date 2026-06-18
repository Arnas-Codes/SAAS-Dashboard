import React from "react";
import { motion } from "framer-motion";
import SearchIcon from "../assets/icons/Search.png";
import { fadeUp, scaleIn } from "../Animation";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="
            font-bold
            leading-[1.1]
            tracking-tight
            text-[clamp(2.5rem,6vw,5.5rem)]
          "
        >
          Make your interior more minimalistic & modern
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="
            max-w-2xl
            text-white/80
            text-[clamp(1rem,2vw,1.25rem)]
          "
        >
          Turn your room with Panto into a lot more minimalist and modern with
          ease and speed.
        </motion.p>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="relative w-full max-w-md mt-4"
        >
          <input
            type="text"
            placeholder="Search furniture..."
            className="
              w-full
              py-4
              pl-6
              pr-14
              rounded-full
              border
              border-white/30
              bg-white/15
              backdrop-blur-md
              text-white
              placeholder:text-white/70
              focus:outline-none
              focus:ring-2
              focus:ring-white/40
              transition-all
            "
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="
              absolute
              right-2
              top-1/2
              -translate-y-1/2
              flex
              items-center
              justify-center
              w-10
              h-10
            "
          >
            <img src={SearchIcon} alt="Search" className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
