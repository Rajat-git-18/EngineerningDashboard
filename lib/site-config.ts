export const siteConfig = {
  name: "Rajat Gupta",
  title: "Software Engineer",
  description:
    "Software Engineer building production-grade React Native, Next.js, and Node.js applications. Major project: Breakfree. Currently at A3 Ideanix Technology Private Limited.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://rajat-git-18.github.io/EngineerningDashboard"),
  ogImage: "/og.png",
  links: {
    github: "https://github.com/Rajat-git-18",
    linkedin: "https://www.linkedin.com/in/rajat-gupta-82523523b",
    leetcode: "https://leetcode.com/u/rajatg461/",
    email: "Rajatg461@gmail.com",
    resume: "/resume.pdf",
  },
};
