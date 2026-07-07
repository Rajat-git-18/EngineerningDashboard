export const dashboardProfile = {
  name: "Rajat Gupta",
  title: "Software Engineer",
  headline: "Building Production-grade Mobile, Backend & AI Applications.",
  subtitle: ["React Native", "Next.js", "Node.js", "PostgreSQL", "AWS", "OpenAI"],
  links: {
    resume: "/resume.pdf",
    github: "https://github.com/rajat",
    linkedin: "https://linkedin.com/in/rajat",
    email: "mailto:rajat@example.com",
  },
  highlights: [
    { label: "Currently Building", value: "ShopperIQ AI foundations" },
    { label: "Open to Work", value: "Product-driven engineering teams" },
    { label: "Current Company", value: "A3TechIdeas" },
    { label: "Current Focus", value: "AI + scalable backend systems" },
  ],
};

export const engineeringStats = [
  { label: "Experience", value: "2+ Years" },
  { label: "Production Applications", value: "3" },
  { label: "LeetCode", value: "500+" },
  { label: "Current Focus", value: "AI Engineering" },
  { label: "Current Role", value: "Software Developer" },
  { label: "Technology Stack", value: "Frontend + Backend" },
];

export const timeline = [
  {
    company: "NBCC",
    stream: ["ERP System", "Cross Platform Mobile App", "Production Features"],
    achievements: [
      "Shipped production modules for workforce and operations tracking.",
      "Reduced release friction through reusable React Native components.",
      "Collaborated on backend contracts for reliable mobile sync flows.",
    ],
  },
  {
    company: "A3TechIdeas",
    stream: [
      "HRMS Dashboard",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Authentication",
      "RBAC",
    ],
    achievements: [
      "Built role-based HRMS dashboard with protected APIs and modular UI.",
      "Owned full stack features from schema design to dashboard UX.",
      "Implemented RBAC-aware API boundaries for organization-level access control.",
    ],
  },
];

export const caseStudies = [
  {
    name: "Breakfree",
    overview:
      "A financial reliability-first mobile product designed for high-trust user operations and event-driven notifications.",
    businessProblem:
      "Users needed a dependable mobile workflow where alerts, authentication, and transaction orchestration remained resilient at scale.",
    responsibilities: [
      "React Native app architecture and feature delivery",
      "Service integration design with API contracts",
      "Reliability-focused rollout and operational monitoring",
    ],
    architecture:
      "Mobile clients communicate with REST APIs backed by Node services, AWS Lambda workers, DynamoDB persistence, and SNS notification pipelines.",
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
      "Balancing low latency notifications, failure handling, and strict user trust in financial contexts.",
    solutions:
      "Used resilient service boundaries, queue-safe retries, and proactive observability to keep critical flows stable.",
    decisions:
      "Adopted idempotent handlers, retry-safe event workflows, and clear service boundaries to avoid cascading failures.",
    learnings:
      "Reliability is a product feature. Architecture, observability, and UX copy must all align.",
    impact:
      "Production-ready architecture with improved delivery confidence and incident recovery speed.",
    timeline: "6+ months",
    productionFeatures: ["Secure auth flows", "Notification delivery tracing", "Resilient sync states"],
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
    productionFeatures: ["Organization management", "Employee lifecycle workflows", "Role-based permissions"],
  },
  {
    name: "ShopperIQ AI",
    overview:
      "Upcoming AI-first product focused on intelligent commerce insights and assistant-led operational decisions.",
    businessProblem:
      "Teams need practical AI tooling that improves decision speed without compromising data trust.",
    responsibilities: ["Architecture planning", "Prompt workflow strategy", "AI + backend integration roadmap"],
    architecture: "Planned: Next.js + Node orchestration with LLM pipelines and analytics data stores.",
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
  pinned: ["breakfree-mobile", "hrms-platform", "system-design-notes"],
  latestRepos: ["shopperiq-ai", "auth-service-template", "rbac-playground"],
  latestCommits: [
    "refactor(auth): consolidate role guards",
    "feat(api): add org scoped pagination",
    "perf(mobile): optimize dashboard initial load",
  ],
};

export const leetcodeSnapshot = {
  solved: "500+",
  rating: "1850 (placeholder)",
  badges: ["100 Days Badge", "SQL Badge", "Top Interview 150"],
};

export const aiAnswers: Record<string, string> = {
  breakfree:
    "Breakfree highlights my production-grade React Native work with reliable backend integrations on AWS. I focused on resilient auth, notifications, and financial trust workflows.",
  backend:
    "My backend work spans Node.js REST APIs, PostgreSQL schema design, Prisma modeling, and RBAC-aware service boundaries for production systems.",
  technologies:
    "My strongest stack includes React Native, Next.js, Node.js, PostgreSQL, AWS, and OpenAI integrations with a focus on scalability.",
  architecture:
    "I prefer clean boundaries: client experience layer, typed API contracts, domain services, and observable infrastructure with rollback-friendly releases.",
};
