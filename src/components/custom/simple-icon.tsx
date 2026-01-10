import { validateCSSColor } from "@/lib/validate-css-color";
import type { SimpleIcon } from "simple-icons";

export type SkillBadgeIconProps = Omit<
  SimpleIcon,
  "slug" | "svg" | "source" | "guidelines" | "license"
> & {
  className?: string;
};

export const SkillBadgeIcon = ({
  hex,
  title,
  path,
  className,
}: SkillBadgeIconProps) => {
  const fill = validateCSSColor(hex);
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill={fill || "inherit"}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title}</title>
      <path d={path} />
    </svg>
  );
};
