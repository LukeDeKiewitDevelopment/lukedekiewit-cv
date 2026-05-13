import { ProjectCard, type ProjectCardProps } from "./project-card";

export type ProjectsListProps = {
  projects?: ProjectCardProps[];
};

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <div className="flex flex-wrap gap-4 py-8">
      {projects &&
        projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
    </div>
  );
};
