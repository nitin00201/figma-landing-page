"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], 
    },
  }),
};


export default function WhyOurProducts() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full bg-[#FEFFF4] py-20 px-4 sm:px-6 md:px-20 overflow-x-hidden"
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left Content */}
        <motion.div
          variants={fadeInUp}
          custom={0}
          className="flex-1 p-2 max-w-full md:max-w-[50%]"
        >
          <button className="mb-10 px-5 py-2 border text-[#2f342f] border-gray-800 rounded-full flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-[#2f342f]"></span>
            Why Our Products
          </button>

          <h3 className="text-2xl font-semibold text-[#2D3B36] mb-4">
            YOUR SKIN DESERVES <br /> THE BEST CARE.
          </h3>

          <p className="text-[#2D3B36] mb-8 text-xs max-w-[70%] sm:max-w-[400px]">
            Discover a curated collection of skincare products designed to rejuvenate, protect, and pamper your skin. Explore our range crafted with love, backed by science, and inspired by nature.
          </p>

          <div className="space-y-4">
            {[
              { title: "Bio Ingredients", desc: "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin." },
              { title: "Everything Natural", desc: "Pure ingredients for pure skin. The perfect solution for your skin care needs." },
              { title: "All Handmade", desc: "Made with love and care. Just for you. Give your skin the tender loving care it deserves." },
              { title: "Dermatologist Approved", desc: "Safe, effective, and recommended by skincare professionals worldwide." }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index + 1}
                className="max-w-full sm:max-w-[400px]"
              >
                <span className="text-transparent text-2xl bg-clip-text bg-gradient-to-b from-[#293330] to-[#FEFFF4]">
                  {`0${index + 1}`}{" "}
                </span>
                <span className="font-bold text-[#2D3B36] ml-1">
                  {item.title}
                </span>
                <p className="text-xs text-[#2D3B36] mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative w-full md:w-auto mx-auto"
        >
          <Image
            src="/assets/eye-mask-woman.png"
            alt="Skincare Eye Mask"
            width={400}
            height={500}
            className="rounded-2xl object-cover w-full h-auto"
          />

          {/* Floating Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute left-4 sm:left-24 bottom-16 bg-[#e9eddc] rounded-full px-4 py-2 flex items-center gap-2 shadow-md max-w-[55%]"
          >
            <Image
              src="/assets/award.png"
              alt="Award"
              width={40}
              height={40}
              className="bg-[#2D3B36] rounded-full p-1 border border-dotted border-white"
            />
            <span className="text-xs text-[#2D3B36]">
              Best Skin Care Product Award Winning
            </span>
          </motion.div>

          {/* Footer */}
          <div className="flex justify-between mt-4 text-sm text-[#2D3B36]">
            <span>SINCE 2001</span>
            <span className="underline">LEARN MORE</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
