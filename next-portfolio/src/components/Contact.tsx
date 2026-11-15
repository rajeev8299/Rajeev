"use client";

import { useState } from "react";
import { personalData } from "@/data/portfolio";
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, Send, Download } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(personalData.email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      })
      .catch(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ state: "error", message: "Please fill in all required fields." });
      return;
    }
    const subject = encodeURIComponent(formData.subject || "Portfolio Contact Inquiry");
    const body = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
    setStatus({
      state: "success",
      message: "Opening your mail client with pre-filled message details.",
    });
  };

  return (
    <section id="contact" className="section contact-section" aria-label="Contact Rajeev Yadav">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">
            <span>Contact</span>
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Open to frontend opportunities and interesting web projects.
          </p>
        </div>

        {/* Contact 50:50 Grid */}
        <div className="contact-editorial-grid">
          {/* Left Column: Direct Connection */}
          <div className="contact-channels-panel">
            <h3 className="channels-panel-title">Direct Connection</h3>
            <p className="channels-panel-desc">
              Reach me through these channels.
            </p>

            <div className="contact-touchpoints-stack">
              {/* Email Touchpoint */}
              <div className="touchpoint-card">
                <div className="touchpoint-icon-box blue-box">
                  <Mail size={18} />
                </div>
                <div className="touchpoint-body">
                  <span className="touchpoint-label">Email</span>
                  <a href={`mailto:${personalData.email}`} className="touchpoint-val">
                    {personalData.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm copy-touchpoint-btn"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Phone Touchpoint */}
              <div className="touchpoint-card">
                <div className="touchpoint-icon-box teal-box">
                  <Phone size={18} />
                </div>
                <div className="touchpoint-body">
                  <span className="touchpoint-label">Phone &amp; WhatsApp</span>
                  <a href={`tel:${personalData.phone.replace(/\s+/g, "")}`} className="touchpoint-val">
                    {personalData.displayPhone}
                  </a>
                </div>
              </div>

              {/* Location Touchpoint */}
              <div className="touchpoint-card">
                <div className="touchpoint-icon-box amber-box">
                  <MapPin size={18} />
                </div>
                <div className="touchpoint-body">
                  <span className="touchpoint-label">Location</span>
                  <span className="touchpoint-val">{personalData.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions Bar */}
            <div className="channels-actions-bar">
              <a
                href={personalData.resumePath}
                download="Rajeev_Yadav_Resume.pdf"
                className="btn btn-secondary"
              >
                <Download size={15} />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href="https://github.com/rajeev8299"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <GithubIcon size={15} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Right Column: Send a Message */}
          <div className="contact-form-panel">
            <h3 className="form-panel-title">Send a Message</h3>
            <p className="form-panel-desc">
              Have a project or opportunity? Let&apos;s connect.
            </p>

            {/* Direct Inquiry Form with Professional 2-Column Responsive Grid */}
            <form onSubmit={handleSubmit} className="contact-form-grid" noValidate>
              <div className="contact-field">
                <label htmlFor="contact-name" className="contact-field-label">
                  Full Name <span className="required-star">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="contact-field-input"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email" className="contact-field-label">
                  Email Address <span className="required-star">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="contact-field-input"
                />
              </div>

              <div className="contact-field full-width">
                <label htmlFor="contact-subject" className="contact-field-label">
                  Subject <span className="optional-tag">(Optional)</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry / Job opportunity"
                  className="contact-field-input"
                />
              </div>

              <div className="contact-field full-width">
                <label htmlFor="contact-message" className="contact-field-label">
                  Message <span className="required-star">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me briefly about your project or opportunity..."
                  className="contact-field-textarea"
                />
              </div>

              {status.message && (
                <div className={`contact-status-banner full-width ${status.state}`}>
                  {status.message}
                </div>
              )}

              <div className="contact-actions-row full-width">
                <button type="submit" className="btn btn-primary btn-submit">
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
                <a
                  href={`mailto:${personalData.email}?subject=${encodeURIComponent(
                    formData.subject || "Project Inquiry"
                  )}&body=${encodeURIComponent(formData.message || "")}`}
                  className="btn btn-outline"
                >
                  <Mail size={16} />
                  <span>Email Me Directly</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
