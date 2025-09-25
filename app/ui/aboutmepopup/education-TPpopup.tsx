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
            <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="w-full mx-auto"
            >
                test
            </motion.div>
            <div className="absolute top-0 left-0 w-full h-full -z-10" onClick={onClose}/>
            <button onClick={onClose}>close</button>
        </motion.div>
    )
}

export default TPPopup;
