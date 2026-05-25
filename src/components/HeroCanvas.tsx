"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface HeroCanvasProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

export default function HeroCanvas({ containerRef }: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  // Monitor scroll progress over the 1400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map first 50% of the total scroll to frame index 0 to 131
  const frameIndex = useTransform(scrollYProgress, [0, 0.5], [0, 131]);

  // Load all 192 images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    const totalFrames = 132;

    const onLoad = () => {
      loadedCount++;
      setLoadProgress(Math.round((loadedCount / totalFrames) * 100));
      if (loadedCount === totalFrames) {
        setImages(loadedImages);
        setIsLoading(false);
      }
    };

    const onError = () => {
      console.error("Error loading sequence frame");
      // Continue anyway to avoid blocking the site
      onLoad();
    };

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      // Pad frame number to 3 digits (e.g. frame-001.jpg)
      const frameStr = String(i).padStart(3, "0");
      img.src = `/images/sequence/ezgif-frame-${frameStr}.png`;
      img.onload = onLoad;
      img.onerror = onError;
      loadedImages.push(img);
    }
  }, []);

  // Handle canvas drawing and resizing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      renderFrame(Math.min(Math.max(Math.round(frameIndex.get()), 0), 131));
    };

    const renderFrame = (index: number) => {
      const img = images[index];
      if (!img) return;

      const w = window.innerWidth;
      const h = window.innerHeight;

      // Clear the canvas
      ctx.clearRect(0, 0, w, h);

      // ASPECT RATIO "CONTAIN" CALCULATIONS
      const imgRatio = img.width / img.height;
      const screenRatio = w / h;
      let drawW = w;
      let drawH = h;
      let x = 0;
      let y = 0;

      if (screenRatio > imgRatio) {
        // Window is wider than the image ratio -> fit height
        drawH = h;
        drawW = h * imgRatio;
        x = (w - drawW) / 2;
      } else {
        // Window is taller than the image ratio -> fit width
        drawW = w;
        drawH = w / imgRatio;
        y = (h - drawH) / 2;
      }

      ctx.drawImage(img, x, y, drawW, drawH);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Listen to Framer Motion values updates
    const unsubscribe = frameIndex.on("change", (latest) => {
      renderFrame(Math.min(Math.max(Math.round(latest), 0), 131));
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      unsubscribe();
    };
  }, [images, frameIndex]);

  // Canvas fades out after sequence completes (beyond 50% scroll)
  const canvasOpacity = useTransform(scrollYProgress, [0.48, 0.52], [1, 0]);
  const canvasPointerEvents = useTransform(scrollYProgress, (progress) =>
    progress > 0.5 ? "none" : "auto"
  );

  return (
    <>
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-[#112753] flex flex-col items-center justify-center text-white">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-4xl font-black font-bebas text-slonGold tracking-wider">
              S-lon
            </span>
            <span className="text-sm font-bold tracking-widest uppercase border-l border-white/20 pl-3">
              Redesign
            </span>
          </div>
          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
            <div
              className="absolute left-0 top-0 h-full bg-slonGold transition-all duration-100"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <p className="text-xs font-semibold text-white/50 tracking-widest mt-2">
            PRELOADING EXPERIENCES {loadProgress}%
          </p>
        </div>
      )}

      {/* Main Sticky Canvas Area */}
      <motion.div
        className="fixed inset-0 w-screen h-screen z-10"
        style={{ opacity: canvasOpacity, pointerEvents: canvasPointerEvents as unknown as React.CSSProperties["pointerEvents"] }}
      >
        <canvas ref={canvasRef} className="w-full h-full block bg-transparent" />
        {/* Subtle mobile edge shadow for better contrast */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none md:hidden bg-[radial-gradient(transparent_50%,rgba(0,0,0,0.45)_100%)]" />
      </motion.div>
    </>
  );
}
