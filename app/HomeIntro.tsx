import Link from "next/link";
import SocialIcon from "@/components/SocialIcon";
import Image from "next/image";

import IconGitHub from "~icons/mdi/github.jsx";
import IconLeetcode from "~icons/tabler/brand-leetcode.jsx";
import IconDevto from "~icons/material-symbols/logo-dev";
import IconLinkedIn from "~icons/mdi/linkedin.jsx";
import IconYouTube from "~icons/ph/youtube-logo-fill.jsx";

export default function HomeIntro() {
    return (
        <div className="flex flex-row items-center px-5 max-w-7xl m-auto">
            <div className="flex flex-col gap-10 items-center sm:items-start max-w-lg">
                <h2 className="text-xl">
                    Hi, I'm <span className="text-primary">Sam</span>
                </h2>
                <h1 className="text-2xl sm:text-3xl font-bold leading-none text-center sm:text-left transition-all duration-500">
                    Software
                    <br />
                    <span className="text-primary">Engineer /&gt;</span>
                </h1>
                <p className="text-center sm:text-left">
                    Passionate engineer with over 5 years of professional
                    development and consulting experience. Always looking to
                    expand knowledge and develop exciting, cutting edge
                    products.
                </p>
                <button className="bg-primary px-8 py-5 rounded-xl text-white text-lg max-w-fit">
                    See My Projects
                </button>
                <ul className="flex flew-row items-center gap-3">
                    <SocialIcon
                        href="https://github.com/Hanayou"
                        Icon={IconGitHub}
                    />
                    <SocialIcon
                        href="https://leetcode.com/Hanayou/"
                        Icon={IconLeetcode}
                    />
                    <SocialIcon href="#" Icon={IconDevto} />
                    <SocialIcon
                        href="https://www.linkedin.com/in/samuel-short/"
                        Icon={IconLinkedIn}
                    />
                    <SocialIcon href="#" Icon={IconYouTube} />
                </ul>
            </div>
            <div className="flex justify-end relative z-0 m-auto">
                <div className="bg-primary rounded-full h-[320px] w-[320px]"></div>
                <Image
                    src="/sam.png"
                    alt="Picture of me (Sam)"
                    width={320}
                    height={320}
                    className="absolute z-10 bottom-0 rounded-full"
                />
            </div>
        </div>
    );
}
