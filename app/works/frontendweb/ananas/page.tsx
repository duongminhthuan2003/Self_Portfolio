"use client"

import SFMono from "next/font/local";
import {useRouter} from "next/navigation";
import AppleGaramond from "next/font/local";
import SFProDisplayLight from "next/font/local";
import SFProDisplayMedium from "next/font/local";
import Button from "../../../ui/gallerybutton"
import ananas1 from "@/public/images/projects/ananas/overview1.png";
import ananas2 from "@/public/images/projects/ananas/overview2.webp";
import ananas3 from "@/public/images/projects/ananas/overview3.webp";
import ananas4 from "@/public/images/projects/ananas/overview4.png";

import Image from "next/image";
import { motion } from "framer-motion";

const sfMono = SFMono({
    weight: "400",
    src: "../../../../public/fonts/SFMono-Regular.otf",
    variable: "--SFMono-Regular",
});

const appleGaramond = AppleGaramond({
    weight:"400",
    src: "../../../../public/fonts/AppleGaramond.ttf",
    variable: "--AppleGaramond",
})

const sfProDisplayLight = SFProDisplayLight({
    weight:"200",
    src: "../../../../public/fonts/SFProDisplay-Light.otf",
    variable: "--SFProDisplayLight",
})


const sfProDisplayMedium = SFProDisplayMedium({
    weight:"600",
    src: "../../../../public/fonts/SFProDisplay-Medium.otf",
    variable: "--SFProDisplayMedium",
})

export default function Ananas() {
    const myRouter = useRouter();

    return (
        <div className="flex flex-col h-screen mx-4 py-4 gap-2">
            <div className="flex flex-row w-full justify-center items-center">
                <div
                    className={`${sfMono.className} flex justify-center items-center gap-4 cursor-pointer text-sm`}
                    onClick={() => {
                        myRouter.back();
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="12" viewBox="0 0 29 12" fill="none">
                        <path d="M28 6L1 6M1 6L6.14412 11M1 6L6.14412 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p>BACK</p>
                </div>

                <div className={`${sfProDisplayLight.className} flex text-sm flex-col items-end w-full`}>
                    <p>
                        Mobil Software
                    </p>
                    <p className={`${appleGaramond.className} text-2xl -mt-2 text-[#BA0000]`}>
                        zeno
                    </p>
                </div>
            </div>

            <div className="flex flex-1 flex-col gap-2">
                <motion.div
                    className="flex-1 bg-white/30 rounded-xl border-gray-200 border-2"
                    style={{
                        boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.15)",
                        backdropFilter: "blur(4px)",
                    }}
                    initial={{opacity:0, y:20}}
                    animate={{opacity:1, y:0}}
                >
                    <Image src={ananas1} alt="Ananas 1" className="object-cover h-16 object-bottom w-10/12 mx-auto" />
                </motion.div>

                <motion.div
                    className="bg-white/30 rounded-xl border-gray-200 border-2 max-h-[300px] flex"
                    style={{
                        boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.15)",
                        backdropFilter: "blur(4px)",
                    }}
                    initial={{opacity:0, y:20}}
                    animate={{opacity:1, y:0}}
                    transition={{delay: 0.1}}
                >
                    <Image src={ananas2} alt="Ananas 2" className="object-cover scale-80 mx-auto" />
                </motion.div>

                <div className="flex-1 flex flex-row gap-2">
                    <motion.div
                        className="flex-3 bg-white/30 rounded-xl border-gray-200 border-2 h-10/12"
                        style={{
                            boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.15)",
                            backdropFilter: "blur(4px)",
                        }}
                        initial={{opacity:0, y:20}}
                        animate={{opacity:1, y:0}}
                        transition={{delay: 0.2}}
                    >
                        <Image src={ananas3} alt="Ananas 3" className="h-full object-scale-down mx-auto" />
                    </motion.div>

                    <motion.div
                        className="flex-2 bg-white/30 rounded-xl border-gray-200 border-2 h-10/12"
                        style={{
                            boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.15)",
                            backdropFilter: "blur(4px)",
                        }}
                        initial={{opacity:0, y:20}}
                        animate={{opacity:1, y:0}}
                        transition={{delay: 0.3}}
                    >
                        <Image src={ananas4} alt="Ananas 4" className="object-cover h-full scale-95 mx-auto" />
                    </motion.div>

                </div>

                <motion.div
                    className="flex-1 bg-white/30 rounded-xl border-gray-200 border-2 px-4 h-full flex flex-col -mt-5"
                    style={{
                        boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.15)",
                        backdropFilter: "blur(4px)",
                    }}
                    initial={{opacity:0, y:20}}
                    animate={{opacity:1, y:0}}
                    transition={{delay: 0.4}}
                >
                    <p className={`${sfProDisplayLight.className} flex flex-col items-end w-full text-[13px] mt-3`}>
                        A React Native app connecting to an ESP32-based  smart watch, built for my Logic Design
                        Project course. I handled  the entire app development, from UI/UX design to coding.
                    </p>
                    <div className="flex-1"></div>
                    <p className=" text-[13px] mb-3">
                        <span className={`${sfProDisplayMedium.className}`}>Tech stack: </span><span className={`${sfProDisplayLight.className}`}>React Native, Firebase, Figma</span>
                    </p>
                </motion.div>

                <motion.div
                    className="flex-1 rounded-xl flex items-start justify-center"
                    initial={{opacity:0, y:20}}
                    animate={{opacity:1, y:0}}
                    transition={{delay: 0.5}}
                >
                    <div>
                        <Button />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
