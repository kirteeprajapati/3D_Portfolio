import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  ring4,
  tesla,
  gravity,
  shopify,
  carrent,
  jobit,
  jal_lijiye, 
  jhutoob,
  graph_visualizer,
  puzzle_cam,
  tripguide,
  threejs,
  deepfake
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Development Engineer",
    company_name: "Ring4 (Remote)",
    icon: ring4,
    iconBg: "#1d1836",
    date: "Jan 2024 – Present",
    points: [
      "Built and shipped core product workflows including onboarding, team invitations, contact management, CSV imports, scheduling, notes, and agent collaboration in a small, high-ownership team.",
      "Designed and integrated backend APIs for SMS/MMS, threaded conversations, voicemail, call recordings, AI receptionist flows, and call summaries.",
      "Implemented real-time communication features using Ably, including presence, typing indicators, mentions, and multi-device state synchronization.",
      "Owned and delivered messaging and chat infrastructure with support for MMS attachments, drafts, scheduling, shared/direct number routing, and message mentions.",
      "Built global search and discovery pipelines using Typesense to enable fast lookup across conversations, contacts, and messages.",
      "Led frontend modernization by migrating Vue 2 to Vue 3 and Nuxt 2 to Nuxt 3, refactoring 300+ components and improving rendering performance by ~30%.",
      "Collaborated closely with backend services on API contracts, debugging production issues, and shipping cross-service releases in a fast-moving startup environment."
    ],
  },
  {
    title: "Junior Developer",
    company_name: "Confidential Computing Consortium",
    icon: ccc,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Enarx Protection for data in use: SGX Attestation & syscalls,",
      "Created Demos of deploying programs in Enarx written in high-level languages (C++, C, JavaScript, Python, Go) by compiling them in web assembly.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Gravity (IIITA Tech Society)",
    icon: gravity,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, peers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Enarx: Zero-Knowledge Proof",
    name: "Enarx keep",
    designation: "confidentiality",
    company: "and Language versatility",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Say Hello to WebAssembly with C and C++",
    name: "Compile with Wasienv compiler",
    designation: "WASM Demos",
    company: "(5 Part Series)",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Golang with WebAssembly on Browser",
    name: "Javascript Glue",
    designation: "On Browser",
    company: "(2 Part Series)",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "KommandAI",
    description:
      "AI-powered multi-vendor marketplace built end-to-end using React, FastAPI, PostgreSQL, WebSockets, and Gemini AI. Supports multilingual natural language commands (English/Hindi/Hinglish), real-time shop metrics, automated inventory workflows, async multi-tenant APIs, and secure role-based access control. Includes analytics dashboards, smart vendor suggestions, and operational automation.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "FastAPI", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
      { name: "WebSockets", color: "blue-text-gradient" },
      { name: "AI / Gemini", color: "green-text-gradient" },
    ],
    image: kommandai, // import asset
    source_code_link: "https://github.com/kirteeprajapati/KommandAI",
  },

  {
    name: "SaaS – The Citadel of Scale",
    description:
      "Multi-tenant grievance management SaaS built with Node.js, MongoDB, and Redis. Designed and implemented 50+ REST APIs with authentication, tenant isolation, subscription gating, caching, and real-time analytics dashboards. Improved system performance via async pipelines, optimized indexing, and query tuning, achieving ~40% faster resolution times and 60–70% lower latency under load.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Redis", color: "pink-text-gradient" },
      { name: "REST APIs", color: "blue-text-gradient" },
      { name: "Multi-Tenant SaaS", color: "green-text-gradient" },
    ],
    image: citadel, // import asset
    source_code_link: "https://github.com/kirteeprajapati/SAAS-THE-CitAdel-of-SCALE",
  },

  {
    name: "THE RINGMASTER",
    description:
      "AI-powered travel planning platform built using React 19, Node.js, FastAPI, and MongoDB. Architected microservices for itinerary generation, bookings, reviews, and admin moderation with RBAC. Integrated OpenWeather, OSM, and OSRM APIs for dynamic routing and recommendations. Dockerized the system with rate limiting, indexing, and performance-focused request handling for scalable deployments.",
    tags: [
      { name: "React 19", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "FastAPI", color: "pink-text-gradient" },
      { name: "Docker", color: "blue-text-gradient" },
      { name: "RBAC", color: "green-text-gradient" },
    ],
    image: ringmaster, // import asset
    source_code_link: "https://github.com/kirteeprajapati/THE-RINGMASTER",
  },
  {
    name: "Jhutoob",
    description:
      "React-based YouTube clone with HTML, CSS, and JavaScript. Intuitive channel and video cards for seamless content browsing. Harnesses YouTube API V3 to display likes, views, and enrich user interaction.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI V5",
        color: "green-text-gradient",
      },
      {
        name: "Rapid API",
        color: "pink-text-gradient",
      },
    ],
    image: jhutoob,
    source_code_link: "https://github.com/kirteeprajapati/youtube_clone",
  },
  {
    name: "PUZZLE CAM",
    description:
      "A JavaScript puzzle game with HTML canvas. Unique camera integration for personalized puzzles. Engaging crop-and-drop mechanics and captivating sound. Utilizes PHP, MySQL, for data management of score card.",
    tags: [
      {
        name: "Vanilla JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: puzzle_cam,
    source_code_link: "https://github.com/kirteeprajapati/Puzzle_Cam",
  },
  {
    name: "Graph Visualizer",
    description:
      "Algorithms: Graph traversal using BFS, DFS, Dijkstra, components, spanning tree, articulation points, Bridges. Features: Create Graoh and edges with simple click using matrix representation, animation using threads",
    tags: [
      {
        name: "Java, XML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaFx",
        color: "green-text-gradient",
      },
      {
        name: "JetBrainslde",
        color: "pink-text-gradient",
      },
    ],
    image: graph_visualizer,
    source_code_link: "https://github.com/kirteeprajapati/Graph_Visualizer",
  },
  {
    name: "Jal Lijiye (DRINK WATER)",
    description:
      "A simple extension made with HTML, CSS, JavaScript. Keeps you Reminded to drink water every 20 minutes. With audio and image popup from the famous meme of the movie ‘Vivah’",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: jal_lijiye,
    source_code_link: "https://github.com/kirteeprajapati/drink-water",
  },
  {
    name: "DeepFake Image Detection",
    description:
      "Led deepfake detection research utilizing advanced CNN models (EfficientNet B5, ResNet, VGG16, InceptionResNet). Achieved a 2.86% accuracy boost on DFDC dataset, combating intricate image manipulation. Pioneered a robust detection system, bolstering digital image integrity and trust in media.",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "Transfer Learning",
        color: "green-text-gradient",
      },
      {
        name: "CNN",
        color: "pink-text-gradient",
      },
    ],
    image: deepfake,
    source_code_link: "https://github.com/kirteeprajapati",
  },
];

export { services, technologies, experiences, testimonials, projects };
