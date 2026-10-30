"use client";

import React from "react";
import { Briefcase, CheckCircle2 } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative overflow-hidden bg-grid-tech">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="text-cyan-400 font-mono text-xs tracking-wider uppercase">
              {"// Career History"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
            Experience<span className="text-cyan-400">.</span>
          </h2>

          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-base max-w-xl">
            Internships, contract roles, and open-source contributions.
          </p>
        </div>

        {/* Elegant Empty State / Personal Development Journey Card */}
        <div className="relative rounded-3xl bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 p-8 sm:p-14 text-center max-w-3xl mx-auto shadow-xl">
          
          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative space-y-6">
            
            {/* Center Icon with Cyan Ring */}
            <div className="mx-auto w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/10">
              <Briefcase className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
                Experience will be added soon
              </h3>
              <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-lg mx-auto leading-relaxed">
                Currently dedicating full-time energy to building production-ready web applications, refining full-stack architecture, and actively seeking junior developer or frontend engineering opportunities.
              </p>
            </div>

            {/* Status Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 dark:text-cyan-300 light:text-cyan-700 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Available for Full-time &amp; Remote Roles</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Open for Freelance / Contracts</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
