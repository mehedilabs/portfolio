"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/portfolioData";
import { Project } from "@/types";
import {
  ExternalLink,
  ArrowRight,
  CloudSun,
  ShoppingBag,
  Newspaper,
  Layers
} from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-28 relative overflow-hidden bg-grid-tech">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="text-cyan-400 font-mono text-xs tracking-wider uppercase">
              {"// Featured Work"}
            </span>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <span className="text-cyan-400 font-mono text-2xl sm:text-3xl font-bold">
              &#123; &#125;
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
              Projects
            </h2>
          </div>

          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-base max-w-xl">
            Selected full-stack and frontend projects showcasing real-world implementation, clean code, and production deployment.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [imageError, setImageError] = useState(false);

  const getFallbackIcon = (slug: string) => {
    switch (slug) {
      case "live-weather":
        return <CloudSun className="w-12 h-12 text-cyan-400" />;
      case "bazar-dor":
        return <ShoppingBag className="w-12 h-12 text-emerald-400" />;
      case "bangla-news-24":
        return <Newspaper className="w-12 h-12 text-blue-400" />;
      default:
        return <Layers className="w-12 h-12 text-cyan-400" />;
    }
  };

  const getGradientTheme = (slug: string) => {
    switch (slug) {
      case "live-weather":
        return "from-cyan-950/40 via-[#0d1726] to-[#090e18]";
      case "bazar-dor":
        return "from-emerald-950/40 via-[#0d1a19] to-[#090e18]";
      case "bangla-news-24":
        return "from-blue-950/40 via-[#0e172a] to-[#090e18]";
      default:
        return "from-cyan-950/40 to-[#090e18]";
    }
  };

  return (
    <div className="group relative rounded-2xl bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 overflow-hidden hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Project Thumbnail / Banner */}
        <div className="lg:col-span-4 relative min-h-[220px] lg:min-h-full overflow-hidden bg-slate-900 flex items-center justify-center">
          {!imageError ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          ) : null}

          {/* Fallback Graphic Banner if image isn't saved locally yet */}
          {imageError && (
            <div
              className={`w-full h-full p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br ${getGradientTheme(
                project.slug
              )}`}
            >
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-3 shadow-lg group-hover:scale-110 transition-transform">
                {getFallbackIcon(project.slug)}
              </div>
              <p className="text-sm font-bold text-white tracking-wide">{project.title}</p>
              <span className="text-[11px] text-cyan-400/90 font-mono mt-1">
                {project.category}
              </span>
            </div>
          )}

          {/* Category Badge overlay */}
          <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md bg-[#07090e]/80 backdrop-blur-md border border-white/10 text-[11px] font-medium text-slate-300">
            {project.category}
          </div>
        </div>

        {/* Project Content */}
        <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            
            {/* Title & Live Link Indicator */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-slate-400 hover:text-cyan-400 flex items-center gap-1 font-mono transition-colors"
                title="Open live website"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#111827] dark:bg-[#111827] light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-white/5 dark:border-white/5 light:border-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons row */}
          <div className="pt-4 border-t border-white/5 dark:border-white/5 light:border-slate-200 flex flex-wrap items-center justify-end gap-3">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#0f172a] dark:bg-[#0f172a] light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-800 border border-white/10 dark:border-white/10 light:border-slate-300 hover:border-cyan-500/40 hover:text-cyan-400 dark:hover:text-cyan-400 transition-all"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
