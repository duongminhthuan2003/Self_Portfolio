"use client"

import WorksCards from "@/app/ui/workscards";
import AppleGaramondItalic from "next/font/local";

import {motion} from "framer-motion";
import {useState} from "react";
import {useRouter} from "next/navigation";
import MobileAppIcon from "@/app/ui/icon/mobileappicon";
import WebDevIcon from "@/app/ui/icon/webdevicon";
import MultimediaIcon from "@/app/ui/icon/multimediaicon";

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
                Works
            </motion.p>

            <WorksCards
                icon={MobileAppIcon}
                title={"Mobile Software Engineer"}
                className="absolute left-1/2 -translate-x-[180px] -translate-y-5"
                flipClassName="absolute -translate-x-1/2 -translate-y-10  left-1/2"
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
                className="absolute left-1/2 -translate-x-[90px] -translate-y-12 z-10"
                flipClassName="absolute -translate-x-1/2 -translate-y-10 left-1/2 z-30"
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
                className="absolute left-1/2 -translate-x-[10px]"
                flipClassName="absolute -translate-x-1/2 -translate-y-10 left-1/2 z-20"
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
