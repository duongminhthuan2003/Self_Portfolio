"use client";

import { AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

export default function Providers({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    return (
        <AnimatePresence mode="wait" initial={false}>
            <div key={pathname}>{children}</div>
        </AnimatePresence>
    );
}
