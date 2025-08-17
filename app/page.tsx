"use client";

import AppleGaramond from 'next/font/local';
import AppleGaramondItalic from 'next/font/local';
import {AnimatePresence, motion} from "motion/react"
import Button from "@/app/ui/button";
import Image from "next/image";
import SplitText from "./splittext";

const appleGaramond = AppleGaramond({
  weight:"400",
  src: "../public/fonts/AppleGaramond.ttf",
  variable: "--AppleGaramond",
})


const appleGaramondItalic = AppleGaramondItalic({
  weight:"400",
  src: "../public/fonts/AppleGaramond-Italic.ttf",
  variable: "--AppleGaramondItalic",
})

export default function Home() {
    return (
      <AnimatePresence>
          <div className={`antialiased h-screen`}>
              <div className={`${appleGaramond.className} flex flex-col items-center gap-6 h-full justify-center -translate-y-8`}>
                  <motion.div
                      className="relative w-[190px] aspect-[2/3] -rotate-[5deg]"
                      initial={{ opacity: 0, transform: "translateY(20px)" }}
                      animate={{ opacity: 1, transform: "translateY(0px)" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                      <Image
                          src="/images/HomeImage.jpg"
                          alt="Home image"
                          fill
                          className="object-cover object-center"
                          style={{boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.25), 0 4px 15px 0 rgba(0, 0, 0, 0.25)"}}
                          priority
                      />
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
                  <Button />
              </div>
          </div>
      </AnimatePresence>
  );
}
