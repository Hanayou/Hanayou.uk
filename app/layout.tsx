import { Lato } from "next/font/google";
import "./globals.css";

import NavMenu from "@/app/components/NavMenu";
import Settings from "@/app/components/Settings";

const lato = Lato({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-lato",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`dark transition-colors duration-500 ${lato.variable}`}
        >
            <body className="bg-bg1 dark:bg-bg1-dark font-serif text-black dark:text-white">
                <NavMenu />
                <Settings />
                {children}
            </body>
        </html>
    );
}
