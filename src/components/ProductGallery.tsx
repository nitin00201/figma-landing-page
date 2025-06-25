'use client';

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const filters = ["New Arrival", "Cleansing", "Acne Fighter", "Anti Aging"];

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

export default function ProductGallery() {
  const [activeFilter, setActiveFilter] = useState("New Arrival");

  return (
    <section className="bg-[#FEFFF4] py-20 px-6 md:px-20 space-y-12">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-2xl md:text-3xl font-medium text-[#2f342f]"
      >
        Feel Beautiful Inside and Out <br /> with Every Product.
      </motion.h2>

      {/* Filter Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        {filters.map((filter) => (
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-1 rounded-full text-sm font-medium border transition-all duration-300 ${
              activeFilter === filter
                ? "bg-[#2f342f] text-[#FEFFF4]"
                : "bg-[#FEFFF4] text-[#2D3B36]"
            }`}
          >
            {filter}
          </motion.button>
        ))}
      </motion.div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <AnimatePresence>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              layout
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
                  <p className="text-xs text-[#2D3B36]">
                    FROM {product.price}
                  </p>
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
        </AnimatePresence>
      </div>
    </section>
  );
}
