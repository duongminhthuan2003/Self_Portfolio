"use client";

import MobileSwiperCoverflow from "@/app/ui/mobile-coverflow";
import AppleGaramondItalic from "next/font/local";
import {motion} from "motion/react";
import SFMono from "next/font/local";
import {useRouter} from "next/navigation";

const appleGaramondItalic = AppleGaramondItalic({
    weight:"400",
    src: "../../../public/fonts/AppleGaramond-Italic.ttf",
    variable: "--AppleGaramondItalic",
})

const sfMono = SFMono({
    weight: "400",
    src: "../../../public/fonts/SFMono-Regular.otf",
    variable: "--SFMono-Regular",
});

function MobileSoftwareEngineer() {
    const myRouter = useRouter();

    return (
        <div className="h-screen flex flex-col overflow-x-hidden">
            <div>
                <motion.p
                    className={`${appleGaramondItalic.className} text-4xl text-[#BA0000] mt-16 w-full text-center`}
                >
                    Mobile Software Engineer
                </motion.p>
            </div>


            <div
                className={`${sfMono.className} flex justify-center items-center gap-4 mt-3 cursor-pointer`}
                onClick={() => {
                    myRouter.back();
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="12" viewBox="0 0 29 12" fill="none">
                    <path d="M28 6L1 6M1 6L6.14412 11M1 6L6.14412 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>BACK</p>
            </div>

            <motion.div
                className="my-auto -translate-y-20"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
            >
                <MobileSwiperCoverflow />
            </motion.div>
        </div>
    )
}

export default MobileSoftwareEngineer;
