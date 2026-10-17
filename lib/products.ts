export type AreaId = "packages" | "security" | "apps" | "hiring";

export type Area = {
  id: AreaId;
  title: string;
  short: string;
  audience: string;
  lead: string;
};

export type Product = {
  slug: string;
  name: string;
  kind: string;
  area: AreaId;
  builtFor: string;
  summary: string;
  availability: string;
  image: { src: string; alt: string; width: number; height: number; label: string };
  links: { label: string; url: string }[];
};

export const areas: Area[] = [
  {
    id: "packages",
    title: "Developer packages",
    short: "Packages",
    audience: "For developers",
    lead: "A Flutter widget package and a JavaScript package, each published on its respective registry.",
  },
  {
    id: "security",
    title: "Security tools for load testing and VAPT",
    short: "Security",
    audience: "For security and QA teams",
    lead: "Web-based tools for testing how systems hold up under attack and under load. They are for use only on systems you own or are authorised to test.",
  },
  {
    id: "apps",
    title: "Mobile app solutions for businesses and NGOs",
    short: "Mobile apps",
    audience: "For businesses and NGOs",
    lead: "Applications built around how businesses and NGOs actually operate, from managing inventory to coordinating volunteers.",
  },
  {
    id: "hiring",
    title: "Hiring software",
    short: "Hiring",
    audience: "For recruiters",
    lead: "Software that screens resumes, runs automated interviews and shortlists candidates, so recruiters spend their time on the people who fit.",
  },
];

export const products: Product[] = [
  {
    slug: "advancelist-view",
    name: "AdvanceListView",
    kind: "Flutter package",
    area: "packages",
    builtFor: "Flutter developers",
    summary:
      "A paginated Flutter ListView widget with built-in API loading, search, and error handling, according to its package documentation.",
    availability: "Live on pub.dev",
    image: {
      src: "/product-images/advance-listview.png",
      alt: "AdvanceListView Flutter package listing artwork",
      width: 2622,
      height: 1860,
      label: "Product artwork",
    },
    links: [{ label: "View package on pub.dev", url: "https://pub.dev/packages/advance_listview" }],
  },
  {
    slug: "ncryptor",
    name: "NCryptor",
    kind: "npm package",
    area: "packages",
    builtFor: "JavaScript developers",
    summary:
      "The npm listing describes Ncryptor as a password hashing and encryption utility. Its quantum-resistance wording is the publisher's claim, not an independent assessment.",
    availability: "Live on npm",
    image: {
      src: "/product-images/ncryptor.png",
      alt: "Ncryptor package listing artwork",
      width: 1748,
      height: 1240,
      label: "Package artwork",
    },
    links: [{ label: "View package on npm", url: "https://www.npmjs.com/package/ncryptor" }],
  },
  {
    slug: "cyberprobe",
    name: "CyberProbe",
    kind: "Load testing and VAPT software",
    area: "security",
    builtFor: "Security and QA teams",
    summary:
      "Software for load testing and vulnerability assessment and penetration testing. Use it only on systems you own or have permission to test.",
    availability: "In development",
    image: {
      src: "/product-images/cyberprobe.png",
      alt: "CyberProbe cybersecurity product artwork",
      width: 2841,
      height: 2015,
      label: "Product artwork",
    },
    links: [],
  },
  {
    slug: "stockwise",
    name: "StockWise",
    kind: "Application",
    area: "apps",
    builtFor: "Businesses",
    summary: "Inventory management for keeping day-to-day stock records in one place.",
    availability: "Live on the web and Google Play",
    image: {
      src: "/product-images/stockwise.png",
      alt: "StockWise inventory and billing product artwork",
      width: 2841,
      height: 2015,
      label: "Product artwork",
    },
    links: [
      { label: "Visit StockWise", url: "https://stockwise.welkdock.com/" },
      {
        label: "Get StockWise on Google Play",
        url: "https://play.google.com/store/apps/details?id=com.welkdock.stockvise",
      },
    ],
  },
  {
    slug: "sbf-india",
    name: "SBF India",
    kind: "Mobile app",
    area: "apps",
    builtFor: "SBF India and its volunteers",
    summary: "A mobile app for Society for Bright Future, an NGO working in emergency relief and rehabilitation.",
    availability: "Live on Google Play",
    image: {
      src: "/product-images/sbf-india.png",
      alt: "Society for Bright Future and Vision 2026 app artwork",
      width: 1748,
      height: 1240,
      label: "Product artwork",
    },
    links: [
      {
        label: "Get SBF India on Google Play",
        url: "https://play.google.com/store/apps/details?id=com.mobile.sbf&hl=en",
      },
    ],
  },
  {
    slug: "scalerhire",
    name: "ScalerHire",
    kind: "AI software",
    area: "hiring",
    builtFor: "Recruiters and hiring managers",
    summary:
      "AI interview and candidate screening software. It screens resumes, conducts automated AI interviews and shortlists candidates for recruiters.",
    availability: "Public website",
    image: {
      src: "/product-images/scalerhire.png",
      alt: "ScalerHire AI hiring product artwork",
      width: 2841,
      height: 2015,
      label: "Product artwork",
    },
    links: [{ label: "Visit ScalerHire", url: "https://scalerhire.com/" }],
  },
];

export const productsByArea = (id: AreaId) => products.filter((product) => product.area === id);
export const areaOf = (product: Product) => areas.find((area) => area.id === product.area)!;
