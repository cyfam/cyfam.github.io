"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";



export default function Footer() {
  const pathName = usePathname();

  return (
    <div className="border-t-2 p-5 bg-white">
      <p>&copy; <Link href={'/contact'}>Trent Utterback</Link> 2025</p>
      <p> <Link href="https://www.linkedin.com/in/trentutterback" target="_blank">LinkedIn</Link> </p>
    </div>
  );
}
