'use client';
import Image from "next/image";
import { useState } from "react";

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
      <h2 className="text-center text-2xl md:text-3xl font-medium text-[#2f342f]">
        Feel Beautiful Inside and Out <br /> with Every Product.
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-1 rounded-full text-sm font-medium border ${
              activeFilter === filter
                ? "bg-[#2f342f] text-[#FEFFF4]"
                : "bg-[#FEFFF4] text-[#2D3B36]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Product Grid */}
          {/* Product Cards */}
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="relative bg-[#FEFFF4] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="object-cover w-full h-[450px] sm:h-[400px] md:h-[450px]"
                      />
                      {/* Overlay Product Info */}
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
                    </div>
                  ))}
                </div>
    </section>
  );
}
