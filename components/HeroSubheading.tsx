"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const messages = [
  <>
    Use our community resources and web tools to boost your productivity.{" "}
    <Link href="/solutions/">Explore our products and tools</Link>
  </>,
  <>
    Have a problem you’d like to solve for yourself? Tell us about it. If it’s a fit, we’ll make it for you, for free.
  </>,
  <>
    Have honest feedback? Email <a href={`mailto:${site.email}`}>{site.email}</a> and tell us how we can improve.
  </>,
];

export default function HeroSubheading() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(reduceMotion.matches);
    updatePreference();
    reduceMotion.addEventListener("change", updatePreference);

    return () => reduceMotion.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;

    const interval = window.setInterval(() => {
      setMessageIndex((current) => (current + 1) % messages.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [paused, reducedMotion]);

  const showMessage = (offset: number) => {
    setMessageIndex((current) => (current + offset + messages.length) % messages.length);
  };

  return (
    <div className="studio-hero__message-rotator" aria-label="Company information">
      <div className="studio-hero__messages">
        <p className="studio-hero__message" key={messageIndex}>
          {messages[messageIndex]}
        </p>
      </div>
      <div className="studio-hero__message-controls" aria-label="Subheading controls">
        <button type="button" onClick={() => showMessage(-1)} aria-label="Previous message" title="Previous message">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m15 18-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {!reducedMotion && (
          <button
            type="button"
            onClick={() => setPaused((current) => !current)}
            aria-label={paused ? "Play messages" : "Pause messages"}
            title={paused ? "Play messages" : "Pause messages"}
            aria-pressed={paused}
          >
            {paused ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7L8 5Z" fill="currentColor" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5h3v14H8zM15 5h3v14h-3z" fill="currentColor" />
              </svg>
            )}
          </button>
        )}
        <button type="button" onClick={() => showMessage(1)} aria-label="Next message" title="Next message">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9 18 6-6-6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
