import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Rajat Gupta | Senior Software Engineer",
    template: "%s | Rajat Gupta",
  },
  description:
    "Personal engineering portfolio focused on React Native, Next.js, Node.js, AI systems, and scalable backend architecture.",
  keywords: [
    "Rajat Gupta",
    "Software Engineer",
    "React Native",
    "Next.js",
    "Node.js",
    "AI Engineering",
    "Backend Architecture",
  ],
  openGraph: {
    title: "Rajat Gupta | Senior Software Engineer",
    description:
      "Engineering portfolio focused on React Native, Next.js, Node.js, AI systems, and scalable backend architecture.",
    url: "https://example.com",
    siteName: "Rajat Gupta Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full dark antialiased`}
    >
      <body className="min-h-full bg-background text-foreground font-sans">{children}</body>
    </html>
  );
}
