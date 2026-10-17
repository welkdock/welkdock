import Link from "next/link";
import Brand from "@/components/Brand";
import PageHero from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Company",
  description:
    "Meet Welkdock: an independent team of developers building practical websites, apps, desktop software and AI tools to make everyday tasks easier.",
  path: "/studio/",
});

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Independent by design. Focused on the work."
        crumbs={[{ label: "Home", href: "/" }, { label: "Company" }]}
      >
        <p className="page-hero__lead">
          Welkdock is an independent software company operating as {site.legalName}. We build practical software
          shaped around real needs, with a focus on making everyday work simpler and more productive.
        </p>
      </PageHero>

      <section className="section" aria-labelledby="studio-focus">
        <div className="container studio-about">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 id="studio-focus">Independent developers, building for better work.</h2>
          </div>
          <div className="studio-about__text">
            <p>
              We are an independent software company focused on productivity tools. We look for everyday tasks that
              can be made clearer, faster or easier, then explore how thoughtful software can help.
            </p>
            <Brand label="Welkdock Technologies" />
          </div>
        </div>
      </section>

      <section className="section section--gray" aria-labelledby="studio-process">
        <div className="container studio-about">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 id="studio-process">Useful software for everyday challenges.</h2>
          </div>
          <div className="studio-about__text">
            <p>
              We develop websites, mobile apps, desktop applications and AI-powered tools. Each product starts with a
              practical goal: helping people handle common tasks with less friction.
            </p>
            <Link className="text-link" href="/solutions/">Explore our products</Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="studio-proof">
        <div className="container studio-about">
          <div>
            <p className="eyebrow">Our team</p>
            <h2 id="studio-proof">Fellow developers, making ideas real.</h2>
          </div>
          <div className="studio-about__text">
            <p>
              Our team is made up of fellow developers who enjoy building and learning together. We turn ideas into
              useful software, share what we discover and keep improving the tools we create.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="studio-contact">
        <div className="container studio-contact">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2 id="studio-contact">Tell us about the task.</h2>
          </div>
          <a className="btn btn--primary" href={`mailto:${site.email}?subject=Discuss%20a%20project`}>
            Discuss a project
          </a>
        </div>
      </section>
    </>
  );
}
