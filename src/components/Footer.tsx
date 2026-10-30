"use client";

import React from "react";
import { personalInfo, navigationLinks } from "@/data/portfolioData";
import {
  Terminal,
  MessageCircle,
  Mail,
  ArrowUp
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export const Footer = () => {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-white/5 dark:border-white/5 light:border-slate-200 bg-[#05070c] dark:bg-[#05070c] light:bg-slate-50 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5 dark:border-white/5 light:border-slate-200">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
                {personalInfo.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>

            <p className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
              {personalInfo.designation}
            </p>

            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-sm leading-relaxed">
              Crafting responsive, performant, and reliable web applications with Next.js, React, and modern full-stack technologies.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-300 dark:text-slate-300 light:text-slate-700">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navigationLinks.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-cyan-600 transition-colors py-1 cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-300 dark:text-slate-300 light:text-slate-700">
              Connect
            </h4>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
              Available for full-time roles &amp; projects.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-xl bg-[#0f172a] dark:bg-[#0f172a] light:bg-slate-200 border border-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-xl bg-[#0f172a] dark:bg-[#0f172a] light:bg-slate-200 border border-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Contact"
                className="w-9 h-9 rounded-xl bg-[#0f172a] dark:bg-[#0f172a] light:bg-slate-200 border border-white/5 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email Mehedi"
                className="w-9 h-9 rounded-xl bg-[#0f172a] dark:bg-[#0f172a] light:bg-slate-200 border border-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {personalInfo.name} {personalInfo.lastName}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
