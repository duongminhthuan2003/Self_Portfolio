"use client"

import { motion, AnimatePresence } from "motion/react";
import SFProDisplayLight from 'next/font/local';
import AppleGaramondItalic from "next/font/local";
import Image from "next/image";
import { useState, Suspense, useEffect, useRef } from "react";
import AboutMeTimeLine from "@/app/ui/aboutmetimeline";
import dynamic from "next/dynamic";
import TPPopup from "@/app/ui/aboutmepopup/education-TPpopup";
import BKPopup from "@/app/ui/aboutmepopup/education-BKpopup";
import EngineerPopup from "@/app/ui/aboutmepopup/skill-engineer";
import MultimediaPopup from "@/app/ui/aboutmepopup/skill-multimedia"
import UIUXPopup from "@/app/ui/aboutmepopup/skill-uxui"

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
    const [bkPopup, setBkPopup] = useState(false);
    const [engineerPopup, setEngineerPopup] = useState(false);
    const [multimediaPopup, setMultimediaPopup] = useState(false);
    const [uxuiPopup, setUxuiPopup] = useState(false);

    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [showScrollHint, setShowScrollHint] = useState(true);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const update = () => {
            const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 2;
            setShowScrollHint(!atBottom);
        };

        update();
        el.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);

        return () => {
            el.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    return (
        <motion.div
            ref={scrollRef}
            className="scroll-snap overflow-x-hidden scrollbar-hide"
        >
            <div className={`h-screen flex flex-col justify-center -mt-20 items-center text-5xl w-full overflow-hidden ${appleGaramondItalic.className}`}>
                <p className="color-word">About Me</p>
                <p className={`${sfProDisplayLight.className} mx-6 text-base text-center mt-5`}>I’m Dương Minh Thuận. Here’s a quick look at my background, skills, and the <br/>experiences behind my work.</p>
            </div>

            <div className="h-screen w-full overflow-hidden flex flex-col justify-center items-center pb-[15%]">
                <p className={`mt-5 ${appleGaramondItalic.className} text-4xl text-center mb-5 color-word -z-15`}>Education</p>
                <div style={{ contentVisibility: "auto", containIntrinsicSize: "129px 155px" }} className="p-6">
                    <AboutMeFolderDynamic
                        images={[
                            { src: "edu-tp-1", alt: "test" },
                            { src: "edu-tp-2", alt: "test" },
                            { src: "edu-tp-3", alt: "test" }
                        ]}
                        title={"Tan Phu High School"}
                        dateText="Aug ‘18 - May ‘21"
                        onClick={() => setTpPopup(true)}
                    />
                </div>
                <AnimatePresence>
                    {
                        tpPopup && (
                            <TPPopup onClose={() => setTpPopup(false)} />
                        )
                    }
                </AnimatePresence>

                <div style={{ contentVisibility: "auto", containIntrinsicSize: "129px 155px" }} className="p-6">
                    <AboutMeFolderDynamic
                        images={[
                            { src: "edu-bk-1", alt: "test" },
                            { src: "edu-bk-2", alt: "test" },
                            { src: "edu-bk-3", alt: "test" }
                        ]}
                        title={"Bach Khoa University"}
                        dateText="Sep '21 - present"
                        onClick={() => setBkPopup(true)}
                    />
                </div>

                <AnimatePresence>
                    {
                        bkPopup && (
                            <BKPopup onClose={() => setBkPopup(false)} />
                        )
                    }
                </AnimatePresence>
            </div>

            <div className="h-screen w-full overflow-hidden flex flex-col justify-center items-center pb-[15%]">
                <p className={`mt-5 ${appleGaramondItalic.className} text-4xl text-center mb-5 color-word`}>Skills</p>

                <div style={{ contentVisibility: "auto", containIntrinsicSize: "129px 155px" }} className="p-8 relative -left-16" >
                    <AboutMeFolderDynamic
                        images={[
                            { src: "expo-fill", alt: "test" },
                            { src: "reactnative-fill", alt: "test" },
                            { src: "typescript-fill", alt: "test" }
                        ]}
                        title={"Front-end Engineer"}
                        descriptionText="(Web & Mobile)"
                        onClick={() => setEngineerPopup(true)}
                    />
                </div>

                <AnimatePresence>
                    {
                        engineerPopup && (
                            <EngineerPopup onClose={() => setEngineerPopup(false)} />
                        )
                    }
                </AnimatePresence>

                <div style={{ contentVisibility: "auto", containIntrinsicSize: "129px 155px" }} className="p-8 relative left-16 bottom-8">
                    <AboutMeFolderDynamic
                        images={[
                            { src: "media-thumb-1", alt: "test" },
                            { src: "media-thumb-2", alt: "test" },
                            { src: "media-thumb-3", alt: "test" }
                        ]}
                        title={"Multimedia Producer"}
                        descriptionText="(Photo & Video)"
                        onClick={() => setMultimediaPopup(true)}
                    />
                </div>

                <AnimatePresence>
                    {
                        multimediaPopup && (
                            <MultimediaPopup onClose={() => { setMultimediaPopup(false) }} />
                        )
                    }
                </AnimatePresence>


                <div style={{ contentVisibility: "auto", containIntrinsicSize: "129px 155px" }} className="p-8 relative right-2 bottom-10">
                    <AboutMeFolderDynamic
                        images={[
                            { src: "uiux-1", alt: "test" },
                            { src: "uiux-2", alt: "test" },
                            { src: "uiux-3", alt: "test" }
                        ]}
                        title={"UI/UX Design"}
                        onClick={() => setUxuiPopup(true)}
                    />
                </div>

                <AnimatePresence>
                    {
                        uxuiPopup && (
                            <UIUXPopup onClose={() => setUxuiPopup(false)} />
                        )
                    }
                </AnimatePresence>
            </div>

            <div className="h-screen w-full overflow-hidden flex flex-col justify-center items-center pb-[25%]">
                <p className={`mt-5 ${appleGaramondItalic.className} text-4xl text-center mb-5 color-word`}>Experience</p>
                <AboutMeTimeLine />
            </div>
        </motion.div>
    )
}

export default AboutMe;
