import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Rajat Gupta",
    "React Native Developer",
    "Mobile Engineer",
    "TypeScript",
    "AWS Serverless",
    "BreakFree",
    "Cross-Platform Mobile",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.links.github }],
  creator: siteConfig.name,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable} h-full dark antialiased`}>
      <body className="min-h-full bg-background font-sans text-foreground">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
