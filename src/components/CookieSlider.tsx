'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const cookies = [
  {
    id: 1,
    title: "WHITE CHOCOLATE MACADAMIA NUT",
    subtitle: "(WHITE CHOCOLATE MACADAMIA)",
    description: "This cookie walked straight out of a honeymoon suite. Buttery macadamia nuts. Creamy white chocolate chunks. It’s dressed in white, but don’t let it fool you — it’s a total snack.",
    label: "CLASSIC TWIST",
    number: "Nº1",
    image: "/images/cookie1.webp",
  },
  {
    id: 2,
    title: "STUFFED RED VELVET",
    subtitle: "(STUFFED RED VELVET)",
    description: "Stuffed like your inbox on a Monday. Rich cocoa, crimson decadence, and a creamy surprise center. Basically, it’s dessert with drama.",
    label: "DRAMA QUEEN",
    number: "Nº2",
    image: "/images/cookie2.webp",
  },
  {
    id: 3,
    title: "THIN MINT",
    subtitle: "(PEPPERMINT CRUNCH)",
    description: "Your childhood scout cookie just got promoted. Bold mint, deep chocolate, and a crunch that slaps. No sash required.",
    label: "COOL & DANGEROUS",
    number: "Nº3",
    image: "/images/cookie3.webp",
  }
];

export default function CookieSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % cookies.length);
  const prevSlide = () => setCurrent((current - 1 + cookies.length) % cookies.length);

  return (
    <section className="relative w-full h-[95vh] bg-black overflow-hidden text-white flex flex-col items-center justify-center px-8">
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-12 text-center text-white "
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        CORE COLLECTIONS
      </motion.h2>

      {/* Side cookies (peek effect) */}
      <div className="absolute left-0 h-full flex items-center z-10">
        <Image
          src={cookies[(current - 1 + cookies.length) % cookies.length].image}
          alt="Side Cookie"
          width={200}
          height={200}
          className="object-contain opacity-50 scale-75"
        />
      </div>
      <div className="absolute right-0 h-full flex items-center z-10">
        <Image
          src={cookies[(current + 1) % cookies.length].image}
          alt="Side Cookie"
          width={200}
          height={200}
          className="object-contain opacity-50 scale-75"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-center space-x-8 max-w-6xl w-full">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={cookies[current].id}
              src={cookies[current].image}
              alt={cookies[current].title}
              className="w-80 md:w-[400px] h-auto object-contain"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </AnimatePresence>
          {/* Red Label */}
          <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {cookies[current].label}
          </div>
        </div>

        {/* Text Content */}
        <AnimatePresence mode="wait">
          <motion.div
            className="max-w-lg text-left space-y-4"
            key={cookies[current].id + '-text'}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <p className="text-red-500 font-semibold text-sm">{cookies[current].number}</p>
            <h2 className="text-3xl md:text-5xl font-bold">{cookies[current].title}</h2>
            <p className="text-sm italic text-gray-300">{cookies[current].subtitle}</p>
            <p className="text-sm italic text-white/90">{cookies[current].description}</p>
            <motion.button
              whileHover={{ backgroundColor: '#dc2626', color: '#fff' }}
              transition={{ duration: 0.3 }}
              className="mt-4 bg-white text-black font-semibold px-6 py-2 rounded-full"
            >
              Celebrate Everything
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-8 z-20">
        <button onClick={prevSlide} className="text-white hover:text-red-500 text-xl">&lt;</button>
        <button onClick={nextSlide} className="text-white hover:text-red-500 text-xl">&gt;</button>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-8 left-0 right-0 h-[2px] bg-white/20 z-10">
        <motion.div
          className="h-full bg-red-500"
          animate={{ width: `${((current + 1) / cookies.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </section>
  );
}
