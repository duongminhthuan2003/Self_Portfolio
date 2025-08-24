"use client"

import { useState, useEffect, useRef } from 'react';

function AboutMeTimeLine() {
    const [currentIndex, setCurrentIndex] = useState(0);
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
                    <div className="h-64 w-screen shrink-0 snap-start bg-none"></div>
                    <div className="h-64 w-screen shrink-0 snap-start bg-none"></div>

                    {/* Khối đỏ nằm đúng giữa 2 trang và di chuyển theo khi vuốt */}
                    <div
                        className="absolute top-8 left-6 h-10 w-64  rounded-full"
                        style={{
                            border: '1px solid #F1F1F1',
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(221, 221, 221, 0.30) 31.73%, rgba(221, 221, 221, 0.30) 65.38%, rgba(255, 255, 255, 0.30) 100%)',
                            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
                            backdropFilter: 'blur(2px)',
                        }}
                    />
                    <div className="flex-1"></div>
                    <div
                        className="absolute top-1/2 -translate-y-1/2 left-[100vw] -translate-x-1/2 h-10 w-64 rounded-full"
                        style={{
                            border: '1px solid #F1F1F1',
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(221, 221, 221, 0.30) 31.73%, rgba(221, 221, 221, 0.30) 65.38%, rgba(255, 255, 255, 0.30) 100%)',
                            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
                            backdropFilter: 'blur(2px)',
                        }}
                    />
                    <div className="flex-1"></div>
                    <div
                        className="absolute bottom-8 right-6 h-10 w-64 rounded-full"
                        style={{
                            border: '1px solid #F1F1F1',
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(221, 221, 221, 0.30) 31.73%, rgba(221, 221, 221, 0.30) 65.38%, rgba(255, 255, 255, 0.30) 100%)',
                            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
                            backdropFilter: 'blur(2px)',
                        }}/>
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
        </div>
    )
}

export default AboutMeTimeLine;
