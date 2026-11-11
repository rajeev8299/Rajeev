export default function Achievements() {
  return (
    <section id="achievements" className="stage">
      <div className="wrap">
        <div className="reveal in">
          <span className="eyebrow">Achievements</span>
          <h2 className="section-title">
            Beyond <span className="thin">the code</span>
          </h2>
          <p className="section-sub">
            District- and state-level sports achievements, plus the languages I work in.
          </p>
        </div>

        <div className="ach-grid">
          <article className="gcard ach reveal in" data-tilt data-tilt-max="5">
            <div className="ach-ic">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" />
                <path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" />
              </svg>
            </div>
            <h3>Sports &amp; Athletics</h3>
            <p>
              Competitive sports shaped my discipline and drive. Won <b>state-level &amp; district medals</b> in <b>Roll Ball</b> and <b>Skate Racing</b> — representing consistency, quick decision-making and team grit.
            </p>
            <div className="medal-row">
              <span className="medal">🏆 Roll Ball (State Medalist)</span>
              <span className="medal">🛹 Skate Racing (State)</span>
              <span className="medal">🎖️ 3× District Champion</span>
            </div>
          </article>

          <article className="gcard ach reveal in" data-tilt data-tilt-max="5">
            <div className="ach-ic">
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
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
              </svg>
            </div>
            <h3>Communication &amp; Languages</h3>
            <div className="lang-row">
              <div className="lang-item">
                <b>English</b>
                <span>Professional &amp; Technical Communication</span>
              </div>
              <div className="lang-item">
                <b>Hindi</b>
                <span>Native / Fluent</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
