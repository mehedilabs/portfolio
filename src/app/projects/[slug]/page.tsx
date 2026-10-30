import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projectsData } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Layers,
  Calendar,
  UserCheck,
  Tag,
  ArrowRight
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Mehedi Hasan",
    };
  }

  return {
    title: `${project.title} — Project Case Study | Mehedi Hasan`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Mehedi Hasan Portfolio`,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next/prev project for easy navigation
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const nextProject =
    currentIndex < projectsData.length - 1
      ? projectsData[currentIndex + 1]
      : projectsData[0];
  const prevProject =
    currentIndex > 0
      ? projectsData[currentIndex - 1]
      : projectsData[projectsData.length - 1];

  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] dark:bg-[#07090e] light:bg-[#f8fafc] text-slate-100 dark:text-slate-100 light:text-slate-900 transition-colors duration-300">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 bg-grid-tech">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Back Navigation & Breadcrumb */}
          <div className="flex items-center justify-between">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all projects</span>
            </Link>

            <span className="px-3 py-1 rounded-full bg-[#111827] dark:bg-[#111827] light:bg-slate-200 border border-white/5 text-xs font-mono text-cyan-400">
              {project.category}
            </span>
          </div>

          {/* Project Hero Header */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-cyan-300/90 font-medium">
              {project.tagline}
            </p>
            <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-3xl leading-relaxed">
              {project.fullDescription}
            </p>

            {/* CTA action buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/25 transition-all"
              >
                <span>Open Live Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-[#0f172a] dark:bg-[#0f172a] light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-800 border border-white/10 dark:border-white/10 light:border-slate-300 hover:border-cyan-500/40 hover:text-cyan-400 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs text-slate-500 bg-[#0f172a]/50 border border-white/5">
                  Repository available on request
                </span>
              )}
            </div>
          </div>

          {/* Project Metadata Ribbon */}
          <div className="p-6 rounded-2xl bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>My Role</span>
              </p>
              <p className="text-xs sm:text-sm font-bold text-white dark:text-white light:text-slate-900">
                {project.role}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>Timeline</span>
              </p>
              <p className="text-xs sm:text-sm font-bold text-white dark:text-white light:text-slate-900">
                {project.duration || "Active Project"}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-cyan-400" />
                <span>Category</span>
              </p>
              <p className="text-xs sm:text-sm font-bold text-white dark:text-white light:text-slate-900">
                {project.category}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>Deployment</span>
              </p>
              <p className="text-xs sm:text-sm font-bold text-cyan-400">
                Vercel Cloud
              </p>
            </div>
          </div>

          {/* Project Overview */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Project Overview</span>
            </h2>
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 space-y-3">
              {project.overview.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Technology Stack Badges */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Technology Stack</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between"
                >
                  <span className="text-sm font-semibold text-white dark:text-white light:text-slate-900">
                    {tech.name}
                  </span>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Key Features &amp; Implementation</span>
            </h2>
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 space-y-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Development Challenges & Solutions */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Development Challenges &amp; Technical Solutions</span>
            </h2>
            <div className="space-y-4">
              {project.challenges.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 space-y-3"
                >
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase font-bold text-amber-400">
                        Challenge
                      </p>
                      <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 mt-1">
                        {item.challenge}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5 dark:border-white/5 light:border-slate-100 flex items-start gap-2.5">
                    <Lightbulb className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase font-bold text-cyan-400">
                        Solution
                      </p>
                      <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 mt-1">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Potential Improvements & Future Plans */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Potential Improvements &amp; Future Plans</span>
            </h2>
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 space-y-3">
              {project.futureImprovements.map((improvement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700">
                    {improvement}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Next / Previous Project Navigation */}
          <div className="pt-8 border-t border-white/10 dark:border-white/10 light:border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={`/projects/${prevProject.slug}`}
              className="p-5 rounded-2xl bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-white border border-white/10 hover:border-cyan-500/40 transition-colors group flex flex-col items-start"
            >
              <span className="text-xs text-slate-500 group-hover:text-cyan-400 flex items-center gap-1 transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" /> Previous Project
              </span>
              <span className="text-base font-bold text-white dark:text-white light:text-slate-900 mt-1">
                {prevProject.title}
              </span>
            </Link>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="p-5 rounded-2xl bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-white border border-white/10 hover:border-cyan-500/40 transition-colors group flex flex-col items-end text-right"
            >
              <span className="text-xs text-slate-500 group-hover:text-cyan-400 flex items-center gap-1 transition-colors">
                Next Project <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <span className="text-base font-bold text-white dark:text-white light:text-slate-900 mt-1">
                {nextProject.title}
              </span>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
