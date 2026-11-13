export default function Skills() {
  const skillCategories = [
    {
      title: "Core Frontend",
      desc: "Daily driver technologies I use to build user-facing products.",
      items: ["HTML5", "CSS3 / Modern CSS", "JavaScript (ES6+)", "TypeScript", "React", "Next.js"],
    },
    {
      title: "Design & UX Principles",
      desc: "Techniques I care about to make websites feel intuitive.",
      items: ["Mobile-first Responsive Design", "Flexbox & Grid Systems", "Clean Typography", "Micro-interactions", "Accessibility (a11y)"],
    },
    {
      title: "Tools & Workflow",
      desc: "My software environment and development ecosystem.",
      items: ["Git & GitHub", "VS Code", "Vercel / Netlify", "Figma to Code", "Node / npm ecosystem"],
    },
  ];

  return (
    <section id="skills" className="stage">
      <div className="wrap">
        <div className="reveal in">
          <span className="eyebrow">Skills &amp; Toolkit</span>
          <h2 className="section-title">
            Technologies I <span className="thin">work with</span>
          </h2>
          <p className="section-sub">
            The practical skills, languages, and tools I use to bring ideas to reality.
          </p>
        </div>

        <div className="human-skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="gcard human-skill-card reveal in" data-tilt data-tilt-max="5">
              <div className="human-skill-head">
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
              </div>
              <ul className="human-skill-list">
                {cat.items.map((it) => (
                  <li key={it}>
                    <span className="skill-check">✓</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
