"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useSectionInView from "@/hooks/useSectionInView";
import useScreenWidth from "@/hooks/useScreenWidth";
import { Variants } from "framer-motion";


type AboutProps = {
    children : React.ReactNode
}

const AboutWrapper = ({children} : AboutProps ) =>{

    const { isMobile } = useScreenWidth()
    const { ref } = useSectionInView("About", 1)

    const desktopVariant : Variants = {
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
    
//   console.log(isMobile)

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      variants={!isMobile ? desktopVariant : {}}
      initial="initial"
      animate="animate"
      id="about"
    >
      {children}
    </motion.section> 
    )
}

export default AboutWrapper;