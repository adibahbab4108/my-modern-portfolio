import ProjectCard from "@/components/Project/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/data";

export default function Project() {

  return (
    <div id="project" className="pb-20 pt-36">
      <SectionHeader
        title="My Projects"
        titleClassName="bg-gradient-to-r from-primary via-blue-400 to-zinc-500 w-fit mx-auto bg-clip-text text-transparent"
      />
      <div className="text-center py-10">
        <div className="grid grid-cols-1  md:grid-cols-12 gap-8 px-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
