"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {useId, useMemo} from "react";
import TransitionLink from "@/utils/transitionlink";
import Image from "next/image";
import OrbImage from "../../public/orb.png"

export function HomeIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 19" fill="none">
            <g filter="url(#filter0_i_664_523)">
                <path d="M17.6 6.3C17.2 5.6 16.6 5.1 15.3 4L13.3 2.4C11.2 0.8 10.2 0 9 0C7.8 0 6.8 0.8 4.7 2.4L2.7 4C1.4 5 0.7 5.5 0.4 6.3C0.1 7.1 0 7.9 0 9.5V12C0 15.3 0 16.9 1 18C1.9 18.9 3.3 19 6 19V14C6 12.6 6 11.9 6.4 11.4C6.8 11 7.5 11 9 11C10.5 11 11.1 11 11.6 11.4C12 11.8 12 12.5 12 14V19C14.6 19 16.1 18.9 17 18C18 17 18 15.3 18 12V9.5C18 7.8 18 7 17.6 6.3Z" fill="#B4B4B4"/>
            </g>
            <defs>
                <filter id="filter0_i_664_523" x="0" y="0" width="18" height="22" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="3"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.919231 0 0 0 0 0.918347 0 0 0 0 0.918347 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_664_523"/>
                </filter>
            </defs>
        </svg>
    )
}

export function AboutIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 21" fill="none">
            <g filter="url(#filter0_i_668_529)">
                <path d="M14.3152 6.23681C14.3152 3.02484 11.7113 0.421021 8.49938 0.421021C5.28742 0.421021 2.68359 3.02484 2.68359 6.23681C2.68359 9.44875 5.28742 12.0526 8.49938 12.0526C11.7113 12.0526 14.3152 9.44875 14.3152 6.23681Z" fill="#B4B4B4"/>
                <path d="M17 21C17 16.0585 13.1944 12.0526 8.5 12.0526C3.80558 12.0526 0 16.0585 0 21" fill="#B4B4B4"/>
            </g>
            <defs>
                <filter id="filter0_i_668_529" x="0" y="0.421021" width="17" height="23.579" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="3"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_668_529"/>
                </filter>
            </defs>
        </svg>
    )
}

export function WorksIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
            <g filter="url(#filter0_i_669_540)">
                <path d="M0 12C0 8.78983 -6.55651e-08 7.1847 0.741532 6.03168C1.06256 5.53253 1.47506 5.10395 1.95549 4.77042C3.06527 4 4.61019 4 7.7 4H14.3C17.3898 4 18.9347 4 20.0445 4.77042C20.5249 5.10395 20.9374 5.53253 21.2585 6.03168C22 7.1847 22 8.78983 22 12C22 15.2102 22 16.8153 21.2585 17.9684C20.9374 18.4674 20.5249 18.896 20.0445 19.2296C18.9347 20 17.3898 20 14.3 20H7.7C4.61019 20 3.06527 20 1.95549 19.2296C1.47506 18.896 1.06256 18.4674 0.741532 17.9684C-6.55651e-08 16.8153 0 15.2102 0 12Z" fill="#B6B6B6"/>
                <path d="M15 3C15 1.58579 15 0.878678 14.4142 0.439343C13.8284 -4.47035e-08 12.8856 0 11 0C9.1144 0 8.17157 -4.47035e-08 7.58579 0.439343C7 0.878678 7 1.58579 7 3" fill="#B6B6B6"/>
                <path d="M4.00195 9L4.76259 9.202C8.76791 10.266 13.236 10.266 17.2413 9.202L18.002 9M11.002 10V12Z" fill="#B6B6B6"/>
                <path d="M4.00195 9L4.76259 9.202C8.76791 10.266 13.236 10.266 17.2413 9.202L18.002 9M11.002 10V12" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
                <filter id="filter0_i_669_540" x="0" y="0" width="22" height="23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="3"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_669_540"/>
                </filter>
            </defs>
        </svg>
    )
}

export function ContactIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g filter="url(#filter0_i_670_546)">
                <path d="M6.84252 3.01359L6.39512 2.00694C6.10259 1.34875 5.95632 1.01964 5.73758 0.767788C5.46343 0.452155 5.10609 0.219933 4.70632 0.0976111C4.38733 1.07619e-07 4.02718 0 3.3069 0C2.25324 0 1.7264 8.27842e-08 1.28414 0.202544C0.763188 0.441133 0.292709 0.959199 0.105253 1.50067C-0.053881 1.96032 -0.00829198 2.4327 0.0828638 3.37744C1.05323 13.4335 6.56648 18.9468 16.6225 19.9171C17.5673 20.0083 18.0398 20.0539 18.4993 19.8948C19.0409 19.7073 19.5589 19.2368 19.7976 18.7159C20 18.2735 20 17.7468 20 16.6931C20 15.9728 20 15.6127 19.9024 15.2937C19.7801 14.8939 19.5479 14.5365 19.2322 14.2624C18.9804 14.0437 18.6513 13.8974 17.9931 13.6049L16.9864 13.1574C16.2737 12.8407 15.9172 12.6823 15.5551 12.6479C15.2084 12.6149 14.859 12.6635 14.5345 12.7899C14.1955 12.9219 13.896 13.1715 13.2966 13.6709C12.7002 14.168 12.402 14.4165 12.0375 14.5497C11.7144 14.6677 11.2873 14.7114 10.9471 14.6612C10.5632 14.6047 10.2693 14.4477 9.68142 14.1334C7.85253 13.1561 6.84394 12.1475 5.86653 10.3185C5.55239 9.73077 5.39532 9.43677 5.33875 9.05299C5.28861 8.71266 5.33232 8.28555 5.45034 7.96255C5.58348 7.59808 5.83202 7.29984 6.32911 6.70333C6.82848 6.10408 7.07817 5.80446 7.21018 5.46545C7.33651 5.14104 7.38515 4.79155 7.35218 4.44497C7.31773 4.0828 7.15932 3.7264 6.84252 3.01359Z" fill="#B4B4B4"/>
            </g>
            <defs>
                <filter id="filter0_i_670_546" x="0" y="0" width="20" height="23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="3"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_670_546"/>
                </filter>
            </defs>
        </svg>
    )
}

function Orb() {
    const maskId = useId();

    return(
        <motion.span
            layoutId="active-orb"
            initial={false}
            transition={{
                type: "spring",
                stiffness: 480,
                damping: 28,
                mass: 0.5,
                // Thêm layout transition để tránh glitch
                layout: { duration: 0.2 }
            }}
            className="absolute flex justify-center top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full"
            // Force re-render khi animation kết thúc
            onLayoutAnimationComplete={() => {
                // Trigger re-render để đảm bảo SVG hiển thị đúng
                const orbElement = document.querySelector('[data-orb-id]') as HTMLElement;
                if (orbElement) {
                    orbElement.style.transform += '';
                }
            }}
            data-orb-id="main-orb"
        >
            <motion.div
                className="pointer-events-none absolute inset-0 bg-black rounded-full"
                // Thêm layout animation cho background
                layout
            />

            {/* Phần sáng trên cùng - cải thiện stability */}
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 mt-[1px]"
                layout
                // Đảm bảo SVG không bị mất khi animate
                style={{
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    perspective: 1000
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="10"
                    viewBox="0 0 28 10"
                    fill="none"
                    // Thêm key để force re-render
                    key={`highlight-${maskId}`}
                    style={{
                        // Cải thiện rendering trên mobile
                        shapeRendering: 'geometricPrecision',
                        imageRendering: 'crisp-edges'
                    }}
                >
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
            </motion.div>

            {/* Inner shadow đen*/}
            <motion.div
                className="absolute inset-0 rounded-full"
                style={{ boxShadow: "0 0 8px 2px rgba(255,255,255,0.25) inset, 0 0 12px 0 rgba(255,255,255,0.08) inset" }}
                layout
            />

            <motion.div
                className="absolute inset-0 rounded-full"
                style={{ boxShadow: "0 5px 5px rgba(0, 0, 0, 0.25), 0 40px 35px rgba(0, 0, 0, 0.25), 0 13px 20px rgba(0, 0, 0, 0.45), 0 1px 2px rgba(0, 0, 0, 0.25)" }}
                layout
            />

            {/* Mask pill - cải thiện stability */}
            <motion.div
                className="absolute inset-0 w-full h-full pointer-events-none"
                layout
                style={{
                    willChange: 'transform',
                    backfaceVisibility: 'hidden'
                }}
            >
                <svg
                    className="w-full h-full"
                    aria-hidden="true"
                    // Unique key để tránh conflict
                    key={`mask-${maskId}`}
                >
                    <defs>
                        <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
                            <rect width="100%" height="100%" fill="black" />
                            <ellipse cx="50%" cy="50%" rx="90%" ry="60" transform="translate(0,-50)" fill="#BA0000" opacity={0.9} />
                        </mask>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" rx="20" ry="50%" fill="#ffffff" opacity="60%" mask={`url(#${maskId})`} />
                </svg>
            </motion.div>
        </motion.span>
    )
}

function OrbPNG() {
    return(
        <motion.div 
            layoutId="active-orb"
            initial={false}
            transition={{
                type: "spring",
                stiffness: 480,
                damping: 28,
                mass: 0.5,
                layout: { duration: 0.2 }
            }}
            className="absolute top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full"
            onLayoutAnimationComplete={() => {
                // Trigger re-render to ensure PNG displays correctly
                const orbElement = document.querySelector('[data-orb-id]') as HTMLElement;
                if (orbElement) {
                    orbElement.style.transform += '';
                }
            }}
            data-orb-id="main-orb"
        >
            <Image 
                src={OrbImage} 
                alt={"orb"}
                style={{
                    filter: "drop-shadow(0 5px 5px rgba(0, 0, 0, 0.25)) drop-shadow(0 40px 35px rgba(0, 0, 0, 0.25)) drop-shadow(0 13px 20px rgba(0, 0, 0, 0.45)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.25))",
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    perspective: 1000
                }}
            />
        </motion.div>
    )
}
const NAV_ITEMS = [
    { href: "/", label: "Home", icon: HomeIcon },
    { href: "/aboutme", label: "About", icon: AboutIcon },
    { href: "/works", label: "Work", icon: WorksIcon },
    { href: "/contact", label: "Contact", icon: ContactIcon },
];

export default function MobileNavigationBar() {
    const pathname = usePathname();

    const activeIndex = useMemo(() => {
        if (!pathname) return 0;

        const exactIndex = NAV_ITEMS.findIndex((i) => i.href === pathname);
        if (exactIndex !== -1) return exactIndex;

        const matches = NAV_ITEMS
            .map((item, index) => ({ index, href: item.href }))
            .filter(({ href }) => href !== "/" && pathname.startsWith(href))
            .sort((a, b) => b.href.length - a.href.length);

        if (matches.length > 0) return matches[0].index;

        return 0;
    }, [pathname]);

    return (
        <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 select-none">
            {/* Pill background */}
            <div
                className="relative backgroundblur mx-auto h-[50px] w-fit rounded-full ring-1 ring-black/5"
            >
            {/*<GlassSurface*/}
            {/*    width={232}*/}
            {/*    height={50}*/}
            {/*    borderRadius={50}*/}
            {/*    distortionScale={-50}*/}
            {/*    backgroundOpacity={0.4}*/}
            {/*    brightness={100}*/}
            {/*>*/}

                {/* Soft top highlight */}
                {/*<div className="pointer-events-none absolute inset-0 rounded-full [background:radial-gradient(120%_120%_at_50%_-10%,rgba(255,255,255,0.8),transparent_55%)]" />*/}

                {/* Grid for items */}
                <ul className="relative h-full flex flex-row place-items-center gap-x-2">
                    {NAV_ITEMS.map((item, i) => (
                        <li key={item.href} className="relative h-full w-full">
                            <TransitionLink
                                href={item.href}
                                className="group relative mx-auto flex gap-5 h-full w-full items-center justify-center"
                                aria-label={item.label}
                            >

                                {activeIndex === i && <OrbPNG />}

                                {/* Icon */}
                                <div className="relative z-20 w-13">
                                    <IconWrapper active={activeIndex === i}>
                                        <item.icon />
                                    </IconWrapper>
                                </div>
                            </TransitionLink>
                        </li>
                    ))}
                </ul>

                {/* Outer soft shadow to enhance the pill */}
                <div className="pointer-events-none absolute inset-0 -z-10 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.18)]" />
            </div>
            {/*</GlassSurface>*/}
        </nav>
    );
}

function IconWrapper({ active, children }: { active: boolean; children: React.ReactNode }) {
    return (
        <motion.div
            className={
                "grid place-items-center rounded-full p-2 transition-colors " +
                (active ? "text-white" : "text-neutral-400")
            }
        >
            {children}
        </motion.div>
    );
}
