import type { ReactNode } from "react";
import PageHero from "./PageHero";

export type LegalSection = { id: string; title: string; body: ReactNode };

export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title}>
        <p>Last updated: {updated}</p>
      </PageHero>

      <div className="container legal">
        <nav className="legal__toc" aria-label="On this page">
          <p className="legal__toc-title">On this page</p>
          <ol>
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="legal__body">
          {intro}
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2>{section.title}</h2>
              {section.body}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
