"use client"

import { motion } from "motion/react";
import SFProDisplayLight from 'next/font/local';
import AppleGaramondItalic from "next/font/local";
import AboutMeFolder from "@/app/ui/aboutmefolder";
import Image from "next/image";
import {useState, Suspense} from "react";
import AboutMeTimeLine from "@/app/ui/aboutmetimeline";
import dynamic from "next/dynamic";
import TPPopup from "@/app/ui/aboutmepopup/education-TPpopup";

const sfProDisplayLight = SFProDisplayLight({
    src: "../../public/fonts/SFProDisplay-Light.otf",
    variable: "--SFProDisplayLight",
})

const appleGaramondItalic = AppleGaramondItalic({
    src: "../../public/fonts/AppleGaramond-Italic.ttf",
    variable: "--AppleGaramondItalic",
})

const AboutMeFolderDynamic = dynamic(() => import("@/app/ui/aboutmefolder"), {
    ssr: false,

    loading: () => (
        <div className="h-[129px] w-[155px] rounded-xl bg-neutral-200/50 animate-pulse mx-auto" />
    ),
});

function AboutMe() {
    const [tpPopup, setTpPopup] = useState(false);

    return (
        <motion.div className="scroll-snap overflow-x-hidden scrollbar-hide">
            <div className="h-screen w-full">
                <p>test</p>
            </div>

            <div className="h-screen w-full">
                <p className="mt-5">Education</p>
                <div style={{ contentVisibility: "auto", containIntrinsicSize: "129px 155px" }} className="p-8">
                    <AboutMeFolderDynamic
                        images={[
                            {src: "edu-tp-1", alt: "test"},
                            {src: "edu-tp-2", alt: "test"},
                            {src: "edu-tp-3", alt: "test"}
                        ]}
                        title={"Tan Phu High School"}
                        onClick={() => setTpPopup(true)}
                    />
                </div>
                {
                    tpPopup && (
                        <TPPopup onClose={() => setTpPopup(false)} />
                    )
                }
                <div style={{ contentVisibility: "auto", containIntrinsicSize: "129px 155px" }} className="p-8">
                    <AboutMeFolderDynamic
                        images={[
                            {src: "edu-tp-1", alt: "test"},
                            {src: "edu-tp-2", alt: "test"},
                            {src: "edu-tp-3", alt: "test"}
                        ]}
                        title={"Tan Phu High School"}
                    />
                </div>
            </div>

            <div className="h-screen w-full">
                <p className="mt-5">Skills</p>

                <div style={{ contentVisibility: "auto", containIntrinsicSize: "129px 155px" }} className="p-8" >
                    <AboutMeFolder
                        images={[
                            {src: "edu-tp-1", alt: "test"},
                            {src: "edu-tp-2", alt: "test"},
                            {src: "edu-tp-3", alt: "test"}
                        ]}
                        title={"Tan Phu High School"}
                    />
                </div>

                <div style={{ contentVisibility: "auto", containIntrinsicSize: "129px 155px" }} className="p-8">
                    <AboutMeFolder
                        images={[
                            {src: "edu-tp-1", alt: "test"},
                            {src: "edu-tp-2", alt: "test"},
                            {src: "edu-tp-3", alt: "test"}
                        ]}
                        title={"Tan Phu High School"}
                    />
                </div>

                <div style={{ contentVisibility: "auto", containIntrinsicSize: "129px 155px" }} className="p-8">
                    <AboutMeFolder
                        images={[
                            {src: "edu-tp-1", alt: "test"},
                            {src: "edu-tp-2", alt: "test"},
                            {src: "edu-tp-3", alt: "test"}
                        ]}
                        title={"Tan Phu High School"}
                    />
                </div>
            </div>

            <div className="h-screen w-full">
                <AboutMeTimeLine />
            </div>
        </motion.div>
    )
}

export default AboutMe;
