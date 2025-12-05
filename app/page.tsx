"use client";

import AppleGaramond from 'next/font/local';
import { motion} from "motion/react"
import Button from "@/app/ui/button";
import Image from "next/image";
import SplitText from "./splittext";

const appleGaramond = AppleGaramond({
  weight:"400",
  src: "../public/fonts/AppleGaramond.ttf",
  variable: "--AppleGaramond",
})

export default function Home() {

    return (
        <div className='overflow-hidden scrollbar-hide min-h-[100dvh]'>
            <motion.div
                className={`antialiased min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden scrollbar-hide`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                key="home-page"
            >
                <motion.div
                    className={`${appleGaramond.className} flex flex-col items-center gap-6 h-full justify-center -translate-y-6`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}
                >
                    <motion.div
                        className="relative w-[190px] aspect-[2/3] -rotate-[5deg]"
                        initial={{ opacity: 0, transform: "translateY(20px)" }}
                        animate={{ opacity: 1, transform: "translateY(0px)" }}
                        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
                    >
                        <Image
                            src="/images/HomeImage.jpg"
                            alt="Home image"
                            fill
                            className="object-cover object-center"
                            style={{boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.25), 0 4px 15px 0 rgba(0, 0, 0, 0.25)"}}
                            priority
                        />
                        <div className="absolute rotate-5 h-5 top-36 -left-2 aspect-square bg-[#BA0000] z-10"/>
                        <div className="absolute rotate-5 h-5 -bottom-2 -right-2 aspect-square bg-[#BA0000] z-10"/>
                        <div className="absolute rotate-5 h-5 top-10 -right-6 aspect-[3/1] bg-[#BA0000] z-10"/>
                    </motion.div>

                    <div className="text-[28px] text-center mx-6 -mb-4">
                        <SplitText
                            text="I am an interface designer, a web builder, a software developer, and sometimes a photographer."
                            splitType="words"
                            highlightWords={['designer', 'builder', 'developer', 'photographer']}
                            delay={150}
                            className="text-2xl"
                        />
                    </div>
                    <motion.div
                        className="w-fit h-fit"
                        initial={{ opacity: 0, transform: "translateY(20px)" }}
                        animate={{ opacity: 1, transform: "translateY(0px)" }}
                        exit={{opacity: 0, transform: "translateX(-60px)" }}
                        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
                    >
                        <Button />
                    </motion.div>
                </motion.div>
            </motion.div>

            <div className="h-screen w-full overflow-hidden">
                <p className='mt-12'>test</p>
            </div>
        </div>
  );
}
