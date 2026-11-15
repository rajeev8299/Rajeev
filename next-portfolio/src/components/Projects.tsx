"use client";

import { useState } from "react";
import { projectsData, Project } from "@/data/portfolio";
import { ArrowUpRight, Sparkles, Filter, ExternalLink, ShoppingCart, Compass, Stethoscope, Dumbbell, Store, Layout } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterOptions = [
    { id: "all", label: "All Projects (6)" },
    { id: "next", label: "Next.js & React" },
    { id: "javascript", label: "JavaScript & DOM" },
    { id: "css", label: "Modern CSS & UI" },
  ];

  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];
  const standardProjects = projectsData.filter((p) => p.num !== featuredProject.num);

  const filterMatches = (p: Project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "next") return p.tags.some((t) => t.includes("React") || t.includes("Next.js"));
    if (activeFilter === "javascript") return p.tags.some((t) => t.includes("JavaScript") || t.includes("DOM API") || t.includes("TypeScript"));
    if (activeFilter === "css") return p.tags.some((t) => t.includes("CSS") || t.includes("Modern CSS") || t.includes("Responsive Design"));
    return true;
  };

  const filteredStandard = standardProjects.filter(filterMatches);
  const showFeatured = filterMatches(featuredProject);

  const renderProjectVisual = (project: Project) => {
    switch (project.uiVisualType) {
      case "travel":
        return (
          <div className="project-curated-preview travel-preview">
            <div className="preview-top-bar">
              <Compass size={14} className="preview-top-icon" />
              <span>Travel Buddy Explorer</span>
              <span className="preview-status-tag">Vanilla JS</span>
            </div>
            <div className="preview-body-content">
              <div className="preview-dest-cards">
                <div className="preview-mini-card">
                  <span className="mini-tag">Itinerary</span>
                  <strong>Varanasi Heritage</strong>
                  <small>Ghats &amp; Culture Tour</small>
                </div>
                <div className="preview-mini-card">
                  <span className="mini-tag">Filtering</span>
                  <strong>Dynamic Categories</strong>
                  <small>DOM State Management</small>
                </div>
              </div>
            </div>
          </div>
        );
      case "medical":
        return (
          <div className="project-curated-preview medical-preview">
            <div className="preview-top-bar">
              <Stethoscope size={14} className="preview-top-icon" />
              <span>Dental Clinic Healthcare Portal</span>
              <span className="preview-status-tag">React.js</span>
            </div>
            <div className="preview-body-content">
              <div className="preview-schedule-mock">
                <div className="schedule-row">
                  <span className="spec-name">Doctor Schedules</span>
                  <span className="spec-badge">Available</span>
                </div>
                <div className="schedule-row">
                  <span className="spec-name">Appointment Inquiries</span>
                  <span className="spec-badge">Form Validated</span>
                </div>
              </div>
            </div>
          </div>
        );
      case "fitness":
        return (
          <div className="project-curated-preview fitness-preview">
            <div className="preview-top-bar">
              <Dumbbell size={14} className="preview-top-icon" />
              <span>Rajeev Fitness Studio</span>
              <span className="preview-status-tag">Modern CSS</span>
            </div>
            <div className="preview-body-content">
              <div className="preview-fitness-tiers">
                <div className="tier-mock">
                  <span className="tier-title">Batch Timings</span>
                  <strong className="tier-val">Morning &amp; Evening</strong>
                </div>
                <div className="tier-mock">
                  <span className="tier-title">Membership Plans</span>
                  <strong className="tier-val">Tier Comparison</strong>
                </div>
              </div>
            </div>
          </div>
        );
      case "retail":
        return (
          <div className="project-curated-preview retail-preview">
            <div className="preview-top-bar">
              <ShoppingCart size={14} className="preview-top-icon" />
              <span>E-Commerce Storefront</span>
              <span className="preview-status-tag">Cart Logic</span>
            </div>
            <div className="preview-body-content">
              <div className="preview-cart-mock">
                <div className="cart-stat-row">
                  <span>Cart State Machine</span>
                  <strong>localStorage Sync</strong>
                </div>
                <div className="cart-stat-row">
                  <span>Interactive Drawer</span>
                  <strong>Live Pricing Engine</strong>
                </div>
              </div>
            </div>
          </div>
        );
      case "editorial":
        return (
          <div className="project-curated-preview editorial-preview">
            <div className="preview-top-bar">
              <Layout size={14} className="preview-top-icon" />
              <span>Personal Developer Space</span>
              <span className="preview-status-tag">Next.js 16</span>
            </div>
            <div className="preview-body-content">
              <div className="preview-editorial-deck">
                <div className="editorial-stat-item">
                  <span className="stat-label">Architecture</span>
                  <strong className="stat-val">Next.js App Router</strong>
                </div>
                <div className="editorial-stat-item">
                  <span className="stat-label">Styling</span>
                  <strong className="stat-val">Custom CSS3 System</strong>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="section projects-section" aria-label="Featured Projects Showcase">
      <div className="container">
        {/* Section Header */}
        <div className="projects-section-head">
          <div>
            <div className="section-kicker">
              <Sparkles size={13} className="kicker-icon" />
              <span>Portfolio Case Studies</span>
            </div>
            <h2 className="section-title">Selected projects &amp; deployed work.</h2>
            <p className="section-subtitle">
              Each project is a verified web application with authentic source repositories, live deployments, and an intentional problem-solving focus.
            </p>
          </div>

          <div className="projects-head-cta">
            <a
              href="https://github.com/rajeev8299?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <span>GitHub Repositories</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="projects-filter-toolbar" role="tablist" aria-label="Filter projects by technology stack">
          <div className="filter-toolbar-label">
            <Filter size={14} />
            <span>Filter By Focus:</span>
          </div>
          <div className="filter-buttons-row">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                role="tab"
                aria-selected={activeFilter === opt.id}
                className={`filter-pill-btn ${activeFilter === opt.id ? "active" : ""}`}
                onClick={() => setActiveFilter(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 1. Large Featured Showcase Case Study */}
        {showFeatured && (
          <article className="featured-project-card">
            <div className="featured-card-editorial-badge">
              <Sparkles size={13} />
              <span>Featured Engineering Highlight · Case Study</span>
            </div>

            <div className="featured-project-grid">
              <div className="featured-project-content">
                <div className="project-eyebrow-row">
                  <span className="project-index-pill">Project {featuredProject.num}</span>
                  <span className="project-stack-label">{featuredProject.lang}</span>
                </div>

                <h3 className="featured-project-title">{featuredProject.title}</h3>
                <p className="featured-project-tagline">{featuredProject.tagline}</p>
                <p className="featured-project-desc">{featuredProject.desc}</p>

                <div className="project-tech-chips">
                  {featuredProject.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="featured-project-actions">
                  <a
                    href={featuredProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    aria-label={`View live website for ${featuredProject.title}`}
                  >
                    <span>Launch Live Demo</span>
                    <ArrowUpRight size={16} />
                  </a>
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    aria-label={`View GitHub repository for ${featuredProject.title}`}
                  >
                    <GithubIcon size={16} />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

              {/* Graphical Project Presentation Panel */}
              <div className="featured-project-visual-panel">
                <div className="project-visual-canvas">
                  <div className="project-browser-mockup-header">
                    <span className="browser-dot" />
                    <span className="browser-dot" />
                    <span className="browser-dot" />
                    <span className="browser-url-bar">https://rajeev8299.github.io/tazasabjibazzar</span>
                  </div>
                  <div className="project-canvas-body">
                    <div className="project-preview-hero-mock">
                      <div className="preview-badge">Next.js App Router</div>
                      <h4>Taza Sabji Bazzar</h4>
                      <p>Instant Produce &amp; Daily Grocery Ordering Storefront</p>
                      <div className="preview-stepper-mock">
                        <span>Cart: 4 Fresh Items</span>
                        <span>Subtotal: ₹240</span>
                        <span className="mock-checkout-btn">Checkout</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* 2. Diverse Alternating Grid of Additional Projects */}
        <div className="projects-cards-grid">
          {filteredStandard.map((project, idx) => (
            <article key={project.num} className={`standard-project-card card-variant-${idx % 2 === 0 ? "even" : "odd"}`}>
              {/* Visual preview header for diverse visual storytelling */}
              {renderProjectVisual(project)}

              <div className="standard-card-body">
                <div className="project-card-header">
                  <div className="project-header-top">
                    <span className="standard-project-index">{project.num}</span>
                    <span className="standard-stack-pill">{project.lang}</span>
                  </div>
                  <h3 className="standard-project-title">{project.title}</h3>
                  <span className="standard-project-tagline">{project.tagline}</span>
                </div>

                <p className="standard-project-desc">{project.desc}</p>

                <div className="standard-tags-row">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="standard-project-footer">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    aria-label={`Open live website for ${project.title}`}
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    aria-label={`Open GitHub repository for ${project.title}`}
                  >
                    <GithubIcon size={14} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
