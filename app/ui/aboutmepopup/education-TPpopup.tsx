import { motion } from "motion/react";

import TP1 from "../../../public/images/education_TP/1.webp"
import TP2 from "../../../public/images/education_TP/2.webp"
import TP3 from "../../../public/images/education_TP/3.webp"
import TP4 from "../../../public/images/education_TP/4.webp"
import TPsticker from "../../../public/images/education_TP/tp_sticker.png"
import Image from "next/image";
import SFProDisplayLight from "next/font/local";
import SFProDisplayMedium from "next/font/local";

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
            test
            <button onClick={onClose}>close</button>
        </motion.div>
    )
}

export default TPPopup;
