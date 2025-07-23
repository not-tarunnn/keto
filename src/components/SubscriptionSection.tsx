'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const subscriptions = [
  {
    title: 'Basic(Non-Subscription)',
    price: '$59',
    image: '/images/basic.jpeg',
    benefits: [
      'One-time box of 12 luxury KETO cookies',
      'Access to standard flavors',
      'Ships once — no commitment',
    ],
  },
  {
    title: 'Premium',
    price: '$26/month',
    image: '/images/premium.jpeg',
    benefits: [
      'Monthly box of 6 cookies',
      'Early access to new flavors',
      'Free shipping',
      'Priority customer service',
    ],
  },
  {
    title: 'Luxury',
    price: '$48/month',
    image: '/images/luxury.jpeg',
    benefits: [
      'Monthly VIP box with 12 cookies',
      'Exclusive luxury flavors',
      'Custom packaging',
      'Concierge reorder access',
    ],
  },
];

export default function SubscriptionSection() {
  const [currentTime, setCurrentTime] = useState(Date.now());
  const dropDeadline = new Date('2025-07-23T23:59:59Z').getTime();

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">
          Choose Your Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {subscriptions.map((plan, idx) => {
            const isSoldOut = idx === 1 && currentTime < dropDeadline;

            return (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col justify-between bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl border border-yellow-500/20 p-6 overflow-hidden shadow-2xl min-h-[650px]"
              >
                {/* Glowing comet border */}
                <div className="absolute inset-0 z-0 border-2 border-yellow-400/10 rounded-3xl pointer-events-none before:absolute before:inset-0 before:rounded-3xl before:border-t-2 before:border-yellow-400 before:animate-pulse before:blur-md" />

                {/* Drop Countdown for 2nd box */}
                {idx === 1 && isSoldOut && (
                  <div className="absolute top-4 left-4 bg-black/70 text-yellow-300 px-4 py-2 rounded-xl text-xs font-mono z-20">
                    Drop in {new Date(dropDeadline - currentTime).getUTCHours().toString().padStart(2, '0')}:
                    {new Date(dropDeadline - currentTime).getUTCMinutes().toString().padStart(2, '0')}:
                    {new Date(dropDeadline - currentTime).getUTCSeconds().toString().padStart(2, '0')}
                  </div>
                )}

                {/* Hurry tag for Luxury */}
                {plan.title === 'Luxury' && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 text-xs rounded-full z-20">
                    Hurry Up!
                  </div>
                )}

                {/* Square cropped image */}
                <div className="relative z-10 w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src={plan.image}
                    alt={`${plan.title} box`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title & Price */}
                <div className="relative z-10 text-center mb-6">
                  <h3 className="text-3xl font-semibold mb-2">{plan.title}</h3>
                  <p className="text-4xl font-bold text-yellow-400">{plan.price}</p>
                </div>

                {/* Benefits */}
                <ul className="relative z-10 flex-1 mb-8 space-y-4 text-sm text-gray-300 px-2">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-yellow-500">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Button or Sold Out */}
                <div className="relative z-10 text-center">
                  {isSoldOut ? (
                    <button className="w-full bg-gray-700 text-gray-300 py-3 rounded-full font-semibold cursor-not-allowed">
                      Sold Out
                    </button>
                  ) : (
                    <button className="w-full bg-yellow-400 text-black py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
                      Buy Now
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
