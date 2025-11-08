"use client";

import Link from "next/link";

type PageProps = {
    name?: string;
    context: string;
};

/* pass a prop to indicate whether to render the link to Contact or About */
export default function Nav({name, context}: PageProps) {

    return (
        <div className="sticky top-0 p-5 bg-white flex flex-row justify-between border-b-2 transition duration-75 hover:shadow-md">
           <p>Trent Utterback</p>
           <p> <Link href={(context == "home") ? '/contact' : '/'} >{(context == "home") ? `Contact ${name}` : `About ${name}`}</Link> </p>
        </div>
    );
}
