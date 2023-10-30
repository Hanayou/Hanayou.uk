import type { Metadata } from "next";
import Image from "next/image";
import HomeIntro from "./HomeIntro";

export const metadata: Metadata = {
    title: "Hanayou - Personal Portfolio",
    description: "Personal portfolio website developed in React and Next.js",
};

export default function Home() {
    return (
        <main>
            <HomeIntro />
            <div className="absolute w-[50%] h-screen top-0 right-0 invisible xl:visible">
                <Image
                    src="/japan.jpg"
                    fill={true}
                    alt="FILL IN LATER"
                    className="z-20 object-cover"
                />
            </div>
            <HomeIntro />
        </main>
    );
}
