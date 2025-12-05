import { motion } from "motion/react";
import {useEffect} from "react";
import SFProDisplayLight from "next/font/local";
import SFProDisplayMedium from "next/font/local";
import {CldImage} from "next-cloudinary";
import { HugeiconsIcon } from '@hugeicons/react';
import { Cancel01Icon } from '@hugeicons/core-free-icons';

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

function BKPopup({ onClose }: { onClose: () => void }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    },[])
    return(
        <motion.div
            className="fixed inset-0 w-full h-screen bg-white/50 z-[70] backdrop-blur-lg overflow-hidden"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ease: "easeInOut", duration: 0.2}}
        >
            <div
                className="w-[300px] h-full max-h-screen mx-auto relative flex items-center justify-center py-4"
            >
                <div className="relative w-full h-[600px] max-h-[85vh]">
                    <motion.div
                        initial={{scale: 0.9, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        exit={{scale: 0.9, opacity: 0}}
                        transition={{ease: "easeInOut", duration: 0.2}}
                        className="absolute"
                    >
                        <CldImage src="edu-bk-1" height={150} width={150} alt={"Tan Phu 1"} className={`rounded-lg shadow-lg`}/>
                    </motion.div>

                    <motion.div
                        initial={{scale: 0.9, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        exit={{scale: 0.9, opacity: 0}}
                        transition={{ease: "easeInOut", duration: 0.2, delay: 0.1}}
                        className="absolute top-[3%] right-0"
                    >
                        <CldImage src="edu-bk-2" height={160} width={160} alt={"Bach Khoa 2"} className="rounded-lg shadow-lg"/>
                    </motion.div>

                    <motion.div
                        initial={{scale: 0.9, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        exit={{scale: 0.9, opacity: 0}}
                        transition={{ease: "easeInOut", duration: 0.2, delay: 0.2}}
                        className={`flex absolute top-[41%] items-center left-0 transform -translate-y-1/2 bg-white px-5 py-5 rounded-xl w-full shadow-2xl`}
                    >
                        <div>
                            <p className={`${sfProDisplayMedium.className} text-sm`}>HCMC University of Technology</p>
                            <p className={`${sfProDisplayLight.className} text-sm`}>GPA: 7.3/10</p>
                            <p className={`${sfProDisplayLight.className} text-sm`}>2021 - present (expected 2026)</p>
                        </div>
                       <CldImage src="edu-bk-sticker" height={100} width={100} alt={"Bach Khoa Stickers"} className="absolute top-[50%] -translate-y-1/2 right-0 rotate-12"/>
                    </motion.div>

                    <motion.div
                        initial={{scale: 0.9, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        exit={{scale: 0.9, opacity: 0}}
                        transition={{ease: "easeInOut", duration: 0.2, delay: 0.3}}
                        className="absolute bottom-[23%] left-0"
                    >
                        <CldImage src="edu-tp-3" height={100} width={170} alt={"Tan Phu 3"} className="rounded-lg shadow-lg"/>
                    </motion.div>

                    <motion.div
                        initial={{scale: 0.9, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        exit={{scale: 0.9, opacity: 0}}
                        transition={{ease: "easeInOut", duration: 0.2, delay: 0.4}}
                        className="absolute bottom-[30%] right-0 w-fit h-fit"
                    >
                        <CldImage src="edu-tp-4" height={90} width={150} alt={"Tan Phu 4"} className="rounded-lg shadow-lg"/>
                    </motion.div>

                    <button 
                        onClick={onClose} 
                        className="absolute bottom-[7%] left-1/2 transform -translate-x-1/2 bg-red-500 p-3 rounded-full z-10 border-1 border-[#DBDBDB] shadow-xl"
                        style={{
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.80) 15%, rgba(235, 235, 235, 0.8) 50%, rgba(235, 235, 235, 0.8) 65%, rgba(255, 255, 255, 0.80) 98.08%)',
                            backdropFilter: 'blur(10px)',
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
            </div>
            <div className="absolute top-0 left-0 w-full h-full -z-10" onClick={onClose}/>
        </motion.div>
    )
}

export default BKPopup;
