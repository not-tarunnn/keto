'use client';

import { motion } from 'framer-motion';

export default function HeroStatement() {
  return (
    <section className="relative w-full h-[90vh] bg-transparent flex flex-col items-center justify-center text-center overflow-hidden px-4">
      <div className="absolute inset-0">
        <div className="bg-[radial-gradient(#222_1px,transparent_1px)] bg-[length:40px_40px] opacity-5 w-full h-full" />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 leading-[1.1] text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight"
      >
        <span className="block text-transparent stroke-text">
          NOT JUST COOKIES.
        </span>
        <span className="block text-yellow-400">
          AN OBSESSION.
        </span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="z-10 mt-10"
      >
        <p className="text-white/70 text-base sm:text-lg mb-6">
          Craving more? Explore the collection.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition shadow-lg">
          Shop Now
        </button>
      </motion.div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px #ffffff;
          color: transparent;
        }
      `}</style>
    </section>
  );
}
