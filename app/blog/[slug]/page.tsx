import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import PostCard from "@/components/PostCard";
import { formatDate, getOtherPosts, getPost, posts } from "@/lib/posts";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}/`,
    ...(post.image ? { image: { ...post.image, width: 1400, height: 934 } } : {}),
    type: "article",
    publishedTime: post.date,
  });
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = absoluteUrl(`/blog/${post.slug}/`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#post`,
        mainEntityOfPage: url,
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        articleSection: post.category,
        citation: post.source.url,
        ...(post.image ? { image: absoluteUrl(post.image.src) } : {}),
        inLanguage: "en",
        author: { "@id": `${site.url}/#organization` },
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog/") },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  const related = getOtherPosts(post.slug);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog/" }, { label: post.title }]}
      >
        <p className="page-hero__lead">{post.description}</p>
        <p className="post__meta">
          {site.shortName} <span aria-hidden="true">/</span> <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
      </PageHero>

      {post.image && (
        <figure className="post__hero-image">
          <div className="container">
            <Image
              src={post.image.src}
              alt={post.image.alt}
              width={1400}
              height={934}
              priority
              sizes="(max-width: 960px) 100vw, 1200px"
            />
          </div>
        </figure>
      )}

      <article className="section post">
        <div className="container">
          <div className="prose">
            {post.body.map((block, i) => {
              switch (block.type) {
                case "h2":
                  return <h2 key={i}>{block.text}</h2>;
                case "p":
                  return <p key={i}>{block.text}</p>;
              }
            })}
            <p className="post__source">
              Source: <a href={post.source.url} target="_blank" rel="noopener noreferrer">{post.source.name}</a>
            </p>
            <p className="prose__end">
              Questions or corrections? Write to <a href={`mailto:${site.email}`}>{site.email}</a>.{" "}
              <Link href="/blog/">Back to the Blog</Link>.
            </p>
          </div>
        </div>
      </article>

      <section className="section section--gray" aria-labelledby="more-title">
        <div className="container">
          <div className="section__head">
            <h2 id="more-title">More from the Blog</h2>
          </div>
          <div className="cards cards--two">
            {related.map((item) => <PostCard post={item} key={item.slug} />)}
          </div>
        </div>
      </section>

      <JsonLd data={jsonLd} />
    </>
  );
}
