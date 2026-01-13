import {
  siAngular,
  siCss,
  siDotnet,
  siFigma,
  siGit,
  siHtml5,
  siJavascript,
  siMysql,
  siReact,
  siShopify,
  siTypescript,
  siWoocommerce,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

type SkillBadgeMapperEntry = {
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
      background: siGit.hex,
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
      background: siShopify.hex,
    },
  },
  React: {
    icon: siReact,
    colors: {
      foreground: "#000",
      background: siReact.hex,
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
      background: siHtml5.hex,
    },
  },
  CSS: {
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
      background: siHtml5.hex,
    },
  },
};
