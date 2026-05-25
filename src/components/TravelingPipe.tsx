"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { sLonData } from "@/data/product";

interface TravelingPipeProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

export default function TravelingPipe({ containerRef }: TravelingPipeProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Handoff visibility: hidden during first 50% scroll (sequence phase), then fades in.
  const opacity = useTransform(scrollYProgress, [0.49, 0.51], [0, 1]);

  // Movement Path - Horizontal translation
  // Starts on the right edge, moves to left, back to right, settles center.
  const xDesktop = useTransform(
    scrollYProgress,
    [0.5, 0.65, 0.78, 0.92, 0.98],
    ["22vw", "22vw", "-22vw", "22vw", "0vw"]
  );

  const xMobile = useTransform(
    scrollYProgress,
    [0.5, 0.65, 0.78, 0.92, 0.98],
    ["10vw", "10vw", "-10vw", "10vw", "0vw"]
  );

  const x = isMobile ? xMobile : xDesktop;

  // Movement Path - Vertical translation
  // On desktop, it is centered. On mobile, we offset it downwards to not overlap text headers.
  const yDesktop = useTransform(scrollYProgress, [0.92, 0.98], ["0vh", "-10vh"]);
  const yMobile = useTransform(scrollYProgress, [0.5, 0.92, 0.98], ["15vh", "15vh", "0vh"]);
  const y = isMobile ? yMobile : yDesktop;

  // Rotation Path: subtle tilts as it changes directions
  const rotate = useTransform(
    scrollYProgress,
    [0.5, 0.65, 0.78, 0.92, 0.98],
    [5, 5, -12, 12, 0]
  );

  // Scaling Path: Settle large in center for final CTA
  const scale = useTransform(scrollYProgress, [0.92, 0.98], [1, 1.15]);

  // Hide the pipe once scroll goes past the bottom boundary if needed,
  // or keep it visible at the footer.
  const display = useTransform(scrollYProgress, (progress) =>
    progress < 0.49 ? "none" : "block"
  );

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-30 flex items-center justify-center"
      style={{
        opacity,
        display,
        x,
        y,
        rotate,
        scale,
      }}
    >
      {/* Floating animation wrapper */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex items-center justify-center"
      >
        {/* Static Pipe PNG */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={sLonData.staticPipe}
          alt="S-lon uPVC Pipe"
          className="h-auto w-auto max-h-[35vh] md:max-h-[52vh] object-contain drop-shadow-[0_15px_30px_rgba(17,39,83,0.3)] filter brightness-105"
        />
      </motion.div>
    </motion.div>
  );
}
