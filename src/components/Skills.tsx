"use client";

import React from "react";
import { skillsData } from "@/data/portfolioData";
import {
  Code2,
  Server,
  Wrench,
  Palette,
  Sparkles
} from "lucide-react";

export const Skills = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "frontend":
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case "backend":
        return <Server className="w-5 h-5 text-teal-400" />;
      case "tools":
        return <Wrench className="w-5 h-5 text-sky-400" />;
      case "design":
        return <Palette className="w-5 h-5 text-indigo-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative overflow-hidden bg-grid-tech">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="text-cyan-400 font-mono text-xs tracking-wider uppercase">
              {"// Technical Competence"}
            </span>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <span className="text-cyan-400 font-mono text-2xl sm:text-3xl font-bold">
              &lt;/&gt;
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
              Skills
            </h2>
          </div>

          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-base max-w-xl">
            A solid foundation across modern frontend architecture, backend RESTful systems, and development tooling.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 p-6 flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              {/* Subtle accent glow top border */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header with icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-extrabold text-cyan-400">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-[#111827] dark:bg-[#111827] light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-white/5 dark:border-white/5 light:border-slate-200 group-hover:border-cyan-500/20 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80"></span>
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom micro status */}
              <div className="pt-6 mt-6 border-t border-white/5 dark:border-white/5 light:border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Verified Stack</span>
                <span className="text-cyan-400 font-mono font-medium">100% Focused</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
