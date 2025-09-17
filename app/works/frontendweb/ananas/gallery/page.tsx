"use client"

import React, { useMemo, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

/**
 * ZenoStepGallery
 * - Ảnh ở giữa: lớn nhất, màu đầy đủ, opacity 100%
 * - Ảnh càng ra xa: thu nhỏ theo CHIỀU CAO, trắng đen, opacity 30%
 * - Hai mũi tên điều hướng + tiêu đề & mô tả ở dưới
 * - Hỗ trợ phím ← → và click từng ảnh để chọn
 *
 * Yêu cầu: Tailwind CSS, framer-motion, lucide-react
 */

const demoImages = [
    {
        src: "/../../../../../public/images/projects/ananas/overview1.png",
        title: "Dãy núi lúc bình minh",
        desc: "Những đỉnh núi đón ánh nắng đầu ngày.",
    },
    {
        src: "/../../../../../public/images/projects/ananas/overview1.png",
        title: "Đồi cát",
        desc: "Đường cong mềm mại của sa mạc.",
    },
    {
        src: "/../../../../../images/projects/ananas/overview1.png",
        title: "Thành phố về đêm",
        desc: "Nhịp sống hiện đại và ánh đèn.",
    },
    {
        src: "/../../../../../public/images/projects/ananas/overview1.png",
        title: "Cầu gỗ",
        desc: "Lối nhỏ băng qua khu rừng ẩm ướt.",
    },
    {
        src: "/../../../../../images/projects/ananas/overview1.png",
        title: "Cánh rừng mù sương",
        desc: "Không khí lạnh và tĩnh lặng.",
    },
    {
        src: "/../../../../../public/images/projects/ananas/overview1.png",
        title: "Mặt hồ yên ả",
        desc: "Phản chiếu bầu trời trong xanh.",
    },
];

function clamp(n:number, min:number, max:number) {
    return Math.max(min, Math.min(n, max));
}

function mod(n: number, m: number) {
    return ((n % m) + m) % m;
}

export default function ZenoGallery(){
    return (
        <div className="flex flex-col">
            {
                demoImages.map((image, i) => {
                    return (
                        <Image src={image.src} alt={image.title} key={i} width={300} height={300} />
                    )
                })
            }
        </div>
    )
}
