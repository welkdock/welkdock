import Link from "next/link";
import Image from "next/image";
import ProductPhoto from "@/components/ProductPhoto";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import googlePlayIcon from "@/assets/images/google_play_icon.png";
import { areas, products, productsByArea, type AreaId } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

function ProductLinkIcon({ href }: { href: string }) {
  if (href.startsWith("mailto:")) {
    return (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 5.5h14v9H3zM3.5 6l6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    );
  }

  if (href.includes("play.google.com")) {
    return <Image src={googlePlayIcon} width={20} height={20} alt="" aria-hidden="true" />;
  }

  if (href.includes("npmjs.com") || href.includes("pub.dev")) {
    return (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3.5 6.5h13v7h-6v-4h-2v4h-5v-7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M11 4h5v5M16 4l-7 7M14 11v4.5H4.5v-9H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const metadata = pageMetadata({
  title: "Products",
  description:
    "Explore Welkdock's independent projects: developer packages, security testing tools, mobile applications and hiring software. Public availability is stated for each product.",
  path: "/solutions/",
});

const category: Record<AreaId, string> = {
  packages: "DeveloperApplication",
  security: "SecurityApplication",
  apps: "BusinessApplication",
  hiring: "BusinessApplication",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/solutions/") },
      ],
    },
    {
      "@type": "ItemList",
      name: "Independent software projects by Welkdock",
      itemListElement: products.map((product, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareApplication",
          name: product.name,
          description: product.summary,
          applicationCategory: category[product.area],
          author: { "@id": `${site.url}/#organization` },
          ...(product.links[0] ? { url: product.links[0].url } : {}),
        },
      })),
    },
  ],
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Useful software. Thoughtfully built."
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      >
        <p className="page-hero__lead">
          We build practical tools around real needs—designed with care, made to work in the real world, and improved
          with the people who use them. Explore our independent products for developers, businesses, security teams,
          and communities.
        </p>
      </PageHero>

      {areas.map((area) => (
        <section
          className="section portfolio-section"
          id={area.id}
          key={area.id}
          aria-labelledby={`${area.id}-title`}
        >
          <div className="container">
            <div className="portfolio-section__head">
              <p className="eyebrow">{area.audience}</p>
              <h2 id={`${area.id}-title`}>{area.title}</h2>
              <p>{area.lead}</p>
            </div>
            <div className="portfolio-grid">
              {productsByArea(area.id).map((product) => (
                <article className="portfolio-card" id={product.slug} key={product.slug}>
                  <ProductPhoto product={product} />
                  <div className="portfolio-card__body">
                    <div className="portfolio-card__title">
                      <h3>{product.name}</h3>
                      <span>{product.kind}</span>
                    </div>
                    <p className="portfolio-card__built-for">For {product.builtFor.toLowerCase()}</p>
                    <p>{product.summary}</p>
                    <p className="portfolio-card__availability">
                      <strong>Availability:</strong> {product.availability}
                      {product.availability === "In development" && <span> — not yet available to try.</span>}
                    </p>
                    {product.links.length ? (
                      <div className="product-links">
                        {product.links.map((link) => (
                          <a className="btn btn--outline btn--sm product-action" href={link.url} target="_blank" rel="noopener noreferrer" key={link.url}>
                            <ProductLinkIcon href={link.url} />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a
                        className="btn btn--outline btn--sm product-action"
                        href={`mailto:${site.email}?subject=${encodeURIComponent(`Ask about ${product.name}`)}`}
                      >
                        <ProductLinkIcon href="mailto:" />
                        Ask about the project
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section section--gray" aria-labelledby="contact-title">
        <div className="container portfolio-contact">
          <div>
            <p className="eyebrow">A different task?</p>
            <h2 id="contact-title">Tell us what needs doing.</h2>
          </div>
          <Link className="btn btn--primary" href="/#contact">Discuss a project</Link>
        </div>
      </section>

      <JsonLd data={jsonLd} />
    </>
  );
}
