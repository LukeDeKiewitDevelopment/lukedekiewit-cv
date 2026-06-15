export interface AstroSEO {
  title?: string;
  titleTemplate?: string;
  titleDefault?: string;
  charset?: string;
  description?: string;
  canonical?: URL | string;
  nofollow?: boolean;
  noindex?: boolean;
  noarchive?: boolean;
  nocache?: boolean;
  robotsExtras?: string;
  languageAlternates?: {
    href: URL | string;
    hrefLang: string;
  }[];
  openGraph?: {
    basic: {
      title: string;
      type: string;
      image: string;
      url?: URL | string;
    };
    optional?: {
      audio?: string;
      description?: string;
      determiner?: string;
      locale?: string;
      localeAlternate?: string[];
      siteName?: string;
      video?: string;
    };
    image?: {
      url?: URL | string;
      secureUrl?: URL | string;
      type?: string;
      width?: number;
      height?: number;
      alt?: string;
    };
    article?: {
      publishedTime?: string;
      modifiedTime?: string;
      expirationTime?: string;
      authors?: string[];
      section?: string;
      tags?: string[];
    };
  };
  twitter?: {
    card?: "summary" | "summary_large_image" | "app" | "player";
    site?: string;
    creator?: string;
    title?: string;
    description?: string;
    image?: URL | string;
    imageAlt?: string;
  };
  extend?: {
    link?: Partial<Link>[];
    meta?: Partial<Meta>[];
  };
  removeTrailingSlashForRoot?: boolean;
  surpressWarnings?: boolean;
}

interface Link extends Omit<HTMLLinkElement, "sizes"> {
  prefetch: boolean;
  crossorigin: string;
  sizes: string;
}

interface Meta extends HTMLMetaElement {
  property: string;
}

export const cvPageSEO: AstroSEO = {
  title: "Luke De Kiewit | Frontend Engineer",
  description:
    "Frontend Engineer specialising in React, Next.js, and Astro. I build accessible, high-performance web applications and UI libraries — from platforms serving 200,000+ users to luxury Shopify storefronts for UK, EU, and US clients.",
  canonical: "https://lukedekiewit-cv.vercel.app/",
  openGraph: {
    basic: {
      title: "Luke De Kiewit | Frontend Engineer",
      type: "profile",
      image: "https://lukedekiewit-cv.vercel.app/images/ldk_og_image.png",
      url: "https://lukedekiewit-cv.vercel.app/",
    },

    optional: {
      description:
        "Frontend Engineer specialising in React, Next.js, and Astro. I build accessible, high-performance web applications and UI libraries — from platforms serving 200,000+ users to luxury Shopify storefronts for UK, EU, and US clients.",
      locale: "en_ZA",
      siteName: "Luke De Kiewit",
    },

    image: {
      url: "https://lukedekiewit-cv.vercel.app/images/ldk_og_image.png",
      secureUrl: "https://lukedekiewit-cv.vercel.app/images/ldk_og_image.png",
      type: "image/png",
      width: 1200,
      height: 630,
      alt: "Luke De Kiewit — Frontend Engineer",
    },
  },
  extend: {
    meta: [
      { name: "author", content: "Luke De Kiewit" },
      {
        name: "keywords",
        content:
          "frontend engineer, React, Next.js, Astro, TypeScript, Tailwind CSS, Shopify, Shopify Liquid, UI library, web development, South Africa, remote, Luke De Kiewit, Bitcube, SOCO_ED",
      },
    ],
  },
  removeTrailingSlashForRoot: true,
};

export const projectsPageSEO: AstroSEO = {
  title: "Projects | Luke De Kiewit",
  description:
    "Frontend projects by Luke De Kiewit — including Atomwave (a Tailwind-free shadcn/ui rewrite), Steam Player Search, and Topic LMS, an educational platform built for 200,000+ learners across South Africa.",
  canonical: "https://lukedekiewit-cv.vercel.app/projects",
  openGraph: {
    basic: {
      title: "Projects | Luke De Kiewit",
      type: "website",
      image: "https://lukedekiewit-cv.vercel.app/images/ldk_og_image.png",
      url: "https://lukedekiewit-cv.vercel.app/projects",
    },
    optional: {
      description:
        "Frontend projects by Luke De Kiewit — including Atomwave (a Tailwind-free shadcn/ui rewrite), Steam Player Search, and Topic LMS, an educational platform built for 200,000+ learners across South Africa.",
      locale: "en_ZA",
      siteName: "Luke De Kiewit",
    },
    image: {
      url: "https://lukedekiewit-cv.vercel.app/images/ldk_og_image.png",
      secureUrl: "https://lukedekiewit-cv.vercel.app/images/ldk_og_image.png",
      type: "image/png",
      width: 1200,
      height: 630,
      alt: "Projects — Luke De Kiewit",
    },
  },
  extend: {
    meta: [
      { name: "author", content: "Luke De Kiewit" },
      {
        name: "keywords",
        content:
          "frontend engineer, frontend projects, React, Next.js, Astro, TypeScript, Tailwind CSS, Shopify, Shopify Liquid, component library, Atomwave, Steam Player Search, Topic LMS, web development portfolio, Luke De Kiewit, Bitcube, SOCO_ED",
      },
    ],
  },
};
