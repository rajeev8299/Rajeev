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
  role: "Frontend Developer",
  location: "Varanasi, Uttar Pradesh, India",
  availability: "Open to frontend opportunities",
  email: "rajeev829927@gmail.com",
  phone: "+91 82992 79529",
  displayPhone: "+91 82992 79529",
  resumePath: "./assets/resume.pdf",
  photoPath: "./assets/photo.jpg",
  headline: "I build clean, responsive web experiences with React and Next.js.",
  supportingText: "Focused on clean components, accessible design and reliable frontend performance.",
  techHighlights: ["React", "Next.js", "TypeScript", "CSS3"],
  bio: "I build clean, fast, and accessible web interfaces using React, Next.js, and modern CSS architecture.",
  aboutText: "I am a Frontend Developer based in Varanasi, India, with an academic background in Computer Applications (MCA & BCA). I specialize in translating design requirements into fast, modular, and responsive web applications with an emphasis on clean code and reliable performance.",
  socials: [
    { name: "GitHub", url: "https://github.com/rajeev8299", handle: "@rajeev8299" },
    { name: "WhatsApp", url: "https://wa.me/918299279529", handle: "+91 82992 79529" },
    { name: "Telegram", url: "https://t.me/+918299279529", handle: "Rajeev Yadav" },
    { name: "Instagram", url: "https://www.instagram.com/its_rajeev_yaduvanshi?cplk=OTF5M2l0c3VvOWh5", handle: "@its_rajeev_yaduvanshi" },
    { name: "Facebook", url: "https://www.facebook.com/share/18VtHp6bA7/", handle: "Rajeev Yadav" }
  ]
};

export const metrics = [
  { value: "6+", label: "Verified Projects", detail: "Shipped & Live" },
  { value: "MCA", label: "AKTU Postgraduate", detail: "Computer Applications" },
  { value: "BCA", label: "VBSPU Degree", detail: "Foundational CS" },
  { value: "6 Mos", label: "Industry Internship", detail: "Osizone Varanasi" }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    iconName: "layout",
    desc: "Core user-facing architecture.",
    skills: ["React.js", "Next.js (App Router)", "JavaScript (ES6+)", "TypeScript", "HTML5"]
  },
  {
    title: "Styling & Responsive UI",
    iconName: "palette",
    desc: "Modern layouts and accessibility.",
    skills: ["CSS3 / Modern CSS", "Tailwind CSS", "Responsive Design", "CSS Grid & Flexbox", "WCAG 2.1 Accessibility"]
  },
  {
    title: "Core Logic & State",
    iconName: "code",
    desc: "Data handling and modular logic.",
    skills: ["Data Structures", "DOM APIs", "State Management", "REST API Integration", "Async / Promises"]
  },
  {
    title: "Tooling & Workflow",
    iconName: "terminal",
    desc: "Development and delivery tools.",
    skills: ["Git & GitHub", "VS Code", "Vite & npm", "Chrome DevTools", "Vercel / GitHub Pages"]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: "Software Developer Intern",
    company: "Osizone",
    location: "Varanasi, India",
    period: "Sept 2025 — March 2026",
    type: "Industry Internship",
    summary: "Contributed to frontend and desktop GUI applications within collaborative Agile sprints.",
    responsibilities: [
      "Engineered modular frontend interfaces and GUI application flows using clean component logic.",
      "Collaborated in Agile sprint cycles, conducting peer code reviews and managing Git branch workflows.",
      "Optimized application logic and data routines to improve load efficiency and user responsiveness."
    ],
    tags: ["Agile & Scrum", "Git Workflow", "Code Review", "Component Architecture", "Performance Tuning"]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    field: "Advanced Software Engineering & System Architecture",
    institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    level: "Postgraduate Degree",
    note: "Focused on advanced web architectures, software development methodologies, and database systems."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    field: "Computer Science Foundations & Programming",
    institution: "Veer Bahadur Singh Purvanchal University (VBSPU)",
    level: "Undergraduate Degree",
    note: "Core foundations in object-oriented programming, data structures, and computer science principles."
  }
];

export const projectsData: Project[] = [
  {
    num: "01",
    lang: "Next.js · TypeScript · CSS",
    title: "Taza Sabji Bazzar",
    tagline: "Online Vegetable & Grocery Storefront",
    desc: "A fast e-commerce storefront for fresh produce featuring dynamic quantity selectors, sub-second page loads, and client-side cart persistence.",
    problemSolved: "Simplifies daily produce shopping on mobile devices with sub-second page loads and zero interface clutter.",
    tags: ["Next.js", "TypeScript", "CSS3", "Cart State"],
    link: "https://rajeev8299.github.io/tazasabjibazzar",
    github: "https://github.com/rajeev8299",
    featured: true,
    uiVisualType: "groceries"
  },
  {
    num: "02",
    lang: "Vanilla JS · CSS Grid · DOM API",
    title: "Travel Buddy",
    tagline: "Destination Guide & Trip Planner",
    desc: "A lightweight travel guide featuring interactive destination category filtering, itinerary overviews, and fluid CSS Grid layouts.",
    problemSolved: "Organizes travel destinations into actionable itineraries without heavy framework overhead.",
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
    desc: "A patient-first clinic website displaying physician schedules, service overviews, and accessible appointment booking inquiry flows.",
    problemSolved: "Streamlines patient appointment discovery with high-contrast accessibility and mobile-first booking forms.",
    tags: ["React.js", "CSS Modules", "Accessible UI", "Form Validation"],
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
    desc: "A fitness studio website with workout batch schedules, membership pricing tiers, trainer profiles, and fluid CSS micro-interactions.",
    problemSolved: "Provides clear pricing tiers and class schedules for prospective gym members across all screen sizes.",
    tags: ["HTML5", "Modern CSS", "Responsive Design", "Fluid Layouts"],
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
    desc: "A retail storefront featuring product catalog filtering, an interactive slide-over cart, and client-side order calculations with localStorage persistence.",
    problemSolved: "Demonstrates reliable multi-item shopping cart state machines with client persistence.",
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
    desc: "My developer portfolio built from scratch with Next.js App Router, TypeScript, and clean custom CSS to showcase verified work and contact info.",
    problemSolved: "Acts as a transparent, high-performance central hub for my technical work, verified credentials, and direct contact.",
    tags: ["Next.js", "React", "TypeScript", "CSS Architecture"],
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
    desc: "Competitive athletics instilled personal discipline, focus under pressure, and continuous consistency.",
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
    desc: "Comfortable communicating and collaborating across technical teams and stakeholders.",
    languages: [
      { name: "English", level: "Professional & Technical Proficiency" },
      { name: "Hindi", level: "Native / Full Professional Fluency" }
    ]
  }
];
