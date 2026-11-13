import { achievementsData } from "@/data/portfolio";
import { Trophy, Globe, Award, CheckCircle2 } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements-section" aria-label="Achievements, Sports & Languages">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">
            <span>Beyond Code</span>
          </div>
          <h2 className="section-title">Athletic honors &amp; communication.</h2>
          <p className="section-subtitle">
            Competitive athletic discipline, speed skating medals, and professional bilingual fluency across technical and cross-functional teams.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="achievements-cards-grid">
          {/* Sports Panel */}
          <div className="achievement-feature-card">
            <div className="ach-card-top">
              <div className="ach-icon-container sports-icon">
                <Trophy size={24} />
              </div>
              <div>
                <span className="ach-category-tag">Sports &amp; Competitive Athletics</span>
                <h3 className="ach-card-title">{achievementsData[0].title}</h3>
                <span className="ach-subtitle">{achievementsData[0].subtitle}</span>
              </div>
            </div>

            <p className="ach-description-text">{achievementsData[0].desc}</p>

            <div className="ach-medals-deck">
              <span className="deck-title">Verified Athletic Honors:</span>
              <div className="medals-list">
                {achievementsData[0].medals?.map((m, idx) => (
                  <div key={idx} className="medal-pill-item">
                    <Award size={16} className="medal-icon-badge" />
                    <div className="medal-info">
                      <strong className="medal-sport-name">{m.title}</strong>
                      <span className="medal-honor-level">{m.honor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages Panel */}
          <div className="achievement-feature-card">
            <div className="ach-card-top">
              <div className="ach-icon-container language-icon">
                <Globe size={24} />
              </div>
              <div>
                <span className="ach-category-tag">Global Communication</span>
                <h3 className="ach-card-title">{achievementsData[1].title}</h3>
                <span className="ach-subtitle">{achievementsData[1].subtitle}</span>
              </div>
            </div>

            <p className="ach-description-text">{achievementsData[1].desc}</p>

            <div className="ach-medals-deck">
              <span className="deck-title">Language Fluency Breakdown:</span>
              <div className="medals-list">
                {achievementsData[1].languages?.map((l, idx) => (
                  <div key={idx} className="medal-pill-item">
                    <CheckCircle2 size={16} className="language-check-icon" />
                    <div className="medal-info">
                      <strong className="medal-sport-name">{l.name}</strong>
                      <span className="medal-honor-level">{l.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
