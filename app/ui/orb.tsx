import {useId} from "react";
import {motion} from "framer-motion";

type OrbProps = {
    height: number;
    width: number;
}

function Orb({ height, width }: OrbProps) {
    const maskId = useId();

    return(
        <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, type: "spring" }}
            className="absolute flex justify-center top-1/2 z-20 -translate-y-1/2 rounded-full"
            style={{
                height: height,
                width: width,
            }}
        >
            <motion.div
                className="pointer-events-none absolute inset-0 bg-black rounded-full"
            />
            {/* Phản sáng trên cùng */}
            <svg xmlns="http://www.w3.org/2000/svg" width={width*6/10} height={height/4} viewBox="0 0 28 10" fill="none" className="absolute mt-[1px]">
                <g filter="url(#filter0_i_634_494)">
                    <path d="M14.3571 0.933289C8.54687 0.933289 3.47951 3.0903 1.39977 5.24732C-0.0422021 7.40433 1.07532 10.4977 5.24008 9.56135C9.07778 8.69854 19.2234 8.82149 22.5158 9.56135C26.3553 10.4242 28.4887 7.40433 26.3556 5.24732C24.2226 3.09031 20.1164 0.933289 14.3571 0.933289Z" fill="url(#paint0_linear_634_494)"/>
                </g>
                <defs>
                    <filter id="filter0_i_634_494" x="0.800781" y="0.933289" width="26.4004" height="10.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.32 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_634_494"/>
                    </filter>
                    <linearGradient id="paint0_linear_634_494" x1="14.0008" y1="0.933289" x2="14.0008" y2="9.73329" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.52"/>
                        <stop offset="1" stopColor="white" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>

            {/* Inner shadow đen*/}
            <motion.div
                className="absolute inset-0 rounded-full"
                style={{ boxShadow: "0 0 8px 2px rgba(255,255,255,0.25) inset, 0 0 12px 0 rgba(255,255,255,0.08) inset" }}
            />

            <motion.div
                className="absolute inset-0 rounded-full"
                style={{ boxShadow: "0 5px 5px rgba(0, 0, 0, 0.25), 0 40px 35px rgba(0, 0, 0, 0.25), 0 13px 20px rgba(0, 0, 0, 0.45), 0 1px 2px rgba(0, 0, 0, 0.25)" }}
            />

            {/* Mask pill */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
                <defs>
                    <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
                        <rect width="100%" height="100%" fill="black" />
                        <ellipse cx="50%" cy="50%" rx="90%" ry="60" transform="translate(0,-50)" fill="#BA0000" opacity={0.9} />
                    </mask>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" rx="20" ry="50%" fill="#ffffff" opacity="60%" mask={`url(#${maskId})`} />
            </svg>
        </motion.span>
    )
}

export default Orb;
