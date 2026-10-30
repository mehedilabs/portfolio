"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { navigationLinks } from "@/data/portfolioData";
import { Sun, Moon, Menu, X, Terminal, ArrowUpRight } from "lucide-react";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navigationLinks.map((item) => item.href.substring(1));

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);

        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);

    const targetId = href.replace("#", "");

    // If the user is on a project details page,
    // navigate to the homepage with the target section.
    if (pathname !== "/") {
      router.push(`/#${targetId}`);
      return;
    }

    // If already on the homepage, scroll directly.
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-[#07090e]/80 dark:bg-[#07090e]/85 light:bg-white/85 backdrop-blur-md border-b border-cyan-500/10 shadow-lg shadow-black/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#hero");
            }}
            className="group flex items-center gap-2 focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 p-[1px] flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <div className="w-full h-full bg-[#090d16] rounded-xl flex items-center justify-center">
                <Terminal className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>

            <div className="flex items-baseline">
              <span className="text-xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                Mehedi
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 ml-0.5 animate-pulse" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0d131f]/60 dark:bg-[#0d131f]/60 light:bg-slate-100/80 px-4 py-1.5 rounded-full border border-white/5 dark:border-white/5 light:border-slate-300/60 backdrop-blur-md">
            {navigationLinks.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? "text-cyan-400 bg-cyan-500/10 font-semibold shadow-xs"
                      : "text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 hover:brightness-110 shadow-sm shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg bg-[#0f172a] dark:bg-[#0f172a] light:bg-slate-200 border border-white/10 text-slate-300 dark:text-slate-300 light:text-slate-700"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-600" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open Mobile Menu"
              className="p-2 rounded-lg bg-[#0f172a] dark:bg-[#0f172a] light:bg-slate-200 border border-white/10 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 p-5 rounded-2xl bg-[#0b0f19]/95 dark:bg-[#0b0f19]/95 light:bg-white/95 border border-cyan-500/20 backdrop-blur-xl shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5">
            {navigationLinks.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "text-cyan-400 bg-cyan-500/10 font-semibold"
                      : "text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}

            <div className="pt-3 mt-2 border-t border-white/10 dark:border-white/10 light:border-slate-200">
              <button
                onClick={() => scrollTo("#contact")}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 shadow-md shadow-cyan-500/25"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
