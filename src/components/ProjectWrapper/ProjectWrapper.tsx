'use client'

import React, { useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'
import useScreenWidth from '@/hooks/useScreenWidth';

type ProjectWrapperProps = {
    children : React.ReactNode;
}

const ProjectWrapper = ({children}: ProjectWrapperProps) => {
    
    const { isMobile } = useScreenWidth();
    const projectRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: projectRef,
        offset:!isMobile ? ["0 1","1.33 1"] : ["0 1","0 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  console.log(isMobile);
    return (
        <motion.div
            ref={projectRef}
            style= {{
            scale : scaleProgress,
            opacity : opacityProgress,
            }}
            className="group mb-3 sm:mb-10 last:mb-0"
        >
            {children}
        </motion.div>
    )
}

export default ProjectWrapper;