'use client';

import Image from 'next/image';
import FlipCountdown from './FlipCountdown';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NewDropSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setSubmitted(true);
  };

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* 🍪 Rotating Cookie Image with Framer Motion */}
      <motion.div
        className="absolute left-20 top-1/3.5 transform -translate-y-1/2 z-20"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        <Image
          src="/images/cookie.webp"
          alt="Rotating Cookie"
          width={512}
          height={512}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-30 text-white max-w-xl ml-auto mr-16 text-right">
        <h2 className="text-5xl font-bold mb-4">Next Drop Coming Soon</h2>
        <p className="text-lg mb-8">
          Indulge in luxury KETO cookies before they're gone. Set your reminder!
        </p>

        {/* Countdown Clock */}
        <div className="backdrop-blur-lg bg-white/10 p-6 rounded-xl shadow-lg mb-6">
          <FlipCountdown targetDate="2025-07-25T23:59:59Z" />
        </div>

        {/* Notification Form */}
     {submitted ? (
  <p className="text-green-400 font-semibold text-center">Thanks! You’ll be notified 🎉</p>
) : (
  <div className="flex flex-col items-center gap-4">
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-2 rounded-full bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-72"
      />
      <button
        type="submit"
        className="flex items-center gap-2 px-5 py-2 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a6 6 0 00-6 6v2.586L3.707 13.293a1 1 0 00.707 1.707h11.172a1 1 0 00.707-1.707L16 10.586V8a6 6 0 00-6-6zM7 17a3 3 0 006 0H7z"/>
        </svg>
        Get Notified
      </button>
    </form>
  </div>
)}
        </div>
    </section>
  );
}
