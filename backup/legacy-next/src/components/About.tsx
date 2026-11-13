export default function About() {
  const highlights = [
    { num: "6+", label: "Real Web Projects" },
    { num: "MCA", label: "AKTU Graduate" },
    { num: "6 Mo", label: "Software Internship" },
    { num: "100%", label: "Curiosity & Grit" },
  ];

  const whatIDo = [
    {
      title: "UI & Component Architecture",
      desc: "Building clean, accessible React & Next.js components that are easy to maintain and scale.",
    },
    {
      title: "Responsive & Modern Styling",
      desc: "Pixel-accurate CSS, Flexbox/Grid layouts, and mobile-friendly interfaces without bloated frameworks.",
    },
    {
      title: "Performance & Detail",
      desc: "Fast load times, smooth transitions, semantic HTML and zero unnecessary animations.",
    },
  ];

  return (
    <section id="about" className="stage">
      <div className="wrap">
        <div className="reveal in">
          <span className="eyebrow">About me</span>
          <h2 className="section-title">
            The person <span className="thin">behind the code</span>
          </h2>
          <p className="section-sub">A genuine look at what I do, how I work, and what drives me.</p>
        </div>

        <div className="about-grid">
          {/* Left Column: Authentic human bio & values */}
          <div className="about-left-col">
            <div className="gcard about-card reveal in" data-tilt data-tilt-max="5">
              <p>
                Hey! I&apos;m <strong>Rajeev Yadav</strong>, a frontend developer based in <strong>Varanasi, India</strong>.
                I fell in love with coding because of that magical feeling when written code transforms into a living,
                interactive product that people can actually touch and use.
              </p>
              <p>
                My everyday stack centers on <strong>React</strong>, <strong>Next.js</strong>, and modern <strong>TypeScript / JavaScript</strong>, 
                supported by solid fundamentals in <strong>HTML5</strong> and <strong>CSS3</strong>. During my software developer internship at <strong>Osizone</strong>,
                I learned the value of clean architecture, real team workflows, Git collaboration, and shipping reliable code.
              </p>
              <p>
                When I&apos;m not debugging layouts or crafting new interfaces, you&apos;ll probably find me on the skating rink — I&apos;m a state-level medalist in <strong>Roll Ball &amp; Skate Racing</strong>. 
                Sports taught me consistency, fast reflexes, and showing up every single day.
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="about-metrics-grid reveal in">
              {highlights.map((h) => (
                <div key={h.label} className="about-metric-card" data-tilt data-tilt-max="5">
                  <span className="about-metric-num">{h.num}</span>
                  <span className="about-metric-lbl">{h.label}</span>
                </div>
              ))}
            </div>

            {/* Practical development approach */}
            <div className="about-values-card reveal in" data-tilt data-tilt-max="5">
              <div className="about-values-head">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                How I Approach Web Development
              </div>
              <div className="about-pillars">
                {whatIDo.map((p) => (
                  <div key={p.title} className="about-pillar-item">
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Contact & Academic Quick Facts */}
          <div className="gcard about-card reveal in" data-tilt data-tilt-max="7">
            <div className="facts">
              <div className="fact">
                <div className="fact-ic">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                    <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
                  </svg>
                </div>
                <span>
                  <b>Education</b>BCA — Veer Bahadur Singh Purvanchal University
                  <br />
                  MCA — Dr. A.P.J. Abdul Kalam Technical University
                </span>
              </div>
              <div className="fact">
                <div className="fact-ic">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span>
                  <b>Address</b>Varanasi, Uttar Pradesh, India
                </span>
              </div>
              <div className="fact">
                <div className="fact-ic">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
                  </svg>
                </div>
                <span>
                  <b>Focus</b>Frontend development — React, Next.js &amp; UI building
                </span>
              </div>
              <div className="fact">
                <div className="fact-ic">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.4.5-.7 1.1-.8 1.7-.1.6-.1 1.3 0 1.9v4" />
                    <path d="M9 18c-4.5 2-5-2-7-2" />
                  </svg>
                </div>
                <span>
                  <b>GitHub</b>
                  <a href="https://github.com/rajeev8299" target="_blank" rel="noopener noreferrer">
                    github.com/rajeev8299
                  </a>{" "}
                  · 6 public repositories
                </span>
              </div>
              <div className="fact">
                <div className="fact-ic">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 6L2 7" />
                  </svg>
                </div>
                <span>
                  <b>Email</b>
                  <a href="mailto:rajeev829927@gmail.com">rajeev829927@gmail.com</a>
                </span>
              </div>
              <div className="fact">
                <div className="fact-ic">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
                  </svg>
                </div>
                <span>
                  <b>Phone</b>
                  <a href="tel:+918299279529">+91&nbsp;82992&nbsp;79529</a>
                </span>
              </div>
              <div className="fact">
                <div className="fact-ic">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                  </svg>
                </div>
                <span>
                  <b>Resume</b>
                  <a href="/assets/resume.pdf" download className="js-resume">
                    Download PDF
                  </a>{" "}
                  — Rajeev_Yadav_Resume.pdf
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
