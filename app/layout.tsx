import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import NavMenu from "@/app/NavMenu";

const open_sans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-open-sans",
});

export const metadata: Metadata = {
    title: "Hanayou - Personal Portfolio",
    description: "Personal portfolio website developed in React and Next.js",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark transition-colors duration-500">
            <body className="bg-bg1 dark:bg-bg1-dark">
                <NavMenu />
                {children}
            </body>
        </html>
    );
}
