export interface Project {
  num: string;
  lang: string;
  title: string;
  tagline: string;
  desc: string;
  problemSolved: string;
  whyBuilt?: string;
  tags: string[];
  link: string;
  github: string;
  featured?: boolean;
  accentColor?: string;
  highlightStats?: { label: string; value: string };
  uiVisualType: "groceries" | "travel" | "medical" | "fitness" | "retail" | "editorial";
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  level: string;
  note: string;
  period?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  responsibilities: string[];
  tags: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  desc: string;
  skills: string[];
}

export const personalData = {
  name: "Rajeev Yadav",
  initials: "RY",
  role: "Frontend Developer & UI Builder",
  location: "Varanasi, Uttar Pradesh, India",
  availability: "Available for full-time frontend roles & engineering opportunities",
  email: "rajeev829927@gmail.com",
  phone: "+91 82992 79529",
  displayPhone: "+91 82992 79529",
  resumePath: "./assets/resume.pdf",
  photoPath: "./assets/photo.jpg",
  headline: "Crafting durable, accessible web interfaces with modern engineering rigor.",
  bio: "I craft clean, fast and responsive web applications using React, Next.js, and modern CSS architecture. I emphasize structured component design, performance, and interfaces that feel effortless to use.",
  detailedBio: "I am a frontend developer with an academic foundation in Computer Applications (MCA & BCA) and industry internship experience. I turn design concepts into clean, accessible code with attention to typography, fluid layouts, and seamless micro-interactions.",
  philosophy: "Great digital interfaces are built on restraint and clarity — ensuring sub-second interactions, accessible color contrast, semantic structure, and zero unnecessary visual bloat.",
  socials: [
    { name: "GitHub", url: "https://github.com/rajeev8299", handle: "@rajeev8299" },
    { name: "WhatsApp", url: "https://wa.me/918299279529", handle: "+91 82992 79529" },
    { name: "Telegram", url: "https://t.me/+918299279529", handle: "Rajeev Yadav" },
    { name: "Instagram", url: "https://www.instagram.com/its_rajeev_yaduvanshi?cplk=OTF5M2l0c3VvOWh5", handle: "@its_rajeev_yaduvanshi" },
    { name: "Facebook", url: "https://www.facebook.com/share/18VtHp6bA7/", handle: "Rajeev Yadav" }
  ]
};

export const metrics = [
  { value: "6+", label: "Verified Web Projects", detail: "Shipped & Live" },
  { value: "MCA", label: "AKTU Postgraduate", detail: "Computer Applications" },
  { value: "BCA", label: "VBSPU Degree", detail: "Foundational CS" },
  { value: "6 Mos", label: "Industry Internship", detail: "Osizone Varanasi" }
];

export const aboutPillars = [
  {
    num: "01",
    title: "UI & Component Architecture",
    tagline: "Predictable, Scalable Systems",
    description: "Architecting modular React and Next.js components with clean state boundaries, strict TypeScript typings, readable JSX, and WCAG accessibility standards."
  },
  {
    num: "02",
    title: "Responsive & Modern Styling",
    tagline: "Pixel-Accurate Fluid Layouts",
    description: "Crafting fluid CSS Grid and Flexbox layouts using modern CSS custom properties and clamp() formulas, ensuring zero layout breakage from 320px mobile screens up to 4K displays."
  },
  {
    num: "03",
    title: "Performance & Human Detail",
    tagline: "Speed, Semantics & Usability",
    description: "Optimizing bundle footprint, ensuring fast render cycles, semantic HTML markup, and micro-interactions designed to assist users rather than distract them."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    iconName: "layout",
    desc: "Primary engineering toolkit for user-facing applications.",
    skills: ["HTML5 Semantics", "CSS3 / Modern CSS", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js (App Router)"]
  },
  {
    title: "UI/UX & Responsive Systems",
    iconName: "palette",
    desc: "Techniques for intuitive visual rhythm and fluid accessibility.",
    skills: ["Mobile-First Design", "CSS Grid & Flexbox", "Typographic Scale", "Micro-Interactions", "WCAG 2.1 Accessibility"]
  },
  {
    title: "Core Logic & Algorithms",
    iconName: "code",
    desc: "Core computer science and modular programming foundations.",
    skills: ["JavaScript Algorithms", "Data Structures", "DOM Manipulation", "State Machines", "Async / Promises"]
  },
  {
    title: "Tooling & Workflow",
    iconName: "terminal",
    desc: "Development environment, version control and deployment pipelines.",
    skills: ["Git & GitHub", "Vite & npm", "Chrome DevTools", "REST APIs Integration", "VS Code", "GitHub Pages / Vercel"]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: "Software Developer Intern",
    company: "Osizone",
    location: "Varanasi, India",
    period: "Sept 2025 — March 2026",
    type: "Industry Internship",
    summary: "Hands-on engineering internship contributing to desktop and web GUI applications, algorithm optimization, and collaborative Agile sprint cycles.",
    responsibilities: [
      "Built interactive desktop and web GUI applications featuring logic calculation engines and user flows using clean, modular programming principles.",
      "Collaborated within an Agile sprint lifecycle, participating in code reviews, feature branching, and version control workflows via Git.",
      "Optimized algorithmic routines and handled structured data operations to enhance application responsiveness and load efficiency."
    ],
    tags: ["Agile & Scrum", "Git Workflow", "Code Review", "Modular Architecture", "Performance Tuning"]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    field: "Advanced Software Engineering & System Architecture",
    institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    level: "Postgraduate Degree",
    note: "Comprehensive postgraduate study covering advanced software development, distributed systems, web architectures, and database design."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    field: "Computer Science Foundations & Programming",
    institution: "Veer Bahadur Singh Purvanchal University (VBSPU)",
    level: "Undergraduate Degree",
    note: "Undergraduate degree focusing on core computer science foundations, data structures, object-oriented programming, and operating systems."
  }
];

export const projectsData: Project[] = [
  {
    num: "01",
    lang: "Next.js · TypeScript · CSS",
    title: "Taza Sabji Bazzar",
    tagline: "Online Vegetable & Grocery Storefront",
    desc: "A fast, lightweight e-commerce storefront for fresh produce and daily groceries featuring an organized catalog, quantity selectors, and instant basket calculations.",
    problemSolved: "Simplifies daily produce shopping on mobile devices with sub-second page loads and zero interface clutter.",
    whyBuilt: "Built to master Next.js App Router state handling, accessible quantity steppers, and client-side shopping cart persistence.",
    tags: ["Next.js", "TypeScript", "Modern CSS", "State Architecture", "Cart Logic"],
    link: "https://rajeev8299.github.io/tazasabjibazzar",
    github: "https://github.com/rajeev8299",
    featured: true,
    highlightStats: { label: "Performance", value: "Sub-Second Mobile Load" },
    uiVisualType: "groceries"
  },
  {
    num: "02",
    lang: "Vanilla JS · CSS Grid · DOM API",
    title: "Travel Buddy",
    tagline: "Destination Guide & Trip Planner",
    desc: "A destination exploration portal with dynamic category filtering, trip itinerary overviews, and responsive destination cards.",
    problemSolved: "Organizes travel destinations into actionable itineraries without requiring heavy client frameworks.",
    whyBuilt: "Created to practice clean DOM manipulation, vanilla JavaScript state management, and responsive CSS grid architectures.",
    tags: ["JavaScript (ES6+)", "CSS Grid", "Responsive Design", "DOM API"],
    link: "https://rajeev8299.github.io/travel-buddy",
    github: "https://github.com/rajeev8299",
    featured: false,
    uiVisualType: "travel"
  },
  {
    num: "03",
    lang: "React.js · CSS Modules · a11y",
    title: "Dental Clinic Portal",
    tagline: "Healthcare Patient Care & Booking Portal",
    desc: "A patient-centric medical website displaying physician schedules, dental treatment descriptions, and booking inquiry workflows.",
    problemSolved: "Streamlines patient appointment discovery with high-contrast accessibility and mobile-first booking forms.",
    whyBuilt: "Engineered with focus on healthcare credibility, accessibility (WCAG), clean medical typography, and seamless contact actions.",
    tags: ["React", "CSS Modules", "Accessible UI", "Form Validation"],
    link: "https://rajeev8299.github.io/dental-clinic-site",
    github: "https://github.com/rajeev8299",
    featured: false,
    uiVisualType: "medical"
  },
  {
    num: "04",
    lang: "HTML5 · Modern CSS · Fluid Transitions",
    title: "Rajeev Fitness (Gym)",
    tagline: "Fitness Studio & Batch Schedule Hub",
    desc: "Comprehensive fitness studio website featuring workout batch schedules, membership pricing tiers, trainer profiles, and diet guidance.",
    problemSolved: "Provides clear pricing tiers and class schedules for prospective gym members across all screen sizes.",
    whyBuilt: "Designed to explore high-contrast visual hierarchies and fluid CSS micro-interactions for modern lifestyle brands.",
    tags: ["HTML5", "Modern CSS", "Dark Mode", "Fluid Transitions"],
    link: "https://rajeev8299.github.io/gym",
    github: "https://github.com/rajeev8299",
    featured: false,
    uiVisualType: "fitness"
  },
  {
    num: "05",
    lang: "JavaScript · LocalStorage API · Cart Logic",
    title: "E-Commerce Storefront",
    tagline: "Digital Retail Catalog & Shopping Cart",
    desc: "Digital retail concept featuring product catalog filtering, interactive cart drawer, and client-side order calculations with persistence.",
    problemSolved: "Demonstrates reliable multi-item shopping cart state machines with localStorage persistence.",
    whyBuilt: "Deep-dived into frontend cart state machines, localStorage persistence, and checkout logic.",
    tags: ["JavaScript", "Cart Logic", "E-Commerce", "localStorage API"],
    link: "https://rajeev8299.github.io/E-Commerce-",
    github: "https://github.com/rajeev8299",
    featured: false,
    uiVisualType: "retail"
  },
  {
    num: "06",
    lang: "Next.js · React · TypeScript · CSS3",
    title: "Personal Developer Space",
    tagline: "Engineering Showcase & Digital Garden",
    desc: "My personal developer portfolio engineered from scratch to demonstrate verified projects, academic background, and clean UI/UX craft.",
    problemSolved: "Acts as a transparent, high-performance central hub for my technical work, verified credentials, and direct contact.",
    whyBuilt: "Rebuilt from zero to replace bloated legacy code with a disciplined aesthetic, high performance, and robust React architecture.",
    tags: ["Next.js", "React", "TypeScript", "GitHub Pages"],
    link: "https://rajeev8299.github.io/portfolio/",
    github: "https://github.com/rajeev8299",
    featured: false,
    uiVisualType: "editorial"
  }
];

export const achievementsData = [
  {
    category: "Sports & Athletics",
    title: "Athletics & Competitive Sports",
    subtitle: "State & District Level Honors",
    desc: "Competitive athletics instilled a deep sense of discipline, quick decision-making under pressure, and relentless consistency.",
    medals: [
      { title: "Roll Ball", honor: "State Medalist" },
      { title: "Skate Racing", honor: "State Competitor" },
      { title: "District Level", honor: "3× Champion" }
    ]
  },
  {
    category: "Languages & Communication",
    title: "Languages & Communication",
    subtitle: "Bilingual Technical Fluency",
    desc: "Effective communicator capable of collaborating with technical peers, mentors, and non-technical stakeholders.",
    languages: [
      { name: "English", level: "Professional & Technical Proficiency" },
      { name: "Hindi", level: "Native / Full Professional Fluency" }
    ]
  }
];
