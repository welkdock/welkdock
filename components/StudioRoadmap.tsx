"use client";

import Image from "next/image";
import { useEffect, useRef, type ReactNode } from "react";

export default function StudioRoadmap({ children }: { children: ReactNode }) {
  const roadmapRef = useRef<HTMLDivElement>(null);
  const progressClipRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    const roadmap = roadmapRef.current;
    if (!roadmap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const track = roadmap.closest<HTMLElement>(".studio-approach");
    if (!track) return;

    const steps = Array.from(roadmap.querySelectorAll(".studio-steps > li"));
    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const bounds = track.getBoundingClientRect();
      const headerHeight = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 0;
      const scrollDistance = bounds.height - (window.innerHeight - headerHeight);
      const progress = Math.max(0, Math.min(1, (headerHeight - bounds.top) / scrollDistance));

      roadmap.style.setProperty("--roadmap-progress", String(progress));
      if (progressClipRef.current) {
        progressClipRef.current.setAttribute("width", String(Math.min(progress / 0.8, 1) * 800));
      }
      steps.forEach((step, index) => {
        step.classList.toggle("is-active", progress >= index * 0.38 + 0.04);
      });
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    roadmap.classList.add("is-scroll-ready");
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.cancelAnimationFrame(frame);
      roadmap.classList.remove("is-scroll-ready");
    };
  }, []);

  return (
    <div className="studio-roadmap" ref={roadmapRef}>
      <svg className="studio-roadmap__path" viewBox="0 0 1200 180" preserveAspectRatio="none" aria-hidden="true">
        <path
          className="studio-roadmap__route"
          d="M200 180C200 120 280 88 400 88S560 120 600 180C640 120 800 88 880 88S1000 120 1000 180"
        />
        <path
          className="studio-roadmap__progress"
          d="M200 180C200 120 280 88 400 88S560 120 600 180C640 120 800 88 880 88S1000 120 1000 180"
          clipPath="url(#studio-roadmap-progress-clip)"
        />
        <clipPath id="studio-roadmap-progress-clip" clipPathUnits="userSpaceOnUse">
          <rect ref={progressClipRef} x="200" y="0" width="0" height="180" />
        </clipPath>
      </svg>
      {children}
    </div>
  );
}
