"use client";

import { MotionDiv } from "@/lib/framer";
import { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!time) {
    return (
      <footer className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-sm max-w-4xl mx-auto">
        <div className="px-6 lg:px-8">
          <MotionDiv
            className="flex items-center justify-between py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <span className="text-sm text-gray-400">Lagos, NG.</span>
            <div className="w-5 h-5" />
          </MotionDiv>
        </div>
      </footer>
    );
  }

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-sm max-w-4xl mx-auto">
      <div className="px-6 lg:px-8">
        <MotionDiv
          className="flex items-center justify-between py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <span className="text-sm text-gray-400">Lagos, NG.</span>

          <div className="flex items-center space-x-2">
            <div className="relative w-5 h-5">
              <div
                className="absolute top-1/2 left-1/2 w-0.5 h-1.5 bg-gray-400 origin-bottom"
                style={{
                  transform: `translate(-50%, -100%) rotate(${
                    (hours % 12) * 30 + minutes * 0.5
                  }deg)`,
                }}
              />
              <div
                className="absolute top-1/2 left-1/2 w-0.5 h-2 bg-gray-500 origin-bottom"
                style={{
                  transform: `translate(-50%, -100%) rotate(${minutes * 6}deg)`,
                }}
              />
              <div
                className="absolute top-1/2 left-1/2 w-px h-2 bg-red-400 origin-bottom"
                style={{
                  transform: `translate(-50%, -100%) rotate(${seconds * 6}deg)`,
                }}
              />
              <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-gray-600 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <span className="text-xs text-gray-500">
              {hours.toString().padStart(2, "0")}:
              {minutes.toString().padStart(2, "0")}
            </span>
          </div>
        </MotionDiv>
      </div>
    </footer>
  );
}
