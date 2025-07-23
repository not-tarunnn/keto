"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Sophia L.",
    rating: 5,
    text: "These cookies are absolute luxury. I didn&rsquo;t expect keto to taste this good! Highly recommended for anyone on a guilt-free sweet journey.",
    image: "/images/sofia.webp",
  },
  {
    name: "Ethan R.",
    rating: 4,
    text: "The premium box was full of surprises. The flavors rotate monthly, and it&rsquo;s become my monthly treat.",
    image: "/images/ethan.webp",
  },
  {
    name: "Ava D.",
    rating: 5,
    text: "Luxury cookies that actually *feel* luxurious. From the packaging to the taste — worth every penny.",
    image: "/images/sofia.jpeg",
  },
];

export default function TestimonialSliderSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-black text-white py-24 px-4 w-full">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">What People Are Saying</h2>

        <div className="relative h-40 mb-16">
          <AnimatePresence mode="wait">
            <motion.p
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-xl font-medium text-gray-300 px-4"
            >
              &quot;{testimonials[current].text}&quot;
            </motion.p>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`h-4 w-4 ${i < testimonials[current].rating ? "text-yellow-400" : "text-gray-600"}`}>
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`rounded-full overflow-hidden w-16 h-16 border-4 transition-all duration-300 ${
                i === current ? "border-yellow-400 scale-110" : "border-gray-600 opacity-60"
              }`}
            >
              <Image src={t.image} alt={t.name} width={64} height={64} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
