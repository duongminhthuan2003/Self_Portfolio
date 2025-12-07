"use client"

import { useState, useEffect, useRef } from 'react';
import SFProDisplayLight from "next/font/local";
import SFProDisplayMedium from "next/font/local";
import { motion, AnimatePresence, MotionConfig } from "motion/react";

const sfProDisplayLight = SFProDisplayLight({
    weight:"200",
    src: "../../public/fonts/SFProDisplay-Light.otf",
    variable: "--SFProDisplayLight",
})

const sfProDisplayMedium = SFProDisplayMedium({
    weight:"600",
    src: "../../public/fonts/SFProDisplay-Medium.otf",
    variable: "--SFProDisplayMedium",
})

function AboutMeTimeLine() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [active, setActive] = useState<null | 'org' | 'head' | 'gam'>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const totalDots = 2; // Number of snap points

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const containerWidth = container.clientWidth;
            const index = Math.round(scrollLeft / containerWidth);
            setCurrentIndex(index);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToIndex = (index: number) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const targetScrollLeft = index * container.clientWidth;
        container.scrollTo({
            left: targetScrollLeft,
            behavior: 'smooth'
        });
    };

    return (
        <div className="relative w-full">
            {/* Snap scrolling container */}
            <div
                ref={scrollContainerRef}
                className="overflow-x-scroll w-full flex flex-row snap-x snap-mandatory touch-pan-x scrollbar-hide"
            >
                <div className="relative h-full flex flex-row">
                    <div
                        className="w-[90vw] shrink-0 snap-start bg-none transition-all duration-500 ease-in-out"
                        style={{ height: active ? '224px' : '256px' }}
                    ></div>
                    <div
                        className="w-[90vw] shrink-0 snap-start bg-none transition-all duration-500 ease-in-out"
                        style={{ height: active ? '224px' : '256px' }}
                    ></div>

                    {/* Pills */}
                    <div
                        className={`absolute top-8 left-6 h-10 w-64 rounded-full ${(active === null || active === "org") ? "opacity-100" : "opacity-30"} transition-all duration-300 cursor-pointer`}
                        style={{
                            border: '1px solid #F1F1F1',
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(221, 221, 221, 0.30) 31.73%, rgba(221, 221, 221, 0.30) 65.38%, rgba(255, 255, 255, 0.30) 100%)',
                            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
                            backdropFilter: 'blur(2px)',
                        }}
                        onClick={() => {
                            setActive("org");
                        }}
                    />
                    <div className="flex-1"></div>
                    <div
                        className={`absolute top-1/2 -translate-y-1/2 left-[100vw] -translate-x-1/2 h-10 w-64 rounded-full ${(active === null || active === "head") ? "opacity-100" : "opacity-30"} transition-all duration-300 cursor-pointer`}
                        style={{
                            border: '1px solid #F1F1F1',
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(221, 221, 221, 0.30) 31.73%, rgba(221, 221, 221, 0.30) 65.38%, rgba(255, 255, 255, 0.30) 100%)',
                            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
                            backdropFilter: 'blur(2px)',
                        }}
                        onClick={() => {
                            setActive("head");
                        }}
                    />
                    <div className="flex-1"></div>
                    <div
                        className={`absolute bottom-8 right-6 h-10 w-64 rounded-full ${(active === null || active === "gam") ? "opacity-100" : "opacity-30"} transition-all duration-300 cursor-pointer`}
                        style={{
                            border: '1px solid #F1F1F1',
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(221, 221, 221, 0.30) 31.73%, rgba(221, 221, 221, 0.30) 65.38%, rgba(255, 255, 255, 0.30) 100%)',
                            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
                            backdropFilter: 'blur(2px)',
                        }}
                        onClick={() => {
                            setActive("gam");
                        }}
                    />
                </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center items-center mt-8 space-x-2">
                {Array.from({ length: totalDots }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToIndex(index)}
                        className={`w-6 h-1 rounded-full transition-all duration-300 ${
                            currentIndex === index
                                ? 'bg-[#BA0000] scale-110'
                                : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to section ${index + 1}`}
                    />
                ))}
            </div>

            {/* Reserved space*/}
            <div
                className="transition-all duration-500 ease-in-out overflow-hidden"
                style={{ height: active ? '320px' : '0px' }}
            >
                {/* Content sections with smooth animations */}
                <AnimatePresence>
                    {active !== null && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            {active === "org" && (
                                <div>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                        className="mx-6 mt-5 mb-3 p-5 rounded-xl flex flex-row justify-center items-center"
                                        style={{
                                            border: '1px solid #F1F1F1',
                                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(221, 221, 221, 0.30) 31.73%, rgba(221, 221, 221, 0.30) 65.38%, rgba(255, 255, 255, 0.30) 100%)',
                                            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
                                            backdropFilter: 'blur(2px)',
                                        }}
                                    >
                                        <div>
                                            <p className={`${sfProDisplayMedium.className}`}>GDSC HCMUT</p>
                                            <p className={`${sfProDisplayLight.className}`}>Organizer</p>
                                        </div>
                                        <div className="flex-1"></div>
                                        <div className={`${sfProDisplayLight.className} bg-gray-300 px-2 py-1 rounded-full text-sm text-[#888888]`}>
                                            Oct &#39;22 - July &#39;23
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3, delay: 0.2 }}
                                        className="relative mx-6 p-4 mb-14 rounded-xl"
                                        style={{
                                            border: '1px solid #F1F1F1',
                                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(221, 221, 221, 0.30) 31.73%, rgba(221, 221, 221, 0.30) 65.38%, rgba(255, 255, 255, 0.30) 100%)',
                                            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
                                            backdropFilter: 'blur(2px)',
                                        }}
                                    >
                                        <button
                                            onClick={() => {setActive(null)}}
                                            className="absolute top-4 right-4 hover:bg-gray-200 hover:bg-opacity-30 rounded-full p-1 transition-colors duration-200"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                                                <path d="M15 1L1.00095 14.9991M14.9991 15L1 1.00099" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                        <p className={`${sfProDisplayLight.className}`}>Section 1</p>
                                        <p className={`${sfProDisplayLight.className}`}>Section 2</p>
                                    </motion.div>
                                </div>
                            )}

                            {active === "head" && (
                                <div>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}

                                        transition={{ duration: 0.3, delay: 0.1 }}
                                        className="mx-6 mt-5 mb-3 p-5 rounded-xl flex flex-row justify-center items-center"
                                        style={{
                                            border: '1px solid #F1F1F1',
                                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(221, 221, 221, 0.30) 31.73%, rgba(221, 221, 221, 0.30) 65.38%, rgba(255, 255, 255, 0.30) 100%)',
                                            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
                                            backdropFilter: 'blur(2px)',
                                        }}
                                    >
                                        <div>
                                            <p className={`${sfProDisplayMedium.className}`}>GDSC HCMUT</p>
                                            <p className={`${sfProDisplayLight.className}`}>Head of Marketing</p>
                                        </div>
                                        <div className="flex-1"></div>
                                        <div className={`${sfProDisplayLight.className} bg-gray-300 px-2 py-1 rounded-full text-sm`}>
                                            Oct &#39;22 - July &#39;23
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}

                                        transition={{ duration: 0.3, delay: 0.2 }}
                                        className="relative mx-6 p-4 mb-14 rounded-xl"
                                        style={{
                                            border: '1px solid #F1F1F1',
                                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(221, 221, 221, 0.30) 31.73%, rgba(221, 221, 221, 0.30) 65.38%, rgba(255, 255, 255, 0.30) 100%)',
                                            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
                                            backdropFilter: 'blur(2px)',
                                        }}
                                    >
                                        <button
                                            onClick={() => {setActive(null)}}
                                            className="absolute top-4 right-4 hover:bg-gray-200 hover:bg-opacity-30 rounded-full p-1 transition-colors duration-200"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                                                <path d="M15 1L1.00095 14.9991M14.9991 15L1 1.00099" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                        <p>Section 1</p>
                                        <p>Section 2</p>
                                    </motion.div>
                                </div>
                            )}

                            {active === "gam" && (
                                <div>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}

                                        transition={{ duration: 0.3, delay: 0.1 }}
                                        className="mx-6 mt-5 mb-3 p-5 rounded-xl flex flex-row justify-center items-center"
                                        style={{
                                            border: '1px solid #F1F1F1',
                                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(221, 221, 221, 0.30) 31.73%, rgba(221, 221, 221, 0.30) 65.38%, rgba(255, 255, 255, 0.30) 100%)',
                                            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
                                            backdropFilter: 'blur(2px)',
                                        }}
                                    >
                                        <div>
                                            <p className={`${sfProDisplayMedium.className}`}>GAM Esports</p>
                                            <p className={`${sfProDisplayLight.className}`}>Organizer</p>
                                        </div>
                                        <div className="flex-1"></div>
                                        <div className={`${sfProDisplayLight.className} bg-gray-300 px-2 py-1 rounded-full text-sm`}>
                                            Oct &#39;22 - July &#39;23
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}

                                        transition={{ duration: 0.3, delay: 0.2 }}
                                        className="relative mx-6 p-4 mb-14 rounded-xl"
                                        style={{
                                            border: '1px solid #F1F1F1',
                                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(221, 221, 221, 0.30) 31.73%, rgba(221, 221, 221, 0.30) 65.38%, rgba(255, 255, 255, 0.30) 100%)',
                                            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
                                            backdropFilter: 'blur(2px)',
                                        }}
                                    >
                                        <button
                                            onClick={() => {setActive(null)}}
                                            className="absolute top-4 right-4 hover:bg-gray-200 hover:bg-opacity-30 rounded-full p-1 transition-colors duration-200"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                                                <path d="M15 1L1.00095 14.9991M14.9991 15L1 1.00099" stroke="#444444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                        <p className={`${sfProDisplayLight.className} text-sm`}>- Produced and edited videos and promo content for a leading Vietnam E-sports team.</p>
                                        <p className={`${sfProDisplayLight.className} mt-2 text-sm`}>- Collaborated with designers, players, and managers to deliver results under tight deadlines.</p>
                                    </motion.div>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default AboutMeTimeLine;
