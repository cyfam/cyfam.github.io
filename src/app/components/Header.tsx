import Image from "next/image";
import type { Contact } from "@/types/resume";

type contactInfo = {
  name: string;
  image: string;
  tagline: string;
}

export default function Header(info: contactInfo) {
  return (
    <div className="flex justify-center">
    <div className="w-fit p-10 m-10 flex flex-col items-center bg-white rounded-2xl">
      <h1 className="pb-8 text-2xl font-bold flex justify-center">{info.name}</h1> 
      <Image src={`/${info.image}`} alt={info.name} width={400} height={400} className="rounded-2xl"></Image>
      <p className="pt-8 flex justify-center">{info.tagline}</p>
    </div>
    </div>
  );
}
