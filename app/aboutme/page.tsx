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
import {useState} from "react";
import TPPopup from "@/app/ui/aboutmepopup/education-TPpopup";
import {AnimatePresence} from "motion/react";
import AboutMeTimeLine from "@/app/ui/aboutmetimeline";

const sfProDisplayLight = SFProDisplayLight({
    weight:"200",
    src: "../../public/fonts/SFProDisplay-Light.otf",
    variable: "--SFProDisplayLight",
})

const appleGaramondItalic = AppleGaramondItalic({
    weight:"400",
    src: "../../public/fonts/AppleGaramond-Italic.ttf",
    variable: "--AppleGaramondItalic",
})

function AboutMe() {
    const [tpPopup, setTpPopup] = useState(false);

    return (
        <motion.div className="scroll-snap overflow-x-hidden scrollbar-hide">
            <motion.div
                className="flex flex-col h-screen w-full justify-center items-center leading-tight -translate-y-5 "
            >
                <motion.p
                    className={`${sfProDisplayLight.className}`}
                    initial={{opacity: 0, transform: "translateY(50px)"}}
                    whileInView={{opacity: 1, transform: "translateY(0px)"}}
                    exit={{opacity: 0, scale: 0.95}}
                    transition={{ease: "easeInOut", duration: 0.4, delay: 0.5}}
                >Hello, my name is</motion.p>
                <motion.p
                    className={`${appleGaramondItalic.className} text-[40px] text-[#BA0000]`}
                    initial={{opacity: 0, transform: "translateY(50px)"}}
                    animate={{opacity: 1, transform: "translateY(0px)"}}
                    transition={{ease: "easeInOut", duration: 0.4, delay: 0.7}}
                >Duong Minh Thuan</motion.p>
            </motion.div>

            <motion.div
                id="education"
                className="flex flex-col h-screen w-full justify-center items-center leading-tight -translate-y-5"
            >
                <motion.p
                    className={`absolute ${appleGaramondItalic.className} text-5xl text-[#BA0000] top-1/12`}
                >Education</motion.p>

                <div>
                    <AboutMeFolder
                        images={[
                            {src: TP2, alt: "TP2"},
                            {src: TP1, alt: "TP1"},
                            {src: TP3, alt: "TP3"}
                        ]}
                        title="Tan Phu High School"
                        showDate={true}
                        dateText="Aug '18 - May '21"
                        className="relative bottom-15"
                        stickers={[
                            {src: TPsticker, className: "scale-40 -mt-8 -ml-8 rotate-[5deg] drop-shadow-xl"}
                        ]}
                        onClick={() => {setTpPopup(true)}}
                    />
                    <AnimatePresence mode="wait" initial={false}>
                        {tpPopup && (
                            <TPPopup key="tp-popup" onClose={() => setTpPopup(false)} />
                        )}
                    </AnimatePresence>
                </div>
                <AboutMeFolder
                    images={[
                        {src: BK2, alt: "TP2"},
                        {src: BK3, alt: "TP1"},
                        {src: BK1, alt: "TP3"}
                    ]}
                    title="HCMC University of Technology"
                    showDate={true}
                    dateText="Sep '21 - present"
                    className="relative top-10"
                    stickers={[
                        {src: BKsticker, className: "scale-30 -mt-11 -mr-6 rotate-[-5deg] drop-shadow-xl"}
                    ]}
                />
            </motion.div>

            <motion.div
                id="skills"
                className="flex flex-col h-screen w-full justify-center items-center leading-tight -translate-y-5"
            >
                <motion.p
                    className={`absolute ${appleGaramondItalic.className} text-5xl text-[#BA0000] top-1/12`}
                >Skills</motion.p>
            </motion.div>

            <motion.div
                id="skills"
                className="flex flex-col h-screen w-full justify-center items-center leading-tight -translate-y-5"
            >
                <motion.p
                    className={`absolute ${appleGaramondItalic.className} text-5xl text-[#BA0000] top-1/12`}
                >Experience</motion.p>

                <AboutMeTimeLine />
            </motion.div>
        </motion.div>
    )
}

export default AboutMe;
