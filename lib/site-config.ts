export const siteConfig = {
  name: "Rajat Gupta",
  title: "React Native / Mobile Engineer",
  tagline:
    "I build production-grade cross-platform mobile apps and AWS serverless backends using React Native, TypeScript, and Node.js.",
  description:
    "Rajat Gupta — React Native / Mobile Engineer with 2+ years shipping iOS & Android apps, including a production fintech payments application. Experienced in TypeScript, TanStack Query, AWS Lambda, DynamoDB, Stripe, and Plaid.",
  location: "Remote / Gurugram, India",
  phone: "+91-7015885212",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rajatguptadev.netlify.app",
  links: {
    email: "Rajatg461@gmail.com",
    mailto: "mailto:Rajatg461@gmail.com",
    github: "https://github.com/Rajat-git-18",
    linkedin: "https://www.linkedin.com/in/rajatgupta-82523523b",
    leetcode: "https://leetcode.com/u/rajatg461/",
    resume: "/resume.pdf",
  },
} as const;
