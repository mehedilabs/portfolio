"use client";

import React, { useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolioData";
import {
  ArrowDown,
  Download,
  Mail,
  MessageCircle,
  MapPin,
  Sparkles,
  Code2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export const Hero = () => {
  const [imageError, setImageError] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-32 overflow-hidden bg-grid-tech"
    >
      {/* Subtle radial ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0d1627] dark:bg-[#0d1627] light:bg-cyan-50 border border-cyan-500/30 text-cyan-300 dark:text-cyan-300 light:text-cyan-700 text-xs font-medium shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
                <span className="w-6 h-[1px] bg-cyan-400"></span>
                <span>Hello,</span>
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.1]">
                I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500">
                  {personalInfo.name} {personalInfo.lastName}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                {personalInfo.designation}
              </p>
            </div>

            {/* Short Bio */}
            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
              {personalInfo.bioShort}
            </p>

            {/* Location Pill */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{personalInfo.location}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-[#0f172a] dark:bg-[#0f172a] light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-800 border border-white/10 dark:border-white/10 light:border-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-cyan-600 transition-all cursor-pointer"
              >
                <span>Let&apos;s Talk</span>
                <MessageCircle className="w-4 h-4" />
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-transparent text-cyan-400 hover:bg-cyan-500/10 border border-cyan-500/30 transition-all"
                title="View Mehedi's Resume (PDF)"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold mr-1">
                Connect:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl bg-[#0f172a] dark:bg-[#0f172a] light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-cyan-600 hover:border-cyan-500/40 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-[#0f172a] dark:bg-[#0f172a] light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-cyan-600 hover:border-cyan-500/40 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Contact"
                className="w-10 h-10 rounded-xl bg-[#0f172a] dark:bg-[#0f172a] light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-emerald-400 dark:hover:text-emerald-400 light:hover:text-emerald-600 hover:border-emerald-500/40 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email Mehedi"
                className="w-10 h-10 rounded-xl bg-[#0f172a] dark:bg-[#0f172a] light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-cyan-600 hover:border-cyan-500/40 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Showcase Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Outer Glow ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-cyan-500/30 via-cyan-500/10 to-transparent blur-xl opacity-75" />

              {/* Main Card */}
              <div className="relative rounded-3xl bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-white border border-cyan-500/20 dark:border-cyan-500/20 light:border-slate-200 overflow-hidden shadow-2xl p-3">
                {/* Image Container with Fallback */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#131b2e] to-[#0a0e17] flex items-center justify-center">
                  {!imageError ? (
                    <Image
                      src="/images/profile.png"
                      alt="Mehedi Hasan - Full-Stack Web Developer"
                      fill
                      priority
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                      onError={() => setImageError(true)}
                    />
                  ) : null}

                  {/* Elegant Fallback Placeholder when profile.png is absent */}
                  {imageError && (
                    <div className="flex flex-col items-center justify-center p-6 text-center text-slate-400">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-500 p-[2px] mb-4 shadow-lg shadow-cyan-500/30">
                        <div className="w-full h-full bg-[#0b0f19] rounded-full flex items-center justify-center">
                          <Code2 className="w-10 h-10 text-cyan-400" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        Mehedi Hasan
                      </h3>
                      <p className="text-xs text-cyan-400 font-medium mb-3">
                        Full-Stack Web Developer
                      </p>
                      <p className="text-[11px] text-slate-400 max-w-[200px] leading-relaxed">
                        Drop your photo into{" "}
                        <code className="text-cyan-300">
                          /public/images/profile.png
                        </code>
                      </p>
                    </div>
                  )}

                  {/* Top Right "Open to Work" floating pill */}
                  <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#07090e]/85 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-xs font-semibold shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Open to Work</span>
                  </div>
                </div>

                {/* Bottom floating details strip */}
                <div className="mt-3 p-3 rounded-xl bg-[#0e1626]/80 dark:bg-[#0e1626]/80 light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-slate-400">
                        Focus
                      </p>
                      <p className="text-xs font-bold text-white dark:text-white light:text-slate-900">
                        Next.js &amp; Full-Stack
                      </p>
                    </div>
                  </div>

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-semibold border border-cyan-500/30 transition-colors"
                    title="View Mehedi's Resume (PDF)"
                  >
                    <span>Resume</span>
                    <Download className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
