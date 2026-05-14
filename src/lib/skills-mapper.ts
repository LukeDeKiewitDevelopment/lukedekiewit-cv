import {
  siAngular,
  siAsana,
  siAstro,
  siCss,
  siDotnet,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPreact,
  siPrismic,
  siReact,
  siSass,
  siShadcnui,
  siShopify,
  siTailwindcss,
  siTypescript,
  siWordpress,
  siZoho,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

export type SkillBadgeMapperEntry = {
  icon?: Omit<SimpleIcon, "slug" | "svg" | "source" | "guidelines" | "license">;
  colors: {
    foreground: string;
    background: string;
  };
};

export const defaultSkillBadge: SkillBadgeMapperEntry = {
  colors: {
    foreground: "var(--primary-foreground)",
    background: "var(--primary)",
  },
};

export const skillBadgeIconMapper: Record<string, SkillBadgeMapperEntry> = {
  ".NET": {
    icon: siDotnet,
    colors: {
      foreground: "#fff",
      background: siDotnet.hex,
    },
  },
  "C#": {
    icon: siDotnet,
    colors: {
      foreground: "#fff",
      background: "#856be1",
    },
  },
  Git: {
    icon: siGit,
    colors: {
      foreground: "#fff",
      background: "#df3011",
    },
  },
  "SQL Server": {
    colors: {
      foreground: "#fff",
      background: "#2675b9",
    },
  },
  MySQL: {
    colors: {
      foreground: "#fff",
      background: siMysql.hex,
    },
  },
  "REST APIs": {
    colors: {
      foreground: "#fff",
      background: "#0D9488",
    },
  },
  Shopify: {
    icon: siShopify,
    colors: {
      foreground: "#fff",
      background: "#4c823a",
    },
  },
  React: {
    icon: siReact,
    colors: {
      foreground: "#000",
      background: siReact.hex,
    },
  },
  Preact: {
    icon: siPreact,
    colors: {
      foreground: "#fff",
      background: siPreact.hex,
    },
  },
  "shadcn/ui": {
    icon: siShadcnui,
    colors: {
      foreground: "#fff",
      background: "#000",
    },
  },
  GitHub: {
    icon: siGithub,
    colors: {
      foreground: "#fff",
      background: "#000",
    },
  },
  Angular: {
    icon: siAngular,
    colors: {
      foreground: "#fff",
      background: siAngular.hex,
    },
  },
  HTML: {
    icon: siHtml5,
    colors: {
      foreground: "#fff",
      background: "#d4441c",
    },
  },
  CSS: {
    icon: siCss,
    colors: {
      foreground: "#fff",
      background: siCss.hex,
    },
  },
  "CSS Modules": {
    icon: siCss,
    colors: {
      foreground: "#fff",
      background: siCss.hex,
    },
  },
  JavaScript: {
    icon: siJavascript,
    colors: {
      foreground: "#000",
      background: siJavascript.hex,
    },
  },
  TypeScript: {
    icon: siTypescript,
    colors: {
      foreground: "#fff",
      background: siTypescript.hex,
    },
  },
  "Node.js": {
    icon: siNodedotjs,
    colors: {
      foreground: "#fff",
      background: "#437138",
    },
  },
  "Next.js": {
    icon: siNextdotjs,
    colors: {
      foreground: "#000",
      background: "#fff",
    },
  },
  Astro: {
    icon: siAstro,
    colors: {
      foreground: "#fff",
      background: "#b237eb",
    },
  },
  "Shopify Liquid": {
    icon: siShopify,
    colors: {
      foreground: "#fff",
      background: "#3776cd",
    },
  },
  "Tailwind CSS": {
    icon: siTailwindcss,
    colors: {
      foreground: "#fff",
      background: "#078197",
    },
  },
  Sass: {
    icon: siSass,
    colors: {
      foreground: "#fff",
      background: "#c24785",
    },
  },
  Prismic: {
    icon: siPrismic,
    colors: {
      foreground: "#fff",
      background: "#5465bb",
    },
  },
  Wordpress: {
    icon: siWordpress,
    colors: {
      foreground: "#fff",
      background: siWordpress.hex,
    },
  },
  "W3C Web Standards": {
    colors: {
      foreground: "#fff",
      background: "#0077cf",
    },
  },
  "WCAG Accessibility": {
    colors: {
      foreground: "#fff",
      background: "#005a9c",
    },
  },
  "Agile Project Management": {
    colors: {
      foreground: "#fff",
      background: "#005a9c",
    },
  },
  "Client Communication": {
    colors: {
      foreground: "#fff",
      background: "#005a9c",
    },
  },
  "Responsive Design": {
    colors: {
      foreground: "#fff",
      background: "#005a9c",
    },
  },
  "Attention to Detail": {
    colors: {
      foreground: "#fff",
      background: "#005a9c",
    },
  },
  "BEM Methodology": {
    colors: {
      foreground: "#fff",
      background: "#005a9c",
    },
  },
  Atomwave: {
    colors: {
      foreground: "#000",
      background: "#0f9",
    },
  },
  Zoho: {
    icon: siZoho,
    colors: {
      foreground: "#fff",
      background: siZoho.hex,
    },
  },
  Postgress: {
    colors: {
      foreground: "#fff",
      background: siPostgresql.hex,
    },
  },
  OpenAPI: {
    colors: {
      foreground: "#1d1d3f",
      background: "#94c73d",
    },
  },
  "Asana API": {
    icon: siAsana,
    colors: {
      foreground: "#fff",
      background: siAsana.hex,
    },
  },
  "GitHub API": {
    icon: siGithub,
    colors: {
      foreground: "#fff",
      background: "#000",
    },
  },
  "Hubstaff API": {
    colors: {
      foreground: "#fff",
      background: "#294dff",
    },
  },
};
