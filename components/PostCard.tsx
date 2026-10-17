import Link from "next/link";
import Image from "next/image";
import { formatDate, type Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className={`card${post.image ? " card--media" : ""}`}>
      {post.image && (
        <Image
          className="card__media"
          src={post.image.src}
          alt={post.image.alt}
          width={1400}
          height={934}
          sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
        />
      )}
      <div className="card__body">
        <p className="card__audience">
          {post.category} <span aria-hidden="true">/</span>{" "}
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
        <h3>
          <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
        </h3>
        <p>{post.description}</p>
        <a className="card__source" href={post.source.url} target="_blank" rel="noopener noreferrer">
          Source: {post.source.name}
        </a>
      </div>
    </article>
  );
}
