import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SkillBadge, type SkillBadgeProps } from "../skill-badge";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type ProjectCardProps = {
  title?: string;
  ndaTitle?: string;
  company?: string;
  link?: string;
  imageSrc?: string;
  imageAlt?: string;
  role?: string;
  description?: string;
  skills?: SkillBadgeProps[];
  isNda?: boolean;
};

export const ProjectCard = ({
  title,
  ndaTitle,
  company,
  link,
  imageSrc,
  imageAlt,
  role,
  description,
  skills,
  isNda,
}: ProjectCardProps) => {
  return (
    <Card className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
      <CardHeader>
        {!ndaTitle && title && (
          <CardTitle className="text-sm">
            <h2>{title}</h2>
          </CardTitle>
        )}
        {!title && ndaTitle && (
          <CardTitle className="text-sm">
            <h2>{ndaTitle}</h2>
          </CardTitle>
        )}
        {company && (
          <CardDescription className="text-xs">{company}</CardDescription>
        )}

        <CardAction>
          {!isNda && link && (
            <Button size={"sm"} title={`Visit ${title}`} asChild>
              <a className="text-xs" href={link} target="_blank">
                <div className="flex items-center gap-2">
                  <span>View</span>
                  <ExternalLinkIcon />
                </div>
              </a>
            </Button>
          )}
          {isNda && (
            <Badge className="bg-red-600 text-white select-none">
              Confidential
            </Badge>
          )}
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="aspect-video w-full overflow-hidden rounded-xl">
            {imageSrc && (
              <img
                className="h-full w-full touch-none object-contain select-none"
                src={imageSrc}
                alt={imageAlt || "Project image"}
              />
            )}
          </div>
          {role && (
            <p className="text-xs font-semibold">
              <span className="text-muted-foreground">Role: </span>
              {role}
            </p>
          )}
          {description && (
            <p className="text-muted-foreground text-xs">{description}</p>
          )}
        </div>
      </CardContent>
      {skills && (
        <CardFooter>
          <div className="mt-auto">
            <h3 className="text-xs">Tech Stack</h3>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {skills.map((skill, index) => (
                <SkillBadge
                  key={index}
                  skill={skill.skill}
                  className={cn("text-xs", skill.className)}
                />
              ))}
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};
