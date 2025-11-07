"use client";

import Link from "next/link";

type PageProps = {
    context: string;
};

/* pass a prop to indicate whether to render the link to Contact or About */
export default function Nav({context}: PageProps) {

    return (
        <div className="sticky top-0 p-5 bg-linear-75 from-white from-25% to-purple-300 flex flex-row justify-between border-b-2 transition duration-75 hover:shadow-md">
           <p>Trent Utterback</p>
           <p> <Link href={(context == "About") ? '/contact' : '/about'} >{(context == "About") ? "Contact" : "About"}</Link> </p>
        </div>
    );
}
