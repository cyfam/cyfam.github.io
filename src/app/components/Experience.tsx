import { items } from "@/types/resume";
import Link from "next/link";

interface Item {
  position: string;
  date: string;
  link?: string;
};

interface ExperienceProps {
  items: Item[];
};

export default function Experience({items}: ExperienceProps) {
  return (
    <div className="p-5">
      <dl className="flex flex-col items-center gap-2.5">
        {items.map((item: any, index: number) => (
          <div key={index}>
            <dt>
              {item.link ? (
                <Link href={item.link}>{item.position}</Link>
              ) : (
                item.position
              )}
            </dt>
            <dd>{item.date}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
