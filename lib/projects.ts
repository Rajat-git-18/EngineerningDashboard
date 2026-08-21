export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  role: string;
  platform?: string;
  year: string;
  company: string;
  confidentiality?: string;
  summary: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
  features: string[];
  challenges: string[];
  architecture: string[];
  outcome: string;
  featured?: boolean;
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "breakfree",
    title: "BreakFree — Client Fintech Application",
    shortTitle: "BreakFree",
    category: "Confidential Client Project",
    role: "React Native Developer",
    platform: "iOS & Android",
    year: "2025 – Present",
    company: "A3 Ideanix Technology Pvt. Ltd.",
    confidentiality:
      "Selected implementation details and screens are intentionally limited due to client confidentiality.",
    summary:
      "Production fintech payments app with 10K+ active users. Mobile features in React Native with AWS serverless services for payments, messaging, and notifications.",
    description:
      "BreakFree is a client fintech payment application. I build and maintain core mobile features and contribute to the serverless AWS services that power payments, messaging, and notification workflows.",
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
    ],
    responsibilities: [
      "Build and maintain core mobile features using React Native, TypeScript, and Redux/Context API.",
      "Implement navigation flows with React Navigation.",
      "Optimize data fetching and caching with TanStack Query.",
      "Design and develop serverless backend services on AWS Lambda, API Gateway, DynamoDB, and SQS.",
      "Implement idempotency and rate-limiting for safe transaction handling.",
      "Integrate Stripe and Plaid APIs for banking and payment processing.",
      "Write unit and end-to-end tests with Jest and Detox.",
      "Set up CI/CD pipelines for automated testing and deployment.",
      "Optimize JavaScript performance and CloudFront caching.",
    ],
    features: [
      "Cross-platform mobile payment experience",
      "Secure banking and payment integrations (Stripe, Plaid)",
      "Messaging and notification workflows",
      "Idempotent, rate-limited transaction handling",
      "Cached server-state with TanStack Query",
      "Automated testing and CI/CD release flow",
    ],
    challenges: [
      "Managing server state and reducing redundant API traffic in a data-heavy fintech client.",
      "Keeping payment and banking integrations reliable under real transaction volume.",
      "Enforcing idempotency and rate limiting for duplicate-safe transaction flows.",
      "Improving mobile responsiveness through JS performance and caching work.",
      "Raising confidence with unit and Detox end-to-end coverage before release.",
    ],
    architecture: [
      "React Native",
      "API Gateway",
      "AWS Lambda",
      "DynamoDB / SQS",
      "Stripe · Plaid · CloudFront",
    ],
    outcome:
      "Production-oriented fintech application serving 10K+ active users, with serverless workflows handling 50K+ transactions/month. Currently in active development and private/client testing — not publicly available.",
    featured: true,
  },
  {
    slug: "nbcc-mobile",
    title: "NBCC Cross-Platform Mobile Applications",
    shortTitle: "NBCC Mobile",
    category: "Enterprise Mobile",
    role: "Mobile Application Developer",
    platform: "iOS & Android",
    year: "2023 – 2025",
    company: "NBCC (India) Limited",
    summary:
      "Cross-platform React Native apps delivering a consistent iOS and Android experience from a single codebase for a 5K+ user base.",
    description:
      "At NBCC, I developed cross-platform mobile applications with React Native, integrating REST APIs and Firebase while focusing on authentication, responsiveness, and UI performance.",
    technologies: [
      "React Native",
      "REST APIs",
      "Firebase",
      "iOS",
      "Android",
      "Authentication",
    ],
    responsibilities: [
      "Develop cross-platform mobile applications with React Native for iOS and Android.",
      "Integrate REST APIs, Firebase, and real-time services.",
      "Implement secure authentication flows.",
      "Optimize UI rendering performance.",
      "Collaborate with backend teams on API integration and data consistency.",
    ],
    features: [
      "Single-codebase iOS and Android delivery",
      "REST and Firebase integrations",
      "Secure authentication flows",
      "Performance-focused UI rendering",
    ],
    challenges: [
      "Maintaining consistent UX across iOS and Android from one codebase.",
      "Improving responsiveness and reducing screen load times with API and real-time integrations.",
      "Keeping authentication and end-to-end data flows reliable with backend collaboration.",
    ],
    architecture: ["React Native", "REST APIs", "Firebase", "Auth Services"],
    outcome:
      "Shipped cross-platform mobile experiences used by a 5K+ user base, with measurable improvements in development speed and screen load performance.",
  },
  {
    slug: "sports-management",
    title: "Sports Management Web Application",
    shortTitle: "Sports Management",
    category: "Full-Stack Frontend",
    role: "Software Developer Trainee",
    year: "2023",
    company: "PISoftek",
    summary:
      "Frontend for a sports management web app built with Next.js, Tailwind CSS, and Material UI from Figma designs.",
    description:
      "During my traineeship at PISoftek, I built the frontend for a sports management web application and supported release configuration and production deployments in an Agile team.",
    technologies: ["Next.js", "Tailwind CSS", "Material UI", "Figma"],
    responsibilities: [
      "Build frontend UI from Figma designs using Next.js, Tailwind CSS, and Material UI.",
      "Manage release configuration including build, packaging, and deployment support.",
      "Participate in Agile/Scrum ceremonies across the SDLC.",
    ],
    features: [
      "Design-system aligned UI from Figma",
      "Responsive web frontend",
      "Release and production support",
    ],
    challenges: [
      "Translating Figma designs into maintainable Next.js UI components.",
      "Supporting reliable build and deployment configuration for production releases.",
    ],
    architecture: ["Next.js", "Tailwind CSS", "Material UI"],
    outcome:
      "Delivered frontend features for a sports management product and supported production release workflows.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs() {
  return projects.map((project) => project.slug);
}
