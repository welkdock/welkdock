import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import PostCard from "@/components/PostCard";
import { posts } from "@/lib/posts";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Blog",
  description:
    "Practical, accessible guides to web development, mobile apps and artificial intelligence, alongside sourced technology briefings.",
  path: "/blog/",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": absoluteUrl("/blog/#blog"),
      url: absoluteUrl("/blog/"),
      name: `${site.name} Blog`,
      publisher: { "@id": `${site.url}/#organization` },
      blogPost: posts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: absoluteUrl(`/blog/${post.slug}/`),
        datePublished: post.date,
        citation: post.source.url,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog/") },
      ],
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Ideas for building a better digital world."
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      >
        <p className="page-hero__lead">
          Clear, practical guides to the technology behind the web, apps and AI—plus sourced briefings on the latest
          developments.{" "}
          <a className="text-link" href="/blog/feed.xml">
            RSS feed
          </a>
        </p>
      </PageHero>

      <section className="section" aria-label="All posts">
        <div className="container">
          <div className="cards">
            {posts.map((post) => <PostCard post={post} key={post.slug} />)}
          </div>
        </div>
      </section>

      <JsonLd data={jsonLd} />
    </>
  );
}
