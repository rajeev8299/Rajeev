import { experienceData } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section experience-section" aria-label="Professional Experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">
            <span>Career Milestones</span>
          </div>
          <h2 className="section-title">Industry experience &amp; professional background.</h2>
          <p className="section-subtitle">
            Hands-on software development work within collaborative engineering teams, structured Agile sprints, and disciplined version control workflows.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="experience-editorial-timeline">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="timeline-entry-card">
              {/* Timeline Header Row */}
              <div className="timeline-entry-top">
                <div className="timeline-role-info">
                  <div className="timeline-type-pill">
                    <Briefcase size={13} />
                    <span>{exp.type}</span>
                  </div>
                  <h3 className="timeline-role-title">{exp.role}</h3>
                  <div className="timeline-meta-bar">
                    <span className="timeline-company-name">{exp.company}</span>
                    <span className="timeline-meta-divider" aria-hidden="true">·</span>
                    <span className="timeline-loc-tag">
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <div className="timeline-period-container">
                  <Calendar size={14} className="timeline-period-icon" />
                  <span className="timeline-period-text">{exp.period}</span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="timeline-summary-text">{exp.summary}</p>

              {/* Responsibilities List */}
              <div className="timeline-responsibilities-block">
                <h4 className="responsibilities-title">Core Contributions &amp; Scope:</h4>
                <ul className="timeline-bullets">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>
                      <CheckCircle size={15} className="bullet-check-icon" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies / Skills Tags */}
              <div className="timeline-tags-row">
                <span className="timeline-tags-label">Methodologies &amp; Tech:</span>
                <div className="timeline-tags-group">
                  {exp.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="timeline-tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
