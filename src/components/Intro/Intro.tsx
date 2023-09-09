"use client"

import React from 'react'
import Image from 'next/image'
import { IntroData } from '@/lib/const/skillsData'
import IntroText from '@/components/IntroText'
import { motion } from "framer-motion"
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import Link from 'next/link'


const Intro = () => {
  return (
    <section className="mb-28 max-w-[58rem] text-center sm:mb-0">
        <div className='flex items-center justify-center'>
            <div className="relative">
                <motion.div
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        type: "tween",
                        duration: 0.2
                    }}
                >
                    <Image
                        src={IntroData.profileImg}
                        alt="Paweł Duplaga fullstack developer profile"
                        width={192}
                        height={192}
                        quality={95}
                        priority={true}
                        className="h-24 w-24 rounded-full  
                        object-cover border-[0.35rem]  border-white shadow-xl"
                    />
                </motion.div>
                <motion.span className="absolute text-4xl bottom-0 right-0"
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        type: "spring",
                        stiffness: 125,
                        delay: 0.15,
                        duration: 0.7
                    }}
                >
                    👋
                </motion.span>
            </div>
        </div>
        <motion.p
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
        >
           <IntroText />
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center px-4 text-lg font-medium"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{
                delay: 0.1
            }}
        >
            <Link href="#contact"
             className="group bg-gray-900 text-white h-[52px] px-7 py-3 flex items-center justify-center gap-2 rounded-full 
             outline-none cursor-pointer focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-95 transition">
                Contact me here <BsArrowRight className="group flex items-center justify-center translate-y-[0.5px] 
                                 group-hover:translate-x-[0.3rem] transition" opacity={0.8} strokeWidth={0.8}/>
            </Link>
            <a className="group bg-white h-[52px] px-7 py-3 flex items-center gap-2 rounded-full cursor-pointer
             outline-none focus:scale-110 hover:scale-110 hover:bg-gray-100 active:scale-95 transition" 
             href="/Pawel_Duplaga_resume.pdf" 
             download>
                Download CV <HiDownload className="group flex items-center justify-center opacity-80 
                             group-hover:scale-[1.15] group-hover:opacity-90 transition"/>
            </a>
            <div className="group flex flex-row gap-3 h-[52px] items-center justify-center ">
                <motion.a className="bg-white p-4 text-gray-700 h-full aspect-square flex items-center justify-center gap-2 rounded-full 
                outline-none cursor-pointer focus:scale-110 hover:scale-110 hover:bg-gray-100 active:scale-95 transition"
                 >
                    <BsLinkedin className="group flex opacity-90 group-hover:opacity-100 group-hover:scale-[1.05] transition"/>
                </motion.a>
                <a className="bg-white p-4 text-gray-700 h-full aspect-square flex items-center justify-center gap-2 rounded-full
                 outline-none cursor-pointer focus:scale-110 hover:scale-110 hover:bg-gray-100 active:scale-95 transition">
                    <BsGithub size={20}/>
                </a>
            </div>
        </motion.div>
    </section>
  )
}

export default Intro