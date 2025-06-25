'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-[#2D3B36] text-[#E7E8E0] font-inter overflow-hidden px-6 md:px-20 py-24">
      {/* Top Section: Heading + Contact */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center z-10 relative">
        {/* Left: Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-medium leading-tight md:max-w-lg"
        >
          Join The Skincare <br className="hidden md:block" />
          Community Now.
        </motion.h2>

        {/* Right: Contact */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-left mt-8 md:mt-0 translate-x-[-115px]"
        >
          <p className="text-sm text-[#E7E8E0]">Get in Touch</p>
          <p className="text-2xl font-semibold text-[#E7E8E0]">
            contact.skincare.com
          </p>
        </motion.div>
      </div>

      {/* Bottom Links Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto my-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 z-10 relative"
      >
        {/* Social Links */}
        <div className="flex gap-10 text-sm text-[#E7E8E0]">
          {['Facebook', 'Instagram', 'YouTube'].map((label, i) => (
            <motion.a
              key={i}
              href="#"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="hover:underline"
            >
              {label}
            </motion.a>
          ))}
        </div>

        {/* Policy Links */}
        <div className="flex gap-10 text-sm text-[#E7E8E0] md:justify-end w-full md:w-auto my-10">
          {['Terms of Service', 'Privacy Policy', 'Cookies Policy'].map((label, i) => (
            <motion.a
              key={i}
              href="#"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="hover:underline"
            >
              {label}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Background SKINCARE Text */}
      <motion.h1
        initial={{ opacity: 0, scale: 1.2 }}
        whileInView={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute mt-56 bottom-[-85px] left-[-70px] w-full text-center text-[120px] md:text-[260px] font-bold text-[#35433E] z-0 leading-none uppercase pointer-events-none"
      >
        SKINCARE
      </motion.h1>
    </footer>
  );
}
