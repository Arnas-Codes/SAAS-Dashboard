import React from "react";
import { motion } from "framer-motion";
import fourStarImg from "../../assets/images/About Images/TestimonialsImages/4star.png";
import { CardsInfo } from "./TestimonialData";
import { fadeUp, scaleIn, staggerContainer } from "../../Animation";

const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-[#E58411] font-semibold tracking-[0.25em] text-sm uppercase">
          Testimonials
        </span>

        <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
          Our Client Reviews
        </h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {CardsInfo.map((info) => (
          <motion.div
            key={info.id}
            variants={scaleIn}
            whileHover={{ y: -8 }}
            className="
              relative
              h-112.5
              overflow-hidden
              rounded-3xl
              group
            "
          >
            {/* Background Image */}
            <img
              src={info.BgImage}
              alt={info.name}
              loading="lazy"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={info.ProfileImg}
                  alt={info.name}
                  loading="lazy"
                  className="
                    w-14
                    h-14
                    rounded-full
                    object-cover
                    ring-2
                    ring-white/20
                  "
                />

                <div>
                  <h4 className="font-semibold text-lg">{info.name}</h4>

                  <p className="text-sm text-white/70">{info.company}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-white/90 mb-5 line-clamp-4">
                "{info.info}"
              </p>

              <img src={fourStarImg} alt="Rating" className="h-4 w-auto" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
