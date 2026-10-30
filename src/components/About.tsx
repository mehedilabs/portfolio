"use client";

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import {
  Brain,
  Download,
  CheckCircle2,
  GraduationCap
} from "lucide-react";

export const About = () => {
  const techPills = [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git & GitHub",
    "REST APIs"
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden bg-grid-tech">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-cyan-400 font-mono text-xs tracking-wider uppercase">
            {"// About Me"}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
              More than <span className="text-cyan-400">just code.</span>
            </h2>

            <p className="text-lg sm:text-xl font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 leading-snug">
              I build modern web experiences designed to be useful, reliable and easy to use.
            </p>

            <div className="space-y-4 text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed text-sm sm:text-base">
              {personalInfo.aboutStory.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Core Stack &amp; Focus:
              </p>
              <div className="flex flex-wrap gap-2">
                {techPills.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-[#0f172a] dark:bg-[#0f172a] light:bg-slate-100 text-cyan-300 dark:text-cyan-300 light:text-cyan-700 border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download="Mehedi_Hasan_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#0f172a] dark:bg-[#0f172a] light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-800 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Focus Card & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-white border border-cyan-500/20 dark:border-cyan-500/20 light:border-slate-200 shadow-xl space-y-6">
              
              <div className="flex items-center gap-3 pb-4 border-b border-white/10 dark:border-white/10 light:border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900">
                    Philosophy &amp; Mindset
                  </h3>
                  <p className="text-xs text-slate-400">Analytical &amp; Algorithmic Rigor</p>
                </div>
              </div>

              {/* Quick Focus List */}
              <div className="space-y-4">
                {personalInfo.quickFocus.map((focus, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/15 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                        {focus.title}
                      </h4>
                      <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
                        {focus.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Academic Footnote */}
              <div className="pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0" />
                <p className="text-xs text-slate-400">
                  <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                    Chandpur Govt. College
                  </span>{" "}
                  — B.A. (Honours) in Philosophy (In Progress)
                </p>
              </div>

            </div>

            {/* Micro Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#0b0f19]/80 dark:bg-[#0b0f19]/80 light:bg-slate-100/90 border border-white/5 dark:border-white/5 light:border-slate-200 text-center"
                >
                  <p className="text-2xl font-black text-cyan-400">{stat.value}</p>
                  <p className="text-xs text-slate-400 font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
