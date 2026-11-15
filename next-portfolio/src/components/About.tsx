import { personalData } from "@/data/portfolio";
import { Sparkles, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section about-section" aria-label="About Rajeev Yadav">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">
            <Sparkles size={13} className="kicker-icon" />
            <span>About Me</span>
          </div>
          <h2 className="section-title">Developer focused on clarity and performance.</h2>
        </div>

        {/* Concise Recruiter-Focused Narrative Card */}
        <div className="about-compact-card">
          <p className="about-summary-lead">
            {personalData.aboutText}
          </p>

          <div className="about-quick-facts">
            <div className="fact-item">
              <span className="fact-label">Location</span>
              <strong className="fact-value">{personalData.location}</strong>
            </div>
            <div className="fact-item">
              <span className="fact-label">Primary Stack</span>
              <strong className="fact-value">React, Next.js, TypeScript</strong>
            </div>
            <div className="fact-item">
              <span className="fact-label">Status</span>
              <strong className="fact-value">Available for Full-Time Roles</strong>
            </div>
          </div>

          <div className="about-actions-row">
            <a href="#experience" className="btn btn-secondary btn-sm">
              <span>View Experience</span>
              <ArrowRight size={14} />
            </a>
            <a href="#skills" className="btn btn-outline btn-sm">
              <span>Explore Skills</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
