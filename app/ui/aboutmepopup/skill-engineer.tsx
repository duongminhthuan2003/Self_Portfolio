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

function TPPopup({ onClose }: { onClose: () => void }) {
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
                className="w-[90%] h-full max-h-screen mx-auto relative flex justify-center py-4"
            >
                <div className="flex flex-col gap-3 justify-center items-center h-[70dvh] w-full">
                    <div className="flex flex-row gap-3 h-3/4 w-full">
                        <motion.div
                            className="w-7/12 h-full bg-white shadow-lg rounded-xl p-3"
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
                            <p className={`${sfProDisplayMedium.className} text-sm`}>Mobile App Development</p>
                            <p className={`${sfProDisplayLight.className} text-sm`}>React Native, TypeScript, Nativewind, Expo</p>

                            <CldImage src="typescript" height={80} width={80} alt={"Engineer 1"} className="absolute bottom-0 left-0 drop-shadow-lg -rotate-5" />
                            <CldImage src="expo" height={90} width={90} alt={"Engineer 1"} className="absolute bottom-5 left-1/6 drop-shadow-md rotate-6"/>
                            <CldImage src="reactnative" height={100} width={100} alt={"Engineer 1"} className="absolute bottom-0 left-1/3 drop-shadow-md rotate-3 z-20"/>
                            <CldImage src="nativewind" height={90} width={90} alt={"Engineer 1"} className="absolute bottom-2 right-0 drop-shadow-md -rotate-8"/>

                        </motion.div>
                        <div className="flex flex-col gap-3 w-5/12 h-full">
                            <motion.div
                            className="w-full h-1/2 bg-white shadow-lg rounded-xl p-3"
                            style={{
                                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.80) 10%, rgba(245, 245, 245, 0.8) 50%, rgba(245, 245, 245, 0.8) 65%, rgba(255, 255, 255, 0.80) 98.08%)',
                                backdropFilter: 'blur(10px)',
                                opacity: 0.8,
                            }}
                            initial={{opacity: 0, scale: 0.9}}
                            animate={{opacity: 1, scale: 1}}
                            exit={{opacity: 0}}
                            transition={{ease: "easeInOut", duration: 0.2, delay: 0.1}}
                            >
                                <p className={`${sfProDisplayMedium.className} text-sm`}>Front-end Web</p>
                                <p className={`${sfProDisplayLight.className} text-sm`}>ReactJS, NextJS, TypeScript, Framer Motion, Tailwind</p>

                                <CldImage src="typescript" height={60} width={60} alt={"Engineer 1"} className="absolute bottom-0 left-0 drop-shadow-lg -rotate-5" />
                                <CldImage src="react" height={70} width={70} alt={"Engineer 1"} className="absolute bottom-6 left-[10%] drop-shadow-md rotate-6"/>
                                <CldImage src="nextjs" height={90} width={90} alt={"Engineer 1"} className="absolute bottom-0 left-[20%] drop-shadow-md rotate-3 z-20"/>
                                <CldImage src="tailwind" height={90} width={90} alt={"Engineer 1"} className="absolute bottom-6 right-[5%] drop-shadow-md -rotate-5"/>
                                <CldImage src="motion" height={60} width={60} alt={"Engineer 1"} className="absolute bottom-2 right-0 drop-shadow-md -rotate-8"/>
                            </motion.div>

                            <motion.div
                            className="w-full h-1/2 shadow-lg rounded-xl p-3"
                            style={{
                                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.80) 10%, rgba(245, 245, 245, 0.8) 50%, rgba(245, 245, 245, 0.8) 65%, rgba(255, 255, 255, 0.80) 98.08%)',
                                backdropFilter: 'blur(10px)',
                                opacity: 0.8,
                            }}
                            initial={{opacity: 0, scale: 0.9}}
                            animate={{opacity: 1, scale: 1}}
                            exit={{opacity: 0}}
                            transition={{ease: "easeInOut", duration: 0.2, delay: 0.15}}
                            >
                                <p className={`${sfProDisplayMedium.className} text-sm`}>Data Driven</p>
                                <p className={`${sfProDisplayLight.className} text-sm`}>Firebase, BLE, RESTful API</p>

                                <CldImage src="bluetooth" height={80} width={80} alt={"Engineer 1"} className="absolute bottom-0 left-0 drop-shadow-lg -rotate-5" />
                                <CldImage src="firebase" height={90} width={90} alt={"Engineer 1"} className="absolute bottom-5 left-1/6 drop-shadow-md rotate-6"/>
                                <CldImage src="restapi" height={90} width={90} alt={"Engineer 1"} className="absolute bottom-0 left-1/3 drop-shadow-md rotate-3 z-20"/>

                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        className="w-full h-1/4 shadow-lg rounded-xl p-3"
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
                        <p className={`${sfProDisplayMedium.className} text-sm`}>Product-ready Engineering</p>
                        <p className={`${sfProDisplayLight.className} text-sm`}>Responsive & adaptive UI, component-based architecture, realtime data & live dashboards</p>

                    </motion.div>
                </div>
                <div className="absolute w-full h-[95%] max-h-[85vh]">
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
            <div className="absolute top-0 left-0 w-full h-full -z-10 backdrop-blur-lg" onClick={onClose}/>
        </motion.div>
    )
}

export default TPPopup;
