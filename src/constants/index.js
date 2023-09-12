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
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Junior Developer",
    company_name: "Confidential Computing Consortium",
    icon: starbucks,
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
    image: carrent,
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
    image: jobit,
    source_code_link: "https://github.com/kirteeprajapati/Puzzle_Cam",
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
    image: tripguide,
    source_code_link: "https://github.com/kirteeprajapati/drink-water",
  },
];

export { services, technologies, experiences, testimonials, projects };
