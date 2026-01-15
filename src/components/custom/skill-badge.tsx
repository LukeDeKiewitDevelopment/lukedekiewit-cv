import { Badge } from "@/components/ui/badge";
import type { SimpleIcon } from "simple-icons";
import { SkillBadgeIcon } from "./skill-badge-icon";
import {
  defaultSkillBadge,
  skillBadgeIconMapper,
} from "../../lib/skills-mapper";
import { validateCSSColor } from "@/lib/validate-css-color";

export type SkillBadgeProps = {
  skill: string;
};

type SkillBadgeIcon = Omit<
  SimpleIcon,
  "slug" | "svg" | "source" | "guidelines" | "license"
>;

export const SkillBadge = ({ skill }: SkillBadgeProps) => {
  const badge = skillBadgeIconMapper[skill] || defaultSkillBadge;

  return (
    <Badge
      className="shadow-2xs select-none [&_svg]:size-[7pt]!"
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
