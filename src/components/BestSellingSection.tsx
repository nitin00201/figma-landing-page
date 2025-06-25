"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "ALYA SKIN CLEANSER.",
    price: "$29.99",
    image: "/assets/alya.jpg",
  },
  {
    id: 2,
    name: "RITUAL OF SAKURA.",
    price: "$27.99",
    image: "/assets/sakura.jpg",
  },
  {
    id: 3,
    name: "THE BODY LOTION.",
    price: "$19.99",
    image: "/assets/body-lotion.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function BestSellingSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#FEFFF4] py-20 px-4 md:px-20 space-y-16"
    >
      {/* Header */}
      <motion.div
        variants={fadeUp}
        custom={0}
        className="flex flex-wrap justify-between items-center gap-4"
      >
        <button className="px-4 py-2 border border-gray-800 rounded-full text-[#2D3B36] text-sm flex items-center gap-2">
          <span className="w-2 h-2 bg-[#2D3B36] rounded-full"></span>
          Best Selling Products
        </button>

        <h2 className="text-xl md:text-2xl font-medium text-center flex-1 text-[#2D3B36]">
          Skincare That Brings Out <br />
          Your Natural Radiance
        </h2>

        <div className="flex items-center gap-3 mx-auto md:mx-0">
          <button className="w-10 h-10 border rounded-full flex items-center justify-center">
            <Image
              src={`/assets/left-arrow-1.svg`}
              alt="l1"
              width={40}
              height={40}
            />
          </button>
          <button className="w-10 h-10 border rounded-full flex items-center justify-center">
            <Image
              src={`/assets/right-arrow-1.svg`}
              alt="r1"
              width={40}
              height={40}
              className="ml-4"
            />
          </button>
        </div>
      </motion.div>

      {/* Product Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            variants={fadeUp}
            custom={index + 1}
            className="relative bg-[#FEFFF4] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="object-cover w-full h-[450px] sm:h-[400px] md:h-[450px]"
            />
            {/* Overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-[#FEFFF4] rounded-md shadow p-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-[#2D3B36]">
                  {product.name}
                </h3>
                <p className="text-xs text-[#2D3B36]">FROM {product.price}</p>
              </div>
              <button className="p-2 rounded-sm bg-[#2D3B361A] border">
                <Image
                  src="/assets/cart-icon.png"
                  alt="cart"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Promo Banner */}
      <motion.div
        variants={fadeUp}
        custom={products.length + 1}
        className="relative rounded-2xl overflow-hidden shadow-lg"
      >
        <Image
          src="/assets/promo-banner.png"
          alt="Promo Banner"
          width={1280}
          height={500}
          className="object-cover w-full h-64 sm:h-96 lg:h-[500px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex flex-col justify-end p-6 sm:p-10">
          <h2 className="text-[#EFF5E1] text-xl sm:text-3xl md:text-4xl font-medium mb-4 text-center">
            Feel Beautiful Inside and Out <br className="hidden sm:inline" />
            with Every Product.
          </h2>
          <button className="bg-[#EFF5E1] text-[#2D3B36] rounded-full px-6 py-2 self-center text-sm">
            Shop Now
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
}
