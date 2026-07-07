import { siteConfig } from "@/lib/site-config";

export const dashboardProfile = {
  name: siteConfig.name,
  title: siteConfig.title,
  headline: "Building Production-grade Mobile, Backend & AI Applications.",
  subtitle: ["React Native", "Next.js", "Node.js", "PostgreSQL", "AWS", "OpenAI"],
  links: {
    resume: siteConfig.links.resume,
    github: siteConfig.links.github,
    linkedin: siteConfig.links.linkedin,
    leetcode: siteConfig.links.leetcode,
    email: `mailto:${siteConfig.links.email}`,
  },
  highlights: [
    { label: "Major Project", value: "Breakfree — production mobile platform" },
    { label: "Open to Work", value: "Software engineering opportunities" },
    { label: "Current Company", value: "A3 Ideanix Technology Private Limited" },
    { label: "Current Focus", value: "React Native, AWS microservices & AI systems" },
  ],
};

export const engineeringStats = [
  { label: "Experience", value: "2+ Years" },
  { label: "Production Applications", value: "3" },
  { label: "LeetCode", value: "395" },
  { label: "Current Focus", value: "AI Engineering" },
  { label: "Current Role", value: "Software Developer" },
  { label: "Technology Stack", value: "Frontend + Backend" },
];

export const timeline = [
  {
    company: "NBCC",
    role: "Software Developer",
    stream: ["ERP System", "Cross Platform Mobile App", "Production Features", "React Native", "REST APIs"],
    achievements: [
      "Contributed to ERP system modules used for operational and workforce management workflows.",
      "Built and shipped cross-platform mobile app features with React Native for production users.",
      "Implemented reusable UI components and state patterns to improve delivery speed across releases.",
      "Collaborated with backend teams on API contracts, sync behavior, and production issue resolution.",
      "Delivered production-ready features with focus on reliability, usability, and maintainability.",
    ],
  },
  {
    company: "A3 Ideanix Technology Private Limited",
    role: "Software Developer",
    stream: [
      "Breakfree",
      "HRMS Dashboard",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Authentication",
      "RBAC",
      "AWS",
    ],
    achievements: [
      "Leading development on Breakfree, a production React Native application with AWS-backed services.",
      "Designed and implemented microservice-oriented flows using Lambda, DynamoDB, SNS, and secure authentication.",
      "Built notification and reliability-critical paths with emphasis on financial-grade user trust.",
      "Developed HRMS dashboard with Next.js, Node.js, PostgreSQL, Prisma, and role-based access control.",
      "Owned full-stack feature delivery from database schema and APIs to admin dashboard experiences.",
      "Implemented RBAC-aware API boundaries, organization management, and employee lifecycle workflows.",
      "Improved engineering quality through modular architecture, typed contracts, and production debugging practices.",
    ],
  },
];

export const caseStudies = [
  {
    name: "Breakfree",
    featured: true,
    overview:
      "Major production mobile product focused on financial reliability, secure authentication, and event-driven notifications at scale.",
    businessProblem:
      "Users needed a dependable mobile workflow where alerts, authentication, and transaction orchestration remained resilient under real-world usage.",
    responsibilities: [
      "React Native app architecture and production feature delivery",
      "AWS service integration (Lambda, DynamoDB, SNS) with REST API contracts",
      "Authentication, push notification flows, and reliability-focused rollout",
      "Microservice coordination and production issue triage",
    ],
    architecture:
      "React Native clients connect to REST APIs backed by Node services, AWS Lambda workers, DynamoDB persistence, and SNS notification pipelines.",
    techStack: [
      "React Native",
      "AWS Lambda",
      "DynamoDB",
      "SNS",
      "Authentication",
      "Push Notifications",
      "Microservices",
    ],
    challenges:
      "Balancing low-latency notifications, failure handling, and strict user trust in financial contexts.",
    solutions:
      "Used resilient service boundaries, idempotent handlers, retry-safe event workflows, and proactive observability.",
    decisions:
      "Adopted clear service boundaries and queue-safe processing to avoid cascading failures in critical user flows.",
    learnings:
      "Reliability is a product feature. Architecture, observability, and UX must align for production-grade mobile systems.",
    impact:
      "Delivered production-ready mobile architecture with improved delivery confidence and incident recovery speed.",
    timeline: "6+ months",
    productionFeatures: [
      "Secure authentication flows",
      "Push notification delivery",
      "Resilient sync states",
      "AWS-backed microservice integrations",
    ],
  },
  {
    name: "HRMS Dashboard",
    overview:
      "A full-stack organization platform for employee and admin operations with secure, role-aware experiences.",
    businessProblem:
      "Teams required centralized employee operations with strict role controls and scalable dashboard workflows.",
    responsibilities: [
      "Designed and shipped dashboard information architecture",
      "Built REST APIs and role-aware service layer",
      "Implemented RBAC model and end-to-end auth flows",
    ],
    architecture:
      "Next.js frontend with Node.js APIs, PostgreSQL data model, and Prisma-powered query layer.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "RBAC", "REST APIs"],
    challenges:
      "Keeping query performance and authorization rules maintainable as organization complexity grew.",
    solutions:
      "Standardized access-control middleware and query patterns to reduce authorization regressions and improve maintainability.",
    decisions:
      "Centralized authorization checks, typed API contracts, and modular dashboard primitives.",
    learnings:
      "Operational dashboards win when domain boundaries are explicit and data access rules are predictable.",
    impact:
      "Faster admin workflows, cleaner org management flows, and production-ready RBAC enforcement.",
    timeline: "5 months",
    productionFeatures: [
      "Organization management",
      "Employee lifecycle workflows",
      "Role-based permissions",
    ],
  },
  {
    name: "ShopperIQ AI",
    overview:
      "Upcoming AI-first product focused on intelligent commerce insights and assistant-led operational decisions.",
    businessProblem:
      "Teams need practical AI tooling that improves decision speed without compromising data trust.",
    responsibilities: [
      "Architecture planning",
      "Prompt workflow strategy",
      "AI + backend integration roadmap",
    ],
    architecture:
      "Planned: Next.js + Node orchestration with LLM pipelines and analytics data stores.",
    techStack: ["Next.js", "Node.js", "OpenAI", "PostgreSQL"],
    challenges: "Designing explainable AI outputs for operational teams.",
    solutions:
      "Planning retrieval-first and human-in-the-loop workflows to keep outputs grounded, reviewable, and production-safe.",
    decisions: "Prioritizing traceability, human review loops, and retrieval-first AI flows.",
    learnings: "AI features must be measurable, auditable, and tightly scoped.",
    impact: "In planning phase.",
    timeline: "Upcoming",
    productionFeatures: ["AI insights feed", "Query assistant", "Decision trails"],
  },
];

export const architectureCards = [
  "Authentication Flow",
  "Notification Flow",
  "API Flow",
  "RBAC Flow",
  "Payment Flow",
  "Database Flow",
];

export const stackCards = [
  {
    category: "Frontend",
    items: ["React Native", "Next.js", "TypeScript", "Tailwind CSS"],
    description: "Product-focused UI systems optimized for speed, clarity, and maintainability.",
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Prisma"],
    description: "Typed service layers with strong contracts and operational reliability.",
  },
  {
    category: "Cloud",
    items: ["AWS Lambda", "SNS", "S3", "CloudWatch"],
    description: "Event-driven cloud integrations built for resilient production behavior.",
  },
  {
    category: "Database",
    items: ["PostgreSQL", "DynamoDB", "Redis"],
    description: "Performance-aware schemas and access patterns for transactional workloads.",
  },
  {
    category: "AI",
    items: ["OpenAI", "LLM Apps", "Prompt Design", "RAG (learning)"],
    description: "Applied AI engineering focused on useful and trustworthy product outcomes.",
  },
  {
    category: "Dev Tools",
    items: ["GitHub", "Docker", "Postman", "CI/CD"],
    description: "High-leverage workflows that accelerate delivery without sacrificing quality.",
  },
];

export const currentlyLearning = [
  "AI Engineering",
  "LLM Applications",
  "Redis",
  "System Design",
  "Distributed Systems",
  "TypeScript",
];

export const githubSnapshot = {
  pinned: ["EngineerningDashboard", "Connect-a-chatting-app", "Salary_Calculator"],
  latestRepos: ["Portfolio", "Project_food", "JobHunt"],
  latestCommits: [
    "feat: refine engineering dashboard UX and mobile polish",
    "build: premium engineering dashboard experience",
    "chore: project structure and production setup",
  ],
};

export const leetcodeSnapshot = {
  profileUrl: siteConfig.links.leetcode,
  solved: "395",
  easy: "278",
  medium: "111",
  hard: "6",
  ranking: "#307,758",
  badges: ["278 Easy", "111 Medium", "6 Hard"],
};

export const aiAnswers: Record<string, string> = {
  breakfree:
    "Breakfree is my major production project at A3 Ideanix Technology Private Limited — React Native on the client with AWS Lambda, DynamoDB, SNS, authentication, and push notifications for reliable financial workflows.",
  backend:
    "My backend work spans Node.js REST APIs, PostgreSQL schema design, Prisma modeling, RBAC-aware services, and AWS microservice integrations for production systems.",
  technologies:
    "My core stack includes React Native, Next.js, Node.js, PostgreSQL, AWS, and OpenAI integrations with a focus on scalable production delivery.",
  architecture:
    "I design clean boundaries: mobile/web clients, typed API contracts, domain services, and observable cloud infrastructure with rollback-friendly releases.",
};
