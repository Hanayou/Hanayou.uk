"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    href: string;
    text: string;
    //@ts-ignore
    Icon: SVGIcon;
}

export default function NavMenuItem({ href, text, Icon }: Props) {
    return (
        <li>
            <Link
                href={href}
                className={`flex flex-col sm:flex-row items-center sm:gap-2 text-sm sm:text-lg dark:text-white transition-all duration-500 ${
                    usePathname() === href
                        ? "text-primary dark:text-primary"
                        : ""
                }`}
            >
                <Icon className="text-lg" />
                {text}
            </Link>
        </li>
    );
}
