"use client";

import { useEffect, useState } from "react";
import { personalData } from "@/data/portfolio";
import { ArrowDownToLine } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export default function Navbar() {
  const [isStuck, setIsStuck] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setIsStuck((window.scrollY || document.documentElement.scrollTop) > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 940) {
        setMenuOpen(false);
        document.body.classList.remove("menu-locked");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    if (next) {
      document.body.classList.add("menu-locked");
    } else {
      document.body.classList.remove("menu-locked");
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove("menu-locked");
  };

  const menuItems = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Achievements", href: "#achievements", id: "achievements" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className={`navbar ${isStuck ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a className="navbar-brand" href="#hero" onClick={closeMenu}>
          <span className="brand-badge">{personalData.initials}</span>
          <span>{personalData.name}</span>
        </a>

        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-actions">
          <a
            className="btn btn-secondary btn-sm"
            href={personalData.resumePath}
            download="Rajeev_Yadav_Resume.pdf"
          >
            <ArrowDownToLine size={14} />
            <span>Resume</span>
          </a>
          <a
            className="btn btn-primary btn-sm"
            href="https://github.com/rajeev8299"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
          </a>

          <button
            className={`hamburger-btn ${menuOpen ? "open" : ""}`}
            type="button"
            aria-label="Navigation Menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </div>

      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-drawer-content">
          <ul className="mobile-nav-list">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`mobile-nav-link ${activeSection === item.id ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <a
              href={personalData.resumePath}
              download="Rajeev_Yadav_Resume.pdf"
              className="btn btn-secondary"
              style={{ width: "100%" }}
              onClick={closeMenu}
            >
              <ArrowDownToLine size={16} />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
