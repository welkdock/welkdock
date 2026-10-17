import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Error 404</p>
        <h1>This page does not exist.</h1>
        <p className="page-hero__lead">The address may be mistyped, or the page may have moved.</p>
        <div className="hero__actions">
          <Link className="btn btn--primary" href="/">
            Go to the home page
          </Link>
          <Link className="btn btn--outline" href="/blog/">
            Read the blog
          </Link>
        </div>
      </div>
    </section>
  );
}
