"use client";

import { motion } from "motion/react";
import AppleGaramondItalic from "next/font/local";
import { useState } from "react";
import Button from "@/app/ui/sendbutton";
import SFProDisplayLight from "next/font/local";
import SFProDisplayMedium from "next/font/local";

const appleGaramondItalic = AppleGaramondItalic({
    src: "../../public/fonts/AppleGaramond-Italic.ttf",
    variable: "--AppleGaramondItalic",
})


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

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [messageTitle, setMessageTitle] = useState("");
    const [message, setMessage] = useState("");
    const [active, setActive] = useState<null | 'name' | 'email' | 'messageTitle' | 'message'>(null);

    return (
        <motion.div className="scroll-snap overflow-x-hidden scrollbar-hide">
            <div
                tabIndex={-1}
                onBlurCapture={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setActive(null);
                    }
                }}
            >
                <p className={`mt-10 ${appleGaramondItalic.className} text-5xl text-center mb-5 color-word`}>Contact</p>

                <p className={`mt-5 ${appleGaramondItalic.className} text-3xl mx-6 text-left mb-5 color-word`}>Feel free to <br/>leave me a message!</p>

                <form 
                    className="mx-6 flex flex-col gap-4"
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                >
                    <input
                        type="text" 
                        value={name}
                        onChange={(event) => {setName(event.target.value)}}
                        placeholder="Your name"
                        className={`h-10 ${sfProDisplayLight.className} w-64 flex pl-4 rounded-full transition-all duration-300 cursor-pointer outline-none focus:outline-none focus:ring-0 focus:ring-transparent ${(active === 'name' || active ===null) ? 'opacity-100' : 'opacity-30'}`}
                        style={{
                            border: '1px solid #F1F1F1',
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(221, 221, 221, 0.30) 31.73%, rgba(221, 221, 221, 0.30) 65.38%, rgba(255, 255, 255, 0.30) 100%)',
                            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
                            backdropFilter: 'blur(2px)',
                        }}
                        onFocus={() => setActive('name')}
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => {setEmail(event.target.value)}}
                        placeholder="Your email"
                        className={`h-10 ${sfProDisplayLight.className} w-64 flex pl-4 rounded-full transition-all duration-300 cursor-pointer outline-none focus:outline-none focus:ring-0 focus:ring-transparent ${(active === 'email' || active ===null) ? 'opacity-100' : 'opacity-30'}`}
                        style={{
                            border: '1px solid #F1F1F1',
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(221, 221, 221, 0.30) 31.73%, rgba(221, 221, 221, 0.30) 65.38%, rgba(255, 255, 255, 0.30) 100%)',
                            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
                            backdropFilter: 'blur(2px)',
                        }}
                        onFocus={() => {setActive('email')}}
                    />
                    <input
                        type="text"
                        value={messageTitle}
                        onChange={(event) => {setMessageTitle(event.target.value)}}
                        placeholder="Message title"
                        className={`h-10 ${sfProDisplayLight.className} w-full flex pl-4 rounded-full transition-all duration-300 cursor-pointer outline-none focus:outline-none focus:ring-0 focus:ring-transparent ${(active === 'messageTitle' || active ===null) ? 'opacity-100' : 'opacity-30'}`}
                        style={{
                            border: '1px solid #F1F1F1',
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(221, 221, 221, 0.30) 31.73%, rgba(221, 221, 221, 0.30) 65.38%, rgba(255, 255, 255, 0.30) 100%)',
                            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
                            backdropFilter: 'blur(2px)',
                        }}
                        onFocus={() => {setActive('messageTitle')}}
                    />
                    <textarea 
                        value={message}
                        onChange={(event) => {setMessage(event.target.value)}}
                        placeholder="Your message"
                        className={`h-40 ${sfProDisplayLight.className} w-full p-4 rounded-xl transition-all duration-300 cursor-pointer outline-none focus:outline-none focus:ring-0 focus:ring-transparent ${(active === 'message' || active ===null) ? 'opacity-100' : 'opacity-30'}`}
                        style={{
                            border: '1px solid #F1F1F1',
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(221, 221, 221, 0.30) 31.73%, rgba(221, 221, 221, 0.30) 65.38%, rgba(255, 255, 255, 0.30) 100%)',
                            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
                            backdropFilter: 'blur(2px)',
                            resize: 'none'
                        }}
                        onFocus={() => {setActive('message')}}
                    />
                    <Button />
                </form>
            </div>
        </motion.div>
    )
}

export default Contact;
