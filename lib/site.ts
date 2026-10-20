export const site = {
  name: "Welkdock Technologies",
  shortName: "Welkdock",
  legalName: "Welkdock Pvt. Ltd.",
  url: "https://welkdock.com",
  email: "contact@welkdock.com",
  tagline: "Small software. Specific jobs.",
  description:
    "Welkdock is an independent software company building focused tools for specific jobs, from developer packages and mobile apps to security and hiring software.",
  updated: "16 October 2026",
  updatedAt: "2026-10-16",
} as const;

export const nav = [
  { href: "/solutions/", label: "Products" },
  { href: "/studio/", label: "Company" },
  { href: "/blog/", label: "Blog" },
  { href: "/#contact", label: "Contact" },
] as const;

export function absoluteUrl(path: string) {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
