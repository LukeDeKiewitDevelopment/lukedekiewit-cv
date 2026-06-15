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

export const cvSEO: AstroSEO = {
  
};

export const projectsSEO: AstroSEO = {
  
};
