import Image, {StaticImageData} from "next/image";
import SFProDisplayMedium from 'next/font/local';
import SFProDisplayLight from "next/font/local";
import {motion} from "motion/react";
import React, { memo } from "react"; // Add memo for performance

const sfProDisplayLight = SFProDisplayLight({
    weight:"200",
    src: "../../public/fonts/SFProDisplay-Light.otf",
    variable: "--SFProDisplayLight",
    display: 'swap', // Add font display swap
})

const sfProDisplayMedium = SFProDisplayMedium({
    weight:"600",
    src: "../../public/fonts/SFProDisplay-Medium.otf",
    variable: "--SFProDisplayMedium",
    display: 'swap', // Add font display swap
})

type Img = { src: StaticImageData | string; alt?: string };

type Sticker = {
    src: StaticImageData | string;
    alt?: string;
    className?: string;
};

type AboutMeFolderProps = {
    images: [Img, Img, Img];
    title: string;
    showDate?: boolean;
    dateText?: string;
    showDescription?: boolean;
    descriptionText?: string;

    onClick?: React.MouseEventHandler<HTMLDivElement>;
    className?: string;

    stickers?: Sticker[];
};

const EASE = "easeOut"; // Changed from easeInOut for better performance
const DURATION = 0.15;  // Reduced duration for snappier animations

// Memoize the component to prevent unnecessary re-renders
const AboutMeFolder = memo(function AboutMeFolder({
    images,
    title,
    showDate = false,
    dateText,
    showDescription = false,
    descriptionText,
    onClick,
    className,
    stickers,
}: AboutMeFolderProps) {

    const [{ src: img1, alt: alt1 }, { src: img2, alt: alt2 }, { src: img3, alt: alt3 }] = images;

    return (
        <motion.div
            className={`flex flex-col items-center ${className ?? ""}`}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            variants={{
                rest:  { scale: 1 },
                hover: { scale: 1.06 },
                tap:   { scale: 0.96 },
            }}
            transition={{
                type: "tween",
                ease: EASE,
                duration: DURATION,
            }}
            onClick={onClick}
            // Add performance optimizations
            style={{
                willChange: 'transform',
                backfaceVisibility: 'hidden',
            }}
        >
            {stickers?.map((s, i) => {
                const MotionImg = motion(Image);
                return (
                    <MotionImg
                        key={i}
                        src={s.src}
                        alt={s.alt ?? `sticker-${i}`}
                        className={`absolute z-50 select-none pointer-events-none ${s.className ?? ""}`}
                        draggable={false}
                        // Add performance optimizations for stickers
                        style={{
                            willChange: 'transform',
                            backfaceVisibility: 'hidden',
                        }}
                    />
                );
            })}

            <div className="relative">
                <div
                    className="h-0.5 absolute w-[84px] rounded-full z-30 bottom-[53px] left-1/2 -translate-x-1/2 bg-white"
                    style={{boxShadow:"0 0.5px 1px 0 rgba(186, 186, 186, 0.49) inset"}}
                />
                <div
                    className="h-0.5 absolute w-[82px] bg-white z-30 rounded-full bottom-[49px] left-1/2 -translate-x-1/2"
                    style={{boxShadow:"0 0.5px 1px 0 rgba(186, 186, 186, 0.49) inset"}}
                />

                <div>
                    <motion.div
                        className="relative top-7 z-10 rotate-[3deg]"
                        variants={{ 
                            rest: { translateX: 0, translateY: 0 }, 
                            hover: { translateX: 2, translateY: -12 }, 
                            tap: { translateX: 2, translateY: -12 } 
                        }}
                        transition={{ type: "tween", ease: EASE, duration: DURATION }}
                        style={{ willChange: 'transform' }} // Add performance hint
                    >
                        <Image 
                            src={img2} 
                            alt={alt2 ?? "Image 2"} 
                            className="absolute w-[52px] z-10 aspect-square object-cover rounded-[6px] ring-1 ring-[#E8E8E8] top-1/2 left-1/2 -translate-1/2"
                            priority // Load images with priority
                        />
                        <div
                            className="absolute w-[62px] aspect-square bg-white rounded-[10px] ring-1 ring-[#E8E8E8] top-1/2 left-1/2 -translate-1/2"
                        />
                    </motion.div>

                    <motion.div
                        className="relative top-11 left-8 z-0 rotate-[15deg]"
                        variants={{ 
                            rest: { translateX: 0, translateY: 0 }, 
                            hover: { translateX: 5, translateY: -10 }, 
                            tap: { translateX: 5, translateY: -10 } 
                        }}
                        transition={{ type: "tween", ease: EASE, duration: DURATION }}
                        style={{ willChange: 'transform' }} // Add performance hint
                    >
                        <Image 
                            src={img1} 
                            alt={alt1 ?? "Image 1"} 
                            className="absolute w-[52px] z-10 aspect-square object-cover rounded-[6px] ring-1 ring-[#E8E8E8] top-1/2 left-1/2 -translate-1/2"
                            priority // Load images with priority
                        />
                        <div
                            className="absolute w-[62px] aspect-square bg-white rounded-[10px] ring-1 ring-[#E8E8E8] top-1/2 left-1/2 -translate-1/2"
                        />
                    </motion.div>

                    <motion.div
                        className="relative top-11 right-7 -z-10 rotate-[-17deg]"
                        variants={{ 
                            rest: { translateX: 0, translateY: 0 }, 
                            hover: { translateX: -5, translateY: -10 }, 
                            tap: { translateX: -5, translateY: -10 } 
                        }}
                        transition={{ type: "tween", ease: EASE, duration: DURATION }}
                        style={{ willChange: 'transform' }} // Add performance hint
                    >
                        <Image 
                            src={img3} 
                            alt={alt3 ?? "Image 3"} 
                            className="absolute w-[52px] z-10 aspect-square object-cover rounded-[6px] ring-1 ring-[#E8E8E8] top-1/2 left-1/2 -translate-1/2"
                            priority // Load images with priority
                        />
                        <div
                            className="absolute w-[62px] aspect-square bg-white rounded-[10px] ring-1 ring-[#E8E8E8] top-1/2 left-1/2 -translate-1/2"
                        />
                    </motion.div>
                </div>

                {/* Simplified SVG - remove complex filters for better performance */}
                <div className="relative w-[155px] h-[129px]">
                    <div 
                        className="absolute inset-0 z-20 rounded-lg"
                        style={{
                            background: 'rgba(249, 249, 249, 0.55)',
                            border: '1px solid rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(10px)', // Reduced blur for better performance
                            boxShadow: '0 3px 7px rgba(0, 0, 0, 0.25), 0 15px 25px rgba(0, 0, 0, 0.15)',
                            clipPath: 'polygon(20% 9%, 80% 9%, 85% 15%, 85% 85%, 15% 85%, 15% 15%)', // Simplified folder shape
                        }}
                    />
                </div>

                <div className="w-[89px] h-[83px] bg-[#EFEFEF] ring-1 ring-[#D9D9D9] rounded-xl absolute -z-30 top-[4px] left-1/2 -translate-x-1/2" />
            </div>

            <p className={`${sfProDisplayMedium.className} text-sm -mt-7`}>
                {title}
            </p>

            {showDate && !!dateText && (
                <p className={`${sfProDisplayMedium.className} px-3 text-[13px] py-1 bg-[#D9D9D9] text-[#888888] rounded-full mt-2`}>
                    {dateText}
                </p> )
            }

            {showDescription && !!descriptionText && (
                <p className={`${sfProDisplayLight.className} text-sm mt-2`}>
                    {descriptionText}
                </p> )
            }
        </motion.div>
    );
});

export default AboutMeFolder;
