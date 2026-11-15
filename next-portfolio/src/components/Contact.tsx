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
          <h2 className="section-title">Let&apos;s build something meaningful.</h2>
          <p className="section-subtitle">
            Open to frontend opportunities and interesting web projects.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-editorial-grid">
          {/* Left Column: Direct Info Card */}
          <div className="contact-channels-panel">
            <h3 className="channels-panel-title">Direct Connection Points</h3>
            <p className="channels-panel-desc">
              Reach out directly via email, phone, or verified social networks. I typically reply within 24 hours.
            </p>

            <div className="contact-touchpoints-stack">
              {/* Email Touchpoint */}
              <div className="touchpoint-card">
                <div className="touchpoint-icon-box blue-box">
                  <Mail size={18} />
                </div>
                <div className="touchpoint-body">
                  <span className="touchpoint-label">Primary Email</span>
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
                  <span className="touchpoint-label">Direct Phone &amp; WhatsApp</span>
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
                  <span className="touchpoint-label">Location Base</span>
                  <span className="touchpoint-val">{personalData.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions Bar */}
            <div className="channels-actions-bar">
              <a
                href={personalData.resumePath}
                download="Rajeev_Yadav_Resume.pdf"
                className="btn btn-primary btn-sm"
              >
                <Download size={14} />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href="https://github.com/rajeev8299"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <GithubIcon size={14} />
                <span>GitHub Profile</span>
              </a>
            </div>

            {/* Verified Social Networks */}
            <div className="verified-networks-tray">
              <span className="tray-label">Verified Networks:</span>
              <div className="tray-chips">
                {personalData.socials.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="network-chip"
                    aria-label={`Open ${s.name}`}
                  >
                    <span>{s.name}</span>
                    <ArrowUpRight size={12} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Direct Inquiry Form */}
          <div className="contact-form-panel">
            <h3 className="form-panel-title">Send a Message</h3>
            <p className="form-panel-desc">
              Have an opening or project inquiry? Fill out the details below to initiate direct email contact.
            </p>

            <form onSubmit={handleSubmit} className="contact-editorial-form" noValidate>
              <div className="form-field-group">
                <label htmlFor="contact-name" className="field-label">
                  Your Full Name <span className="required-star">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Priyanshu Sharma"
                  className="field-input"
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="contact-email" className="field-label">
                  Your Email Address <span className="required-star">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. priyanshu@company.com"
                  className="field-input"
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="contact-subject" className="field-label">
                  Subject / Topic
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Frontend Developer Role / Project Proposal"
                  className="field-input"
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="contact-message" className="field-label">
                  Your Message <span className="required-star">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your team, role, or project..."
                  className="field-textarea"
                />
              </div>

              {status.message && (
                <div className={`form-status-banner ${status.state}`}>{status.message}</div>
              )}

              <div className="form-submit-row">
                <button type="submit" className="btn btn-primary">
                  <Send size={16} />
                  <span>Send Message Directly</span>
                </button>
                <a
                  href={`mailto:${personalData.email}?subject=${encodeURIComponent(
                    formData.subject || "Portfolio Inquiry"
                  )}&body=${encodeURIComponent(formData.message || "")}`}
                  className="btn btn-secondary btn-sm"
                >
                  <span>Open In Mail App</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
