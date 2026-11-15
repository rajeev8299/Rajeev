import Image from "next/image";
import { personalData, metrics } from "@/data/portfolio";
import { ArrowRight, Mail, CheckCircle2, FileText } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export default function Hero() {
  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <div className="container hero-container">
        {/* Hero Asymmetric Editorial Layout */}
        <div className="hero-editorial-grid">
          {/* Main Typography Column */}
          <div className="hero-copy-col">
            <div className="hero-tagline-kicker">
              <span className="kicker-rule" aria-hidden="true" />
              <span className="kicker-text">{personalData.role}</span>
            </div>

            <h1 className="hero-headline">
              <span className="hero-name-display">{personalData.name}</span>
            </h1>

            <p className="hero-subheading-tagline">
              {personalData.headline}
            </p>

            <p className="hero-mission-statement">
              {personalData.supportingText}
            </p>

            {/* Quick Tech Highlights Badge Row */}
            <div className="hero-tech-pills">
              {personalData.techHighlights.map((tech) => (
                <span key={tech} className="hero-tech-pill-item">
                  {tech}
                </span>
              ))}
            </div>

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
          </div>

          {/* Right Column: Editorial Portrait Showcase */}
          <div className="hero-visual-col">
            <div className="hero-portrait-stage">
              {/* Background tonal composition layer */}
              <div className="portrait-offset-backdrop" aria-hidden="true" />
              
              <figure className="portrait-figure">
                <div className="portrait-canvas">
                  <Image
                    src={personalData.photoPath}
                    alt={`Authentic portrait photograph of ${personalData.name}`}
                    width={440}
                    height={500}
                    className="portrait-main-img"
                    priority
                  />
                  <div className="portrait-inner-overlay">
                    <div className="portrait-badge-tag">
                      <CheckCircle2 size={14} className="badge-check-icon" />
                      <span>Software Engineer · MCA Graduate</span>
                    </div>
                  </div>
                </div>
                
                {/* Contextual image caption */}
                <figcaption className="portrait-editorial-caption">
                  <span className="caption-dot" aria-hidden="true" />
                  <span className="caption-text">Rajeev Yadav — Frontend Developer based in Varanasi, India</span>
                </figcaption>
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
