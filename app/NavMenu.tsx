"use client";

import NavMenuItem from "@/components/NavMenuItem";
import IconHome from "~icons/ci/house-01";
import IconProjects from "~icons/ci/laptop";
import IconContact from "~icons/ci/mail";

export default function NavMenu() {
    return (
        <nav className="w-screen sticky top-0 bg-bg1 dark:bg-bg1-dark">
            <ul className="flex flex-row gap-14 max-w-7xl w-auto m-auto justify-center sm:justify-start px-5 py-5 sm:py-10">
                <NavMenuItem href="/" text="Home" Icon={IconHome} />
                <NavMenuItem
                    href="/projects"
                    text="Projects"
                    Icon={IconProjects}
                />
                <NavMenuItem
                    href="/contact"
                    text="Contact"
                    Icon={IconContact}
                />
            </ul>
        </nav>
    );
}
