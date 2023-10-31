import type { Metadata } from "next";
import HomeIntro from "./HomeIntro";
import HomeBackgroundImage from "@/components/HomeBackgroundImage";

export const metadata: Metadata = {
    title: "Hanayou - Personal Portfolio",
    description: "Personal portfolio website developed in React and Next.js",
};

export default function Home() {
    return (
        <main>
            <HomeIntro />
            <HomeBackgroundImage />
        </main>
    );
}
