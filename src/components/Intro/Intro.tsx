"use client";

import React from "react";
import Image from "next/image";
import { IntroData } from "@/lib/const/skillsData";
import { linkedinUrl, githubUrl, resumePdf } from "@/lib/const/socialsLinks";
import { ButtonCV, ButtonGithub, ButtonLinkedin, ButtonContactMe } from "@/components/Buttons";
import IntroText from "@/components/IntroText";
import { motion } from "framer-motion";

import useSectionInView from "@/hooks/useSectionInView";

const Intro = () => {

    const { ref } = useSectionInView("Home");      

    return (
        <section ref={ref} id="home" className="mb-28 max-w-[58rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
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
                            border-[0.35rem] border-white  object-cover shadow-xl"
                        />
                    </motion.div>
                    <motion.span
                        className="absolute bottom-0 right-0 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.15,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>
            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <IntroText />
            </motion.h1>
            <motion.div
                className="flex flex-col items-center justify-center gap-3 px-4 text-lg font-medium sm:flex-row sm:gap-4"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <ButtonContactMe href="#contact" sectionName="Contact"/>
                <ButtonCV href={resumePdf} />
                <div className="flex h-[52px] flex-row items-center justify-center gap-3 ">
                    <ButtonLinkedin href={linkedinUrl} />
                    <ButtonGithub href={githubUrl} />
                </div>
            </motion.div>
        </section>
    );
};

export default Intro;
