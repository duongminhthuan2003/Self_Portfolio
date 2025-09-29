import { motion } from "motion/react";

import SFProDisplayLight from "next/font/local";
import SFProDisplayMedium from "next/font/local";
import {CldImage} from "next-cloudinary";

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
                className="w-[320px] h-full mx-auto relative"
            >
                <motion.div
                    initial={{scale: 0.9, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    exit={{scale: 0.9, opacity: 0}}
                    transition={{ease: "easeInOut", duration: 0.2}}
                    className="absolute"
                >
                    <CldImage src="edu-tp-1" height={150} width={150} alt={"Tan Phu 1"} className={`rounded-lg`}/>
                </motion.div>

                <motion.div
                    initial={{scale: 0.9, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    exit={{scale: 0.9, opacity: 0}}
                    transition={{ease: "easeInOut", duration: 0.2, delay: 0.1}}
                    className="absolute top-0 right-0"
                >
                    <CldImage src="edu-tp-2" height={175} width={175} alt={"Tan Phu 2"} className="rounded-lg"/>
                </motion.div>

                <motion.div
                    initial={{scale: 0.9, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    exit={{scale: 0.9, opacity: 0}}
                    transition={{ease: "easeInOut", duration: 0.2, delay: 0.2}}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2"
                >
                    Tan Phu Highschool
                    GPA: 8.5/10
                    2018 - 2021
                </motion.div>


                <motion.div
                    initial={{scale: 0.9, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    exit={{scale: 0.9, opacity: 0}}
                    transition={{ease: "easeInOut", duration: 0.2, delay: 0.3}}
                    className="absolute bottom-0 left-0"
                >
                    <CldImage src="edu-tp-3" height={100} width={205} alt={"Tan Phu 3"} className="rounded-lg"/>
                </motion.div>

                <motion.div
                    initial={{scale: 0.9, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    exit={{scale: 0.9, opacity: 0}}
                    transition={{ease: "easeInOut", duration: 0.2, delay: 0.4}}
                    className="absolute bottom-5 right-0"
                >
                    <CldImage src="edu-tp-4" height={100} width={205} alt={"Tan Phu 4"} className="rounded-lg"/>
                </motion.div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full -z-10" onClick={onClose}/>
            <button onClick={onClose} className="bg-red-500 p-5 z-10">close</button>
        </motion.div>
    )
}

export default TPPopup;
