"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function SelectedWorkGrid({ children }: { children: ReactNode }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Array.from(grid.children).filter(
      (item): item is HTMLElement => item instanceof HTMLElement,
    );
    if (!items.length || !("IntersectionObserver" in window)) return;

    grid.classList.add("selected-work--reveal-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="selected-work" ref={gridRef}>
      {children}
    </div>
  );
}
