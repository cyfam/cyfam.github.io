import Image from "next/image";
import type { Contact } from "@/types/resume";

type contactInfo = {
  image: string;
}

export default function Header(info: contactInfo) {
 
  return (
    <div className="mx-auto p-5 flex flex-row justify-center bg-white rounded-2xl">
      <h1>Trent Utterback</h1> 
      <img src={info.image} alt="Picture of me"></img>
    </div>
  );
}
