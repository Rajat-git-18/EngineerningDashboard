/**
 * Source of truth: Rajat Gupta Resume.pdf (latest)
 * Do not invent companies, metrics, technologies, or achievements.
 */

export const experience = [
  {
    company: "A3 Ideanix Technology Pvt. Ltd.",
    role: "React Native Developer",
    location: "Gurugram, Haryana, India (Remote-friendly team)",
    period: "Jun 2025 – Present",
    overview:
      "Build and maintain core mobile features for Breakfree, a client fintech payment application, with React Native and AWS serverless services.",
    bullets: [
      "Build and maintain core mobile features for Breakfree, a fintech payment app with 10K+ active users, using React Native, TypeScript, and Redux/Context API.",
      "Implemented navigation flows with React Navigation and used TanStack Query to optimize data fetching and caching, cutting redundant API calls by ~35%.",
      "Designed and developed serverless backend services on AWS Lambda, API Gateway, DynamoDB, and SQS to power payments, messaging, and notification workflows handling 50K+ transactions/month.",
      "Implemented idempotency and rate-limiting for safe, duplicate-free transactions, and integrated Stripe and Plaid APIs for secure banking and payment processing.",
      "Wrote unit and end-to-end tests using Jest and Detox, raising test coverage to ~80% and reducing production hotfixes.",
      "Set up CI/CD pipelines to automate testing and deployment, cutting release turnaround from days to hours.",
      "Optimized JavaScript performance and CloudFront caching, reducing API latency by ~25% and improving app responsiveness.",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Redux",
      "Context API",
      "React Navigation",
      "TanStack Query",
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "SQS",
      "CloudFront",
      "Stripe",
      "Plaid",
      "Jest",
      "Detox",
      "CI/CD",
    ],
  },
  {
    company: "NBCC (India) Limited",
    role: "Mobile Application Developer",
    location: "New Delhi, Delhi, India",
    period: "Oct 2023 – Jun 2025",
    overview:
      "Developed cross-platform mobile applications with React Native for consistent iOS and Android experiences.",
    bullets: [
      "Developed cross-platform mobile applications using React Native, delivering a consistent experience across iOS and Android from a single codebase, cutting development time by ~40% versus separate native builds.",
      "Integrated REST APIs, Firebase, and real-time services, improving app responsiveness and reducing screen load times by ~20%.",
      "Implemented secure authentication flows and optimized UI rendering performance for a user base of 5K+.",
      "Collaborated closely with backend teams to ensure seamless API integration and end-to-end data consistency.",
    ],
    technologies: [
      "React Native",
      "REST APIs",
      "Firebase",
      "iOS",
      "Android",
      "Authentication",
    ],
  },
  {
    company: "PISoftek",
    role: "Software Developer Trainee",
    location: "Noida, Uttar Pradesh, India",
    period: "Apr 2023 – Sep 2023",
    overview:
      "Built frontend experiences for a sports management web application and supported production releases.",
    bullets: [
      "Built the frontend for a sports management web app using Next.js, Tailwind CSS, and Material UI, based on Figma designs.",
      "Managed release configuration (build, packaging, deployment) and supported production releases; participated in Agile/Scrum ceremonies across the SDLC.",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Material UI", "Figma"],
  },
] as const;

export const skillGroups = [
  {
    category: "Mobile",
    items: [
      "React Native (iOS & Android)",
      "React Navigation",
      "TypeScript",
      "Redux & Context API",
      "TanStack Query",
      "Cross-Platform Development",
      "Firebase",
      "JS Performance Optimization",
    ],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Material UI"],
  },
  {
    category: "Backend & Cloud",
    items: [
      "Node.js",
      "REST APIs",
      "GraphQL",
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "SQS",
      "CloudFront",
    ],
  },
  {
    category: "System Design",
    items: [
      "Distributed Systems",
      "Microservices",
      "Idempotency",
      "Rate Limiting",
      "Caching",
      "Asynchronous Processing",
    ],
  },
  {
    category: "Testing & DevOps",
    items: ["Jest", "Detox", "CI/CD Pipelines", "GitHub Actions", "Git", "Postman", "Xcode", "Android Studio"],
  },
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "SQL", "C", "C++"],
  },
] as const;

export const education = {
  school: "Madan Mohan Malaviya University of Technology",
  degree: "B.Tech in Computer Science",
  period: "2019 – 2023",
} as const;

export const achievements = [
  "Solved 500+ problems on LeetCode (1800+ rating).",
  "Achieved a 3-star rating on CodeChef (300+ problems solved).",
] as const;

export const about = {
  paragraphs: [
    "I’m a React Native developer with 2+ years of experience shipping cross-platform mobile applications for iOS and Android.",
    "My strongest work is production mobile engineering—navigation, server-state management, API integration, and performance—backed by serverless AWS systems when features need end-to-end ownership.",
    "I’m targeting remote React Native / Mobile Engineer and Software Engineer roles where I can ship reliable product features with strong engineering standards.",
  ],
} as const;
