'use client'

import React from 'react'
import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div className="my-24 h-16 w-1 bg-gray-300/80 rounded-full hidden sm:block"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.125}}
    ></motion.div>
  )
}

export default SectionDivider