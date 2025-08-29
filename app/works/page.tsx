"use client"

import WorksCards from "@/app/ui/workscards";
import AppleGaramondItalic from "next/font/local";

import {motion} from "framer-motion";
import {useState} from "react";
import {useRouter} from "next/navigation";

export function MobileAppIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 17 24" fill="none">
            <g filter="url(#filter0_i_771_508)">
                <path d="M8.50781 19.4278H8.51853" stroke="#BEBEBE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.1012 1.38672L6.91753 1.38672C4.41616 1.38672 3.16548 1.38672 2.3884 2.16379C1.61133 2.94087 1.61133 4.19155 1.61133 6.69292L1.61133 17.3053C1.61133 19.8067 1.61133 21.0573 2.3884 21.8345C3.16548 22.6115 4.41616 22.6115 6.91753 22.6115H10.1012C12.6026 22.6115 13.8533 22.6115 14.6304 21.8345C15.4074 21.0573 15.4074 19.8067 15.4074 17.3053V6.69292C15.4074 4.19155 15.4074 2.94087 14.6304 2.16379C13.8533 1.38672 12.6026 1.38672 10.1012 1.38672Z" stroke="#BEBEBE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
                <filter id="filter0_i_771_508" x="0.611328" y="0.386719" width="15.7969" height="24.2248" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0862745 0 0 0 0 0.0862745 0 0 0 0 0.0862745 0 0 0 0.35 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_771_508"/>
                </filter>
            </defs>
        </svg>
    )
}

export function WebDevIcon() {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
            <g filter="url(#filter0_i_601_1244)">
                <path d="M10.9325 21.1036C16.3749 21.1036 20.7869 16.6917 20.7869 11.2492C20.7869 5.80682 16.3749 1.39487 10.9325 1.39487C5.49008 1.39487 1.07812 5.80682 1.07812 11.2492C1.07812 16.6917 5.49008 21.1036 10.9325 21.1036Z" stroke="#BEBEBE" strokeWidth="2"/>
                <path d="M6.99023 11.2492C6.99023 17.1619 10.932 21.1036 10.932 21.1036C10.932 21.1036 14.8737 17.1619 14.8737 11.2492C14.8737 5.33661 10.932 1.39487 10.932 1.39487C10.932 1.39487 6.99023 5.33661 6.99023 11.2492Z" stroke="#BEBEBE" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M19.8004 14.2055H2.0625" stroke="#BEBEBE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.8004 8.29294H2.0625" stroke="#BEBEBE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
                <filter id="filter0_i_601_1244" x="0.078125" y="0.394867" width="21.709" height="22.7087" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0862745 0 0 0 0 0.0862745 0 0 0 0 0.0862745 0 0 0 0.35 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_601_1244"/>
                </filter>
            </defs>
        </svg>
    )
}

export function MultimediaIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20" fill="none">
            <g filter="url(#filter0_i_775_509)">
                <path d="M13.4452 1.06198H11.9337C11.1591 1.06198 10.7718 1.06198 10.4244 1.17884C10.2123 1.2502 10.013 1.35287 9.83366 1.48317C9.53996 1.69654 9.32513 2.00672 8.89547 2.62709C8.67543 2.94482 8.35106 3.41316 8.22177 3.54394C7.90142 3.86797 7.48137 4.08437 7.02356 4.16119C6.8388 4.19219 6.64044 4.19219 6.24373 4.19219C5.18134 4.19219 4.65016 4.19219 4.21582 4.31053C3.12931 4.60659 2.28012 5.42398 1.97255 6.46983C1.84961 6.8879 1.84961 7.39921 1.84961 8.42184V12.5394C1.84961 15.4906 1.84961 16.9662 2.80208 17.883C3.75455 18.7998 5.28754 18.7998 8.35348 18.7998H17.0253C20.0913 18.7998 21.6242 18.7998 22.5767 17.883C23.5292 16.9662 23.5292 15.4906 23.5292 12.5394V8.42184C23.5292 7.39921 23.5292 6.8879 23.4063 6.46983C23.0987 5.42398 22.2495 4.60659 21.163 4.31053C20.7286 4.19219 20.1975 4.19219 19.1351 4.19219C18.7384 4.19219 18.54 4.19219 18.3553 4.16119C17.8974 4.08437 17.4774 3.86797 17.157 3.54394C17.0277 3.41314 16.7034 2.94481 16.4834 2.62709C16.0537 2.00672 15.8388 1.69654 15.5452 1.48317C15.3658 1.35287 15.1665 1.2502 14.9544 1.17884C14.6071 1.06198 14.2198 1.06198 13.4452 1.06198Z" stroke="#BEBEBE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.9584 10.5878C16.9584 12.9461 15.0465 14.858 12.6882 14.858C10.3298 14.858 8.41797 12.9461 8.41797 10.5878C8.41797 8.22945 10.3298 6.31757 12.6882 6.31757C15.0465 6.31757 16.9584 8.22945 16.9584 10.5878Z" stroke="#BEBEBE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.5859 7.3031V7.3096" stroke="#BEBEBE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
                <filter id="filter0_i_775_509" x="0.849609" y="0.0617981" width="23.6797" height="20.738" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0862745 0 0 0 0 0.0862745 0 0 0 0 0.0862745 0 0 0 0.35 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_775_509"/>
                </filter>
            </defs>
        </svg>
    )
}

const appleGaramondItalic = AppleGaramondItalic({
    weight:"400",
    src: "../../public/fonts/AppleGaramond-Italic.ttf",
    variable: "--AppleGaramondItalic",
})
function Works() {
    const [activeIdx, setActiveIdx] = useState<number | null>(null);
    const myRouter = useRouter();


    return (
        <div className="w-screen h-screen flex flex-col">
            <motion.p
                className={`absolute ${appleGaramondItalic.className} text-5xl text-[#BA0000] top-1/12 left-1/2 -translate-x-1/2`}
            >
                Skills
            </motion.p>

            <WorksCards
                icon={MobileAppIcon}
                title={"Mobile Software Engineer"}
                className="absolute left-1/2 -translate-x-[180px] translate-y-3"
                flipClassName="absolute -translate-x-1/2 left-1/2"
                rotate={4}
                isDimmed={activeIdx !== null && activeIdx !== 0}
                onToggle={() =>
                    setActiveIdx((cur) => (cur === 0 ? null : 0))
                }
                onClick={() => myRouter.push("/works/softwareengineer")}
                z={20}
                flipZ={30}
                flipDurationMs={500}
            />

            <WorksCards
                icon={WebDevIcon}
                title={"Front-end Web Developer"}
                className="absolute left-1/2 -translate-x-[90px] -translate-y-4 z-10"
                flipClassName="absolute -translate-x-1/2 left-1/2 z-30"
                rotate={0}
                isDimmed={activeIdx !== null && activeIdx !== 1}
                onToggle={() =>
                    setActiveIdx((cur) => (cur === 1 ? null : 1))
                }
                onClick={() => myRouter.push("/works/frontendweb")}
                z={10}
                flipZ={30}
                flipDurationMs={500}
            />

            <WorksCards
                icon={MultimediaIcon}
                title={"Multimedia Producer"}
                className="absolute left-1/2 -translate-x-[10px] translate-y-8"
                flipClassName="absolute -translate-x-1/2 left-1/2 z-20"
                rotate={-10}
                isDimmed={activeIdx !== null && activeIdx !== 2}
                onToggle={() =>
                    setActiveIdx((cur) => (cur === 2 ? null : 2))
                }
                z={0}
                flipZ={30}
                flipDurationMs={500}
            />
        </div>
    );
}

export default Works;
