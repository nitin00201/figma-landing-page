"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-screen bg-[#f3f4e8] overflow-hidden">
            {/* SKINCARE Background Text */}
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 0.1, y: 0 }}
                transition={{ duration: 1 }}
                className="absolute bottom-[-35] left-0 w-full text-center text-[124px] md:text-[230px] font-bold text-[#2D3B36] z-0 leading-none uppercase"
            >
                SKINCARE
            </motion.h1>

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-12">
                {/* Left Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="md:w-1/3 text-center md:text-left"
                >
                    <p
                        className="text-[#2D3B36] text-[20px] font-normal leading-[100%] w-[335px] h-[87px] mx-auto md:mx-0"
                        style={{ textIndent: '105px' }}
                    >
                        Transform your skincare routine with premium products that restore,
                        protect, and enhance your natural glow every day.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="mt-6 px-6 py-3 bg-[#2f342f] text-[#EFF5E1] rounded-full"
                    >
                        Shop Now
                    </motion.button>
                </motion.div>

                {/* Center Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="md:w-1/3 flex flex-col items-start justify-center relative"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D3B36] text-left mb-6 leading-tight uppercase">
                        GLOW<br />
                        NATUR-<br />
                        ALLY
                    </h2>
                </motion.div>

                {/* Right-side Product Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="md:w-1/3 flex justify-center"
                >
                    <div className="text-[#2D3B36] p-3 rounded-xl inline-block">
                        <Image
                            src="/assets/plum.jpg"
                            alt="Plum Cream"
                            width={120}
                            height={120}
                            className="rounded-md"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Woman Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="relative w-full flex flex-col items-center justify-center mt-10 px-4"
            >
                <div className="max-w-sm w-full">
                    <Image
                        src="/assets/woman.png"
                        alt="Skincare Woman"
                        width={400}
                        height={500}
                        className="rounded-2xl object-cover w-full"
                    />
                </div>

                {/* Floating Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="mt-4 bg-[#e9eddc] rounded-full p-4 py-6 w-[280px] h-[39px] flex items-center justify-center gap-3 shadow-md transform translate-y-[-80px]"
                >
                    <Image
                        src="/assets/plum1.jpg"
                        alt="Plum"
                        width={30}
                        height={30}
                        className="rounded-full border border-dotted border-black"
                    />
                    <p className="text-xs text-[#2D3B36] text-center">
                        While giving you an invigorating cleansing experience.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
