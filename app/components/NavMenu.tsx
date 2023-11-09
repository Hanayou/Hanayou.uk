"use client";

import NavMenuItem from "@/app/components/NavMenuItem";
import IconHome from "~icons/ci/house-01.jsx";
import IconProjects from "~icons/ci/laptop.jsx";
import IconContact from "~icons/ci/mail.jsx";

export default function NavMenu() {
    return (
        <nav className="fixed top-0 z-10 w-full bg-bg1 dark:bg-bg1-dark">
            <ul className="flex flex-row gap-14 max-w-7xl justify-center xl:justify-start p-5 xl:py-10 m-auto">
                <NavMenuItem
                    href="/"
                    text="Home"
                    Icon={<IconHome className="text-lg" />}
                />
                <NavMenuItem
                    href="/projects"
                    text="Projects"
                    Icon={<IconProjects className="text-lg" />}
                />
                <NavMenuItem
                    href="/contact"
                    text="Contact"
                    Icon={<IconContact className="text-lg" />}
                />
            </ul>
        </nav>
    );
}
