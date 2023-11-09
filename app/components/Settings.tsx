"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import IconSettings from "~icons/uil/cog.jsx";

export default function Settings() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed z-50 bottom-4 right-4 drop-shadow-sm">
            <motion.button
                layout
                data-isOpen={isOpen}
                initial={{ borderRadius: 9999 }}
                onClick={() => setIsOpen(!isOpen)}
                className="h-16 w-16 bg-bg1 dark:bg-bg1-dark rounded-full"
            >
                <IconSettings height="2rem" width="2rem" className="m-auto" />
            </motion.button>
        </div>
    );
}
