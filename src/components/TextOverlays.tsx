"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { sLonData } from "@/data/product";

interface TextOverlaysProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

export default function TextOverlays({ containerRef }: TextOverlaysProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Staggered Opacities & Positions for 3 sections
  // Section 1: WATER FOR LIFE (Progress: ~0.02 to ~0.16)
  const op1 = useTransform(scrollYProgress, [0.02, 0.06, 0.12, 0.16], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0.02, 0.06, 0.12, 0.16], [50, 0, 0, -50]);

  // Section 2: S-LON INSIDE (Progress: ~0.18 to ~0.32)
  const op2 = useTransform(scrollYProgress, [0.18, 0.22, 0.28, 0.32], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.18, 0.22, 0.28, 0.32], [50, 0, 0, -50]);

  // Section 3: LEAD-FREE PURITY (Progress: ~0.34 to ~0.48)
  const op3 = useTransform(scrollYProgress, [0.34, 0.38, 0.44, 0.48], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.34, 0.38, 0.44, 0.48], [50, 0, 0, -50]);

  const overlays = [
    { op: op1, y: y1, data: sLonData.storySections[0] },
    { op: op2, y: y2, data: sLonData.storySections[1] },
    { op: op3, y: y3, data: sLonData.storySections[2] },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {overlays.map((overlay, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 translate-y-[-8vh] md:translate-y-0"
          style={{ opacity: overlay.op, y: overlay.y }}
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            {/* Main Headline */}
            <h2 className="font-bebas font-black text-5xl sm:text-7xl md:text-9xl text-white leading-[0.9] tracking-tight uppercase drop-shadow-[0_8px_24px_rgba(0,0,0,0.55)] select-none">
              {overlay.data.title}
            </h2>
            {/* Subtext */}
            <p className="mt-6 text-base sm:text-lg md:text-2xl text-slonGold font-medium tracking-wide max-w-xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              {overlay.data.subtitle}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
