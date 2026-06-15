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
  title: "Luke De Kiewit",
  titleDefault: "Luke De Kiewit | Frontend Engineer",
  description:
    "Frontend Engineer specialising in React, Next.js, and Astro. I build accessible, high-performance web applications and UI libraries.",
  canonical: "https://lukedekiewit-cv.vercel.app/",
  openGraph: {
    basic: {
      title: "Luke De Kiewit | Frontend Engineer",
      type: "profile",
      image:
        "https://lukedekiewit-cv.vercel.app/images/logos/ldk_logo_atomwave_tilted_724px.png",
      url: "https://lukedekiewit-cv.vercel.app/",
    },

    optional: {
      description:
        "Frontend Engineer specialising in React, Next.js, and Astro. I build accessible, high-performance web applications and UI libraries.",
      locale: "en_ZA",
      siteName: "Luke De Kiewit",
    },

    image: {
      url: "https://lukedekiewit-cv.vercel.app/images/logos/ldk_logo_atomwave_tilted_724px.png",
      width: 724,
      height: 724,
      alt: "Luke De Kiewit — Frontend Engineer",
    },
  },

  twitter: {
    card: "summary_large_image",
    creator: "@lukedekiewit",
    site: "@lukedekiewit",
    title: "Luke De Kiewit | Frontend Engineer",
    description:
      "Frontend Engineer specialising in React, Next.js, and Astro. I build accessible, high-performance web applications and UI libraries.",
    image:
      "https://lukedekiewit-cv.vercel.app/images/logos/ldk_logo_atomwave_tilted_724px.png",
    imageAlt: "Luke De Kiewit — Frontend Engineer",
  },

  extend: {
    meta: [
      { name: "author", content: "Luke De Kiewit" },
      {
        name: "keywords",
        content:
          "frontend engineer, React, Next.js, Astro, TypeScript, Tailwind CSS, Shopify, Shopify Liquid, TypeScript, UI library, web development, South Africa, remote, Luke De Kiewit, Bitcube, SOCO_ED",
      },
    ],
  },
};

export const projectsPageSEO: AstroSEO = {
  title: "Projects",
  titleTemplate: "%s | Luke De Kiewit",
  titleDefault: "Projects | Luke De Kiewit",
  description: "A showcase of Luke De Kiewit's frontend projects.",
  canonical: "https://lukedekiewit-cv.vercel.app/projects",
  openGraph: {
    basic: {
      title: "Projects | Luke De Kiewit",
      type: "website",
      image:
        "https://lukedekiewit-cv.vercel.app/images/logos/ldk_logo_atomwave_tilted_724px.png",
      url: "https://lukedekiewit-cv.vercel.app/projects",
    },
    optional: {
      description: "A showcase of Luke De Kiewit's frontend projects.",
      locale: "en_ZA",
      siteName: "Luke De Kiewit",
    },

    image: {
      url: "https://lukedekiewit-cv.vercel.app/images/logos/ldk_logo_atomwave_tilted_724px.png",
      width: 724,
      height: 724,
      alt: "Projects — Luke De Kiewit",
    },
  },
  twitter: {
    card: "summary_large_image",
    creator: "@lukedekiewit",
    site: "@lukedekiewit",
    title: "Projects | Luke De Kiewit",
    description: "A showcase of frontend projects.",
    image:
      "https://lukedekiewit-cv.vercel.app/images/logos/ldk_logo_atomwave_tilted_724px.png",
    imageAlt: "Projects — Luke De Kiewit",
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
