import SocialIcon from "@/app/components/SocialIcon";
import Button from "./components/Button";
import Image from "next/image";

// Icons
import IconGitHub from "~icons/mdi/github.jsx";
import IconLeetcode from "~icons/tabler/brand-leetcode.jsx";
import IconDevto from "~icons/material-symbols/logo-dev.jsx";
import IconLinkedIn from "~icons/mdi/linkedin.jsx";
import IconYouTube from "~icons/ph/youtube-logo-fill.jsx";

export default function HomeIntro() {
    return (
        <div className="flex flex-col-reverse xl:flex-row items-center max-w-7xl h-screen m-auto">
            <div className="flex flex-col gap-10 px-5 xl:px-0 items-center xl:items-start">
                <h2 className="text-xl">
                    Hi, I'm <span className="text-primary">Sam</span>
                </h2>
                <h1 className="text-2xl xl:text-3xl font-bold leading-none text-center xl:text-left transition-all duration-500">
                    Software
                    <br />
                    <span className="text-primary">Engineer /&gt;</span>
                </h1>
                <p className="text-centerxl:text-left max-w-lg">
                    Passionate engineer with over 5 years of professional
                    development and consulting experience. Always looking to
                    expand knowledge and develop exciting, cutting edge
                    products.
                </p>
                <Button text="See My Projects" />
                <ul className="flex flew-row items-center gap-3">
                    <SocialIcon
                        href="https://github.com/Hanayou"
                        Icon={IconGitHub}
                    />
                    <SocialIcon
                        href="https://leetcode.com/Hanayou/"
                        Icon={IconLeetcode}
                    />
                    <SocialIcon
                        href="https://dev.to/hanayou"
                        Icon={IconDevto}
                    />
                    <SocialIcon
                        href="https://www.linkedin.com/in/samuel-short/"
                        Icon={IconLinkedIn}
                    />
                    <SocialIcon
                        href="https://www.youtube.com/@HanayouDev"
                        Icon={IconYouTube}
                    />
                </ul>
            </div>
            <div className="relative top-[0.938rem] left-[0.938rem] bg-primary rounded-full h-80 w-80 drop-shadow-sm">
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
    );
}
