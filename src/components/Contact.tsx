"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Send,
  Copy,
  Check,
  ExternalLink
} from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    // Frontend only mailto interaction
    const mailtoSubject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name || "Visitor"}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    window.location.href = mailtoUrl;

    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden bg-grid-tech">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="text-cyan-400 font-mono text-xs tracking-wider uppercase">
              {"// Get In Touch"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
            Let&apos;s Work <span className="text-cyan-400">Together</span>
          </h2>

          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-base max-w-xl">
            Have a project in mind, seeking a developer, or want to discuss web engineering? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-white border border-cyan-500/20 dark:border-cyan-500/20 light:border-slate-200 shadow-xl space-y-6">
            
            <div>
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                Let&apos;s connect
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1 leading-relaxed">
                I am actively seeking developer opportunities and open to both full-time positions and creative collaboration.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-4">
              
              {/* Email */}
              <div className="p-3.5 rounded-2xl bg-[#0e1626] dark:bg-[#0e1626] light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      Email
                    </p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 hover:text-cyan-400 dark:hover:text-cyan-400 truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.email, "email")}
                  title="Copy email to clipboard"
                  className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                >
                  {copiedType === "email" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 rounded-2xl bg-[#0e1626] dark:bg-[#0e1626] light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      Phone Number
                    </p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-xs sm:text-sm font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 hover:text-cyan-400"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                  title="Copy phone to clipboard"
                  className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                >
                  {copiedType === "phone" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* WhatsApp */}
              <div className="p-3.5 rounded-2xl bg-[#0e1626] dark:bg-[#0e1626] light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      WhatsApp
                    </p>
                    <a
                      href={personalInfo.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs sm:text-sm font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 hover:text-emerald-400 flex items-center gap-1"
                    >
                      <span>{personalInfo.whatsapp}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg text-emerald-400 hover:bg-emerald-500/10 transition-colors text-xs font-semibold"
                >
                  Chat
                </a>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-2xl bg-[#0e1626] dark:bg-[#0e1626] light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                    Location
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-slate-200 dark:text-slate-200 light:text-slate-800">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

            </div>

            {/* Note badge */}
            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Response time: Usually within 24 hours</span>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#07090e] dark:bg-[#07090e] light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#07090e] dark:bg-[#07090e] light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-subject"
                  className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Project Collaboration / Opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#07090e] dark:bg-[#07090e] light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, idea, or role..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#07090e] dark:bg-[#07090e] light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-slate-500 text-center sm:text-left">
                  Frontend direct interaction • Opens default email client with your message
                </p>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {/* Form Feedback */}
              {formSubmitted && (
                <div className="mt-4 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300 flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    Your mail client has been launched with the details! You can also reach me directly at <strong>{personalInfo.email}</strong>.
                  </span>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
