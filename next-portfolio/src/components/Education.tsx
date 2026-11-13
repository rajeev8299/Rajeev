import { educationData } from "@/data/portfolio";
import { GraduationCap, Award, BookCheck } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section education-section" aria-label="Education & Academic Qualifications">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">
            <span>Academic Qualifications</span>
          </div>
          <h2 className="section-title">Computer applications foundation.</h2>
          <p className="section-subtitle">
            Two degrees in computer applications — progressing from undergraduate computing foundations to advanced software engineering theory.
          </p>
        </div>

        {/* Structured Education Grid */}
        <div className="education-cards-grid">
          {educationData.map((edu, idx) => (
            <div key={idx} className="education-panel-card">
              <div className="edu-panel-header">
                <div className="edu-icon-badge">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <span className="edu-level-label">{edu.level}</span>
                  <h3 className="edu-degree-heading">{edu.degree}</h3>
                </div>
              </div>

              <div className="edu-institution-box">
                <span className="edu-inst-prefix">Institution:</span>
                <strong className="edu-inst-name">{edu.institution}</strong>
              </div>

              <div className="edu-field-box">
                <span className="edu-field-prefix">Curriculum Specialization:</span>
                <p className="edu-field-text">{edu.field}</p>
              </div>

              <p className="edu-note-prose">{edu.note}</p>

              <div className="edu-card-footer">
                <div className="edu-verified-pill">
                  <BookCheck size={13} />
                  <span>Verified University Credential</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
