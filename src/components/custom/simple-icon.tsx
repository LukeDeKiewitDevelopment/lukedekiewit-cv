import { validateCSSColor } from "@/lib/validate-css-color";
import type { SimpleIcon } from "simple-icons";

export const SkillBadgeIcon = ({
  hex,
  title,
  path,
}: Omit<SimpleIcon, "slug" | "svg" | "source" | "guidelines" | "license">) => {
  const fill = validateCSSColor(hex);
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill={fill || "inherit"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path d={path} />
    </svg>
  );
};
