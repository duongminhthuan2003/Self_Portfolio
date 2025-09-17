"use client"

import TP1 from "../../public/images/education_TP/1.jpg"
import TP2 from "../../public/images/education_TP/2.jpg"
import TP3 from "../../public/images/education_TP/3.jpg"
import TPsticker from "../../public/images/education_TP/tp_sticker.png"

import BK1 from "../../public/images/education_BK/1.jpg"
import BK2 from "../../public/images/education_BK/2.jpg"
import BK3 from "../../public/images/education_BK/3.jpg"
import BKsticker from "../../public/images/education_BK/bk_sticker.png"

import { motion } from "framer-motion";
import SFProDisplayLight from 'next/font/local';
import AppleGaramondItalic from "next/font/local";
import AboutMeFolder from "@/app/ui/aboutmefolder";
import Image from "next/image";
import {useState, Suspense} from "react";
import TPPopup from "@/app/ui/aboutmepopup/education-TPpopup";
import {AnimatePresence} from "motion/react";
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
                <AboutMeTimeLine />
            </div>
        </motion.div>
    )
}

export default AboutMe;
