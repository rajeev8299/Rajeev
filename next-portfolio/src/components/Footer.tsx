"use client";

import { personalData } from "@/data/portfolio";
import { ArrowUp, Heart, MapPin } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-editorial" role="contentinfo">
      <div className="container">
        {/* Top Branding & Nav Row */}
        <div className="footer-editorial-top">
          <div className="footer-brand-lockup">
            <span className="brand-badge">{personalData.initials}</span>
            <div>
              <span className="footer-name-heading">{personalData.name}</span>
              <p className="footer-role-line">
                {personalData.role} · <MapPin size={11} style={{ display: "inline" }} /> {personalData.location}
              </p>
            </div>
          </div>

          <nav className="footer-nav-menu" aria-label="Footer Quick Navigation">
            <a href="#hero" className="footer-nav-anchor">Home</a>
            <a href="#about" className="footer-nav-anchor">About</a>
            <a href="#skills" className="footer-nav-anchor">Skills</a>
            <a href="#experience" className="footer-nav-anchor">Experience</a>
            <a href="#projects" className="footer-nav-anchor">Projects</a>
            <a href="#education" className="footer-nav-anchor">Education</a>
            <a href="#achievements" className="footer-nav-anchor">Achievements</a>
            <a href="#contact" className="footer-nav-anchor">Contact</a>
          </nav>

          <button
            type="button"
            className="btn btn-secondary btn-sm footer-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
            <span>Top</span>
          </button>
        </div>

        {/* Bottom Rights & Social Bar */}
        <div className="footer-editorial-bottom">
          <p className="footer-copyright-note">
            &copy; {currentYear} {personalData.name}. Designed &amp; engineered with Next.js 16, React 19, TypeScript &amp; Modern CSS.
          </p>

          <div className="footer-links-cluster">
            <a href="https://github.com/rajeev8299" target="_blank" rel="noopener noreferrer" className="footer-sub-link">
              <GithubIcon size={14} />
              <span>GitHub</span>
            </a>
            <a href={personalData.resumePath} download className="footer-sub-link">
              Resume PDF
            </a>
            <a href={`mailto:${personalData.email}`} className="footer-sub-link">
              {personalData.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
