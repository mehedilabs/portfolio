"use client";

import React from "react";
import { educationData } from "@/data/portfolioData";
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative overflow-hidden bg-grid-tech">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="text-cyan-400 font-mono text-xs tracking-wider uppercase">
              {"// Academic Background"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
            My <span className="text-cyan-400">Education</span>
          </h2>

          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-base max-w-xl">
            Formal education fostering deep analytical reasoning, logic, and self-directed academic excellence.
          </p>
        </div>

        {/* Education Timeline / Cards */}
        <div className="space-y-6 max-w-4xl">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 p-6 sm:p-8 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                
                {/* Degree & School info */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                        {item.degree}
                      </h3>
                      {item.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-[11px] font-semibold text-cyan-300">
                          Enrolled
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700">
                      {item.institution}
                    </p>

                    {item.location && (
                      <p className="text-xs text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{item.location}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Year Pill */}
                <div className="sm:self-start">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111827] dark:bg-[#111827] light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-slate-200 text-xs font-mono font-medium text-slate-300 dark:text-slate-300 light:text-slate-700">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{item.year}</span>
                  </span>
                </div>

              </div>

              {/* Description */}
              <p className="mt-4 pt-4 border-t border-white/5 dark:border-white/5 light:border-slate-200 text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                {item.description}
              </p>

              {/* Highlights */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <span
                      key={hIdx}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 dark:bg-white/5 light:bg-slate-100 px-2.5 py-1 rounded-md"
                    >
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                      <span>{highlight}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
