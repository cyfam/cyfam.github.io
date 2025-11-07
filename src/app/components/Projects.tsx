import type { Project } from "@/types/resume";
import ProjectItem from "./ProjectItem"

type ProjectsProps = {
  info?: Project[];
}

export default function Projects({info = []}: ProjectsProps) {
  const pItems = info.map( (data, key) => {
    return <ProjectItem key={key} title={data.title} image={data.image} descr={data.descr} />
  })

  return (
    <div className="flex flex-wrap p-5 flex-row gap-5">
      {pItems}
    </div>
  );
}
