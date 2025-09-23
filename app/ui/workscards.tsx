"use client"

import { motion } from "motion/react";
import SFProDisplayMedium from "next/font/local";
import {JSX, useEffect, useRef, useState} from "react";
import SFMono from "next/font/local";

const sfProDisplayMedium = SFProDisplayMedium({
    weight:"600",
    src: "../../public/fonts/SFProDisplay-Medium.otf",
    variable: "--SFProDisplayMedium",
})

const sfMono = SFMono({
    weight: "400",
    src: "../../public/fonts/SFMono-Regular.otf",
    variable: "--SFMono-Regular",
});

type CardsProps = {
    icon: () => JSX.Element;
    title: string;
    className?: string;
    flipClassName?: string;
    rotate: number;
    isDimmed?: boolean;
    onToggle?: () => void;
    z: number;
    flipZ: number;
    flipDurationMs: number;
    onClick?: () => void;
}

function WorksCards({ icon: Icon, title, className, flipClassName, isDimmed, onToggle, rotate, flipZ, z, flipDurationMs, onClick }: CardsProps) {
    const [flipped, setFlipped] = useState(false);
    const [zIndex, setZIndex] = useState<number>(z);
    const timerRef = useRef<number | null>(null);

    const handleClick = () => {
        // clear timer cũ nếu có
        if (timerRef.current) {
            window.clearTimeout(timerRef.current);
            timerRef.current = null;
        }

        const next = !flipped;

        if (next) {
            // === PHÓNG TO: đổi z-index sau cùng ===
            // Đợi đúng bằng thời gian flip
            timerRef.current = window.setTimeout(() => {
                setZIndex(flipZ);
                timerRef.current = null;
            }, flipDurationMs);
        } else {
            // === THU LẠI: đổi z-index trước ===
            setZIndex(z);
        }

        setFlipped(next);
        onToggle?.();
    };

    useEffect(() => {
        return () => {
            if (timerRef.current) window.clearTimeout(timerRef.current);
        };
    }, []);

    return (
        <div
            className={`absolute aspect-[55/85] top-4/12 select-none w-44 ${flipped ? flipClassName : className} transition-all duration-500`}
            style={{
                perspective: "1000px",
                zIndex: zIndex,
            }}
            onClick={handleClick}
        >
            <motion.div
                className="relative h-full w-full rounded-xl border border-[#DBDBDB]"
                style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "50% 51%",
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.60) 0%, rgba(233, 233, 233, 0.50) 36.54%, rgba(233, 233, 233, 0.50) 66.83%, rgba(255, 255, 255, 0.60) 98.08%)',
                    boxShadow: '0px 4px 10px rgba(30, 30, 30, 0.1)', // replaced filter: drop-shadow
                }}
                animate={{
                    y: isDimmed ? 80 : 0,
                    opacity: isDimmed ? 0 : 1,
                    rotateY: flipped ? 180 : 0,
                    rotate: flipped ? 0 : rotate,
                    scale: flipped ? 1.5 : 1,
                }}
                transition={{ type: "tween", stiffness: 300, damping: 24, ease: "easeInOut", duration: 0.5 }}
            >

                {/* FRONT */}
                <motion.div
                    className="absolute inset-0 flex flex-col p-3 rounded-xl"
                    style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(0deg)",
                        backdropFilter: 'blur(8px)',
                    }}
                >
                    <motion.div
                        className="self-end mt-1 mr-1"
                        animate={{ opacity: flipped ? 0 : 1 }}
                        transition={{ duration: 0.2, delay: 0.15 }}
                    >
                        {Icon()}
                    </motion.div>

                    <div className="flex-1" />
                    <motion.div
                        className={`text-[13px] ${sfProDisplayMedium.className} text-[#999999]`}
                        animate={{ opacity: flipped ? 0 : 1 }}
                        transition={{ duration: 0.2, delay: 0.15 }}
                    >
                        {title}
                    </motion.div>
                </motion.div>

                {/* BACK */}
                <motion.div
                    className="absolute inset-0 flex items-end p-3 rounded-xl"
                    style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        backdropFilter: 'blur(6px)',
                    }}
                >
                    <motion.div
                        className={`absolute text-[13px] ${sfMono.className} text-[#999999] scale-75 bottom-1 -left-2`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: flipped ? 1 : 0 }}
                        transition={{ duration: 0.2, delay: flipped ? 0.2 : 0.12 }}
                        onClick={(e) => { e.stopPropagation(); onClick?.(); }} // chặn lật ngược khi nhấn
                    >
                        TAP HERE TO EXPLORE {">>>"}
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default WorksCards;
