"use client";

import { useEffect, useState } from "react";

const options = ["Website", "App", "Ecommerce Store", "AI Solution"];

export default function HeroHeadline() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(options[0]);
  const [deleting, setDeleting] = useState(false);
  const [motionAllowed, setMotionAllowed] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setMotionAllowed(!preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);

    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!motionAllowed) return;

    const currentOption = options[wordIndex];
    let delay: number;
    let timeout: number;

    if (!deleting && text === currentOption) {
      delay = 1500;
      timeout = window.setTimeout(() => setDeleting(true), delay);
    } else if (deleting && text.length === 0) {
      delay = 300;
      timeout = window.setTimeout(() => {
        setWordIndex((current) => (current + 1) % options.length);
        setDeleting(false);
      }, delay);
    } else {
      delay = deleting ? 55 : 105;
      timeout = window.setTimeout(() => {
        setText(currentOption.slice(0, text.length + (deleting ? -1 : 1)));
      }, delay);
    }

    return () => window.clearTimeout(timeout);
  }, [deleting, motionAllowed, text, wordIndex]);

  return (
    <h1 className="hero-reveal hero-reveal--one hero-headline" id="hero-title">
      <span className="sr-only">
        Looking to build your next website, app, ecommerce store, or AI solution? We can help.
      </span>
      <span aria-hidden="true">
        <span className="hero-headline__intro">Looking to build your next</span>
        <span className="hero-headline__offer">
          <span className="hero-headline__term">{text}</span>
          <span className="hero-headline__cursor" />
        </span>
        <span className="hero-headline__close">We can help.</span>
      </span>
    </h1>
  );
}
