import { useProjectsInfo } from "@/hooks/useProjectsInfo";
import ProjectCard from "@/views/Projects/ProjectCard";
import React from "react";

type ProjectsType = {};

const ProjectsListing: React.FC<ProjectsType> = () => {
  const projectsInfo = useProjectsInfo();

  return (
    <div
      id="Projects"
      className="flex items-center justify-center flex-col bg-muted"
    >
      <h1 className="text-4xl font-bold mt-10">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-secondary max-w-[1020px] mt-16 min-w-[360px] animate-fade">
        {projectsInfo.map((project) => (
          <ProjectCard
            key={project.title}
            mainImageUrl={project.mainImageUrl}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsListing;
