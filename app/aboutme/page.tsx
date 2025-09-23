"use client"

import { motion } from "framer-motion";
import SFProDisplayLight from 'next/font/local';
import AppleGaramondItalic from "next/font/local";
import AboutMeFolder from "@/app/ui/aboutmefolder";
import Image from "next/image";
import {useState, Suspense} from "react";
import AboutMeTimeLine from "@/app/ui/aboutmetimeline";

const sfProDisplayLight = SFProDisplayLight({
    src: "../../public/fonts/SFProDisplay-Light.otf",
    variable: "--SFProDisplayLight",
})

const appleGaramondItalic = AppleGaramondItalic({
    src: "../../public/fonts/AppleGaramond-Italic.ttf",
    variable: "--AppleGaramondItalic",
})

function AboutMe() {
    const [tpPopup, setTpPopup] = useState(false);

    return (
        <motion.div className="scroll-snap overflow-x-hidden scrollbar-hide">
            <div className="h-screen w-full">
                <p>test</p>
            </div>

            <div className="h-screen w-full">
                <p className="mt-5">Education</p>
                <AboutMeFolder
                    images={[
                        {src: "edu-tp-1", alt: "test"},
                        {src: "edu-tp-2", alt: "test"},
                        {src: "edu-tp-3", alt: "test"}
                    ]}
                    title={"Tan Phu High School"}
                />

                <AboutMeFolder
                    images={[
                        {src: "edu-tp-1", alt: "test"},
                        {src: "edu-tp-2", alt: "test"},
                        {src: "edu-tp-3", alt: "test"}
                    ]}
                    title={"Tan Phu High School"}
                />


            </div>

            <div className="h-screen w-full">
                <p className="mt-5">Skills</p>

            </div>

            <div className="h-screen w-full">
                <AboutMeTimeLine />
            </div>
        </motion.div>
    )
}

export default AboutMe;
