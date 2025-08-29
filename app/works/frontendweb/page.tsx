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
        <div className="flex flex-col overflow-x-hidden">
            <div>
                <motion.p
                    className={`absolute ${appleGaramondItalic.className} text-4xl text-[#BA0000] top-1/12 w-full text-center`}
                >
                    Front-end Web Developer
                </motion.p>
            </div>

            <div className="mt-40">
                <SwiperCoverflow />
            </div>
        </div>
    )
}

export default FrontendWebDev;
