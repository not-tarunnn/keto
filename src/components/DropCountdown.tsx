"use client";

import { useEffect, useState, useMemo } from "react";

const DropCountdown = () => {
  const [timeLeft, setTimeLeft] = useState("");

  // Set your next drop date/time here
  const targetDate = useMemo(() => new Date("2025-08-01T12:00:00"), []);

  useEffect(() => {

    const updateTime = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        setTimeLeft("Drop is live!");
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateTime(); // run immediately
    const interval = setInterval(updateTime, 1000); // run every second

    return () => clearInterval(interval); // clean up
  }, [targetDate]);

  return (
    <div className="text-center text-2xl font-semibold text-pink-600 my-4">
      {timeLeft}
    </div>
  );
};

export default DropCountdown;
