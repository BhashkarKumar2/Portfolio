// Central content source — mirrors the resume (Agentic_Resume.pdf).

export const profile = {
  name: "Bhashkar Kumar",
  role: "Software Engineer",
  tagline: "Full-Stack Developer & Agentic AI Builder",
  location: "New Delhi, India",
  status: "Open to opportunities",
  email: "bhashkarkumar2063@gmail.com",
  phone: "+91 8188946300",
  resume: "/resume.pdf",
  intro:
    "I build scalable web applications and agentic AI systems. Former SDE Intern at Expedia Group, final-year Computer Engineering student at DTU, and a competitive programmer (LeetCode Knight, 1892).",
  about:
    "I'm a final-year B.Tech Computer Engineering student at Delhi Technological University who enjoys turning hard problems into clean, reliable software. My work spans production backends in Java/Spring Boot, full-stack products with React and Node.js, and modular agent runtimes built on LangGraph and LangChain. I care about correctness, thoughtful architecture, and shipping things that hold up under real load.",
  socials: {
    github: "https://github.com/BhashkarKumar2",
    linkedin: "https://www.linkedin.com/in/bhashkar-kumar-351a77257/",
    leetcode: "https://leetcode.com/u/Bhashkar_Kumar/",
    codeforces: "https://codeforces.com/profile/bhashkarkumar2063/",
  },
};

export const stats = [
  { value: 8.02, decimals: 2, label: "CGPA · DTU" },
  { value: 1892, label: "LeetCode (Knight)" },
  { value: 1200, suffix: "+", label: "Codeforces rating" },
  { value: 40, suffix: "%", label: "Faster data retrieval @ Expedia" },
];

export const experience = [
  {
    company: "Expedia Group",
    role: "Software Development Engineering Intern",
    period: "Jun 2025 – Jul 2025",
    location: "Gurugram, India",
    certificate:
      "https://drive.google.com/file/d/19Vzoy1T4bRWyKt1liBKukqM1AfJIzVCo/view?usp=sharing",
    points: [
      "Developed and deployed robust RESTful APIs using Java and Spring Boot to query large datasets directly from AWS S3, projected to improve data retrieval efficiency by 40%.",
      "Collaborated with Data Engineering teams to design optimized S3 data schemas ensuring scalability for 10M+ records, and partnered with frontend engineers for seamless UI integration.",
      "Followed agile practices and contributed to code reviews that reduced post-deployment bugs by 30%, ensuring consistent software quality.",
    ],
  },
  {
    company: "IndiaMART",
    role: "Agentic Ticket Resolution System",
    period: "Jan 2026 – Jun 2026",
    location: "Noida, India",
    tech: ["Python", "FastAPI", "LangGraph", "LangChain", "DeepSeek"],
    points: [
      "Architected a modular agent runtime separating orchestration, domain skills, tool semantics, and safety policies, with progressive context loading across 23 enterprise tools.",
      "Built request-isolated execution using LangGraph memory, virtual filesystems, middleware-managed scratchpads, scoped caches, failure logs, and lifecycle cleanup.",
      "Designed a two-stage inference pipeline: unconstrained tool-driven reasoning followed by function-calling schema repair, deterministic validation, and failure recovery.",
    ],
  },
];

export const projects = [
  {
    title: "ChefHub",
    blurb:
      "An AI-powered chef booking platform with a Gemini agent that orchestrates a 6-stage workflow from intent to ranked bookings.",
    tech: ["React", "Node.js", "MongoDB", "Gemini", "Langfuse"],
    image: "/projects/chefhub.png",
    points: [
      "Engineered a Gemini-powered booking agent running a 6-stage workflow — intent extraction, chef search, availability, pricing, menu generation, and draft creation — returning up to 3 ranked chefs.",
      "Implemented 180-day preference memory (capped at 30 notes) and a 4-step human approval gate covering chef, booking, menu, and price before draft creation.",
      "Productionized 10 AI endpoints with a 4-model Gemini fallback chain, prompt-injection detection, PII redaction, schema validation, and Langfuse/OpenTelemetry tracing.",
    ],
    links: {
      demo: "https://chefhub-ochre.vercel.app/",
      github: "https://github.com/BhashkarKumar2/Chefhub",
    },
    featured: true,
  },
  {
    title: "JustUs",
    blurb:
      "A real-time, end-to-end-encrypted chat app with WebRTC calling and built-in Gemini group intelligence.",
    tech: ["React", "Node.js", "Socket.io", "Gemini"],
    image: "/projects/justus.png",
    points: [
      "Built 25 Socket.io handlers for one-to-one and group chat across 7 message types, with sync, reactions, and WebRTC; added Curve25519 / XSalsa20-Poly1305 E2EE and 30-msg/min limits.",
      "Added Gemini group AI for summaries (200 messages) and Q&A/actions (100-message context), plus 4-tier translation backed by a 1,000-entry cache.",
    ],
    links: {
      demo: "https://just-us-liard.vercel.app/",
      github: "https://github.com/BhashkarKumar2/JustUs",
    },
    featured: true,
  },
];

export const skills = [
  { group: "Languages", items: ["C++", "Python", "Java", "JavaScript"] },
  {
    group: "Frameworks & Libraries",
    items: ["React.js", "Node.js", "Express.js", "Spring Boot", "NumPy"],
  },
  {
    group: "Developer & AI Tools",
    items: [
      "Git",
      "LangChain",
      "Prompt Engineering",
      "VS Code",
      "IntelliJ",
      "Claude",
      "Codex",
      "GitHub Copilot",
    ],
  },
  {
    group: "Coursework",
    items: [
      "Data Structures",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Machine Learning",
      "Deep Learning",
    ],
  },
];

export const achievements = [
  {
    title: "LeetCode Knight",
    detail: "Rating of 1892 — top competitive tier.",
    href: "https://leetcode.com/u/Bhashkar_Kumar/",
  },
  {
    title: "Codeforces",
    detail: "1200+ rating across rated contests.",
    href: "https://codeforces.com/profile/bhashkarkumar2063/",
  },
];

export const education = [
  {
    school: "Delhi Technological University",
    detail: "B.Tech in Computer Engineering · CGPA 8.02/10",
    period: "2022 – 2026",
    place: "New Delhi, India",
  },
  {
    school: "S M Arya Public School",
    detail: "CBSE (Class XII) · 96.2%",
    period: "2022",
    place: "New Delhi, India",
  },
  {
    school: "St. Therese's School",
    detail: "ICSE (Class X) · 92.6%",
    period: "2020",
    place: "Kushinagar, India",
  },
];
