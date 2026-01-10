import {
  siAngular,
  siDotnet,
  siFigma,
  siGit,
  siMysql,
  siReact,
  siShopify,
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
  "Blog Writing": {
    colors: {
      foreground: "#fff",
      background: "#6366F1",
    },
  },
  "Manual Testing": {
    colors: {
      foreground: "#fff",
      background: "#D97706",
    },
  },
  "Test Case Writing": {
    colors: {
      foreground: "#fff",
      background: "#475569",
    },
  },
  Shopify: {
    icon: siShopify,
    colors: {
      foreground: "#fff",
      background: siShopify.hex,
    },
  },
  WooCommerce: {
    icon: siWoocommerce,
    colors: {
      foreground: "#fff",
      background: siWoocommerce.hex,
    },
  },
  React: {
    icon: siReact,
    colors: {
      foreground: "#000",
      background: siReact.hex,
    },
  },
  Figma: {
    icon: siFigma,
    colors: {
      foreground: "#fff",
      background: siFigma.hex,
    },
  },
  Angular: {
    icon: siAngular,
    colors: {
      foreground: "#fff",
      background: siAngular.hex,
    },
  },
};
