"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroCanvas from "@/components/HeroCanvas";
import TextOverlays from "@/components/TextOverlays";
import TravelingPipe from "@/components/TravelingPipe";
import PostSequenceContent from "@/components/PostSequenceContent";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for the entire layout
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Background color transforms from S-lon Blue during the sequence
  // to off-white (#FBF6F6) for the informational layout content.
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.46, 0.50],
    ["#112753", "#FBF6F6"]
  );

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full"
      style={{ backgroundColor }}
    >
      {/* Premium Glassmorphic Navigation */}
      <Navbar />

      {/* Hero Canvas Container (Phase 1) - Sticky 1400vh for slow scroll pacing */}
      <div className="relative w-full h-[1400vh]">
        {/* HTML5 Canvas sequence player */}
        <HeroCanvas containerRef={containerRef} />

        {/* Dynamic staggered text overlay sections */}
        <TextOverlays containerRef={containerRef} />
      </div>

      {/* The Connecting Element (Phase 2) - Fixed Traveling Pipe */}
      <TravelingPipe containerRef={containerRef} />

      {/* Post-Sequence Product Columns (Phase 2 content) */}
      <PostSequenceContent />

      {/* Footer and final CSR/Contact CTA */}
      <Footer />
    </motion.div>
  );
}
