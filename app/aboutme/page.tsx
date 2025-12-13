"use client"

import { motion, AnimatePresence } from "motion/react";
import SFProDisplayLight from 'next/font/local';
import AppleGaramondItalic from "next/font/local";
import AboutMeFolder from "@/app/ui/aboutmefolder";
import Image from "next/image";
import {useState, Suspense, useEffect, useRef} from "react";
import AboutMeTimeLine from "@/app/ui/aboutmetimeline";
import dynamic from "next/dynamic";
import TPPopup from "@/app/ui/aboutmepopup/education-TPpopup";
import BKPopup from "@/app/ui/aboutmepopup/education-BKpopup";

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

    // --- ADD: scroll hint state ---
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [showScrollHint, setShowScrollHint] = useState(true);

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
            <div className={`h-screen flex justify-center -mt-28 items-center text-5xl w-full overflow-hidden ${appleGaramondItalic.className}`}>
                <p className="color-word">About Me</p>
            </div>

            <div className="h-screen w-full overflow-hidden flex flex-col justify-center items-center pb-[15%]">
                <p className={`mt-5 ${appleGaramondItalic.className} text-4xl text-center mb-5 color-word -z-15`}>Education</p>
                <div style={{ contentVisibility: "auto", containIntrinsicSize: "129px 155px" }} className="p-6">
                    <AboutMeFolderDynamic
                        images={[
                            {src: "edu-tp-1", alt: "test"},
                            {src: "edu-tp-2", alt: "test"},
                            {src: "edu-tp-3", alt: "test"}
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
                            {src: "edu-bk-1", alt: "test"},
                            {src: "edu-bk-2", alt: "test"},
                            {src: "edu-bk-3", alt: "test"}
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

                <div style={{ contentVisibility: "auto", containIntrinsicSize: "129px 155px" }} className="p-8 relative top-0 -left-16" >
                    <AboutMeFolderDynamic
                        images={[
                            {src: "edu-bk-1", alt: "test"},
                            {src: "edu-bk-2", alt: "test"},
                            {src: "edu-bk-3", alt: "test"}
                        ]}
                        title={"Front-end Engineer"}
                        descriptionText="(Web & Mobile)"
                        onClick={() => setBkPopup(true)}
                    />
                </div>

                <div style={{ contentVisibility: "auto", containIntrinsicSize: "129px 155px" }} className="p-8 relative -top-10 left-16">
                    <AboutMeFolder
                        images={[
                            {src: "edu-tp-1", alt: "test"},
                            {src: "edu-tp-2", alt: "test"},
                            {src: "edu-tp-3", alt: "test"}
                        ]}
                        title={"Multimedia Producer"}
                        descriptionText="(Photo & Video)"
                        onClick={() => setBkPopup(true)}
                    />
                </div>


                <div style={{ contentVisibility: "auto", containIntrinsicSize: "129px 155px" }} className="p-8 relative -top-20 right-12">
                    <AboutMeFolder
                        images={[
                            {src: "edu-tp-1", alt: "test"},
                            {src: "edu-tp-2", alt: "test"},
                            {src: "edu-tp-3", alt: "test"}
                        ]}
                        title={"UI/UX Design"}
                        onClick={() => setBkPopup(true)}
                    />
                </div>
            </div>

            <div className="h-screen w-full overflow-hidden flex flex-col justify-center items-center pb-[25%]">
                <p className={`mt-5 ${appleGaramondItalic.className} text-4xl text-center mb-5 color-word`}>Experience</p>
                <AboutMeTimeLine />
            </div>

            <AnimatePresence>
                {showScrollHint && (
                    <motion.div
                        className="flex gap-1 fixed left-1/2 -translate-x-1/2 bottom-24 z-[60] pointer-events-none justify-center items-center"
                        aria-hidden="true"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 6, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >   
                        <p className={`${sfProDisplayLight.className} text-sm text-[#888888]`}>Scroll down for more!</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M6 9l6 6 6-6" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default AboutMe;
