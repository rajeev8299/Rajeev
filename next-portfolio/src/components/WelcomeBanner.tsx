"use client";

import { useEffect, useState } from "react";

interface WelcomeBannerProps {
  name?: string;
  onDone?: () => void;
}

export default function WelcomeBanner({
  name = "Rajeev Yadav",
  onDone,
}: WelcomeBannerProps) {
  const [isLeaving, setIsLeaving] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Check if user has already visited in this session
    const hasVisited = sessionStorage.getItem("portfolio_greeted");
    if (hasVisited) {
      setHidden(true);
      if (onDone) onDone();
      return;
    }

    const dismissTimer = setTimeout(() => {
      setIsLeaving(true);
      setTimeout(() => {
        setHidden(true);
        sessionStorage.setItem("portfolio_greeted", "true");
        if (onDone) onDone();
      }, 600);
    }, 2400);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " ") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      clearTimeout(dismissTimer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onDone]);

  const handleSkip = () => {
    setIsLeaving(true);
    setTimeout(() => {
      setHidden(true);
      sessionStorage.setItem("portfolio_greeted", "true");
      if (onDone) onDone();
    }, 400);
  };

  if (hidden) return null;

  return (
    <aside
      className={`human-greeting${isLeaving ? " leaving" : ""}`}
      aria-label="Welcome greeting"
    >
      <div className="human-greeting-card">
        <div className="human-greeting-avatar">
          <span className="human-wave">👋</span>
        </div>
        <div className="human-greeting-body">
          <p className="human-greeting-sub">Namaste &amp; Hello, welcome to my space!</p>
          <h2 className="human-greeting-title">
            I&apos;m <span>{name}</span>
          </h2>
          <p className="human-greeting-desc">Frontend developer building clean, thoughtful web interfaces.</p>
        </div>
        <button
          className="human-greeting-skip"
          type="button"
          onClick={handleSkip}
          aria-label="Skip welcome note"
        >
          Enter &rarr;
        </button>
      </div>
    </aside>
  );
}
