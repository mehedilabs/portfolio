"use client";

import React from "react";
import { achievementsData } from "@/data/portfolioData";
import { Trophy } from "lucide-react";

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 lg:py-24 relative overflow-hidden bg-grid-tech">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="text-cyan-400 font-mono text-xs tracking-wider uppercase">
              {"// Highlights & Milestones"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
            My <span className="text-cyan-400">Achievements</span>
          </h2>

          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-base max-w-xl">
            Verified milestones earned through rigorous development, continuous building, and real-world deployments.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {achievementsData.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 p-6 sm:p-7 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 transition-all group"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Trophy className="w-5 h-5" />
                </div>

                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[11px] font-semibold text-cyan-300">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs font-medium text-slate-400 dark:text-slate-400 light:text-slate-500 mt-1 mb-3">
                {item.organization} • {item.year}
              </p>

              <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
