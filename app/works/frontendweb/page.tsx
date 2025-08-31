"use client";

import SwiperCoverflow from "@/app/ui/frontend-coverflow";
import AppleGaramondItalic from "next/font/local";
import {motion} from "framer-motion";

const appleGaramondItalic = AppleGaramondItalic({
    weight:"400",
    src: "../../../public/fonts/AppleGaramond-Italic.ttf",
    variable: "--AppleGaramondItalic",
})

function FrontendWebDev() {
    return (
        <div className="h-screen flex flex-col overflow-x-hidden">
            <div className="flex-shrink-0">
                <motion.p
                    className={`${appleGaramondItalic.className} text-4xl text-[#BA0000] pt-16 pb-8 w-full text-center`}
                >
                    Front-end Web Developer
                </motion.p>
            </div>

            <div className="my-auto -translate-y-10">
                <SwiperCoverflow />
            </div>
        </div>
    )
}

export default FrontendWebDev;
