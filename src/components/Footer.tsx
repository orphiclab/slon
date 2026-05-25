"use client";

import React from "react";
import { Phone, Mail, MapPin, Award, Trees, Droplet } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative z-20 bg-slonBg text-slate-800 border-t border-slate-200">
      
      {/* Final Content Section (CSR & Call To Action) */}
      <section id="csr" className="min-h-[80vh] flex items-center py-20 px-6">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* Left Side: Empty spacer so the Pipe can settle centered in the viewport */}
          <div className="hidden md:block h-[35vh] md:h-[50vh] pointer-events-none" />

          {/* Right Side: High contrast text & White CTA Button */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8 z-10 text-left md:pl-12">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-slonGold bg-slonGold/10 px-3 py-1 rounded-full">
                OUR COMMITMENT
              </span>
              <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl font-black uppercase text-slonBlue leading-tight tracking-tight mt-3">
                WATER FOR LIFE
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Since 1957, S-lon has championed water conservation, clean drinking water access for rural communities, and professional skills training for plumbers through the S-lon Plumbers Club.
            </p>

            {/* CSR Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="flex items-center space-x-3 text-slate-700">
                <Droplet className="w-5 h-5 text-slonBlue shrink-0" />
                <span className="text-xs font-bold tracking-wide uppercase">Water Access</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-700">
                <Award className="w-5 h-5 text-slonBlue shrink-0" />
                <span className="text-xs font-bold tracking-wide uppercase">NVQ Plumbers</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-700">
                <Trees className="w-5 h-5 text-slonBlue shrink-0" />
                <span className="text-xs font-bold tracking-wide uppercase">Thuru Kepakaru</span>
              </div>
            </div>

            {/* White CTA Buy Now / Explore Button */}
            <div className="pt-4">
              <a
                href="mailto:slonsales@slon.maharaja.lk"
                className="inline-block bg-white text-slonBlue border border-slate-200 font-bold text-sm tracking-widest uppercase px-8 py-3.5 rounded-full shadow-md hover:shadow-lg hover:bg-slonBlue hover:text-white hover:border-slonBlue transition-all duration-300 active:scale-95"
              >
                FIND A DEALER
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Corporate Metadata Footer */}
      <div className="bg-slonBlue text-white py-16 px-6 relative z-30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
          
          {/* Brand block */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-4xl font-black font-bebas text-slonGold tracking-wider">
                S-lon
              </span>
              <span className="text-sm font-bold tracking-widest uppercase border-l border-white/20 pl-3">
                Lanka
              </span>
            </div>
            <p className="text-xs text-white/50 uppercase tracking-widest font-semibold">
              The flagship entity of The Capital Maharaja Organisation Limited.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-bebas text-xl font-bold tracking-wider text-slonGold uppercase">
              Head Office
            </h4>
            <ul className="space-y-3 text-sm text-white/80 font-medium">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4.5 h-4.5 text-slonGold shrink-0 mt-0.5" />
                <span>No. 515/7, T. B. Jayah Mawatha, Colombo 10, Sri Lanka</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4.5 h-4.5 text-slonGold shrink-0" />
                <span>+94 114 760 100 / +94 114 760 170</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4.5 h-4.5 text-slonGold shrink-0" />
                <span>slonsales@slon.maharaja.lk</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bebas text-xl font-bold tracking-wider text-slonGold uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-white/80 font-medium">
              <li>
                <a href="#upvc" className="hover:text-slonGold transition-colors">uPVC Piping Standards</a>
              </li>
              <li>
                <a href="#cpvc" className="hover:text-slonGold transition-colors">cPVC Quickflow Catalog</a>
              </li>
              <li>
                <a href="#rainwater-pumps" className="hover:text-slonGold transition-colors">Water Pumps Specifications</a>
              </li>
              <li>
                <a href="#csr" className="hover:text-slonGold transition-colors">CSR Community Programs</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-white/40 font-semibold tracking-wider uppercase">
          <p>© {new Date().getFullYear()} S-LON LANKA (PVT) LTD. ALL RIGHTS RESERVED.</p>
          <p className="mt-2 sm:mt-0">Water for Life</p>
        </div>
      </div>

    </footer>
  );
}
