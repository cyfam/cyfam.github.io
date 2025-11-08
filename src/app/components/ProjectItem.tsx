import Image from "next/image";
import type { Project } from "@/types/resume";

export default function ProjectItem(project: Project) {
    const descriptions = project.descr.map( (text: string, i: number) => {
                    return <li key={i}>{text}</li>
                });

    return(
        <div className="rounded-lg border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-md p-5">
            <h3 className="font-bold text-xl">{project.title}</h3>
            <Image src={`/${project.image}`} alt={`${project.title} image`} width={400} height={400} className="rounded-lg" />
            <ul>
                {descriptions}
            </ul>
        </div>
    );
}