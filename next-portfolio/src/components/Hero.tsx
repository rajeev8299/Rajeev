import Image from "next/image";
import { personalData, metrics } from "@/data/portfolio";
import { ArrowRight, Mail, FileText, Layout, Component, Palette } from "lucide-react";

export default function Hero() {
  const focusAreas = [
    {
      num: "01",
      title: "Responsive Interfaces",
      desc: "Building layouts that work smoothly across all screen sizes.",
      icon: Layout,
    },
    {
      num: "02",
      title: "React Components",
      desc: "Reusable, modular and maintainable frontend structure.",
      icon: Component,
    },
    {
      num: "03",
      title: "Clean CSS Architecture",
      desc: "Consistent styling, CSS variables and reliable layouts.",
      icon: Palette,
    },
  ];

  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <div className="container hero-container">
        {/* Balanced Hero Grid */}
        <div className="hero-editorial-grid">
          {/* Left Column (58–62% width) */}
          <div className="hero-copy-col">
            <div className="hero-tagline-kicker">
              <span className="kicker-rule" aria-hidden="true" />
              <span className="kicker-text">{personalData.role}</span>
            </div>

            <h1 className="hero-headline">
              <span className="hero-name-display">{personalData.name}</span>
            </h1>

            <p className="hero-introduction">
              I build clean, responsive web experiences with React and Next.js.
            </p>

            {/* Clear Primary Actions */}
            <div className="hero-actions-cluster">
              <a href="#projects" className="btn btn-primary btn-hero">
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>
              <a
                href={personalData.resumePath}
                download="Rajeev_Yadav_Resume.pdf"
                className="btn btn-secondary btn-hero"
                aria-label="Download Resume PDF"
              >
                <FileText size={16} />
                <span>Download Resume</span>
              </a>
              <a href="#contact" className="btn btn-outline btn-hero">
                <Mail size={16} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Technology Highlights */}
            <div className="hero-tech-pills">
              {personalData.techHighlights.map((tech) => (
                <span key={tech} className="hero-tech-pill-item">
                  {tech}
                </span>
              ))}
            </div>

            {/* Focus Highlights Area */}
            <div className="hero-focus-block">
              <h2 className="hero-focus-heading">What I Focus On</h2>
              <div className="hero-focus-grid">
                {focusAreas.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.num} className="hero-focus-card">
                      <div className="focus-card-header">
                        <span className="focus-card-index">{item.num}</span>
                        <Icon size={16} className="focus-card-icon" aria-hidden="true" />
                      </div>
                      <h3 className="focus-card-title">{item.title}</h3>
                      <p className="focus-card-desc">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Proportional Profile Photograph */}
          <div className="hero-visual-col">
            <div className="hero-portrait-stage">
              <figure className="portrait-figure">
                <div className="portrait-canvas">
                  <Image
                    src={personalData.photoPath}
                    alt={`Portrait of ${personalData.name}`}
                    width={420}
                    height={500}
                    className="portrait-main-img"
                    priority
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>

        {/* 4-Card Analytical Metric Deck */}
        <div className="hero-metrics-deck">
          {metrics.map((item, idx) => (
            <div key={idx} className="metric-deck-card">
              <span className="metric-deck-value">{item.value}</span>
              <span className="metric-deck-label">{item.label}</span>
              <span className="metric-deck-detail">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
