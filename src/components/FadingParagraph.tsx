"use client";

import { motion } from "framer-motion";

export default function FadingParagraph() {
  return (
    <section className="bg-[#FEFFF4] py-16 px-6 md:px-20 font-inter">
      <motion.p
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.5,
            },
          },
        }}
        className="text-xl md:text-2xl leading-relaxed text-[#2D3B36] max-w-4xl mx-auto"
      >
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="font-medium text-[#2D3B36]"
        >
          Experience the ultimate in skincare with our expertly formulated
          products, crafted to nourish, protect, and rejuvenate your skin.
          Combining the finest natural ingredients with{" "}
        </motion.span>

        <motion.span
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-[#a3a3a3]"
        >
          advanced science, our collection ensures every skin type can achieve a
          radiant, healthy glow. Embrace your beauty with confidence every day.
        </motion.span>{" "}

        <motion.span
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-[#d4d4d4]"
        >
          Experience the ultimate in skincare with our expertly formulated
          products, crafted to nourish, protect, and rejuvenate your skin.
        </motion.span>
      </motion.p>
    </section>
  );
}
