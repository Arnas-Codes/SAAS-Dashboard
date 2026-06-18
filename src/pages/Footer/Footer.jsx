import React from "react";
import { motion } from "framer-motion";
import { Datas } from "./FooterData";
import { fadeUp, staggerContainer } from "../../Animation";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 gap-12"
        >
          {/* Brand */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-2 space-y-4"
          >
            <h2 className="text-2xl font-bold text-gray-900 tracking-wide">
              Panto
            </h2>

            <p className="text-sm leading-relaxed max-w-sm text-gray-500">
              The advantage of hiring a workspace with us is that gives you
              comfortable service and all-around facilities.
            </p>
          </motion.div>

          {/* Links */}
          {Datas.map((data) => (
            <motion.div
              key={data.id}
              variants={fadeUp}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                {data.name}
              </h3>

              <ul className="space-y-3">
                {data.services?.map((service) => (
                  <li key={service}>
                    <button
                      className="
                        text-sm
                        text-gray-500
                        hover:text-[#E58411]
                        transition-colors
                        duration-300
                      "
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            mt-16
            pt-6
            border-t
            border-gray-200
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
            text-sm
            text-gray-500
          "
        >
          <p>© 2026 Panto. All rights reserved.</p>

          <div className="flex gap-6">
            <button className="hover:text-[#E58411] transition-colors">
              Terms & Conditions
            </button>

            <button className="hover:text-[#E58411] transition-colors">
              Privacy Policy
            </button>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;