"use client";

import { MotionDiv } from "@/lib/framer";
import { Code, Zap, Cpu, Database } from "lucide-react";
import React, { useEffect, useState } from "react";

function LoadingRoutes() {
  const techIcons = [Code, Zap, Cpu, Database];
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    "Building pixels...",
    "Optimizing bundles...",
    "Loading containers...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/90 z-50">
      <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-sm px-4">
        <MotionDiv
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shadow-lg">
            <span className="text-white font-normal text-xl italic">T.</span>
          </div>
          <MotionDiv
            initial={{ scale: 0.8, opacity: 0.7 }}
            animate={{ scale: 1.2, opacity: 0 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="absolute inset-0 border-2 border-black rounded-full"
          />
        </MotionDiv>
        <div className="w-64 relative">
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <MotionDiv
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-full bg-gradient-to-r from-gray-800 via-black to-gray-800 rounded-full relative"
            >
              <MotionDiv
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-white blur-sm"
              />
            </MotionDiv>
          </div>
          <div className="flex justify-between w-full mt-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-0.5 h-2 bg-gray-300" />
            ))}
          </div>
        </div>
        <div className="relative w-64 overflow-hidden h-10">
          <MotionDiv
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex space-x-6 absolute"
          >
            {[...techIcons, ...techIcons].map((Icon, index) => (
              <div key={index} className="flex-shrink-0">
                <MotionDiv
                  whileHover={{ scale: 1.1 }}
                  className="p-1.5 rounded-full bg-gray-100"
                >
                  <Icon className="w-5 h-5 text-gray-600" />
                </MotionDiv>
              </div>
            ))}
          </MotionDiv>
        </div>
        <div className="h-10 text-center w-64">
          <MotionDiv
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-gray-500"
          >
            <div className="flex items-center justify-center gap-1">
              {["💻", "📦", "⚡"].map((icon, index) => (
                <MotionDiv
                  key={index}
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  <span className="inline-block text-sm">{icon}</span>{" "}
                </MotionDiv>
              ))}
              <div className="text-xs">
                {steps[currentStep]}
                <span className="text-gray-400 animate-pulse"></span>
              </div>
            </div>

            {currentStep === 2 && (
              <p className="text-[0.45rem] text-gray-400 mt-1">
                {`> docker run -it portfolio:latest`}
              </p>
            )}
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}

export default LoadingRoutes;
