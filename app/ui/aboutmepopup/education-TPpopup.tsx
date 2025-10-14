import { motion } from "motion/react";

import SFProDisplayLight from "next/font/local";
import SFProDisplayMedium from "next/font/local";
import {CldImage} from "next-cloudinary";
import { HugeiconsIcon } from '@hugeicons/react';
import { Cancel01Icon } from '@hugeicons/core-free-icons';
import { linear } from "maath/dist/declarations/src/easing";

function App() {
  return (
    <HugeiconsIcon
      icon={Cancel01Icon}
      size={24}
      color="#000000"
      strokeWidth={1.5}
    />
  );
}
const sfProDisplayLight = SFProDisplayLight({
    weight:"200",
    src: "../../../public/fonts/SFProDisplay-Light.otf",
    variable: "--SFProDisplayLight",
})

const sfProDisplayMedium = SFProDisplayMedium({
    weight:"600",
    src: "../../../public/fonts/SFProDisplay-Medium.otf",
    variable: "--SFProDisplayMedium",
})

function TPPopup({ onClose }: { onClose: () => void }) {
    return(
        <motion.div
            className="absolute top-0 left-0 w-full h-full bg-white/50 z-[70] backdrop-blur-lg"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}

            transition={{ease: "easeInOut", duration: 0.2}}
        >
            <div
                className="w-[300px] h-full mx-auto relative"
            >
                <motion.div
                    initial={{scale: 0.9, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    exit={{scale: 0.9, opacity: 0}}
                    transition={{ease: "easeInOut", duration: 0.2}}
                    className="absolute top-10"
                >
                    <CldImage src="edu-tp-1" height={150} width={150} alt={"Tan Phu 1"} className={`rounded-lg`}/>
                </motion.div>

                <motion.div
                    initial={{scale: 0.9, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    exit={{scale: 0.9, opacity: 0}}
                    transition={{ease: "easeInOut", duration: 0.2, delay: 0.1}}
                    className="absolute top-20 right-0"
                >
                    <CldImage src="edu-tp-2" height={175} width={175} alt={"Tan Phu 2"} className="rounded-lg"/>
                </motion.div>

                <motion.div
                    initial={{scale: 0.9, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    exit={{scale: 0.9, opacity: 0}}
                    transition={{ease: "easeInOut", duration: 0.2, delay: 0.2}}
                    className={`absolute top-[48%] left-0 transform -translate-y-1/2 bg-white px-5 py-4 rounded-xl w-full`}
                    style={{
                        boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.15)'
                    }}
                >
                    <p className={`${sfProDisplayMedium.className}`}>Tan Phu Highschool</p>
                    <p className={`${sfProDisplayLight.className}`}>GPA: 8.5/10</p>
                    <p className={`${sfProDisplayLight.className}`}>2018 - 2021</p>
                    <CldImage src="tp_sticker" height={125} width={125} alt={"Tan Phu Stickers"} className="absolute -top-3 right-0"/>
                </motion.div>


                <motion.div
                    initial={{scale: 0.9, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    exit={{scale: 0.9, opacity: 0}}
                    transition={{ease: "easeInOut", duration: 0.2, delay: 0.3}}
                    className="absolute bottom-30 left-0"
                >
                    <CldImage src="edu-tp-3" height={100} width={175} alt={"Tan Phu 3"} className="rounded-lg"/>
                </motion.div>

                <motion.div
                    initial={{scale: 0.9, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    exit={{scale: 0.9, opacity: 0}}
                    transition={{ease: "easeInOut", duration: 0.2, delay: 0.4}}
                    className="absolute bottom-45 right-0 w-fit h-fit"
                >
                    <CldImage src="edu-tp-4" height={100} width={175} alt={"Tan Phu 4"} className="rounded-lg"/>
                </motion.div>

                <button 
                    onClick={onClose} 
                    className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-red-500 p-3 rounded-full z-10 border-1 border-[#DBDBDB]"
                    style={{
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.80) 8%, rgba(231, 230, 230, 0.8) 50%, rgba(233, 233, 233, 0.8) 70%, rgba(255, 255, 255, 0.80) 98.08%)',
                        backdropFilter: 'blur(10px)',
                        filter: 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.1))',
                        opacity: 0.8,
                    }}
                >
                    <HugeiconsIcon
                        icon={Cancel01Icon}
                        size={24}
                        color="#000000"
                        strokeWidth={1.5}
                    />
                </button>
            </div>
            <div className="absolute top-0 left-0 w-full h-full -z-10" onClick={onClose}/>
        </motion.div>
    )
}

export default TPPopup;
