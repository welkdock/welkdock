"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import Brand from "./Brand";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="site-header">
      <div className="container header__inner">
        <Brand />

        <button
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`nav__toggle-icon${open ? " is-open" : ""}`} aria-hidden="true">
            <span />
            <span />
          </span>
          <span>{open ? "Close" : "Menu"}</span>
        </button>

        <nav className={`nav${open ? " is-open" : ""}`} id="site-nav" aria-label="Primary">
          <ul className="nav__list">
            {nav.map((item) => {
              const current = item.href.startsWith("/#") ? false : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link href={item.href} aria-current={current ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a className="btn btn--primary btn--sm" href={`mailto:${site.email}?subject=Discuss%20a%20project`}>
            Discuss a project
          </a>
        </nav>
      </div>
    </header>
  );
}
