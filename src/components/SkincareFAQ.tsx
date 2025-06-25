"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    id: "1",
    question: "Are your products safe for sensitive skin?",
    answer:
      "Yes, all our products are dermatologist-tested and formulated specifically for sensitive skin types. We use gentle, non-irritating ingredients and avoid common allergens.",
  },
  {
    id: "2",
    question: "Are your products cruelty-free?",
    answer:
      "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
  },
  {
    id: "3",
    question: "What's your return policy?",
    answer:
      "We offer a 30-day return policy for unopened products. If you're not satisfied with your purchase, please contact our customer service team for assistance.",
  },
  {
    id: "4",
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.",
  },
  {
    id: "5",
    question: "How do I choose the right product?",
    answer:
      "We recommend starting with our skin assessment quiz or contacting our support experts through chat or email.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpen(open === id ? null : id);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#FEFFF4] w-full px-6 md:px-20 py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-md mx-auto"
        >
          <Image
            src="/assets/body-lotion.jpg"
            alt="Body Lotion"
            width={500}
            height={500}
            className="rounded-2xl object-cover w-full"
          />
          <div className="absolute bottom-12 left-26 bg-[#EFF5E1] rounded-full px-4 py-2 flex items-center gap-3 text-sm shadow-md w-[180px]">
            <Image
              src={`/assets/headphone.png`}
              alt="headphone"
              width={30}
              height={30}
              className="text-[#2D3B36] rounded-full bg-[#2D3B36] p-1.5 border-black border border-dotted"
            />
            <span className="text-[#2D3B36] font-medium">
              24/7 We’re Here to Help You
            </span>
          </div>
        </motion.div>

        {/* Right - FAQ */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center bg-[#FEFFF4] border border-gray-300 text-[#2D3B36] px-4 py-2 rounded-full text-sm mb-6">
            <div className="w-2 h-2 bg-[#2D3B36] rounded-full mr-2"></div>
            Frequently Asked Question
          </div>

          <h2 className="text-3xl md:text-4xl font-light text-[#2D3B36] mb-8 leading-snug">
            Answers to Your <br />
            Skincare Questions, All <br />
            in One Place.
          </h2>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#FEFFF4] border border-gray-600 rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full px-4 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-sm text-[#2D3B36] font-medium">
                    {item.question}
                  </span>
                  {open === item.id ? (
                    <Image
                      src={`/assets/minus.png`}
                      alt="minus"
                      width={20}
                      height={20}
                      className="text-[#2D3B36]"
                    />
                  ) : (
                    <Image
                      src={`/assets/plus.png`}
                      alt="plus"
                      width={20}
                      height={20}
                      className="text-[#2D3B36]"
                    />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {open === item.id && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-5 text-[#2D3B36] text-sm"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
