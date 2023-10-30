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
        <div className="flex flex-col-reverse xl:flex-row items-center max-w-7xl m-auto">
            <div className="flex flex-col flex-1 gap-10 px-5 xl:px-0 items-center xl:items-start">
                <h2 className="text-xl">
                    Hi, I'm <span className="text-primary">Sam</span>
                </h2>
                <h1 className="text-2xl xl:text-3xl font-bold leading-none text-center xl:text-left transition-all duration-500">
                    Software
                    <br />
                    <span className="text-primary">Engineer /&gt;</span>
                </h1>
                <p className="text-center xl:text-left max-w-lg">
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
            <div className="xl:relative flex-1 w-[calc(100vw-(100vw-100%))] xl:h-screen">
                <div className="relative z-30 h-full clip-bgimage bg-bg1 dark:bg-bg1-dark w-full invisible xl:visible"></div>
                <div className="mx-auto mt-40 mb-20 xl:my-0 xl:absolute z-0 xl:z-30 xl:top-1/2 xl:translate-y-[-50%] xl:left-1/2 xl:translate-x-[-50%] bg-bg1 dark:bg-bg1-dark rounded-full h-[21.875rem] w-[21.875rem]">
                    <div className="relative top-[0.938rem] left-[0.938rem] bg-primary rounded-full h-80 w-80 drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]">
                        <div className="absolute w-80 h-[23.25rem] bottom-0">
                            <Image
                                src="/sam.png"
                                alt="Picture of me (Sam)"
                                fill={true}
                                className="rounded-b-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
