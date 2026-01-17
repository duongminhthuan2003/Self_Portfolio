"use client";

import { useEffect, useState } from "react";
import SFProDisplayLight from "next/font/local";
import SFProDisplayMedium from "next/font/local";

const sfProDisplayLight = SFProDisplayLight({
    src: "../../public/fonts/SFProDisplay-Light.otf",
    variable: "--SFProDisplayLight",
})

const sfProDisplayMedium = SFProDisplayMedium({
    src: "../../public/fonts/SFProDisplay-Medium.otf",
    variable: "--SFProDisplayMedium",
})

export default function MobileOnlyOverlay() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    if (!isDesktop) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center px-6 backdrop-blur-2xl opacity-95">
            <div className="text-center max-w-sm">
                <h1 className={`text-2xl font-semibold mb-4 ${sfProDisplayMedium.className}`}>
                    Mobile only
                </h1>

                <p className={`text-gray-600 mb-6 ${sfProDisplayLight.className}`}>
                    Website is currently designed for mobile.<br/>
                    Please open on mobile for best experience.
                </p>
            </div>
        </div>
    );
}
