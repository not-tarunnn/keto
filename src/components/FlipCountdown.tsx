'use client';

import { useEffect, useMemo, useState } from 'react';

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

interface FlipCountdownProps {
  targetDate: string; // ISO format
}

export default function FlipCountdown({ targetDate }: FlipCountdownProps) {
  const targetTimestamp = useMemo(() => new Date(targetDate).getTime(), [targetDate]);

  const calculateTimeLeft = (): TimeLeft => {
    const now = Date.now();
    const distance = Math.max(0, targetTimestamp - now);

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days: String(days).padStart(2, '0'),
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft());

  useEffect(() => {
    if (isNaN(targetTimestamp)) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTimestamp]);

  if (isNaN(targetTimestamp)) {
    console.error('Invalid targetDate:', targetDate);
    return <p className="text-red-500">Invalid countdown date</p>;
  }

  return (
    <div className="flex justify-center gap-8 text-white font-mono font-bold">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="text-center">
          <div className="w-24 h-28 bg-black/60 rounded-2xl flex items-center justify-center shadow-lg text-6xl">
            {value}
          </div>
          <div className="text-sm uppercase text-gray-300 mt-3 tracking-wider">{label}</div>
        </div>
      ))}
    </div>
  );
}
