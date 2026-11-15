import { personalData } from "@/data/portfolio";
import { Sparkles, ArrowRight, MapPin, Code2, CheckCircle2 } from "lucide-react";

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

        {/* Full-Width Balanced 2-Column Editorial Grid */}
        <div className="about-editorial-grid">
          {/* Left Column: Narrative & Biography */}
          <div className="about-narrative-card">
            <h3 className="about-card-heading">Engineering Background & Approach</h3>
            <p className="about-summary-lead">
              {personalData.aboutText}
            </p>
            <p className="about-summary-sub">
              {personalData.supportingText}
            </p>

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

          {/* Right Column: Quick Facts & Status Snapshot */}
          <div className="about-snapshot-card">
            <h3 className="about-card-heading">Professional Snapshot</h3>
            
            <div className="about-snapshot-list">
              <div className="snapshot-item">
                <div className="snapshot-icon-box">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="snapshot-label">Location</span>
                  <strong className="snapshot-val">{personalData.location}</strong>
                </div>
              </div>

              <div className="snapshot-item">
                <div className="snapshot-icon-box">
                  <Code2 size={16} />
                </div>
                <div>
                  <span className="snapshot-label">Primary Stack</span>
                  <strong className="snapshot-val">React, Next.js, TypeScript</strong>
                </div>
              </div>

              <div className="snapshot-item">
                <div className="snapshot-icon-box">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <span className="snapshot-label">Professional Status</span>
                  <strong className="snapshot-val">Open to Full-Time Frontend Roles</strong>
                </div>
              </div>
            </div>

            <div className="snapshot-callout-box">
              <span className="snapshot-callout-tag">Education Qualification</span>
              <p className="snapshot-callout-text">Master of Computer Applications (MCA) & Bachelor of Computer Applications (BCA)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
