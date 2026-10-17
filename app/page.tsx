import Link from "next/link";
import Image from "next/image";
import HeroHeadline from "@/components/HeroHeadline";
import HeroSubheading from "@/components/HeroSubheading";
import PostCard from "@/components/PostCard";
import ProductPhoto from "@/components/ProductPhoto";
import SelectedWorkGrid from "@/components/SelectedWorkGrid";
import StudioRoadmap from "@/components/StudioRoadmap";
import pinPoint from "@/assets/images/pinpoint.svg";
import { posts } from "@/lib/posts";
import { products } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: site.name,
  fullTitle: `${site.name} | ${site.tagline}`,
  description: site.description,
  path: "/",
});

const featuredSlugs = [
  "stockwise",
 
  "advancelist-view",
  "ncryptor",
  "sbf-india",
   "scalerhire",
  "cyberprobe",
];
const steps = [
  {
    legend: "01 · Discover",
    icon: "task",
    title: "Identify meaningful problems",
    text: "We uncover challenges facing individuals and teams, from financial pressures to productivity obstacles, and assess where a purpose-built solution can make a difference.",
  },
  {
    legend: "02 · Design & build",
    icon: "scope",
    title: "Develop a viable solution",
    text: "We turn a validated need into a practical product, shaping useful features around real-world requirements and delivering a solution customers can rely on.",
  },
  {
    legend: "03 · Launch & sustain",
    icon: "build",
    title: "Launch, learn, and sustain",
    text: "We put the solution in customers’ hands, gather their feedback, and continue improving it. A sustainable revenue model helps fund hosting and ongoing maintenance.",
  },
];

function ProcessIcon({ name }: { name: string }) {
  if (name === "task") {
    return (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M12 8.5h16a3 3 0 0 1 3 3v21H9v-21a3 3 0 0 1 3-3Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M15 7h10v4H15zM14.5 18h11M14.5 23h11M14.5 28h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="m12.5 18 .8.8 1.7-1.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "scope") {
    return (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="18" cy="18" r="9.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="m25 25 7 7M18 13v10M13 18h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M10 29.5h20M13 25l12-12 4 4-12 12h-4v-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m22.5 15.5 4 4M12 9.5h8M12 13.5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function HomePage() {
  const featured = featuredSlugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product) => product !== undefined);

  return (
    <>
      <section className="studio-hero" aria-labelledby="hero-title">
        <video
          className="studio-hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/bg-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/bg.mp4" type="video/mp4" />
        </video>
        <div className="studio-hero__scrim" aria-hidden="true" />
        <div className="container studio-hero__content">
          <div className="studio-hero__copy">
            <HeroHeadline />
            <HeroSubheading />
            <a className="btn btn--primary hero-reveal hero-reveal--two" href="#contact">
              Discuss a project
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="selected-work" aria-labelledby="work-title">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title">Different tools for different jobs.</h2>
            <p>The company’s current projects, with availability and direct links where public.</p>
          </div>

          <SelectedWorkGrid>
            {featured.map((product) => (
              <article className="selected-work__item" key={product.slug}>
                <ProductPhoto product={product} />
                <div className="selected-work__copy">
                  <p className="selected-work__meta">
                    {product.kind} <span aria-hidden="true">/</span> {product.availability}
                  </p>
                  <h3>{product.name}</h3>
                  <p className="selected-work__audience">For {product.builtFor.toLowerCase()}</p>
                  <p>{product.summary}</p>
                  <div className="product-links">
                    {product.links.map((link) => (
                      <a className="text-link" href={link.url} target="_blank" rel="noopener noreferrer" key={link.url}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </SelectedWorkGrid>

          <p className="section__more">
            <Link className="text-link" href="/solutions/">Explore the complete portfolio</Link>
          </p>
        </div>
      </section>

      <section className="section section--gray studio-approach" id="approach" aria-labelledby="approach-title">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">How the company works</p>
            <h2 id="approach-title">From real-world challenge to sustainable product.</h2>
          </div>
          <StudioRoadmap>
            <ul className="studio-steps">
              {steps.map((step) => (
                <li className="studio-step-card" key={step.title}>
                  <Image className="studio-step-card__pin" src={pinPoint} alt="" width={34} height={49} />
                  <p className="studio-step-card__legend">{step.legend}</p>
                  <span className="studio-step-card__icon">
                    <ProcessIcon name={step.icon} />
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ul>
          </StudioRoadmap>
        </div>
      </section>

      <section className="section" aria-labelledby="notes-title">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Blog</p>
            <h2 id="notes-title">Understand the technology shaping what’s next.</h2>
            <p>Practical insights on web development, mobile apps and artificial intelligence.</p>
          </div>
          <div className="cards">
            {posts.slice(0, 3).map((post) => <PostCard post={post} key={post.slug} />)}
          </div>
          <p className="section__more">
            <Link className="text-link" href="/blog/">Read the Blog</Link>
          </p>
        </div>
      </section>

      <section className="section section--dark" id="contact" aria-labelledby="contact-title">
        <div className="container contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Have a specific job in mind?</h2>
            <p className="contact__text">
              Tell us who does it today and what makes it difficult. A few lines are enough to start.
            </p>
          </div>
          <div className="contact__panel">
            <p className="contact__label">Discuss a project</p>
            <a className="contact__mail" href={`mailto:${site.email}?subject=Discuss%20a%20project`}>
              {site.email}
            </a>
            <br />
            <a className="btn btn--primary" href={`mailto:${site.email}?subject=Discuss%20a%20project`}>
              Discuss a project
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
