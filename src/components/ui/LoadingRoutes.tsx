"use client";

import { MotionDiv } from "@/lib/framer";
import { Monitor, Smartphone, Code, Zap, Cpu, Database } from "lucide-react";
import React, { useEffect, useState } from "react";

function LoadingRoutes() {
  const techIcons = [Monitor, Smartphone, Code, Zap, Cpu, Database];
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    "Building responsive pixels...",
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
      <div className="flex flex-col items-center justify-center space-y-8 w-full max-w-md px-4">
        <MotionDiv
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center shadow-lg">
            <span className="text-white font-normal text-2xl italic">T.</span>
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
        <div className="w-full relative">
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
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
          <div className="flex justify-between w-full">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-0.5 h-3 bg-gray-300" />
            ))}
          </div>
        </div>
        <div className="relative w-full overflow-hidden h-12">
          <MotionDiv
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex space-x-8 absolute"
          >
            {[...techIcons, ...techIcons].map((Icon, index) => (
              <div key={index} className="flex-shrink-0">
                <MotionDiv
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-full bg-gray-100"
                >
                  <Icon className="w-6 h-6 text-gray-600" />
                </MotionDiv>
              </div>
            ))}
          </MotionDiv>
        </div>
        <div className="h-10 text-center">
          <MotionDiv
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-gray-500"
          >
            <div className="flex items-center justify-center gap-2">
              {["💻", "📦", "⚡"].map((icon, index) => (
                <MotionDiv
                  key={index}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  <span className="inline-block">{icon}</span>
                </MotionDiv>
              ))}
              <div>
                {steps[currentStep]}
                <span className="text-gray-400 animate-pulse">_</span>
              </div>
            </div>

            {currentStep === 2 && (
              <p className="text-xs text-gray-400 mt-1">
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
