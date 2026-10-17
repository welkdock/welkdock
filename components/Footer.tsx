import Link from "next/link";
import { site } from "@/lib/site";
import Brand from "./Brand";
import CookieSettingsButton from "./CookieSettingsButton";

const socialChannels = [
  { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/welkdock/" },
  { name: "X", icon: "x", href: "https://x.com/welkdock" },
] as const;

function SocialIcon({ name }: { name: (typeof socialChannels)[number]["icon"] | "email" }) {
  if (name === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.5 6.5 12 13l8.5-6.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M4 6.5h16v12H4z" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.7" cy="6.7" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  if (name === "x") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 4h4.2l9.8 16h-4.2L5 4Zm0 16 5.8-6.4m2.4-3.2L19 4" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M13.5 21v-8h2.8l.4-3.1h-3.2v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__about">
            <Brand imageSrc="/brand/logo_transparent.png" />
            <p className="footer__tagline">
              An independent software company building focused tools for specific jobs.
            </p>
            <div className="footer__socials" aria-label="Email and social media">
              <a className="footer__social" href={`mailto:${site.email}`} aria-label="Email Welkdock">
                <SocialIcon name="email" />
              </a>
              {socialChannels.map((channel) => (
                <a
                  className="footer__social"
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Welkdock on ${channel.name} (@welkdock)`}
                  title={`Welkdock on ${channel.name}`}
                  key={channel.name}
                >
                  <SocialIcon name={channel.icon} />
                </a>
              ))}
            </div>
          </div>

          <nav className="footer__col" aria-label="Company">
            <p className="footer__title">Company</p>
            <Link href="/solutions/">Products</Link>
            <Link href="/studio/">Company</Link>
            <Link href="/blog/">Blog</Link>
          </nav>

          <nav className="footer__col" aria-label="Legal">
            <p className="footer__title">Legal</p>
            <Link href="/privacy/">Privacy Policy</Link>
            <Link href="/terms/">Terms and Conditions</Link>
            <CookieSettingsButton />
          </nav>

          <div className="footer__col">
            <p className="footer__title">Contact</p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <Link href="/#contact">Discuss a project</Link>
          </div>
        </div>
        <p className="footer__bottom">
          &copy; 2026 {site.legalName} All rights reserved. Stock photographs from{" "}
          <a href="https://unsplash.com/" rel="noopener noreferrer">Unsplash</a>.
        </p>
      </div>
    </footer>
  );
}
