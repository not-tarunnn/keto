'use client';

import { Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-24">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-yellow-400">Thanks for exploring my work!</h1>
        <p className="text-lg text-gray-300 mb-10">
          If you liked what you saw and would like to work with me and want to get your website completed or learn more,
          feel free to contact me here:
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            href="https://wa.me/+919467389543"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-green-400 transition"
          >
            <MessageCircle size={20} />
            Message on WhatsApp
          </Link>

          <Link
            href="mailto:heytarunnn@gmail.com"
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-yellow-300 transition"
          >
            <Mail size={20} />
            Send an Email
          </Link>
        </div>
      </div>
    </section>
  );
}
