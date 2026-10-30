import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AssistantWidget } from "@/components/AssistantWidget";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Mehedi Hasan | Full-Stack Web Developer Portfolio",
  description:
    "Personal portfolio of Mehedi Hasan, a Full-Stack Web Developer building modern, responsive, and high-performance web applications with Next.js, React, and Tailwind CSS.",
  keywords: [
    "Mehedi Hasan",
    "Full-Stack Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Tailwind CSS",
    "Portfolio",
    "Bangladesh Developer",
  ],
  authors: [{ name: "Mehedi Hasan" }],
  openGraph: {
    title: "Mehedi Hasan | Full-Stack Web Developer",
    description:
      "Crafting intuitive, scalable, and responsive web applications with modern technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          {children}
          <AssistantWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
