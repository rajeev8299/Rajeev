import { skillCategories } from "@/data/portfolio";
import { Layout, Palette, Code, Terminal, CheckCircle2 } from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "layout":
        return <Layout size={18} />;
      case "palette":
        return <Palette size={18} />;
      case "code":
        return <Code size={18} />;
      case "terminal":
        return <Terminal size={18} />;
      default:
        return <Code size={18} />;
    }
  };

  return (
    <section id="skills" className="section skills-section" aria-label="Technical Skills & Competencies">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">
            <span>Engineering Toolkit</span>
          </div>
          <h2 className="section-title">Verified tools, languages &amp; technologies.</h2>
          <p className="section-subtitle">
            Curated technical stack focused on scalable component architectures, robust typing, accessible user interfaces, and reliable modern workflows.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="skills-editorial-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skills-category-panel">
              <div className="skills-panel-header">
                <div className="skills-panel-icon-box">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <div>
                  <span className="skills-panel-index">Group 0{idx + 1}</span>
                  <h3 className="skills-panel-title">{cat.title}</h3>
                </div>
              </div>

              <p className="skills-panel-desc">{cat.desc}</p>

              <div className="skills-chips-cluster">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-chip-item">
                    <CheckCircle2 size={12} className="skill-chip-check" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
