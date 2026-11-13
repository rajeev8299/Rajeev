import { personalData, aboutPillars } from "@/data/portfolio";
import { CheckCircle2, Award, BookOpen, Sparkles, Code2, Layers, Cpu, Compass } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section about-section" aria-label="About Rajeev Yadav">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">
            <Sparkles size={13} className="kicker-icon" />
            <span>Design Philosophy &amp; Background</span>
          </div>
          <h2 className="section-title">A developer who crafts with intention &amp; care.</h2>
          <p className="section-subtitle">
            Bridging rigorous computer applications theory with responsive frontend architecture, clean aesthetics, and pragmatic engineering.
          </p>
        </div>

        {/* Editorial Narrative + Pillars Grid */}
        <div className="about-editorial-layout">
          {/* Left Column: Longform Story */}
          <div className="about-story-card">
            <div className="story-card-header">
              <span className="story-lead-tag">Background &amp; Practice</span>
              <h3 className="story-title">Turning complex requirements into effortless user journeys.</h3>
            </div>

            <div className="story-prose">
              <p>
                {personalData.detailedBio}
              </p>
              <p>
                Over the course of two rigorous degrees in Computer Applications — graduating with a <strong>Bachelor of Computer Applications (BCA)</strong> from VBSPU and completing my <strong>Master of Computer Applications (MCA)</strong> at Dr. A.P.J. Abdul Kalam Technical University (AKTU) — I built deep foundations in data structures, modular logic, and system architecture.
              </p>
              <p>
                During my six-month software engineering internship at <strong>Osizone</strong> in Varanasi, I translated this foundation into production code: engineering interactive GUI desktop applications, participating in active Agile sprints, writing clean modular code, and conducting peer code reviews.
              </p>
              <blockquote className="about-quote">
                &ldquo;{personalData.philosophy}&rdquo;
              </blockquote>
            </div>

            <div className="story-meta-grid">
              <div className="story-meta-item">
                <span className="meta-item-label">Current Base</span>
                <strong className="meta-item-val">{personalData.location}</strong>
              </div>
              <div className="story-meta-item">
                <span className="meta-item-label">Core Focus</span>
                <strong className="meta-item-val">React, Next.js &amp; CSS3</strong>
              </div>
              <div className="story-meta-item">
                <span className="meta-item-label">Status</span>
                <strong className="meta-item-val">Available For Hire</strong>
              </div>
            </div>
          </div>

          {/* Right Column: Key Architectural Pillars */}
          <div className="about-pillars-stack">
            <div className="pillars-header-block">
              <span className="pillars-kicker">Core Principles</span>
              <h3 className="pillars-heading">How I Approach Frontend Engineering</h3>
            </div>
            <div className="pillars-cards-list">
              {aboutPillars.map((pillar) => (
                <div key={pillar.num} className="pillar-item-card">
                  <div className="pillar-top-meta">
                    <span className="pillar-numeric">{pillar.num}</span>
                    <span className="pillar-tagline">{pillar.tagline}</span>
                  </div>
                  <h4 className="pillar-item-title">{pillar.title}</h4>
                  <p className="pillar-item-desc">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
