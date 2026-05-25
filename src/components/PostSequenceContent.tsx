"use client";

import React from "react";
import { sLonData } from "@/data/product";
import { CheckCircle2 } from "lucide-react";

export default function PostSequenceContent() {
  return (
    <div className="relative z-20 bg-slonBg text-slate-800">
      {sLonData.sections.map((section) => {
        const isAlignRight = section.alignment === "right";

        return (
          <section
            key={section.id}
            id={section.id}
            className="min-h-screen flex items-center py-24 md:py-32 px-6 border-b border-slate-200/50"
          >
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              
              {/* Text Side */}
              <div className={`${isAlignRight ? "md:order-1" : "md:order-2"} flex flex-col justify-center space-y-6 md:space-y-8 z-10`}>
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-slonGold bg-slonGold/10 px-3 py-1 rounded-full">
                    {section.subtitle}
                  </span>
                  <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl font-black uppercase text-slonBlue leading-tight tracking-tight mt-3">
                    {section.title}
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                  {section.description}
                </p>

                {/* Features Checklist */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {section.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-sm sm:text-base font-semibold text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-slonBlue shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Glassmorphic Spec Card */}
                <div className="bg-white/80 backdrop-blur border border-slate-200 p-5 rounded-2xl shadow-sm max-w-lg mt-4">
                  <p className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-1">
                    ENGINEERING HIGHLIGHT
                  </p>
                  <p className="text-xs font-medium text-slate-600 leading-relaxed">
                    Conforms strictly to SLS & ISO international standards. Evaluated regularly by standard institutes to maintain 100% lead-free batch consistency.
                  </p>
                </div>
              </div>

              {/* Empty Spacer Side for Traveling Pipe */}
              <div className={`${isAlignRight ? "md:order-2" : "md:order-1"} h-[35vh] md:h-[50vh] pointer-events-none`} />

            </div>
          </section>
        );
      })}

      {/* Legacy Statistics Grid */}
      <section className="bg-slate-100 py-24 px-6 relative z-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slonGold bg-slonGold/10 px-3 py-1 rounded-full">
              S-LON BY THE NUMBERS
            </span>
            <h2 className="font-bebas text-4xl md:text-5xl font-black text-slonBlue uppercase tracking-tight">
              A Legacy of Quality and Trust
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Providing top-tier infrastructure products for major residential, commercial, and agricultural water works nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sLonData.specs.map((spec, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="text-4xl sm:text-5xl font-black font-bebas text-slonBlue tracking-tight">
                    {spec.value}
                  </span>
                  <h4 className="text-sm font-bold text-slate-800 tracking-wide mt-2">
                    {spec.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
