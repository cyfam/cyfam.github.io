import Image from "next/image";
import type { Project } from "@/types/resume";

export default function ProjectItem({title, image, descr}: Project) {
    const descriptions = descr.map( (text: string, i: number) => {
                    return <li key={i}>{text}</li>
                });

    return(
        <div className="rounded-lg border-2 transition duration-75 hover:shadow-md">
            <h3 className="font-bold text-xl">{title}</h3>
            <Image src={`/../${image}`} alt={`${title} image`} width={400} height={300} />
            <ul>
                {descriptions}
            </ul>
        </div>
    );
}
