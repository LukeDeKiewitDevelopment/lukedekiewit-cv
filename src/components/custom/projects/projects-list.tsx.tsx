import { ProjectCard, type ProjectCardProps } from "./project-card";

export type ProjectsListProps = {
  projects?: ProjectCardProps[];
};

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-2 lg:grid-cols-3">
      {projects &&
        projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
    </div>
  );
};
