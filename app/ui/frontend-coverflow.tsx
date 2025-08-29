import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import SFProDisplayLight from "next/font/local";
import SFProDisplayMedium from "next/font/local";

const slides = [
    {
        img: "/images/projects/ananas/thumbnail.png",
        title: "Ananas Project",
        desc: "A creative showcase of the Ananas sneaker line.",
    },
    {
        img: "https://swiperjs.com/demos/images/nature-2.jpg",
        title: "Nature Escape",
        desc: "Explore breathtaking views from our outdoor collection.",
    },
];

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


export default function SwiperCoverflow() {
    const [active, setActive] = useState(0);
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, EffectCoverflow]}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 50,
                    stretch: 40,
                    depth: 600,
                    modifier: 1,
                    slideShadows: true
                }}
                slidesPerView={2}
                centeredSlides={true}
                watchSlidesProgress={true}
                spaceBetween={12}
                style={{ height: "400px" }}
                onInit={(swiper) => setActive(swiper.realIndex)}
                onSlideChange={(swiper) => setActive(swiper.realIndex)}
            >
                {slides.map((s, i) => (
                    <SwiperSlide
                        key={i}
                        style={{
                            backgroundImage: `url(${s.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "5px"
                        }}
                    />
                ))}
            </Swiper>

            <div
                style={{
                    marginTop: 12,
                    textAlign: "center",
                    padding: "0 16px",
                    minHeight: 72,
                }}
                aria-live="polite"
            >
                <motion.div
                    key={active}
                >
                    <motion.p
                        className={`${sfProDisplayMedium.className} text-xl`}
                        initial={{y: 20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{ duration: 0.25, type: "tween" }}
                    >
                        {slides[active].title}
                    </motion.p>

                    <motion.p
                        className={`${sfProDisplayLight.className}`}
                        initial={{y: 15, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{ duration: 0.25, delay: 0.1, type: "tween"  }}
                    >
                        {slides[active].desc}
                    </motion.p>
                </motion.div>
            </div>

            <style>
                {`
                    .swiper {
                        position: relative;
                        padding-bottom: 35px;
                        padding-left: 40px;
                        padding-right: 40px;
                    }
                    
                    /* Responsive padding for smaller screens */
                    @media (max-width: 768px) {
                        .swiper {
                            margin-left: -20px;
                            margin-right: -20px;
                        }
                    }
                    
                    @media (max-width: 480px) {
                        .swiper {
                            padding-left: 0px;
                            padding-right: 0px;
                        }
                    }
                    
                    .swiper-button-prev,
                    .swiper-button-next {
                      color: #ba0000;         /* màu mũi tên */
                      width: 40px;            /* kích thước khung */
                      height: 40px;
                      border-radius: 50%;     /* thành hình tròn */
                      border: 1px solid #F1F1F1;
                      background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(221, 221, 221, 0.30) 31.73%, rgba(221, 221, 221, 0.30) 65.38%, rgba(255, 255, 255, 0.30) 100%);
                      box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.25), 0 3px 7px 0 rgba(0, 0, 0, 0.25);
                      backdrop-filter: blur(2px);
                      display: flex;
                      align-items: center;
                      justify-items: center;
                      transition: all
                    }
                    
                    .swiper-button-prev::after,
                    .swiper-button-next::after {
                      font-size: 18px;        /* kích thước icon mũi tên */
                      font-weight: bold;
                    }
                    
                    /* chỉnh khoảng cách 2 nút cho responsive */
                    .swiper-button-prev {
                        margin-left: 30px;  /* cách lề trái */
                        padding-right: 2px;
                        padding-top:2px
                    }
                    .swiper-button-next {
                        margin-right: 30px; /* cách lề phải */
                        padding-left: 2px;
                        padding-top:2px
                    }
                    
                    @media (max-width: 768px) {
                        .swiper-button-prev {
                            left: 10px;
                        }
                        .swiper-button-next {
                            right: 10px;
                        }
                    }
                    
                    @media (max-width: 480px) {
                        .swiper-button-prev {
                            left: 1%;
                        }
                        .swiper-button-next {
                            right: 1%;
                        }
                    }

                    .swiper-pagination {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                    }
                
                    .swiper-pagination .swiper-pagination-bullet {
                        width: 24px;
                        height: 4px;
                        background: #bbbbbb;
                        opacity: 0.5;
                        border-radius: 5px;
                        transition: all 0.3s ease;
                    }
                    .swiper-pagination .swiper-pagination-bullet-active {
                        background: #ba0000;
                        opacity: 1;
                    }
                    .swiper-slide {
                        box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.15), 0 3px 15px 0 rgba(0, 0, 0, 0.25);
                      }
                      .swiper-slide-active { opacity: 1; }
                    `}
            </style>
        </div>
    );
}
