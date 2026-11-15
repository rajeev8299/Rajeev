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
              <span className="kicker-text">Creative Frontend Developer &amp; Software Builder</span>
            </div>

            <h1 className="hero-headline">
              <span className="hero-name-display">{personalData.name}</span>
            </h1>

            <p className="hero-subheading-tagline">
              Engineering high-fidelity web interfaces where thoughtful aesthetic restraint meets resilient modern code.
            </p>

            <p className="hero-mission-statement">
              {personalData.bio} Combining an academic foundation in Computer Applications (MCA &amp; BCA) with hands-on software development experience to deliver fast, accessible, and durable digital products.
            </p>

            {/* Clear Primary Actions */}
            <div className="hero-actions-cluster">
              <a href="#projects" className="btn btn-primary btn-hero">
                <span>Explore Selected Work</span>
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn btn-secondary btn-hero">
                <Mail size={16} />
                <span>Get In Touch</span>
              </a>
              <a
                href={personalData.resumePath}
                download="Rajeev_Yadav_Resume.pdf"
                className="btn btn-outline btn-hero"
                aria-label="Download Official Resume PDF"
              >
                <FileText size={16} />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Verified Communication Channels */}
            <div className="hero-socials-group">
              <span className="socials-prefix">Direct Channels:</span>
              <div className="socials-chips">
                <a
                  href="https://github.com/rajeev8299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-chip"
                  title="GitHub Profile"
                >
                  <GithubIcon size={14} />
                  <span>GitHub</span>
                </a>
                <a
                  href={`mailto:${personalData.email}`}
                  className="social-chip"
                  title="Direct Email"
                >
                  <Mail size={14} />
                  <span>Email</span>
                </a>
                <a
                  href="https://wa.me/918299279529"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-chip"
                  title="WhatsApp"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
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
