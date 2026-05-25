"use client";

import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slonBlue/25 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-2">
          <span className="text-3xl font-black font-bebas tracking-wider text-slonGold">
            S-lon
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-white/90">
          <a href="#upvc" className="hover:text-slonGold transition-colors">uPVC Systems</a>
          <a href="#cpvc" className="hover:text-slonGold transition-colors">cPVC Quickflow</a>
          <a href="#rainwater-pumps" className="hover:text-slonGold transition-colors">Water Pumps & Gutters</a>
          <a href="#csr" className="hover:text-slonGold transition-colors">CSR</a>
        </nav>

        {/* White CTA Button */}
        <div>
          <a
            href="#contact"
            className="inline-block bg-white text-slonBlue font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-slonGold hover:text-slonBlue hover:shadow-lg hover:shadow-slonGold/35 transition-all duration-350 active:scale-95"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </header>
  );
}
