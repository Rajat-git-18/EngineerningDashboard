import type { Metadata } from "next";
import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
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
      className={`${geist.variable} ${inter.variable} ${jetbrainsMono.variable} h-full dark antialiased`}
    >
      <body className="min-h-full bg-background text-foreground font-sans">{children}</body>
    </html>
  );
}
