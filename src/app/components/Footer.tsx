"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";



export default function Footer() {
  const pathName = usePathname();

  return (
    <div>
      <p>&copy; <Link href={pathName == "/about" ? '/contact' : '/about'}>Trent Utterback</Link> 2025</p>
      <p> <Link href="https://www.linkedin.com/in/trent-utterback-0658a3282/" target="_blank">LinkedIn</Link> </p>
    </div>
  );
}
