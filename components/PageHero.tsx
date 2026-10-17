import Link from "next/link";
import type { ReactNode } from "react";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  children,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  crumbs?: Crumb[];
}) {
  return (
    <div className="page-hero">
      <div className="container">
        {crumbs && (
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
              {crumbs.map((crumb) => (
                <li key={crumb.label}>
                  {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}
