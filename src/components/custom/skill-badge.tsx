import { Badge } from "@/components/ui/badge";
import type { SimpleIcon } from "simple-icons";
import {
  defaultSkillBadge,
  skillBadgeIconMapper,
} from "../../lib/skills-mapper";
import { validateCSSColor } from "@/lib/validate-css-color";
import clsx from "clsx";

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
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title}</title>
      <path d={path} />
    </svg>
  );
};

export type SkillBadgeProps = {
  skill: string;
  className?: string;
};

type SkillBadgeIcon = Omit<
  SimpleIcon,
  "slug" | "source" | "guidelines" | "license"
>;

export const SkillBadge = ({ skill, className }: SkillBadgeProps) => {
  const badge = skillBadgeIconMapper[skill] || defaultSkillBadge;

  return (
    <Badge
      className={clsx(
        "text-7pt [&_svg]:size-4pt! px-[1.25mm] py-[0.75mm] shadow-sm select-none",
        className,
      )}
      title={skill}
      style={{
        backgroundColor: validateCSSColor(badge.colors.background),
        color: validateCSSColor(badge.colors.foreground),
      }}
    >
      {badge.icon && (
        <SkillBadgeIcon
          hex={
            validateCSSColor(badge?.colors?.foreground) ||
            "var(--primary-foreground)"
          }
          title={badge.icon.title}
          path={badge.icon.path}
        />
      )}
      <span>{skill}</span>
    </Badge>
  );
};
