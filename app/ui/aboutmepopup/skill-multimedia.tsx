import { motion } from "motion/react";
import { useEffect } from "react";
import SFProDisplayLight from "next/font/local";
import SFProDisplayMedium from "next/font/local";
import { CldImage } from "next-cloudinary";
import { HugeiconsIcon } from '@hugeicons/react';
import { Cancel01Icon } from '@hugeicons/core-free-icons';
import { Moirai_One } from "next/font/google";

const sfProDisplayLight = SFProDisplayLight({
    weight: "200",
    src: "../../../public/fonts/SFProDisplay-Light.otf",
    variable: "--SFProDisplayLight",
})

const sfProDisplayMedium = SFProDisplayMedium({
    weight: "600",
    src: "../../../public/fonts/SFProDisplay-Medium.otf",
    variable: "--SFProDisplayMedium",
})

function MultimediaPopup({ onClose }: { onClose: () => void }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [])
    return (
        <motion.div
            className="fixed inset-0 w-full h-screen bg-white/50 z-[70] backdrop-blur-lg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
        >
            <div
                className="w-[90%] h-full max-h-screen mx-auto relative flex justify-center py-4"
            >
                <div className="flex flex-col gap-3 justify-center items-center h-[78dvh] w-full">
                    <div className="flex flex-row gap-3 h-8/12 w-full">
                        <motion.div
                            className="w-1/2 h-full bg-white shadow-lg rounded-xl p-3"
                            style={{
                                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.80) 10%, rgba(245, 245, 245, 0.8) 50%, rgba(245, 245, 245, 0.8) 65%, rgba(255, 255, 255, 0.80) 98.08%)',
                                backdropFilter: 'blur(10px)',
                                opacity: 0.8,
                            }}
                            initial={{opacity: 0, scale: 0.9}}
                            animate={{opacity: 1, scale: 1}}
                            exit={{opacity: 0}}
                            transition={{ease: "easeInOut", duration: 0.2, delay: 0.05}}
                        >
                            <p className={`${sfProDisplayMedium.className} text-sm`}>Photography</p>
                            <p className={`${sfProDisplayLight.className} text-sm`}>Camera operation, shot framing & composition, basic lighting setup</p>
                        </motion.div>


                        <motion.div
                            className="w-1/2 h-full bg-white shadow-lg rounded-xl p-3"
                            style={{
                                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.80) 10%, rgba(245, 245, 245, 0.8) 50%, rgba(245, 245, 245, 0.8) 65%, rgba(255, 255, 255, 0.80) 98.08%)',
                                backdropFilter: 'blur(10px)',
                                opacity: 0.8,
                            }}
                            initial={{opacity: 0, scale: 0.9}}
                            animate={{opacity: 1, scale: 1}}
                            exit={{opacity: 0}}
                            transition={{ease: "easeInOut", duration: 0.2, delay: 0.05}}
                        >
                            <p className={`${sfProDisplayMedium.className} text-sm`}>Film & video</p>
                            <p className={`${sfProDisplayLight.className} text-sm`}>Camera operation, storyboarding & shot planning</p>
                        </motion.div>
                    </div>

                    <motion.div
                        className="w-full h-4/12 shadow-lg rounded-xl p-3"
                        style={{
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.80) 10%, rgba(245, 245, 245, 0.8) 50%, rgba(245, 245, 245, 0.8) 65%, rgba(255, 255, 255, 0.80) 98.08%)',
                            backdropFilter: 'blur(10px)',
                            opacity: 0.8,
                        }}
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0}}
                        transition={{ease: "easeInOut", duration: 0.2, delay: 0.2}}
                    >
                        <p className={`${sfProDisplayMedium.className} text-sm`}>Post-production</p>
                        <p className={`${sfProDisplayLight.className} text-sm`}>Lightroom, Photoshop, Premiere Pro</p>

                    </motion.div>
                </div>
                <div className="absolute w-full h-[100%] max-h-[90vh]">
                    <button
                        onClick={onClose}
                        className="absolute bottom-[3%] left-1/2 transform -translate-x-1/2 p-3 rounded-full z-10 border-1 border-[#DBDBDB] shadow-xl"
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
            <div className="absolute top-0 left-0 w-full h-full -z-10 backdrop-blur-lg" onClick={onClose} />
        </motion.div>
    )
}

export default MultimediaPopup;
