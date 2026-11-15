"use client";

import Image from "next/image";
import { personalData } from "@/data/portfolio";
import { ArrowUp, Mail, FileText, MapPin } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="footer-site" role="contentinfo">
      <div className="footer-inner">
        {/* Top 3-Column Section */}
        <div className="footer-main">
          {/* Column 1: Personal Brand */}
          <div className="footer-brand-column">
            <div className="footer-brand-identity">
              <div className="footer-avatar-wrapper">
                <Image
                  src={personalData.photoPath}
                  alt={personalData.name}
                  width={50}
                  height={50}
                  className="footer-avatar-img"
                  unoptimized
                />
              </div>
              <div className="footer-brand-meta">
                <h3 className="footer-brand-name">{personalData.name}</h3>
                <p className="footer-brand-role">{personalData.role}</p>
              </div>
            </div>
            <p className="footer-location-tag">
              <MapPin size={14} aria-hidden="true" className="footer-location-icon" />
              <span>{personalData.location}</span>
            </p>
          </div>

          {/* Column 2: Navigation (Neat 2-Column Grid) */}
          <div className="footer-nav-column">
            <h4 className="footer-column-heading">Navigation</h4>
            <ul className="footer-nav-grid">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="footer-connect-column">
            <h4 className="footer-column-heading">Connect</h4>
            <ul className="footer-connect-list">
              <li>
                <a
                  href="https://github.com/rajeev8299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-connect-link"
                >
                  <GithubIcon size={15} />
                  <span>GitHub Profile</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${personalData.email}`} className="footer-connect-link">
                  <Mail size={15} />
                  <span>{personalData.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={personalData.resumePath}
                  download="Rajeev_Yadav_Resume.pdf"
                  className="footer-connect-link"
                >
                  <FileText size={15} />
                  <span>Resume (PDF)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Subtle Divider */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            &copy; {currentYear} {personalData.name}. All rights reserved.
          </p>

          <button
            type="button"
            className="footer-back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            <ArrowUp size={13} />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
