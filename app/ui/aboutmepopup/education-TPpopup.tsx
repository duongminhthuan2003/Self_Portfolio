import { motion } from "framer-motion";

import TP1 from "../../../public/images/education_TP/1.jpg"
import TP2 from "../../../public/images/education_TP/2.jpg"
import TP3 from "../../../public/images/education_TP/3.jpg"
import TP4 from "../../../public/images/education_TP/4.jpg"
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
            className="fixed inset-0 z-[70] bg-white/20 backdrop-blur-sm overflow-x-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute w-4/12 aspect-square 8 left-8 top-8"
                style={{
                    filter: "drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2))",
                }}
                transition={{ duration: 0.3, type: "spring" }}
            >
                <Image src={TP1} alt={"Image 1"} className="absolute z-[80] rounded-2xl w-full aspect-square left-1/2 top-1/2 -translate-1/2 ring-3 ring-gray-100"/>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute w-4/12 aspect-square left-36 top-24"
                style={{
                    filter: "drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2))",
                }}
                transition={{ duration: 0.3, type: "spring", delay: 0.05 }}
            >
                <Image src={TP2} alt={"Image 1"} className="absolute z-[80] rounded-2xl w-full aspect-square left-1/2 top-1/2 -translate-1/2  border-3 border-gray-200"/>
            </motion.div>

            {/*content*/}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute left-1/2 -translate-x-1/2 top-1/3 w-10/12 h-32 bg-white rounded-2xl ring-3 ring-gray-100 p-5 flex flex-col"
                style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.2))" }}
                transition={{ duration: 0.3, type: "spring", delay: 0.1 }}
            >
                <p className={`${sfProDisplayMedium.className} text-lg`}>Tan Phu High School</p>
                <p className={`${sfProDisplayLight.className}`}>Aug &#39;18 - May &#39;21</p>
                <div className="flex-1"></div>
                <p className={`${sfProDisplayLight.className}`}>GPA:8.5/10</p>
                <Image src={TPsticker} alt={"TPSticker"} className="absolute w-36 -right-8 -top-4"/>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute w-3/12 aspect-square right-8 bottom-72"
                style={{
                    filter: "drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2))",
                }}
                transition={{ duration: 0.3, type: "spring", delay: 0.15 }}
            >
                <Image src={TP3} alt={"Image 3"} className="absolute z-[80] rounded-2xl w-full aspect-square right-6 object-cover top-1/2 -translate-y-6 ring-3 ring-gray-100"/>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute w-7/12 left-8 bottom-64"
                style={{
                    filter: "drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2))",
                }}
                transition={{ duration: 0.3, type: "spring", delay: 0.2 }}
            >
                <Image src={TP4} alt={"Image 4"} className="absolute z-[80] rounded-2xl w-full aspect-video left-1/2 object-cover top-1/2 -translate-1/2  ring-3 ring-gray-100"/>
            </motion.div>

            <motion.button
                onClick={onClose}
                className="absolute left-1/2 -translate-x-1/2 bottom-28 w-[50px] h-[50px] bg-white drop-shadow-xl flex items-center justify-center rounded-full ring-1 ring-gray-200 -translate-y-8"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g filter="url(#filter0_i_612_1837)">
                        <path d="M15 1L1.00095 14.9991M14.9991 15L1 1.00099" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                </svg>
            </motion.button>
        </motion.div>
    )
}

export default TPPopup;
