import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

type Options = {
  title: string;
  fullTitle?: string;
  description: string;
  path: string;
  image?: { src: string; alt: string; width: number; height: number };
  type?: "website" | "article";
  publishedTime?: string;
};

const defaultImage = {
  src: "/brand/og-image.png",
  alt: "Welkdock Technologies logo",
  width: 1200,
  height: 630,
};

// Pages replace (not merge) openGraph, so each one passes its full set.
export function pageMetadata({ title, fullTitle, description, path, image = defaultImage, type = "website", publishedTime }: Options): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = fullTitle ?? `${title} | ${site.name}`;
  const ogImage = { url: absoluteUrl(image.src), width: image.width, height: image.height, alt: image.alt };

  return {
    title: fullTitle ? { absolute: fullTitle } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url,
      title: socialTitle,
      description,
      siteName: site.name,
      locale: "en_IN",
      images: [ogImage],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [ogImage.url],
    },
  };
}
