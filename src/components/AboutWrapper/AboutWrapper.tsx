"use client";

import React from "react";
import { motion } from "framer-motion";
import useSectionInView from "@/hooks/useSectionInView";

type AboutProps = {
    children : React.ReactNode
}

const AboutWrapper = ({children} : AboutProps ) =>{

    const { ref } = useSectionInView("About", 1)
    const  desktopVariant = {
        initial: {
            opacity : 0,
            y: 100,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition : {
                delay: 0.175,
            }
        }
    }

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      variants={desktopVariant}
      initial="initial"
      animate="animate"
      id="about"
    >
      {children}
    </motion.section> 
    )
}

export default AboutWrapper;