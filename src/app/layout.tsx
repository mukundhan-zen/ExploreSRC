import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Header from "@/components/layout/header";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Corporate R&D Platform",
  description:
    "Access Corporate R&D Insights, Living Research Maps, Personalized Dashboards, and Project Views for advanced research management.",
  keywords: [
    "R&D",
    "Insights",
    "Research Maps",
    "Dashboards",
    "Project View",
    "Corporate",
    "Innovation",
    "Knowledge Graph",
    "Research Management",
  ],
  openGraph: {
    title: "Corporate R&D Platform",
    description:
      "A modern platform for R&D teams to visualize insights, manage projects, and explore research knowledge graphs.",
    images: [
      {
        url: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
        width: 1200,
        height: 800,
        alt: "Corporate R&D Platform",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate R&D Platform",
    description:
      "Access Corporate R&D Insights, Living Research Maps, Personalized Dashboards, and Project Views.",
    images: [
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
